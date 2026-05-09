# SRI Weekly Online Archive Prototype

수원시정연구원 SRI Weekly 온라인 목록 조회, 검색, 다운로드, 개별 글 읽기, 과거 글 연결까지 확인할 수 있는 정적 웹 프로토타입입니다. Google Sheets의 `issues`, `articles` 탭을 Google Visualization JSONP 방식으로 읽어오도록 연결해 두었고, 시트 접근이 막혀 있을 때는 145호, 146호, 147호 샘플 데이터가 표시됩니다.

## 포함 기능

- Google Sheets 기반 SRI Weekly 권호별 목록
- 제목, 요약, 작성부서, 키워드 통합 검색
- 주제 필터
- Google Drive 원문 PDF 다운로드/미리보기
- 개별 글 저장
- 글 상세 보기
- 같은 주제와 키워드를 기준으로 과거 발행 글 자동 추천

## 실행

로컬에서는 간단한 서버로 실행하는 것을 권장합니다.

```bash
python3 -m http.server 4173
```

그 다음 브라우저에서 `http://localhost:4173`으로 접속합니다.

## Google Sheets 연결

현재 연결 대상:

- 스프레드시트: `SRI_Weekly`
- URL: `https://docs.google.com/spreadsheets/d/1o5FyEUf83EDDz0VPHTaeCwz_Yu6VA9a_aXYqLcVACuI/edit`
- 사용 탭: `issues`, `articles`

웹페이지가 시트를 직접 읽으려면 Google Sheets에서 다음 설정이 필요합니다.

1. 우측 상단 `공유`에서 일반 액세스를 `링크가 있는 모든 사용자: 뷰어`로 바꿉니다.
2. `파일 > 공유 > 웹에 게시`를 엽니다.
3. 문서 전체 또는 `issues`, `articles` 탭을 게시합니다.
4. 배포한 웹페이지를 새로고침합니다.

공개 보기 권한 또는 웹 게시가 꺼져 있으면 좌측 패널에 “샘플 데이터 표시 중”이라고 나오고, 기존 3개 호 샘플 데이터가 표시됩니다.

## 실제 서비스로 확장할 때

- 관리자 업로드: 권호 PDF, 개별 글 제목, 본문, 키워드 등록
- 원문 변환: PDF에서 글 단위 HTML 추출 또는 원고 파일 기반 등록
- 추천 로직: 키워드, 주제, 발행일, 부서, 조회수 기반 가중치 적용
- 검색: 게시글 수가 많아지면 DB 전문 검색 또는 검색 엔진 연동
- 배포: 연구원 홈페이지 하위 메뉴, 별도 아카이브, 또는 내부 CMS 연동
