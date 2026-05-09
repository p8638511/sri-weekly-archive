/**
 * SRI Weekly Archive Google Sheets Sync
 *
 * Google Apps Script 호환성을 위해 ES5 문법만 사용했습니다.
 *
 * 사용 방법:
 * 1. Google Sheets 새 파일을 만든다.
 * 2. 확장 프로그램 > Apps Script를 연다.
 * 3. 이 파일 전체를 붙여넣고 저장한다.
 * 4. syncSRIWeeklyArchive()를 실행한다.
 */

var CONFIG = {
  fullIssueFolderId: "1kXUNCWlUgSvjrEvxr0xTHko3UDaJLx7r",
  articleFolderRootId: "1BbvAjDTSmFnkOaOLj1QSD9NzDZG9rdjZ",
  startIssueNo: 78,
  endIssueNo: 148,
  geminiModel: "gemini-2.5-flash-lite",
  aiBatchSize: 3,
  aiSleepMs: 2500
};

var ISSUE_HEADERS = [
  "issue_id",
  "issue_no",
  "issue_code",
  "year",
  "published_date",
  "file_name",
  "file_id",
  "full_pdf_view_url",
  "full_pdf_preview_url",
  "full_pdf_download_url",
  "toc_text",
  "topics",
  "article_count",
  "status",
  "updated_at"
];

var ARTICLE_FILE_HEADERS = [
  "article_file_id",
  "issue_id",
  "issue_no",
  "article_order",
  "file_name",
  "file_id",
  "article_pdf_view_url",
  "article_pdf_preview_url",
  "article_pdf_download_url",
  "detected_title",
  "status",
  "updated_at"
];

var ARTICLE_HEADERS = [
  "article_id",
  "issue_id",
  "issue_no",
  "year",
  "article_order",
  "article_title",
  "article_type",
  "summary",
  "body",
  "topic",
  "keywords",
  "author",
  "article_pdf_download_url",
  "article_pdf_preview_url",
  "source_page",
  "related_manual_ids",
  "status"
];

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("SRI Weekly")
    .addItem("Drive 목록 동기화", "syncSRIWeeklyArchive")
    .addSeparator()
    .addItem("Gemini API 키 저장", "setGeminiApiKey")
    .addItem("선택한 행 AI 초안 생성", "generateAIForSelectedArticleRows")
    .addItem("빈 행 AI 초안 3개 생성", "generateAIForNextBlankArticles")
    .addToUi();
}

function syncSRIWeeklyArchive() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var now = new Date();
  var articleFileRows = buildArticleFileRows_(now);
  var fullIssueRows = buildIssueRows_(now, articleFileRows);
  var articleRows = buildArticleRows_(fullIssueRows, articleFileRows);
  var checkRows = buildCheckRows_(fullIssueRows, articleFileRows);

  writeSheet_(ss, "issues", ISSUE_HEADERS, fullIssueRows);
  writeSheet_(ss, "article_files", ARTICLE_FILE_HEADERS, articleFileRows);
  writeSheet_(ss, "articles", ARTICLE_HEADERS, articleRows);
  writeSheet_(ss, "checks", ["check", "value", "note"], checkRows);

  formatWorkbook_(ss);
}

function buildIssueRows_(now, articleFileRows) {
  var folder = DriveApp.getFolderById(CONFIG.fullIssueFolderId);
  var files = folder.getFiles();
  var rows = [];
  var articleMeta = buildArticleMetaByIssueNo_(articleFileRows);

  while (files.hasNext()) {
    var file = files.next();
    if (file.getMimeType() !== MimeType.PDF) {
      continue;
    }

    var fileName = normalize_(file.getName());
    var issueNo = extractIssueNo_(fileName);
    if (!issueNo || issueNo < CONFIG.startIssueNo || issueNo > CONFIG.endIssueNo) {
      continue;
    }

    var issueCode = extractIssueCode_(fileName);
    var year = issueCode ? Number(issueCode.split("-")[0]) : file.getLastUpdated().getFullYear();
    var fileId = file.getId();
    var meta = articleMeta[issueNo] || { count: "", toc: "" };

    rows.push([
      "SRI-" + issueNo,
      issueNo,
      issueCode,
      year,
      toDateString_(file.getLastUpdated()),
      fileName,
      fileId,
      viewUrl_(fileId),
      previewUrl_(fileId),
      downloadUrl_(fileId),
      meta.toc,
      "",
      meta.count,
      "published",
      toTimestampString_(now)
    ]);
  }

  rows.sort(function (a, b) {
    return Number(b[1]) - Number(a[1]);
  });
  return rows;
}

