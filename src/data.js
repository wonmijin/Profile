// TECH STACK IMAGE
export const skillImages = [
  {
    category: 'front-end',
    skillInfo: [
      {
        images: 'skill_html.png',
        title: 'HTML5',
        content: '웹접근성, 표준성을 준수하며 시멘틱태그를 이용해 마크업 할 수 있습니다.',
      },
      {
        images: 'skill_css.png',
        title: 'CSS3',
        content: '레이아웃을 충분히 이해하고 반응형 작업과, 애니메이션 작업이 가능합니다.',
      },
      {
        images: 'skill_javascript.png',
        title: 'JavaScript',
        content: 'JavaScript의 배열, 메소드, DOM을 이해하며 다양한 상황에 적용할 수 있습니다.',
      },
      {
        images: 'skill_jquery.png',
        title: 'JQuery',
        content: '관련 라이브러리와 애니메이션, 여러 메소드들을 잘 활용할 수 있습니다.',
      },
      {
        images: 'skill_react.png',
        title: 'React',
        content: '상태와 속성, 조건부 렌더링을 다룰 수 있습니다.',
      },
      {
        images: 'skill_vue.png',
        title: 'Vue',
        content: '데이터 바인딩, 이벤트 처리 등을 구현합니다.',
      },
      {
        images: 'skill_typescript.png',
        title: 'TypeScript',
        content: '타입을 이해하고, 코드의 안정성을 높힙니다.',
      },
      {
        images: 'skill_styledComponents.png',
        title: 'Styled-Components',
        content: '컴포넌트로 스타일을 관리하고 다룰 수 있습니다.',
      },
      {
        images: 'skill_sass.png',
        title: 'Sass',
        content: 'SCSS의 문법과 모듈화를 잘 활용하여 스타일 작업을 원활히 할 수 있습니다.',
      },
    ],
  },
  {
    category: 'using tools',
    skillInfo: [
      {
        images: 'skill_vscode.png',
        title: 'VSCODE',
        content: '주로 사용하는 코딩툴이며, 코딩에 편리한 확장프로그램들을 설치해 사용하고 있습니다.',
      },
      {
        images: 'skill_git.png',
        title: 'Git',
        content: 'Rule에 맞게 이슈 및 PR 생성을 통한 협업이 가능합니다.',
      },
      {
        images: 'skill_figma.png',
        title: 'Figma',
        content: 'Figma를 활용해 와이어프레임을 만들 수 있습니다.',
      },
      {
        images: 'skill_photoshop.png',
        title: 'Photoshop',
        content: '마스크효과, 레이어 활용 등을 이용해 다양한 그래픽 요소를 제작할 수 있습니다.',
      },
      {
        images: 'skill_illustrator.png',
        title: 'Illustrator',
        content: '펜툴 활용과 기타도구들을 이용해서 백터 형식의 디자인 요소를 제작할 수 있습니다.',
      },
    ],
  },
];

