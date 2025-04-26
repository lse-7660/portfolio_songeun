import { createSlice } from '@reduxjs/toolkit';

const galleryData = [
    {
        id: 1,
        category: 'event',
        name: '현대카드 3층 시스템 혜택 배너',
        imgUrl: '/designimage/event/2024.02.14_현대카드_3층_시스템_혜택.png',
        span: 1,
    },
    {
        id: 2,
        category: 'event',
        name: '인슈플러스 여행 보험 가입 혜택 배너',
        imgUrl: '/designimage/event/2024.02.26_인슈플러스_여행보험_가입_혜택.png',
        span: 1,
    },
    {
        id: 3,
        category: 'event',
        name: '아마노코리아 이용고객 혜택 배너',
        imgUrl: '/designimage/event/2024.03.08_아마노코리아_이용고객_혜택.png',
        span: 1,
    },
    {
        id: 4,
        category: 'event',
        name: '인천공항 스카이허브 라운지 홍보 포스터',
        imgUrl: '/designimage/event/2024.03.08_포스터_스카이허브_T1_탑승동_시안2_문구2.png',
        span: 1,
    },
    {
        id: 5,
        category: 'event',
        name: '현대카드 굿프렌드십 혜택 안내 배너',
        imgUrl: '/designimage/event/2024.06.04_현대카드_굿프렌드십.png',
        span: 1,
    },
    {
        id: 6,
        category: 'event',
        name: '트래블러스 체크카드 이벤트 안내 배너',
        imgUrl: '/designimage/event/240321_트래블러스_체크카드_이벤트_페이지_240625.png',
        span: 1,
    },
    {
        id: 7,
        category: 'event',
        name: '카모아 회원 혜택 안내 배너',
        imgUrl: '/designimage/event/240531_카모아_회원_혜택.png',
        span: 1,
    },
    {
        id: 8,
        category: 'event',
        name: '삼성카드 모니모앱 고객 혜택 안내 배너',
        imgUrl: '/designimage/event/240620_삼성카드_모니모앱_고객_혜택_인증_전.png',
        span: 1,
    },
    {
        id: 9,
        category: 'event',
        name: '100만 회원 감사 이벤트 Meta 광고 소재',
        imgUrl: '/designimage/event/경품_강조_2_스토리_2.스탠바이.jpg',
        span: 1,
    },
    {
        id: 10,
        category: 'event',
        name: '100만 회원 감사 이벤트 네이버 광고 소재',
        imgUrl: '/designimage/event/브랜딩DA_560_LA.jpg',
        span: 3,
    },

    {
        id: 1,
        category: 'game',
        name: '게임 <카운터사이드> 마켓 등록 이미지',
        imgUrl: '/designimage/game/image_1.11.png',
        span: 2,
    },
    {
        id: 2,
        category: 'game',
        name: '게임 <카운터사이드> 새 유닛 홍보 배너',
        imgUrl: '/designimage/game/new_unit_mechanic.16.png',
        span: 2,
    },
    {
        id: 3,
        category: 'game',
        name: '게임 <카운터사이드> 패치 노트 배너',
        imgUrl: '/designimage/game/patch_notes.8.png',
        span: 2,
    },
    {
        id: 4,
        category: 'game',
        name: '게임 <카운터사이드> 해외 런칭 축하 이벤트트',
        imgUrl: '/designimage/game/응원_이벤트_배너_수정.5.png',
        span: 2,
    },
    {
        id: 5,
        category: 'game',
        name: '게임 <celectial goddess> 함대 시스템 배너',
        imgUrl: '/designimage/game/fleet-formation-sfw.png',
        span: 2,
    },
    {
        id: 6,
        category: 'game',
        name: '게임 <celectial goddess> 점검 완료 안내 배너',
        imgUrl: '/designimage/game/MAINTENANCE_completed.png',
        span: 2,
    },
    {
        id: 7,
        category: 'game',
        name: '게임 <celectial goddess> 점령전 시스템 소개 배너',
        imgUrl: '/designimage/game/점령전_시스템_소개.png',
        span: 2,
    },
    {
        id: 8,
        category: 'game',
        name: '게임 <celectial goddess> 새 캐릭터 홍보 배너',
        imgUrl: '/designimage/game/프로필_배너_Naria.6.png',
        span: 2,
    },
    {
        id: 9,
        category: 'game',
        name: '게임 <탈리온> 홍보 이미지',
        imgUrl: '/designimage/game/0511.png',
        span: 1,
    },
    {
        id: 10,
        category: 'game',
        name: '게임 <탈리온> 홍보 이미지',
        imgUrl: '/designimage/game/20211021.png',
        span: 3,
    },
    {
        id: 11,
        category: 'game',
        name: '게임 <드레곤 네스트> 이벤트 배너',
        imgUrl: '/designimage/game/201217퀴즈이벤트.png',
        span: 2,
    },
    {
        id: 12,
        category: 'game',
        name: '연습 이미지',
        imgUrl: '/designimage/game/20210609.1.png',
        span: 2,
    },
    {
        id: 13,
        category: 'game',
        name: '게임 <논스톱게임> 네이버 카페 헤더 이미지',
        imgUrl: '/designimage/game/타이틀_2.4.png',
        span: 4,
    },
    {
        id: 1,
        category: 'ppt',
        name: 'FGT 결과 보고서',
        imgUrl: '/designimage/ppt/꿈꾸는별_전문가FGT_라티스글로벌.png',
        span: 2,
    },
    {
        id: 2,
        category: 'ppt',
        name: 'FGT 결과 보고서',
        imgUrl: '/designimage/ppt/라핀_전문가FGT_라티스글로벌.png',
        span: 2,
    },
    {
        id: 3,
        category: 'ppt',
        name: 'FGT 결과 보고서',
        imgUrl: 'designimage/ppt/랜덤로드디펜스_전문가FGT_라티스글로벌.png',
        span: 2,
    },
    {
        id: 4,
        category: 'ppt',
        name: 'FGT 결과 보고서',
        imgUrl: '/designimage/ppt/스노우_브레이크_FGT_라티스글로벌.1.png',
        span: 2,
    },
    {
        id: 1,
        category: 'logo',
        name: '게임 <celestial goddess> 부유섬 아이콘 디자인',
        imgUrl: 'designimage/logo/부유섬_시스템_소개_배너_6.11.png',
        span: 2,
    },
    {
        id: 2,
        category: 'logo',
        name: '스마트라이온 BI 디자인',
        imgUrl: '/designimage/logo/자산_3@4x.png',
        span: 2,
    },
];

const initialState = {
    galleryData,
    selectedCategory: 'event',
    filteredData: galleryData.filter(
        (item) => item.category === 'event'
    ),
    curImg: null,
};
export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
            state.filteredData = state.galleryData.filter(
                (data) =>
                    data.category === state.selectedCategory
            );
        },
        setCurImg: (state, action) => {
            state.curImg = action.payload;
        },
        setPrevImg: (state, action) => {
            if (state.curImg > 1) {
                state.curImg = state.curImg -= 1;
            } else {
                return;
            }
        },
        setNextImg: (state, action) => {
            if (state.curImg < state.filteredData.length) {
                state.curImg = state.curImg += 1;
            } else return;
        },
        clearCurImg: (state, action) => {
            state.curImg = null;
        },
    },
});
export const galleryActions = gallerySlice.actions;
export default gallerySlice.reducer;