function buildArticleMetaByIssueNo_(articleFileRows) {
  var meta = {};
  for (var i = 0; i < articleFileRows.length; i++) {
    var row = articleFileRows[i];
    var issueNo = row[2];
    if (!meta[issueNo]) {
      meta[issueNo] = {
        count: 0,
        titles: []
      };
    }
    meta[issueNo].count += 1;
    if (row[9]) {
      meta[issueNo].titles.push(row[9]);
    }
  }

  var result = {};
  for (var key in meta) {
    if (meta.hasOwnProperty(key)) {
      result[key] = {
        count: meta[key].count,
        toc: meta[key].titles.join(" / ")
      };
    }
  }
  return result;
}

function buildArticleFileRows_(now) {
  var root = DriveApp.getFolderById(CONFIG.articleFolderRootId);
  var issueFolders = root.getFolders();
  var rows = [];

  while (issueFolders.hasNext()) {
    var issueFolder = issueFolders.next();
    var folderName = normalize_(issueFolder.getName());
    var issueNo = extractIssueNo_(folderName);
    if (!issueNo || issueNo < CONFIG.startIssueNo || issueNo > CONFIG.endIssueNo) {
      continue;
    }

    var files = issueFolder.getFiles();
    var issueFiles = [];
    while (files.hasNext()) {
      var file = files.next();
      if (file.getMimeType() !== MimeType.PDF) {
        continue;
      }

      var fileName = normalize_(file.getName());
      var fileId = file.getId();
      issueFiles.push({
        fileName: fileName,
        fileId: fileId,
        order: extractArticleOrder_(fileName),
        title: cleanDetectedTitle_(fileName)
      });
    }

    issueFiles.sort(function (a, b) {
      var orderDiff = Number(a.order || 999) - Number(b.order || 999);
      if (orderDiff !== 0) {
        return orderDiff;
      }
      return a.fileName.localeCompare(b.fileName);
    });

    for (var i = 0; i < issueFiles.length; i++) {
      var item = issueFiles[i];
      var order = item.order || i + 1;
      rows.push([
        "SRI-" + issueNo + "-" + pad2_(order),
        "SRI-" + issueNo,
        issueNo,
        order,
        item.fileName,
        item.fileId,
        viewUrl_(item.fileId),
        previewUrl_(item.fileId),
        downloadUrl_(item.fileId),
        item.title,
        "published",
        toTimestampString_(now)
      ]);
    }
  }

  rows.sort(function (a, b) {
    var issueDiff = Number(b[2]) - Number(a[2]);
    if (issueDiff !== 0) {
      return issueDiff;
    }
    return Number(a[3]) - Number(b[3]);
  });
  return rows;
}

function buildArticleRows_(issueRows, articleFileRows) {
  var yearByIssueId = {};
  for (var i = 0; i < issueRows.length; i++) {
    yearByIssueId[issueRows[i][0]] = issueRows[i][3];
  }

  var rows = [];
  for (var j = 0; j < articleFileRows.length; j++) {
    var row = articleFileRows[j];
    var articleFileId = row[0];
    var issueId = row[1];
    var issueNo = row[2];
    var order = row[3];
    var detectedTitle = row[9];
    rows.push([
      articleFileId,
      issueId,
      issueNo,
      yearByIssueId[issueId] || "",
      order,
      detectedTitle,
      "",
      "",
      "",
      "",
      "",
      "수원시정연구원",
      row[8],
      row[7],
      "",
      "",
      "published"
    ]);
  }
  return rows;
}

