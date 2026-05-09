# SRI Weekly Google Sheets 자동 목록 생성

이 폴더의 `sri-weekly-drive-sync.gs`는 Google Drive에 업로드한 SRI Weekly PDF 폴더를 읽어서 Google Sheets에 운영용 목록을 자동 생성하는 Apps Script입니다.

## 대상 Drive 폴더

- 전체 호 PDF: `SRI Weekly Archive/2025-2026`
- 개별 페이퍼 PDF: `SRI Weekly Archive/2025-2026_se`

스크립트에는 현재 확인된 폴더 ID가 이미 들어가 있습니다.

## 생성되는 시트

### `issues`

권호 전체 PDF 목록입니다.

주요 컬럼:

- `issue_id`
- `issue_no`
- `issue_code`
- `year`
- `published_date`
- `file_name`
- `file_id`
- `full_pdf_view_url`
- `full_pdf_preview_url`
- `full_pdf_download_url`
- `toc_text`
- `topics`
- `article_count`
- `status`

### `article_files`

개별 페이퍼 PDF 파일 목록입니다. 호수별 하위 폴더를 스캔해서 만듭니다.

주요 컬럼:

- `article_file_id`
- `issue_id`
- `issue_no`
- `article_order`
- `file_name`
- `file_id`
- `article_pdf_view_url`
- `article_pdf_preview_url`
- `article_pdf_download_url`
- `detected_title`
- `status`

### `articles`

웹페이지에서 실제로 사용할 개별 글 데이터 작업용 시트입니다.

자동으로 채워지는 것:

- `article_id`
- `issue_id`
- `issue_no`
- `year`
- `article_order`
- `article_title`
- `author`
- `article_pdf_download_url`
- `article_pdf_preview_url`
- `status`

사람이 보완하면 좋은 것:

- `article_type`
- `summary`
- `body`
- `topic`
- `keywords`
- `source_page`
- `related_manual_ids`

## 권호 목록 화면에서 쓰는 데이터

`issues` 탭에는 대표 제목을 두지 않습니다. SRI Weekly 한 호는 여러 페이퍼를 묶은 간행물이므로, 권호 카드에는 다음 데이터를 쓰는 것을 권장합니다.

- `issue_no`: 제147호
- `issue_code`: 2026-18
- `published_date`: 발행일
- `toc_text`: 해당 호 목차
- `topics`: 해당 호 주요 주제
- `article_count`: 수록 글 수
- `full_pdf_download_url`: 전체 PDF 다운로드
- `full_pdf_preview_url`: 전체 PDF 미리보기

`toc_text`와 `article_count`는 개별 페이퍼 파일 목록에서 자동 생성됩니다. `topics`만 사람이 보완하면 됩니다.

### `checks`

누락된 호수나 개별 페이퍼 폴더를 점검하는 시트입니다.

## 사용 순서

1. Google Sheets에서 새 스프레드시트를 만듭니다.
2. 메뉴에서 `확장 프로그램 > Apps Script`를 엽니다.
3. `sri-weekly-drive-sync.gs`의 전체 내용을 붙여 넣습니다.
4. 저장합니다.
5. 함수 목록에서 `syncSRIWeeklyArchive`를 선택하고 실행합니다.
6. 처음 실행 시 권한 승인 창이 뜨면 승인합니다.
7. 실행이 끝나면 `issues`, `article_files`, `articles`, `checks` 탭이 생성됩니다.

## 앞으로 업데이트할 때

Drive 폴더에 새 PDF를 추가한 뒤 Google Sheets에서 다음 중 하나를 실행하면 됩니다.

- Apps Script에서 `syncSRIWeeklyArchive` 실행
- 시트 상단 메뉴의 `SRI Weekly > Drive 목록 동기화` 클릭

## AI로 `articles` 탭 자동 보완하기

스크립트에는 Gemini API를 이용해 개별 PDF에서 아래 항목을 자동 생성하는 기능이 포함되어 있습니다.

- `article_title`
- `article_type`
- `summary`
- `body`
- `topic`
- `keywords`

### 준비

1. Google AI Studio에서 Gemini API 키를 발급합니다.
2. Google Sheets를 새로고침합니다.
3. 상단 메뉴에서 `SRI Weekly > Gemini API 키 저장`을 클릭합니다.
4. API 키를 입력합니다.

API 키는 Apps Script의 Script Properties에 저장됩니다.

### 실행 방법

소량 테스트:

1. `articles` 탭에서 AI 초안을 만들 행 몇 개를 선택합니다.
2. `SRI Weekly > 선택한 행 AI 초안 생성`을 클릭합니다.

일괄 처리:

1. `SRI Weekly > 빈 행 AI 초안 3개 생성`을 클릭합니다.
2. `summary`, `topic`, `keywords` 중 비어 있는 행을 위에서부터 3개 처리합니다.
3. 오류가 없으면 반복 실행합니다.

### 권장 운영

한 번에 전체를 돌리기보다 먼저 2026년 130-148호 일부 행으로 품질을 확인하세요. 결과가 괜찮으면 3개 단위로 반복 실행하는 것을 권장합니다. Apps Script 실행 시간 제한과 API 호출 제한을 피하기 위해 작게 나누었습니다.

## 주의

- 파일명에 `제147호`, `(2026-18)` 같은 패턴이 있어야 자동 인식이 잘 됩니다.
- 개별 페이퍼 파일명 앞에 `1.`, `2.`, `3.` 같은 순번이 있으면 `article_order`를 더 정확히 잡습니다.
- 스크립트를 다시 실행하면 기존 `issues`, `article_files`, `articles`, `checks` 탭을 새로 씁니다. 사람이 직접 보완한 `articles` 내용이 있다면 실행 전에 별도 백업하거나, 다음 단계에서 “기존 보완값 유지 버전”으로 스크립트를 바꾸는 것을 추천합니다.
- AI 생성 결과는 초안입니다. 공개 전에는 담당자가 요약, 토픽, 키워드를 한 번 검수하는 것을 권장합니다.
