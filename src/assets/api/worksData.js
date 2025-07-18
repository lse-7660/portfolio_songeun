const worksData = [
    {
        id: 1,
        name: 'Diptyque',
        desc: '향수 브랜드 Diptyque 사이트 개편 프로젝트',
        imgUrl: '/works/diptyque_mockup.png',
        url: 'https://diptyque.vercel.app/',
        git: 'https://github.com/2mightyMt/diptyque',
        team: '5인 팀 프로젝트, 기여도 30%',
        date: '2025.03',
        tools: 'React, Redux, Scss, tailwind, Motion, Figma, github ',
        conceptImg: '/works/diptyque_conceptimg.png',
        mission:
            '향수 브랜드 Diptyque 사이트 개편, 직관적인 사이트맵 기획, 클래식하고 모던한 브랜드 아이덴티티를 반영한 리디자인',
        direction: '직관적인 UX/UI, 그레이톤으로 심플하고 정돈된 디자인',
        part: [
            {
                title: '사이트맵 및 플로우차트 기획',
                desc: '정보가 여러 페이지에 흩어져 있어 원하는 정보를 찾기 어려웠던 기존 사이트의 단점을 보완하고 직관적인 UX를 구축하기 위하여 사이트맵과 플로우차트를 기획하였습니다.',
                imgUrl: '/works/diptyque_sitemap.png',
            },
            {
                title: '메인 페이지 및 헤더 개발',
                desc: 'Motion을 활용하여 가로 스크롤 효과를 구현하였습니다. 각 섹션 클릭 시 해당하는 페이지로 이동하도록 구현하고, 메인 페이지에서 다른 페이지 이동 시 헤더에 애니메이션을 추가하여 다채롭게 구성하였습니다.',
                imgUrl: '/works/diptyque_main.GIF',
            },
            {
                title: 'Maison 페이지 개발',
                desc: 'Diptyque를 소개하는 페이지로, Motion을 활용하여 심플하면서도 흥미롭게 구성하였습니다.',
                imgUrl: '/works/diptyque_maison.GIF',
            },
            {
                title: '장바구니 페이지 디자인 및 개발',
                desc: '장바구니 데이터를 불러와 페이지에 표시하고, Redux를 활용하여 선택한 상품 총 금액 표시, 데이터 삭제 및 수량 변경, 각인 수정 기능을 구현하였습니다.',
                imgUrl: '/works/diptyque_cart.png',
            },
        ],
    },
    {
        id: 2,
        name: 'Bokjak',
        desc: 'OTT 제작 프로젝트',
        imgUrl: '/works/bokjak_mockup.png',
        url: 'https://bokjak.netlify.app/',
        git: 'https://github.com/lse-7660/bokjak',
        team: '4인 팀 프로젝트, 기여도 60%',
        date: '2025.02',
        tools: 'React, Redux, styled-components, Figma, github',
        conceptImg: '/works/bokjak_conceptimg.png',
        mission: '종합 OTT 사이트 제작, 사용자에게 친숙하고 직관적인 UX/UI ',
        direction: '직관적인 UX/UI, ',
        part: [
            {
                title: '초기 파일 세팅 및 API, Git 관리',
                desc: '프로젝트 리더로서 파일 구조, 스타일 변수 등을 세팅하고 사용 규칙을 명시하여 팀원들에게 배포하였습니다.',
                imgUrl: '/works/bokjak_setting.png',
            },
            {
                title: '상세 정보 페이지',
                desc: "상세 정보 페이지를 고유한 url을 가진 모달로 제작하였습니다. 좋아요 및 북마크, '모여보기' 방을 만들 수 있는 모달을 제작하였고, 콘텐츠의 상세 정보 표시 및 같은 장르의 다른 콘텐츠를 불러와 관련 콘텐츠로 표시하였습니다.",
                imgUrl: '/works/bokjak_detail.GIF',
            },
            {
                title: '필모그래피 페이지',
                desc: '상세 정보 페이지에서 인물 이름을 클릭 시 해당 인물이 참여한 콘텐츠를 표시하는 페이지를 제작하였습니다.',
                imgUrl: '/works/bokjak_filmo.png',
            },
            {
                title: '비디오 페이지',
                desc: '해당 콘텐츠의 영상이 재생되며, React-Player를 활용하여 재생 버튼 등의 유틸을 사용할 수 있게 하였습니다. 또한 채팅 기능과 함께, 콘텐츠 감상 중 이모지를 통해 감정을 표현할 수 있는 기능을 구현하였습니다.',
                imgUrl: '/works/bokjak_video.png',
            },
        ],
    },
    {
        id: 3,
        name: 'Yeolgong',
        desc: '스터디 기록 어플리케이션',
        imgUrl: '/works/yeolgong_mockup.png',
        url: 'https://fire-study.vercel.app/',
        git: 'https://github.com/lse-7660/studyapp',
        team: '개인 프로젝트, 기여도 100%',
        date: '2024.09',
        tools: 'React, tailwind, Figma',
        conceptImg: '/works/yeolgong_conceptimg.png',
        mission: 'Todo 리스트 관리와 일간 및 주간 공부 시간 기록을 위한 공부 어플리케이션',
        direction: '직관적 사용을 위한 심플한 디자인과 재미를 더한 UI/UX',
        part: [
            {
                title: '스톱워치',
                desc: 'Context를 활용하여 스톱워치 기능을 구현하고, 주간 기록 그래프에 해당 요일의 공부 시간을 합산하는 기능을 구현하였습니다. 공부 시간은 local storage에 저장됩니다.',
                imgUrl: '/works/yeolgong_stopwatch.png',
            },
            {
                title: 'Todo 리스트',
                desc: '해야 할 일을 작성하여 local storage에 저장하고, 체크박스를 통해 완료 여부를 수정합니다.',
                imgUrl: '/works/yeolgong_todos.png',
            },
            {
                title: '불꽃 버튼',
                desc: '랜덤한 x 위치값과 애니메이션 지속 시간을 가진 불꽃 이모지를 생성하는 재미 요소를 추가했습니다.',
                imgUrl: '/works/yeolgong_fire.GIF',
            },
        ],
    },
    {
        id: 4,
        name: 'Opensurvey',
        desc: '리서치 플랫폼인 오픈서베이 사이트 개편 프로젝트',
        imgUrl: '/works/opensurvey_mockup.png',
        url: 'https://lse-7660.github.io/opensurvey/pages/',
        git: 'https://github.com/lse-7660/opensurvey',
        team: '개인 프로젝트, 기여도 100%',
        date: '2024.10',
        tools: 'HTML5, JavaScript, Scss, GSAP, Figma',
        conceptImg: '/works/opensurvey_conceptimg.png',
        mission: '리서치 사이트 opensurvey 사이트 개편, 직관적인 사이트맵 기획',
        direction: '심플하면서도 지루하지 않은 디자인, 사용자층을 고려한 차분한 디자인',
        part: [
            {
                imgUrl: '/works/opensurvey_section1.png',
            },
            {
                imgUrl: '/works/opensurvey_section2.png',
            },
            {
                imgUrl: '/works/opensurvey_section3.png',
            },
            {
                imgUrl: '/works/opensurvey_section4.png',
            },
        ],
    },
];

export default worksData;
