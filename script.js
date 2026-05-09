const fallbackWeeklyIssues = [
  {
    volume: 147,
    issueCode: "2026-18",
    date: "2026-04-30",
    title: "수원 중립형 반도체 R&D 허브 구축 방향",
    pdf: "downloads/SRI-Weekly-147.pdf",
    articles: [
      {
        id: "147-1",
        type: "산업 전략",
        title: "수원, '중립형 반도체 R&D' 허브 구축 방향",
        author: "수원시정연구원",
        topic: "산업경제",
        tags: ["반도체", "R&D", "ASTC", "경제자유구역", "기술주권"],
        summary:
          "반도체 경쟁이 생산량에서 기술주권 확보로 이동하는 흐름을 짚고, 수원이 제조거점과 분리된 중립형 R&D 플랫폼을 선도할 수 있는 방향을 제안합니다.",
        body:
          "미국, 중국, 일본은 대규모 재정 투입과 연구 거점 구축을 통해 반도체 기술주권 확보에 집중하고 있습니다. 한국은 메모리와 제조공정 강점이 있지만 소부장 검증체계와 독립 R&D 인프라 보완이 필요합니다. 수원은 삼성전자 본사, 대학 연구역량, 광교테크노밸리, 경기 남부 반도체 클러스터와의 접근성을 바탕으로 특정 기업에 종속되지 않는 산학연 공동 연구·검증 플랫폼을 구축할 수 있는 입지를 갖고 있습니다.",
      },
      {
        id: "147-2",
        type: "정책 동향",
        title: "사회연대경제 혁신모델 확산과 시사점",
        author: "수원시정연구원",
        topic: "지역경제",
        tags: ["사회연대경제", "행궁동", "로컬브랜딩", "돌봄", "도시재생"],
        summary:
          "행정안전부 사회연대경제 혁신모델 공모 흐름을 바탕으로 행궁동, 새빛돌봄, 로컬브랜딩을 연결한 수원형 모델 가능성을 검토합니다.",
        body:
          "사회연대경제는 다양한 주체가 연대와 협력을 바탕으로 지역 문제를 해결하는 경제활동 방식입니다. 수원은 행궁동 도시재생 경험과 수원화성 자산을 결합해 체류형 로컬브랜딩 모델을 만들 수 있고, 새빛돌봄 인프라를 생활서비스 제공형 모델로 확장할 수 있습니다. 향후 공모 대응을 위해 지역 자산별 사업 유형을 구체화하고 행안부와의 사전 소통을 시작할 필요가 있습니다.",
      },
      {
        id: "147-3",
        type: "행정 브리프",
        title: "국가 재정교육 본격화와 수원시의 대응 방향",
        author: "수원시정연구원",
        topic: "행정",
        tags: ["재정교육", "지방재정", "시민참여", "주민참여예산", "열린재정"],
        summary:
          "국민 대상 재정교육 프로그램 출범을 계기로 수원시가 학교, 시민, 참여예산을 잇는 지방재정교육 체계를 설계할 필요성을 제시합니다.",
        body:
          "국가 차원의 일반 국민 재정교육은 재정 정보 접근성을 높이고 국정과제 이행에 대한 사회적 수용성을 키우기 위한 시도입니다. 수원시는 지역교육과정과 연계한 학교 재정교육, 일반시민 대상 생활밀착형 지방재정 강좌, 주민참여예산과 연결되는 실습형 프로그램을 함께 설계할 수 있습니다. 이를 통해 수원형 시민재정교육의 선도도시로 자리매김할 수 있습니다.",
      },
      {
        id: "147-4",
        type: "도시 인프라",
        title: "수원시 공동주택 주차난 해소를 위한 AI 로봇주차 도입 검토",
        author: "수원시정연구원",
        topic: "교통",
        tags: ["AI", "로봇주차", "공동주택", "주차난", "공간효율"],
        summary:
          "공동주택에도 기계식·오토발렛 주차장치 적용이 가능해진 법 개정 흐름을 바탕으로 AI 로봇주차의 공간 절감 효과를 검토합니다.",
        body:
          "로봇주차 시스템은 차량을 승하차장에 세우면 AI 주행 로봇이 빈 공간을 탐색해 자동으로 주차하는 방식입니다. 법 개정으로 일반 공동주택까지 적용 범위가 확대되면서, 수원시 공동주택 주차난 해소 수단으로 검토할 수 있게 됐습니다. 자료는 로봇주차가 자주식 주차 대비 면적과 건설비를 줄일 수 있으며, 주차면 부족 단지에서 추가 공간 확보 가능성이 있음을 보여줍니다.",
      },
      {
        id: "147-5",
        type: "도시 전략",
        title: "서울시 역세권 전략 전환과 수원시 복합개발 고도화 전략",
        author: "수원시정연구원",
        topic: "도시공간",
        tags: ["역세권", "복합개발", "콤팩트시티", "환승역", "생활거점"],
        summary:
          "서울시가 역세권 개발을 전면 확대·사업성 강화 방향으로 전환한 사례를 참고해 수원형 역세권 복합개발 고도화 방향을 정리합니다.",
        body:
          "서울시는 역세권을 단순 교통 결절점에서 일자리, 주거, 여가가 결합된 생활거점으로 전환하고 있습니다. 개발 대상을 전 역세권으로 넓히고 용적률, 비주거 의무비율, 층수 제한 등 제도 개선을 병행하는 것이 핵심입니다. 수원은 22개 전철역을 중심으로 추진 중인 콤팩트시티 구상을 바탕으로 환승역, 간선도로, 생활권 거점을 연결하는 복합개발 전략을 정교화할 필요가 있습니다.",
      },
    ],
  },
  {
    volume: 146,
    issueCode: "2026-17",
    date: "2026-04-23",
    title: "중국 첨단산업 급부상과 수원의 대응 방향",
    pdf: "downloads/SRI-Weekly-146.pdf",
    articles: [
      {
        id: "146-1",
        type: "산업 전략",
        title: "중국의 첨단산업 급부상과 한국·수원의 대응 방향",
        author: "수원시정연구원",
        topic: "산업경제",
        tags: ["첨단산업", "중국", "반도체", "기술창업", "R&D"],
        summary:
          "중국이 첨단산업에서 빠르게 세계 경쟁력을 확보하는 흐름을 진단하고, 수원이 기술도시로 전환하기 위한 원천기술·인재·창업 과제를 제시합니다.",
        body:
          "중국은 다수 전략산업에서 세계 최대 생산국으로 부상했고, 생성형 AI 특허, 산업용 로봇, 과학기술 인재 기반에서도 빠른 성장을 보이고 있습니다. 수원은 이를 단순 위협으로 보기보다 반도체·전자 기반 산업생태계와 연구개발 인프라를 활용해 대체불가능한 기술도시로 포지셔닝해야 합니다. 핵심 과제는 소부장·설계·첨단제조 원천기술, 연구·문제해결·창업형 인재, 기술창업과 스케일업 생태계 강화입니다.",
      },
      {
        id: "146-2",
        type: "관광 전략",
        title: "경기도 관광정책 전환 속 수원 남부권 메가 허브 선점 전략",
        author: "수원시정연구원",
        topic: "관광",
        tags: ["관광정책", "남부권", "메가허브", "체류관광", "지역소비"],
        summary:
          "방문객 수 중심에서 지역소비 중심으로 전환되는 경기도 관광정책 속에서 수원이 남부권 메가 관광허브의 결절점이 되는 전략을 제안합니다.",
        body:
          "경기도는 전국 최대 규모의 관광 수요를 보유하지만 방문 규모 대비 소비 효율은 낮은 구조입니다. 정책 방향도 머릿수 중심의 양적 확대에서 지갑 중심의 지역소비 성장으로 이동하고 있습니다. 수원은 수원화성, 영화지구, 삼성 이노베이션뮤지엄, 주변 테마·산업·역사 자원과의 30분 연계망을 활용해 남부권 스마트 관광 허브로 자리 잡을 수 있습니다.",
      },
      {
        id: "146-3",
        type: "교통 브리프",
        title: "수원시 관내 교통 불편 해소를 위한 버스 경쟁력 강화 필요",
        author: "수원시정연구원",
        topic: "교통",
        tags: ["버스", "대중교통", "배차", "버스우선", "관내이동"],
        summary:
          "관내 이동시간 증가의 원인을 버스 노선 굴곡, 배차간격, 버스 우선체계 부족에서 찾고 버스 경쟁력 강화를 제안합니다.",
        body:
          "수원시 관내 이동의 불편은 도로 혼잡만이 아니라 버스 노선 우회, 불규칙한 배차, 중앙버스전용차로 등 우선체계 부족과 연결됩니다. 주요 간선도로에서 버스 이동속도를 높이고 환승 편의와 배차 안정성을 개선해야 시민이 체감하는 대중교통 경쟁력이 높아집니다.",
      },
      {
        id: "146-4",
        type: "환경 브리프",
        title: "수원시 차량 부제 시행, 일평균 원유 390배럴·탄소 168t 감축 효과",
        author: "수원시정연구원",
        topic: "환경",
        tags: ["차량부제", "원유", "탄소감축", "미세먼지", "교통수요"],
        summary:
          "원유수급 안정화 조치와 차량 부제 시행을 전제로 수원시의 에너지 비용, 탄소배출량, 초미세먼지 절감 효과를 추정합니다.",
        body:
          "정부의 원유수급 안정화 조치에 따라 공공 차량 부제가 의무화되고 민간 차량 부제 참여가 자율화됐습니다. 수원시 공공부문 종사자 차량 100%, 민간부문 차량 30%가 참여한다고 가정하면 일평균 원유 소비 390배럴과 탄소배출량 168tCO2eq을 줄일 수 있는 것으로 추정됩니다. 교통수요 관리가 에너지 안보와 환경 개선을 동시에 달성할 수 있음을 보여줍니다.",
      },
      {
        id: "146-5",
        type: "도시 여가",
        title: "서울둘레길을 통해 본 수원 팔색길 재편 방향",
        author: "수원시정연구원",
        topic: "관광",
        tags: ["팔색길", "보행", "서울둘레길", "도시여가", "관광자원"],
        summary:
          "서울둘레길의 생활형 걷기 인프라 재편 사례를 참고해 수원 팔색길을 선택형 샛길 네트워크와 도시 관광 콘텐츠로 고도화하는 방향을 제시합니다.",
        body:
          "서울둘레길은 장거리 트레킹 코스를 생활형 코스로 세분화하고 대중교통 연계와 사전 정보 접근성을 강화했습니다. 수원 팔색길도 전 구간을 동일하게 관리하기보다 생활형, 경관형, 관광형 기능으로 나누고 역사문화 해설, 계절형 코스, 체류형 프로그램을 결합할 필요가 있습니다. 걷기 인프라를 시민 일상 인프라이자 도시 관광 콘텐츠로 동시에 발전시키는 접근입니다.",
      },
    ],
  },
  {
    volume: 145,
    issueCode: "2026-16",
    date: "2026-04-16",
    title: "특례시 지원 특별법 분석과 수원시 현안",
    pdf: "downloads/SRI-Weekly-145.pdf",
    articles: [
      {
        id: "145-1",
        type: "법제 분석",
        title: "국회 행정안전위원회 통과, 특례시 지원 특별법 분석",
        author: "수원시정연구원",
        topic: "행정",
        tags: ["특례시", "행정안전위원회", "재정특례", "사무이양", "자치분권"],
        summary:
          "행정안전위원회를 통과한 특례시 지원 특별법 대안의 구성과 한계를 검토하고, 법사위·본회의 및 시행령 단계의 대응 과제를 제시합니다.",
        body:
          "의원발의안과 정부안을 병합한 행정안전위원회 대안은 사무이양 요청 절차, 도와 특례시의 책무, 연구기관 지정 등을 추가했습니다. 다만 특례시 법적지위와 재정특례는 반영되지 않았습니다. 수원특례시는 후속 입법과 시행령 제정 과정에서 재정특례 보완, 법적지위 후속 검토, 도·특례시 갈등조정 절차, 추가 특례사무 발굴, 연구기관 지정 조례 제정 등을 준비할 필요가 있습니다.",
      },
      {
        id: "145-2",
        type: "경제 동향",
        title: "국민경제자문회의 제1차 전체회의 주요 내용",
        author: "수원시정연구원",
        topic: "산업경제",
        tags: ["성장전략", "에너지위기", "데이터거버넌스", "지방소멸", "혁신경제"],
        summary:
          "한국 경제의 복합위기 진단, 퍼스트 무버 전환, 에너지·산업정책 로드맵, 지방소멸 대응, 데이터 거버넌스 개선 논의를 정리합니다.",
        body:
          "국민경제자문회의는 복합위기의 상시화 속에서 한국 경제가 패스트 팔로어에서 퍼스트 무버로 전환해야 한다고 진단했습니다. 에너지 위기 대응, 전략기술 선점, 인프라 확충, 지방소멸 대응, 금융자산 흐름 전환, 데이터 거버넌스 혁신 등이 주요 과제로 제시됐습니다. 수원은 지역 차원에서 산업, 인재, 데이터 활용 역량을 연결해 혁신 기반을 강화할 필요가 있습니다.",
      },
      {
        id: "145-3",
        type: "에너지 정책",
        title: "국민주권정부 에너지 대전환 추진계획: 3대 정책·10대 전략",
        author: "수원시정연구원",
        topic: "환경",
        tags: ["재생에너지", "탄소중립", "친환경차", "햇빛발전소", "에너지전환"],
        summary:
          "재생에너지 확대, 녹색제조, 지역균형발전을 중심으로 한 국가 에너지 대전환 계획과 수원시 대응 과제를 정리합니다.",
        body:
          "정부는 화석연료 의존 구조에서 재생에너지 중심 경제구조로 전환하는 것을 국가 과제로 제시했습니다. 수원시와 직접 연결되는 과제는 재생에너지 보급 확대, 친환경차 보급, 햇빛발전소 확대 등입니다. 수원은 아파트 옥상, 산업단지 지붕, 공공주차장 등 태양광 설치 여지를 적극 활용하고 민관 협력형 햇빛발전소를 확대할 필요가 있습니다.",
      },
      {
        id: "145-4",
        type: "관광 교통",
        title: "외래관광객 교통편의 개선 동향과 수원시 시사점",
        author: "수원시정연구원",
        topic: "관광",
        tags: ["외래관광객", "관광교통", "공항접근", "다국어안내", "지역관광"],
        summary:
          "관광교통 민관협의체 출범과 외국인 대상 교통 예약·결제 개선 흐름을 바탕으로 수원 관광 이동 편의 개선 방향을 점검합니다.",
        body:
          "문화체육관광부는 철도·버스 온라인 예매 확대, 관광패스 도입, 지역 교통망 확충을 중심으로 외래관광객 이동 편의 개선을 추진하고 있습니다. 수원은 인천·김포공항 접근, 서울 주요 환승거점 경유, 주변 도시 연계 관광권, 도시 내부 관광 동선의 다국어 안내와 해외결제 지원 수준을 종합적으로 점검해야 합니다.",
      },
      {
        id: "145-5",
        type: "기후 안전",
        title: "수원시민이 가장 우려하는 폭염, 생활밀착형 선제 대응 필요",
        author: "수원시정연구원",
        topic: "환경",
        tags: ["폭염", "기후위험", "생활권", "취약계층", "재난안전"],
        summary:
          "시민 설문과 기후전망을 바탕으로 폭염 대응을 계절성 조치에서 생활권 기반 적응정책으로 전환해야 한다고 제안합니다.",
        body:
          "수원시민 설문에서 폭염은 가장 심각하게 인식되는 기후위험으로 나타났습니다. 기후위험 인식도 환경 변화 중심에서 교통인프라 피해, 한파 등 생활 안전 중심으로 이동하고 있습니다. 수원은 무더위쉼터, 스마트정류장, 그늘막, 취약계층 방문관리 등을 넘어 실시간 열지도, 생활권 쿨링 네트워크, 주거 취약지역 거점형 쉼터 등 생활밀착형 적응정책을 강화할 필요가 있습니다.",
      },
    ],
  },
];