function buildCheckRows_(issueRows, articleFileRows) {
  var issueNoMap = {};
  var articleIssueNoMap = {};
  var articleCounts = {};

  for (var i = 0; i < issueRows.length; i++) {
    issueNoMap[Number(issueRows[i][1])] = true;
  }

  for (var j = 0; j < articleFileRows.length; j++) {
    var issueNo = Number(articleFileRows[j][2]);
    articleIssueNoMap[issueNo] = true;
    articleCounts[issueNo] = (articleCounts[issueNo] || 0) + 1;
  }

  var missingIssues = [];
  var missingArticleFolders = [];
  for (var no = CONFIG.startIssueNo; no <= CONFIG.endIssueNo; no++) {
    if (!issueNoMap[no]) {
      missingIssues.push(no);
    }
    if (!articleIssueNoMap[no]) {
      missingArticleFolders.push(no);
    }
  }

  var zeroOrLowArticleCounts = [];
  for (var key in articleCounts) {
    if (articleCounts.hasOwnProperty(key) && articleCounts[key] < 1) {
      zeroOrLowArticleCounts.push(key);
    }
  }

  return [
    ["전체 PDF 파일 수", issueRows.length, "목표: 78호-148호 총 71개"],
    ["개별 페이퍼 파일 수", articleFileRows.length, "호수별 하위 폴더의 PDF 합계"],
    ["전체 PDF 누락 호수", missingIssues.join(", "), missingIssues.length ? "확인 필요" : "없음"],
    ["개별 페이퍼 폴더/파일 누락 호수", missingArticleFolders.join(", "), missingArticleFolders.length ? "확인 필요" : "없음"],
    ["개별 페이퍼 0건 이하 호수", zeroOrLowArticleCounts.join(", "), zeroOrLowArticleCounts.length ? "확인 필요" : "없음"]
  ];
}

function writeSheet_(ss, sheetName, headers, rows) {
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }
  sheet.clear();

  var values = [headers].concat(rows);
  sheet.getRange(1, 1, values.length, headers.length).setValues(values);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#eaf5ee");
  sheet.autoResizeColumns(1, headers.length);
}

function formatWorkbook_(ss) {
  var names = ["issues", "article_files", "articles", "checks"];
  for (var i = 0; i < names.length; i++) {
    var sheet = ss.getSheetByName(names[i]);
    if (!sheet) {
      continue;
    }
    var range = sheet.getDataRange();
    range.setVerticalAlignment("middle");
    sheet.getRange(1, 1, Math.max(sheet.getMaxRows(), 1), sheet.getMaxColumns()).setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP);
  }
}

function normalize_(value) {
  return String(value || "")
    .replace(/\u110C\u1166/g, "제")
    .replace(/\u1112\u1169/g, "호")
    .replace(/\s+/g, " ")
    .trim();
}

function extractIssueNo_(text) {
  var normalized = normalize_(text);
  var match = normalized.match(/제\s*(\d{1,3})\s*호/);
  return match ? Number(match[1]) : null;
}

function extractIssueCode_(text) {
  var normalized = normalize_(text);
  var match = normalized.match(/\((20\d{2})-(\d{1,2})\)/);
  return match ? match[1] + "-" + match[2] : "";
}

function extractArticleOrder_(text) {
  var normalized = normalize_(text);
  var match = normalized.match(/(?:^|[^0-9])(\d{1,2})[\.\-_\s]+/);
  if (match) {
    return Number(match[1]);
  }

  match = normalized.match(/(?:페이퍼|paper|article|글)\s*(\d{1,2})/i);
  if (match) {
    return Number(match[1]);
  }

  return null;
}

function cleanDetectedTitle_(fileName) {
  return normalize_(fileName)
    .replace(/\.pdf$/i, "")
    .replace(/SRI\s*Weekly/gi, "")
    .replace(/제\s*\d{1,3}\s*호/g, "")
    .replace(/\(20\d{2}-\d{1,2}\)/g, "")
    .replace(/[★☆]/g, "")
    .replace(/^[\s_\-–—.·]+/, "")
    .replace(/^\d{1,2}[\.\-_\s]+/, "")
    .trim();
}

function viewUrl_(fileId) {
  return "https://drive.google.com/file/d/" + fileId + "/view";
}

function previewUrl_(fileId) {
  return "https://drive.google.com/file/d/" + fileId + "/preview";
}

function downloadUrl_(fileId) {
  return "https://drive.google.com/uc?export=download&id=" + fileId;
}

function toDateString_(date) {
  return Utilities.formatDate(date, Session.getScriptTimeZone(), "yyyy-MM-dd");
}

