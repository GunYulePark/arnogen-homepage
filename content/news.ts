export type NewsItem = {
  slug: string; date: string; category: string; title: string; summary: string; body: string[]; sourceName: string; sourceUrl: string;
};

export const news: NewsItem[] = [
  {slug:'baegot-construction-start',date:'2026.08.21',category:'Project update',title:'종근당, 시흥 배곧 바이오복합연구개발단지 공사 개시',summary:'시흥 배곧지구 연구용지 3-1에서 바이오복합연구개발단지 건설 단계가 시작됐다는 보도가 나왔습니다.',body:['보도에 따르면 종근당은 2026년 6월 이사회에서 배곧 바이오복합연구개발단지 공사 개시를 의결했습니다.','단지에는 후보물질 발굴을 위한 연구센터와 공정개발·생산 검증을 위한 실증센터가 들어설 예정이며, 보도된 준공 목표 시점은 2028년 8월입니다.','아르노젠 홈페이지에서는 이 프로젝트와 관련된 공개 보도를 지속적으로 정리해 안내합니다.'],sourceName:'더벨',sourceUrl:'https://m.thebell.co.kr/m/newsview.asp?newskey=202608191631323680107056'},
  {slug:'baegot-facility-investment',date:'2026.06.11',category:'Investment',title:'시흥 배곧 바이오복합연구개발단지 신규 시설투자 결정',summary:'종근당은 연구센터와 실증센터 구축을 위한 3,925억 원 규모의 신규 시설투자를 공시했습니다.',body:['공시에 따르면 투자 대상은 시흥 배곧 바이오복합연구개발단지 구축이며, 연구센터와 이에 대한 실증센터를 조성하는 것을 목적으로 합니다.','이번 공시는 건물 시설투자에 관한 내용으로, 앞서 확보한 배곧 연구용지 3-1 부지와 연계해 추진됩니다.','투자·일정과 관련한 세부 사항은 향후 진행 과정에서 변경될 수 있으므로, 최신 공시를 기준으로 확인할 필요가 있습니다.'],sourceName:'전자공시시스템(DART) 공시',sourceUrl:'https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20260611800406'},
  {slug:'baegot-land-contract',date:'2025.06.23',category:'Project update',title:'시흥 배곧 연구3-1용지 매매계약 체결',summary:'시흥시와 종근당이 배곧지구 연구3-1용지 79,791㎡의 매매계약을 체결했습니다.',body:['보도에 따르면 해당 부지에는 바이오의약품 연구시설, 실증 인프라, 연구지원센터 등을 갖춘 복합 연구개발단지가 조성될 예정입니다.','시흥시는 인허가와 기반시설 확충을 지원하고, 종근당은 연구개발 인프라 구축을 추진하는 계획을 밝혔습니다.','지역 인재 우선 고용과 대학 연계 취업 지원도 협약의 주요 내용으로 소개됐습니다.'],sourceName:'동아일보',sourceUrl:'https://www.donga.com/news/Society/article/all/20250624/131865900/2'},
  {slug:'siheung-investment-mou',date:'2025.06.10',category:'Partnership',title:'시흥시·종근당, 2조 2,000억 원 규모 투자협약 체결',summary:'시흥시와 종근당이 배곧지구 바이오의약품 복합 연구개발단지 조성을 위한 투자양해각서를 체결했습니다.',body:['협약은 경기경제자유구역 배곧지구 연구3-1용지에 최첨단 바이오의약품 복합 연구개발단지를 조성하기 위한 내용입니다.','공개 보도 기준으로 총 투자 규모는 약 2조 2,000억 원이며, 대상 용지 면적은 79,791㎡입니다.','시흥시는 안정적인 투자 이행과 단지 조성을 지원하고, 지역 고용 및 대학 연계 방안을 함께 추진할 계획을 밝혔습니다.'],sourceName:'뉴시스',sourceUrl:'https://www.newsis.com/view/NISX20250610_0003207745'},
];

export const latestNews = news.slice(0, 3);