const DATA_SOURCE = {
  spreadsheetId: "1o5FyEUf83EDDz0VPHTaeCwz_Yu6VA9a_aXYqLcVACuI",
  issuesSheet: "issues",
  articlesSheet: "articles",
};

let weeklyIssues = fallbackWeeklyIssues;
let allArticles = buildAllArticles(weeklyIssues);

const state = {
  topic: "전체",
  query: "",
  selectedIssueVolume: null,
};

function buildAllArticles(issues) {
  return issues.flatMap((issue) =>
    issue.articles.map((article) => ({
      ...article,
      volume: issue.volume,
      issueCode: issue.issueCode,
      date: issue.date,
      issueTitle: issue.title,
      issuePdf: issue.pdf,
      pdf: article.pdf || "",
    })),
  );
}

const topicFilters = document.querySelector("#topicFilters");
const issueList = document.querySelector("#issueList");
const resultCount = document.querySelector("#resultCount");
const searchInput = document.querySelector("#searchInput");
const articleDialog = document.querySelector("#articleDialog");
const articleDetail = document.querySelector("#articleDetail");
const dataSourceNote = document.querySelector("#dataSourceNote");
const pdfPreviewDialog = document.querySelector("#pdfPreviewDialog");
const pdfPreviewFrame = document.querySelector("#pdfPreviewFrame");
const pdfPreviewTitle = document.querySelector("#pdfPreviewTitle");
const pdfPreviewOpen = document.querySelector("#pdfPreviewOpen");
const pdfPreviewDownload = document.querySelector("#pdfPreviewDownload");

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function sheetJsonpUrl(sheetName, callbackName) {
  const query = encodeURIComponent("select *");
  return `https://docs.google.com/spreadsheets/d/${DATA_SOURCE.spreadsheetId}/gviz/tq?tqx=responseHandler:${callbackName}&sheet=${encodeURIComponent(sheetName)}&tq=${query}`;
}