// WORKS
export const projects = [
  
  

  {
    id: 4,
    images: [
      'foodmate_01.jpg',
      'foodmate_02.jpg',
      'foodmate_03.jpg',
      'foodmate_04.jpg',
    ],
    title: "FoodMate",
    participation: '팀 프로젝트 (FE: 3명 BE: 4명)',
    mainContent: `바쁜 현대 사회 속에서 혼밥러들이 증가하면서, 함께 밥을 먹으며 소통하고 만남을 가질 수 있는 커뮤니티의 필요성을 느껴 이 프로젝트를 기획하게 되었습니다. 이 프로젝트는 다양한 검색 조건을 통해 사용자가 최적화된 모임을 찾을 수 있도록 설계되었습니다. 예를 들어, 실시간 현재 위치 기반 주변 모임, 지역 및 날짜별 모임 필터링 등의 기능을 제공하며, 다대다 채팅 기능을 통해 모임 전 소통을 원활하게 할 수 있습니다.
    저는 이 프로젝트에서 공용 컴포넌트 생성, 회원가입 및 로그인, 마이페이지 부분을 맡아 개발했습니다. 공용 컴포넌트를 통해 일관된 UI를 유지하고, 회원가입 및 로그인 기능을 통해 사용자 인증 및 관리를 구현했으며, 마이페이지를 통해 사용자 개인화된 경험을 제공했습니다.
    협업 과정에서 프론트엔드 팀원 간 소통의 문제와 갈등이 발생했지만, 이를 해결하기 위해 다양한 노력을 기울였습니다. 문제를 명확히 정의하고, 팀원들과 열린 대화를 통해 해결 방안을 모색하였으며, 기능 축소를 최소화하면서 최대한 완성도를 높이는 방향으로 프로젝트를 진행했습니다. 이러한 노력 덕분에 프로젝트 발표를 성공적으로 마칠 수 있었습니다.
    이번 프로젝트는 저의 첫 협업 프로젝트 경험이었으며, Rule에 맞춰 Issue와 PR을 작성하고 코드 리뷰를 진행하는 과정에서 많은 것을 배울 수 있었습니다. 특히, API 명세서를 확인하며 데이터를 요청하는 과정에서 React-Query를 활용하고, 토큰을 담아 보내는 fetchCall 함수를 만들어 사용한 경험은 매우 흥미로웠습니다. 이를 통해 효율적이고 안전한 데이터 통신을 구현할 수 있었습니다.
    이번 프로젝트는 저에게 큰 도전이었지만, 동시에 많은 성장을 이룰 수 있는 기회였습니다. 다양한 기술을 적용하고 협업하는 과정에서 얻은 경험은 앞으로의 개발 활동에 큰 도움이 될 것입니다.`,
    tools: ['TypeScript', 'React', 'Vite', 'Styled-Components', 'Axios', 'Recoil', 'React-Query'],
    gitURL: 'https://github.com/wonmijin/Foodmate-frontend',
  },

  {
    id: 3,
    images: [
      'disney_01.png',
      'disney_02.png',
      'disney_03.png',
      'disney_04.png',
      'disney_05.png',
    ],
    title: "Disney App",
    participation: '개인 프로젝트',
    mainContent: `Disney App은 React 환경에서 구현된 사이트입니다.
    이 앱은 Google OAuth를 활용하여 로그인 기능을 구현하였으며, 사용자가 간편하게 로그인할 수 있도록 했습니다.
    또한, 메인페이지에서는 간단한 영화 상세 정보를 확인할 수 있도록 해당 영화를 클릭하면 모달 페이지가 나타나도록 설계했습니다.
    이 프로젝트에서는 The Movie DB API를 활용하여 영화 정보를 가져와서 사용자에게 제공하였습니다.
    사용자는 검색 페이지에서 편리하게 원하는 영화를 찾을 수 있으며, 해당 영화의 상세 정보를 확인할 수 있는 상세 페이지도 구현하였습니다.
    이를 통해 사용자들은 원하는 영화 정보를 쉽게 찾을 수 있었고, 자세한 내용을 확인할 수 있습니다.
    또한, 이 앱은 반응형 디자인을 적용하여 다양한 기기에서 최적의 사용자 경험을 제공하도록 노력했습니다.
    사용자가 모바일, 테블릿 등 다양한 환경에서 이용할 때도 일관된 UI와 편리한 기능을 제공하여 사용자들의 만족도를 높이고자 노력했습니다.`,
    tools: ['React', 'JavaScript', 'Firebase', 'Styled-Components', 'Axios', 'Swiper', '반응형'],
    site: 'https://react-disney-app-11280.firebaseapp.com/',
    gitURL: 'https://github.com/wonmijin/react-disney-app',
  },

  {
    id: 2,
    images: [
      'movie_01.png', 
      'movie_02.png', 
      'movie_03.png',
      'movie_04.png',
    ],
    title: 'Movie',
    participation: '개인 프로젝트',
    mainContent: `Movie는 컴포넌트와 상태관리 패턴을 학습하고 정리하기 위한 영화검색 프로젝트입니다.
    이 프로젝트에서는 OMDb API를 활용하여 영화 정보를 수집하고, 검색 기능을 갖춘 메인 페이지와 상세 정보를 확인할 수 있는 상세 페이지를 구현했습니다.
    메인 페이지에서는 사용자가 영화를 검색할 때까지 로딩 애니메이션을 보여주어 사용자 경험을 향상시켰습니다.
    또한, 상세페이지에서는 스켈레톤 UI 로딩 애니메이션을 추가하여 페이지 로딩 시간을 줄이고 사용자의 대기 시간을 최소화했습니다.
    이 프로젝트는 반응형 디자인을 적용하여 모바일, 테블릿 등 다양한 기기에서 최적의 사용자 경험을 제공합니다.
    사용자가 어떤 기기를 사용하더라도 일관된 인터페이스와 사용 편의성을 유지할 수 있도록 노력했습니다.
    이 프로젝트를 통해 컴포넌트와 상태관리 패턴을 이해하고 활용하는 능력을 키웠습니다.
    또한, 외부 API를 효과적으로 활용하여 데이터를 수집하고 화면에 표시하는 방법을 배웠습니다.
    이러한 경험을 바탕으로 앞으로의 프로젝트에서도 더 나은 모습으로 개발에 임하겠습니다.`,
    tools: ['TypeScript', 'Parcel', 'Vercel', '반응형'],
    site: 'https://movie-ten-iota.vercel.app/#/',
    gitURL: 'https://github.com/wonmijin/MOVIE',
  },

  {
    id: 1,
    images: [
      'pokemon_01.png', 
      'pokemon_02.png',
    ],
    title: 'Pokemon 도감',
    participation: '개인 프로젝트',
    mainContent: `이 프로젝트는 TypeScript와 API fetch를 학습하기 위해 만든 포켓몬 도감 사이트입니다. Poke API를 통해 포켓몬 정보를 가져오며, 각 포켓몬 도감을 클릭하면 해당 포켓몬의 상세 페이지로 이동하여 상세 정보와 능력치를 확인할 수 있습니다. 포켓몬은 속성에 맞게 색상이 부여되며, 세 가지 타입의 이미지를 볼 수 있습니다.
    
    이 프로젝트는 TypeScript로 만든 첫 번째 프로젝트로, 기초적인 기능을 간단하게 구현하는 것에 중점을 두었습니다. 현재는 기본적인 기능만 제공하고 있지만, Poke API를 활용하여 더욱 흥미로운 프로젝트로 발전시킬 수 있을 것 같습니다. 예를 들어, 검색 기능과 속성에 따른 포켓몬 필터링 기능을 추가하여 사용자 경험을 향상시킬 계획입니다. 이러한 기능들을 추가하여 새로운 프로젝트로 확장해보고 싶습니다.`,
    tools: ['TypeScript', 'React', 'Vercel', 'Styled-Components', 'Axios', 'Redux'],
    site: 'https://pokemon-weld-pi.vercel.app/',
    gitURL: 'https://github.com/wonmijin/Pokemon',
  },

  {
    id: 0,
    images: [
      'ipad_01.png',
      'ipad_02.png',
      'ipad_03.png',
      'ipad_04.png',
    ],
    title: "ApplePad",
    participation: '개인 프로젝트',
    mainContent: `ApplePad는 반응형 레이아웃을 구현하기 위한 클론코딩 프로젝트입니다.
    이 프로젝트에서는 Apple 사이트에서 볼 수 있는 기능들을 구현하였습니다.
    Sprite Image와 Keyframes를 활용하여 애니메이션을 구현했습니다.
    이를 통해 화면 전환 및 요소의 동적인 변화를 부드럽게 표현할 수 있었습니다.
    또한, JavaScript의 Intersection Observer 기능을 활용하여 요소의 가시성을 관찰하는 개념을 정리하고 적용했습니다.
    이를 통해 사용자가 화면을 스크롤할 때 필요한 요소들이 동적으로 로드되어 성능을 최적화하고 사용자 경험을 향상시켰습니다.
    이 프로젝트를 통해 반응형 디자인 및 다양한 웹 개발 기술들을 익히고 응용함으로써 웹 애플리케이션 개발에 대한 실력을 향상시켰습니다.`,
    tools: ['Javascript', 'Vercel', '반응형'],
    site: 'https://i-pad-project.vercel.app/',
    gitURL: 'https://github.com/wonmijin/iPad-Project',
  },
];
