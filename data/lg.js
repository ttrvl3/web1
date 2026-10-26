// LG 트윈스 응원가 데이터 (2026 시즌 기준, 야수 위주)
//
// 각 항목의 재생 방식:
//   videoId만 있음        → 해당 선수 단독 응원가 영상
//   videoId + start(초)   → 여러 선수 모음 영상의 해당 구간부터 재생
//   videoId 없음          → 아직 확인된 영상이 없어 YouTube 검색으로 연결
// number가 null이면 등번호 미확인.
KBO.registerTeam({
  id: "lg",
  name: "LG 트윈스",
  short: "LG",
  color: "#C30452",
  updated: "2026-10-26",
  players: [
    { name: "홍창기",   number: 51,   pos: "외야수", videoId: "u3qiN8-UxeY" },
    { name: "신민재",   number: 4,    pos: "내야수", videoId: "9RqHiqimNAc" },
    { name: "문성주",   number: 8,    pos: "외야수", videoId: "P0vvL3IHpKM" },
    { name: "오스틴 딘", number: 23,   pos: "내야수", videoId: "ruRvN0IFcxg" },
    { name: "문보경",   number: 2,    pos: "내야수", videoId: "j4roFirAhdY" },
    { name: "오지환",   number: 10,   pos: "내야수", videoId: "n1yJCnpGaKU" },
    { name: "박동원",   number: 27,   pos: "포수",   videoId: "A4wU4vFdS78" },
    { name: "박해민",   number: 17,   pos: "외야수", videoId: "p2SvRcOthVc" },
    { name: "구본혁",   number: 6,    pos: "내야수", videoId: "XsCLCMC9Ii0" },
    { name: "천성호",   number: null, pos: "내야수", videoId: "Na5UMk1X7Tw" },
    { name: "이재원",   number: null, pos: "외야수", videoId: "LXBMXWJ_GA4" },
    { name: "이영빈",   number: null, pos: "내야수", videoId: "mD1uL27_wVE" },
    { name: "이주헌",   number: null, pos: "포수",   videoId: "ibO8AMd8WzE" },
    { name: "송찬의",   number: null, pos: "외야수", videoId: "cu12AuKqxhw", start: 455 },
    { name: "최원영",   number: null, pos: "외야수", videoId: "cu12AuKqxhw", start: 183 },
    { name: "김주성",   number: null, pos: "내야수" },
    { name: "문정빈",   number: null, pos: "내야수" },
    { name: "박관우",   number: null, pos: "외야수" }
  ],
  teamSongs: [
    { name: "승리의 노래",     videoId: "CeGiBg9eXG0" },
    { name: "Forever LG",      videoId: "uOK-VU8x8DU" },
    { name: "LG 없이는 못살아", videoId: "RtaEZ0i1yIk", start: 446 },
    { name: "사랑한다 LG",     videoId: "RtaEZ0i1yIk", start: 479 }
  ]
});