function toTimestampString_(date) {
  return Utilities.formatDate(date, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");
}

function pad2_(value) {
  return String(value).length === 1 ? "0" + value : String(value);
}

function setGeminiApiKey() {
  var ui = SpreadsheetApp.getUi();
  var response = ui.prompt(
    "Gemini API 키 저장",
    "Google AI Studio에서 발급받은 Gemini API 키를 입력하세요. 이 키는 현재 Apps Script의 Script Properties에 저장됩니다.",
    ui.ButtonSet.OK_CANCEL
  );

  if (response.getSelectedButton() !== ui.Button.OK) {
    return;
  }

  var apiKey = String(response.getResponseText() || "").trim();
  if (!apiKey) {
    ui.alert("API 키가 비어 있습니다.");
    return;
  }

  PropertiesService.getScriptProperties().setProperty("GEMINI_API_KEY", apiKey);
  ui.alert("Gemini API 키를 저장했습니다.");
}

function generateAIForSelectedArticleRows() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("articles");
  if (!sheet) {
    SpreadsheetApp.getUi().alert("articles 탭이 없습니다. 먼저 Drive 목록 동기화를 실행하세요.");
    return;
  }

  var range = sheet.getActiveRange();
  if (!range) {
    SpreadsheetApp.getUi().alert("AI 초안을 생성할 행을 선택하세요.");
    return;
  }

  var startRow = Math.max(range.getRow(), 2);
  var endRow = range.getLastRow();
  var rows = [];
  for (var row = startRow; row <= endRow; row++) {
    rows.push(row);
  }

  enrichArticleRows_(sheet, rows);
}

function generateAIForNextBlankArticles() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("articles");
  if (!sheet) {
    SpreadsheetApp.getUi().alert("articles 탭이 없습니다. 먼저 Drive 목록 동기화를 실행하세요.");
    return;
  }

  var headers = getHeaders_(sheet);
  var lastRow = sheet.getLastRow();
  var rows = [];
  for (var row = 2; row <= lastRow; row++) {
    var summary = getCellValueByHeader_(sheet, headers, row, "summary");
    var topic = getCellValueByHeader_(sheet, headers, row, "topic");
    var keywords = getCellValueByHeader_(sheet, headers, row, "keywords");
    var pdfUrl = getCellValueByHeader_(sheet, headers, row, "article_pdf_download_url");
    if (pdfUrl && (!summary || !topic || !keywords)) {
      rows.push(row);
    }
    if (rows.length >= CONFIG.aiBatchSize) {
      break;
    }
  }

  if (!rows.length) {
    SpreadsheetApp.getUi().alert("AI 초안을 만들 빈 행이 없습니다.");
    return;
  }

  enrichArticleRows_(sheet, rows);
}

function enrichArticleRows_(sheet, rowNumbers) {
  var apiKey = PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY");
  if (!apiKey) {
    SpreadsheetApp.getUi().alert("Gemini API 키가 없습니다. 먼저 SRI Weekly > Gemini API 키 저장을 실행하세요.");
    return;
  }

  var headers = getHeaders_(sheet);
  var successCount = 0;
  var failMessages = [];

  for (var i = 0; i < rowNumbers.length; i++) {
    var row = rowNumbers[i];
    try {
      var pdfUrl = getCellValueByHeader_(sheet, headers, row, "article_pdf_download_url");
      var fileId = extractDriveFileIdFromUrl_(pdfUrl);
      if (!fileId) {
        throw new Error("PDF 파일 ID를 찾을 수 없습니다.");
      }

      var file = DriveApp.getFileById(fileId);
      var aiResult = callGeminiForArticle_(apiKey, file);
      writeAIResultToArticleRow_(sheet, headers, row, aiResult);
      successCount += 1;
      Utilities.sleep(CONFIG.aiSleepMs);
    } catch (error) {
      failMessages.push(row + "행: " + error.message);
    }
  }

  var message = "AI 초안 생성 완료: " + successCount + "건";
  if (failMessages.length) {
    message += "\n\n실패:\n" + failMessages.slice(0, 10).join("\n");
  }
  SpreadsheetApp.getUi().alert(message);
}