function loadSheetRows(sheetName) {
  return new Promise((resolve, reject) => {
    const callbackName = `sriSheetCallback_${sheetName}_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const timeout = window.setTimeout(() => {
      cleanup();
      reject(new Error(`${sheetName} 시트 응답 시간이 초과되었습니다.`));
    }, 12000);

    function cleanup() {
      window.clearTimeout(timeout);
      delete window[callbackName];
      script.remove();
    }

    window[callbackName] = (payload) => {
      cleanup();
      if (payload?.status === "error") {
        reject(new Error(payload.errors?.[0]?.detailed_message || `${sheetName} 시트를 읽지 못했습니다.`));
        return;
      }
      resolve(tableToObjects(payload.table));
    };

    script.onerror = () => {
      cleanup();
      reject(new Error(`${sheetName} 시트 스크립트 로드에 실패했습니다.`));
    };

    script.src = sheetJsonpUrl(sheetName, callbackName);
    document.head.appendChild(script);
  });
}

function tableToObjects(table) {
  const headers = (table?.cols || []).map((col) => String(col.label || col.id || "").trim());
  return (table?.rows || []).map((row) =>
    headers.reduce((item, header, index) => {
      if (!header) return item;
      const cell = row.c[index];
      item[header] = cell ? String(cell.f ?? cell.v ?? "") : "";
      return item;
    }, {}),
  );
}

function setDataSourceNote(message) {
  if (dataSourceNote) dataSourceNote.textContent = message;
}

async function loadWeeklyIssuesFromSheets() {
  const [issueRows, articleRows] = await Promise.all([
    loadSheetRows(DATA_SOURCE.issuesSheet),
    loadSheetRows(DATA_SOURCE.articlesSheet),
  ]);

  const articlesByIssue = articleRows
    .filter((row) => row.status !== "hidden" && row.issue_no && row.article_title)
    .reduce((grouped, row) => {
      const issueNo = Number(row.issue_no);
      if (!grouped[issueNo]) grouped[issueNo] = [];
      grouped[issueNo].push({
        id: row.article_id || `${row.issue_no}-${row.article_order}`,
        type: row.article_type || "정책동향",
        title: row.article_title,
        author: row.author || "수원시정연구원",
        topic: row.topic || "기타",
        tags: splitList(row.keywords),
        summary: row.summary || "요약 정보는 준비 중입니다.",
        body: row.body || row.summary || "본문 요약은 준비 중입니다.",
        pdf: row.article_pdf_download_url || row.article_pdf_preview_url || "",
        previewPdf: toDriveViewUrl(row.article_pdf_preview_url || row.article_pdf_download_url),
      });
      return grouped;
    }, {});

  const issues = issueRows
    .filter((row) => row.status !== "hidden" && row.issue_no)
    .map((row) => {
      const volume = Number(row.issue_no);
      const articles = (articlesByIssue[volume] || []).sort((a, b) => articleOrder(a.id) - articleOrder(b.id));
      const topics = unique([
        ...splitList(row.topics),
        ...articles.map((article) => article.topic),
      ]).slice(0, 6);

      return {
        volume,
        issueCode: row.issue_code || "",
        date: row.published_date || "",
        title: articles.map((article) => article.title).join(" / ") || `SRI Weekly 제${volume}호`,
        topics,
        pdf: row.full_pdf_download_url || row.full_pdf_view_url || "",
        previewPdf: toDriveViewUrl(row.full_pdf_preview_url || row.full_pdf_view_url || row.full_pdf_download_url),
        articles,
      };
    })
    .filter((issue) => issue.articles.length)
    .sort((a, b) => b.volume - a.volume);

  if (!issues.length) {
    throw new Error("표시할 권호 데이터가 없습니다.");
  }

  return issues;
}

function splitList(value) {
  return String(value || "")
    .split(/[,#、/|]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function articleOrder(id) {
  const match = String(id).match(/-(\d+)$/);
  return match ? Number(match[1]) : 999;
}

function extractDriveFileId(url) {
  const value = String(url || "");
  return value.match(/\/file\/d\/([^/]+)/)?.[1] || value.match(/[?&]id=([^&]+)/)?.[1] || "";
}

function toDriveViewUrl(url) {
  const fileId = extractDriveFileId(url);
  return fileId ? `https://drive.google.com/file/d/${fileId}/view?usp=sharing` : url;
}

function toDriveEmbedUrl(url) {
  const fileId = extractDriveFileId(url);
  return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
}

async function initData() {
  renderAll();
  setDataSourceNote("샘플 데이터 표시 중 · Google Sheets 연결 시도 중");

  try {
    weeklyIssues = await loadWeeklyIssuesFromSheets();
    allArticles = buildAllArticles(weeklyIssues);
    state.selectedIssueVolume = null;
    setDataSourceNote("Google Sheets 데이터 연결됨");
    renderAll();
  } catch (error) {
    setDataSourceNote(`샘플 데이터 표시 중 · Google Sheets 연결 실패: ${error.message || "원인 확인 필요"}`);
    console.info("Google Sheets 데이터를 읽지 못해 샘플 데이터로 표시합니다.", error);
  }
}

function renderAll() {
  renderFilters();
  renderIssues();
}

function matchesArticle(article) {
  const haystack = [
    article.title,
    article.summary,
    article.topic,
    article.author,
    article.type,
    ...article.tags,
  ]
    .join(" ")
    .toLowerCase();
  const topicMatch = state.topic === "전체" || article.topic === state.topic;
  const queryMatch = !state.query || haystack.includes(state.query.toLowerCase());
  return topicMatch && queryMatch;
}

function issueMatches(issue) {
  if (!issue.articles.length) {
    const topicMatch = state.topic === "전체" || (issue.topics || []).includes(state.topic);
    const queryMatch =
      !state.query ||
      [issue.volume, issue.issueCode, issue.date, issue.title].join(" ").toLowerCase().includes(state.query.toLowerCase());
    return topicMatch && queryMatch;
  }

  return issue.articles.some(matchesArticle);
}

function renderFilters() {
  const topics = ["전체", ...unique(allArticles.map((article) => article.topic))];
  topicFilters.innerHTML = topics
    .map(
      (topic) =>
        `<button class="filter-button ${topic === state.topic ? "active" : ""}" type="button" data-topic="${topic}">${topic}</button>`,
    )
    .join("");
}

function renderIssues() {
  if (state.selectedIssueVolume) {
    renderIssueDetail(state.selectedIssueVolume);
    return;
  }

  const filteredIssues = weeklyIssues.filter(issueMatches);
  resultCount.textContent = `${filteredIssues.length}개 호`;

  issueList.innerHTML = filteredIssues.map(renderIssueSummaryCard).join("");

  if (!filteredIssues.length) {
    issueList.innerHTML = `<article class="empty-card"><h3>검색 결과가 없습니다</h3></article>`;
  }
}

function renderIssueSummaryCard(issue) {
  const matchedArticles = issue.articles.filter(matchesArticle);
  const previewArticles = matchedArticles.length ? matchedArticles : issue.articles;
  const topicTags = unique([...(issue.topics || []), ...previewArticles.map((article) => article.topic)]).slice(0, 4);
  const previewTitles = previewArticles.length
    ? previewArticles.map((article) => article.title).join(" / ")
    : "개별 글 목록 준비 중";

  return `
    <article class="issue-summary-card" data-issue-volume="${issue.volume}">
      ${renderCover(issue)}
      <button class="issue-main" type="button" data-open-issue="${issue.volume}" aria-label="SRI Weekly ${issue.volume}호 수록 글 보기">
        <h3>SRI Weekly 제${issue.volume}호</h3>
        <time datetime="${issue.date}">▣ ${formatDateWithWeekday(issue.date)} 발행</time>
        <div class="issue-chip-row">${topicTags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <p>수록 글 <strong>${issue.articles.length}편</strong> - ${previewTitles}</p>
      </button>
      <div class="issue-tools">
        <a class="outline-action" href="${issue.pdf}" target="_blank" rel="noreferrer">다운로드</a>
        <button class="outline-action" type="button" data-preview-pdf="${issue.previewPdf || issue.pdf}" data-preview-title="SRI Weekly 제${issue.volume}호">미리보기</button>
      </div>
    </article>
  `;
}

function renderIssueDetail(volume) {
  const issue = weeklyIssues.find((item) => item.volume === Number(volume));
  if (!issue) return;

  const articles = issue.articles.filter(matchesArticle);
  resultCount.textContent = `${issue.volume}호 · ${articles.length}개 글`;
  issueList.innerHTML = `
    <article class="issue-detail-card">
      <div class="detail-head">
        <button class="back-button" type="button" data-back-to-issues>← 전체 호수</button>
      </div>
      <div class="issue-detail-top">
        ${renderCover(issue)}
        <div>
          <p class="eyebrow">Issue papers</p>
          <h3>SRI Weekly 제${issue.volume}호</h3>
          <time datetime="${issue.date}">${formatDateWithWeekday(issue.date)} 발행</time>
          <p>${issue.title}</p>
        </div>
      </div>
      <div class="paper-list">
        ${
          articles.length
            ? articles.map((article, index) => renderPaperItem(article, index)).join("")
            : `<article class="empty-card"><h3>개별 글 목록이 아직 준비되지 않았습니다</h3></article>`
        }
      </div>
    </article>
  `;
}

function renderPaperItem(article, index) {
  return `
    <button class="paper-item" type="button" data-article-id="${article.id}">
      <span class="paper-number">${String(index + 1).padStart(2, "0")}</span>
      <span>
        <strong>${article.title}</strong>
        <em>${article.summary}</em>
        <span class="article-tags">${article.tags.slice(0, 5).map((tag) => `<span>${tag}</span>`).join("")}</span>
      </span>
    </button>
  `;
}

function renderCover(issue) {
  return `
    <div class="weekly-cover" aria-hidden="true">
      <div class="cover-card">
        <div class="cover-line"></div>
        <img src="./assets/sri-weekly-logo.png" alt="" />
        <span class="cover-volume">No. ${issue.volume}</span>
        <strong>${issue.issueCode}</strong>
        <small>${formatDate(issue.date)}</small>
      </div>
    </div>
  `;
}

function openArticle(articleId) {
  const article = allArticles.find((item) => item.id === articleId);
  if (!article) return;

  const related = getRelatedArticles(article);
  const articlePreviewUrl = article.previewPdf || article.pdf;
  articleDetail.innerHTML = `
    <p class="eyebrow">SRI Weekly ${article.volume}호 (${article.issueCode}) | ${formatDate(article.date)}</p>
    <h2>${article.title}</h2>
    <div class="detail-meta">
      <span>${article.type}</span>
      <span>${article.topic}</span>
      <span>${article.author}</span>
      ${article.tags.map((tag) => `<span>#${tag}</span>`).join("")}
    </div>
    <div class="article-body">
      <p>${article.summary}</p>
      <p>${article.body}</p>
      <div class="article-pdf-actions">
        ${
          article.pdf
            ? `<a class="download-link inline-download" href="${article.pdf}" target="_blank" rel="noreferrer">다운로드</a>`
            : `<span class="download-link inline-download disabled-link">개별 PDF 준비중</span>`
        }
        ${
          articlePreviewUrl
            ? `<button class="download-link inline-download preview-download" type="button" data-preview-pdf="${articlePreviewUrl}" data-preview-title="${article.title}">미리보기</button>`
            : ""
        }
      </div>
    </div>
    <section class="related-list">
      <h3>이 글과 연결되는 과거 SRI Weekly</h3>
      ${
        related.length
          ? related
              .map(
                (item) => `
          <button class="related-item" type="button" data-related-id="${item.id}">
            <strong>${item.title}</strong>
            <span>${item.volume}호 · ${formatDate(item.date)} · 연결 키워드 ${item.sharedTags.join(", ") || item.topic}</span>
          </button>
        `,
              )
              .join("")
          : `<p>최근 3개 호 안에서는 이 글보다 앞서 발행된 연결 글이 없습니다.</p>`
      }
    </section>
  `;

  if (!articleDialog.open) {
    articleDialog.showModal();
  }

  articleDialog.scrollTo({ top: 0, behavior: "smooth" });
}

function openPdfPreview(url, title) {
  if (!url) return;
  pdfPreviewTitle.textContent = title || "PDF 미리보기";
  pdfPreviewFrame.src = toDriveEmbedUrl(url);
  pdfPreviewOpen.href = toDriveViewUrl(url);
  pdfPreviewDownload.href = url;

  if (!pdfPreviewDialog.open) {
    pdfPreviewDialog.showModal();
  }
}

function getRelatedArticles(article) {
  return allArticles
    .filter((candidate) => candidate.id !== article.id && candidate.date < article.date)
    .map((candidate) => {
      const sharedTags = candidate.tags.filter((tag) => article.tags.includes(tag));
      const topicScore = candidate.topic === article.topic ? 1 : 0;
      return {
        ...candidate,
        sharedTags,
        score: sharedTags.length * 2 + topicScore,
      };
    })
    .filter((candidate) => candidate.score > 0)
    .sort((a, b) => b.score - a.score || b.date.localeCompare(a.date))
    .slice(0, 4);
}

function createTextDownloadUrl(issue, article) {
  const lines = [
    `SRI Weekly ${issue.volume}호 (${issue.issueCode})`,
    `${article.type} | ${article.title}`,
    `발행일: ${issue.date}`,
    `작성: ${article.author}`,
    "",
    article.summary,
    "",
    article.body,
  ];

  return `data:text/plain;charset=utf-8,${encodeURIComponent(lines.join("\n"))}`;
}

function formatDate(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(value));
}

function formatDateWithWeekday(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "short",
  }).format(new Date(value));
}

topicFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-topic]");
  if (!button) return;
  state.topic = button.dataset.topic;
  state.selectedIssueVolume = null;
  renderFilters();
  renderIssues();
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  state.selectedIssueVolume = null;
  renderIssues();
});

issueList.addEventListener("click", (event) => {
  const previewButton = event.target.closest("[data-preview-pdf]");
  if (previewButton) {
    event.stopPropagation();
    openPdfPreview(previewButton.dataset.previewPdf, previewButton.dataset.previewTitle);
    return;
  }

  const backButton = event.target.closest("[data-back-to-issues]");
  if (backButton) {
    state.selectedIssueVolume = null;
    renderIssues();
    return;
  }

  const articleButton = event.target.closest("[data-article-id]");
  if (articleButton) {
    openArticle(articleButton.dataset.articleId);
    return;
  }

  const issueButton = event.target.closest("[data-open-issue]");
  if (!issueButton) return;
  state.selectedIssueVolume = Number(issueButton.dataset.openIssue);
  renderIssues();
  document.querySelector("#archive").scrollIntoView({ block: "start" });
});

articleDetail.addEventListener("click", (event) => {
  const previewButton = event.target.closest("[data-preview-pdf]");
  if (previewButton) {
    openPdfPreview(previewButton.dataset.previewPdf, previewButton.dataset.previewTitle);
    return;
  }

  const button = event.target.closest("[data-related-id]");
  if (!button) return;
  openArticle(button.dataset.relatedId);
});

document.querySelector("#closeDialog").addEventListener("click", () => {
  articleDialog.close();
});

document.querySelector("#closePdfPreview").addEventListener("click", () => {
  pdfPreviewDialog.close();
  pdfPreviewFrame.src = "";
});

document.querySelector("#openLatestIssue").addEventListener("click", () => {
  state.selectedIssueVolume = weeklyIssues[0]?.volume || 147;
  renderIssues();
  document.querySelector("#archive").scrollIntoView({ block: "start" });
});

initData();