function callGeminiForArticle_(apiKey, file) {
  var blob = file.getBlob();
  var bytes = blob.getBytes();
  var base64 = Utilities.base64Encode(bytes);
  var prompt = [
    "다음 PDF는 수원시정연구원의 SRI Weekly 개별 이슈 페이퍼입니다.",
    "아래 JSON 형식으로만 답하세요. 코드블록, 설명문, 마크다운은 쓰지 마세요.",
    "{",
    "  \"article_title\": \"글 제목\",",
    "  \"article_type\": \"정책동향|데이터브리프|법제분석|도시전략|교통브리프|환경브리프|기타 중 적절히\",",
    "  \"summary\": \"웹 목록에 표시할 1~2문장 요약\",",
    "  \"body\": \"상세 화면에 표시할 3~5문장 핵심 요약\",",
    "  \"topic\": \"행정|도시공간|교통|환경|복지|관광|산업경제|지역경제|청년|문화|재정|안전|데이터 중 하나\",",
    "  \"keywords\": \"쉼표로 구분한 핵심 키워드 5개\"",
    "}",
    "제목은 PDF에 있는 실제 제목을 우선 사용하고, 과장하지 마세요.",
    "summary와 body는 정책 실무자가 빠르게 이해할 수 있게 한국어로 간결하게 작성하세요."
  ].join("\n");

  var payload = {
    contents: [
      {
        parts: [
          {
            inline_data: {
              mime_type: "application/pdf",
              data: base64
            }
          },
          {
            text: prompt
          }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.2,
      response_mime_type: "application/json"
    }
  };

  var url = "https://generativelanguage.googleapis.com/v1beta/models/" + CONFIG.geminiModel + ":generateContent?key=" + encodeURIComponent(apiKey);
  var response = UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  var status = response.getResponseCode();
  var text = response.getContentText();
  if (status < 200 || status >= 300) {
    throw new Error("Gemini API 오류 " + status + ": " + text.substring(0, 300));
  }

  var parsed = JSON.parse(text);
  var outputText = "";
  if (
    parsed.candidates &&
    parsed.candidates[0] &&
    parsed.candidates[0].content &&
    parsed.candidates[0].content.parts &&
    parsed.candidates[0].content.parts[0]
  ) {
    outputText = parsed.candidates[0].content.parts[0].text || "";
  }

  if (!outputText) {
    throw new Error("Gemini 응답이 비어 있습니다.");
  }

  return parseAIJson_(outputText);
}

function parseAIJson_(text) {
  var cleaned = String(text || "").trim();
  cleaned = cleaned.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```$/i, "").trim();
  var start = cleaned.indexOf("{");
  var end = cleaned.lastIndexOf("}");
  if (start >= 0 && end > start) {
    cleaned = cleaned.substring(start, end + 1);
  }
  return JSON.parse(cleaned);
}

function writeAIResultToArticleRow_(sheet, headers, row, aiResult) {
  setCellValueByHeader_(sheet, headers, row, "article_title", aiResult.article_title || "");
  setCellValueByHeader_(sheet, headers, row, "article_type", aiResult.article_type || "");
  setCellValueByHeader_(sheet, headers, row, "summary", aiResult.summary || "");
  setCellValueByHeader_(sheet, headers, row, "body", aiResult.body || "");
  setCellValueByHeader_(sheet, headers, row, "topic", aiResult.topic || "");
  setCellValueByHeader_(sheet, headers, row, "keywords", aiResult.keywords || "");
}

function getHeaders_(sheet) {
  var values = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var headers = {};
  for (var i = 0; i < values.length; i++) {
    headers[String(values[i])] = i + 1;
  }
  return headers;
}

function getCellValueByHeader_(sheet, headers, row, headerName) {
  var col = headers[headerName];
  if (!col) {
    return "";
  }
  return sheet.getRange(row, col).getValue();
}

function setCellValueByHeader_(sheet, headers, row, headerName, value) {
  var col = headers[headerName];
  if (!col) {
    return;
  }
  sheet.getRange(row, col).setValue(value);
}

function extractDriveFileIdFromUrl_(url) {
  var text = String(url || "");
  var match = text.match(/[?&]id=([^&]+)/);
  if (match) {
    return match[1];
  }
  match = text.match(/\/d\/([^\/]+)/);
  return match ? match[1] : "";
}
