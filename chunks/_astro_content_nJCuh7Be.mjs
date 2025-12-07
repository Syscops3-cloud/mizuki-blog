import { A as AstroError, L as LiveContentConfigError, p as AstroUserError, o as objectType, k as dateType, j as arrayType, s as stringType, U as UnknownContentCollectionError, c as createComponent, R as RenderUndefinedEntryError, u as unescapeHTML, d as renderTemplate, q as escape, t as renderUniqueStylesheet, v as renderScriptElement, w as createHeadAndContent, e as renderComponent } from './astro/server_CFIJpBV_.mjs';

var I18nKey = /* @__PURE__ */ ((I18nKey2) => {
  I18nKey2["home"] = "home";
  I18nKey2["about"] = "about";
  I18nKey2["archive"] = "archive";
  I18nKey2["search"] = "search";
  I18nKey2["other"] = "other";
  I18nKey2["navLinks"] = "navLinks";
  I18nKey2["navMy"] = "navMy";
  I18nKey2["navAbout"] = "navAbout";
  I18nKey2["navOthers"] = "navOthers";
  I18nKey2["tags"] = "tags";
  I18nKey2["categories"] = "categories";
  I18nKey2["recentPosts"] = "recentPosts";
  I18nKey2["postList"] = "postList";
  I18nKey2["tableOfContents"] = "tableOfContents";
  I18nKey2["announcement"] = "announcement";
  I18nKey2["announcementClose"] = "announcementClose";
  I18nKey2["comments"] = "comments";
  I18nKey2["untitled"] = "untitled";
  I18nKey2["uncategorized"] = "uncategorized";
  I18nKey2["noTags"] = "noTags";
  I18nKey2["wordCount"] = "wordCount";
  I18nKey2["wordsCount"] = "wordsCount";
  I18nKey2["minuteCount"] = "minuteCount";
  I18nKey2["minutesCount"] = "minutesCount";
  I18nKey2["postCount"] = "postCount";
  I18nKey2["postsCount"] = "postsCount";
  I18nKey2["themeColor"] = "themeColor";
  I18nKey2["lightMode"] = "lightMode";
  I18nKey2["darkMode"] = "darkMode";
  I18nKey2["systemMode"] = "systemMode";
  I18nKey2["more"] = "more";
  I18nKey2["author"] = "author";
  I18nKey2["publishedAt"] = "publishedAt";
  I18nKey2["license"] = "license";
  I18nKey2["friends"] = "friends";
  I18nKey2["friendsSubtitle"] = "friendsSubtitle";
  I18nKey2["friendsSearchPlaceholder"] = "friendsSearchPlaceholder";
  I18nKey2["friendsFilterAll"] = "friendsFilterAll";
  I18nKey2["friendsNoResults"] = "friendsNoResults";
  I18nKey2["friendsVisit"] = "friendsVisit";
  I18nKey2["friendsCopyLink"] = "friendsCopyLink";
  I18nKey2["friendsCopySuccess"] = "friendsCopySuccess";
  I18nKey2["friendsTags"] = "friendsTags";
  I18nKey2["anime"] = "anime";
  I18nKey2["diary"] = "diary";
  I18nKey2["gallery"] = "gallery";
  I18nKey2["animeTitle"] = "animeTitle";
  I18nKey2["animeSubtitle"] = "animeSubtitle";
  I18nKey2["animeStatusWatching"] = "animeStatusWatching";
  I18nKey2["animeStatusCompleted"] = "animeStatusCompleted";
  I18nKey2["animeStatusPlanned"] = "animeStatusPlanned";
  I18nKey2["animeStatusOnHold"] = "animeStatusOnHold";
  I18nKey2["animeStatusDropped"] = "animeStatusDropped";
  I18nKey2["animeFilterAll"] = "animeFilterAll";
  I18nKey2["animeYear"] = "animeYear";
  I18nKey2["animeStudio"] = "animeStudio";
  I18nKey2["animeEmpty"] = "animeEmpty";
  I18nKey2["animeEmptyBangumi"] = "animeEmptyBangumi";
  I18nKey2["animeEmptyLocal"] = "animeEmptyLocal";
  I18nKey2["diarySubtitle"] = "diarySubtitle";
  I18nKey2["diaryCount"] = "diaryCount";
  I18nKey2["diaryReply"] = "diaryReply";
  I18nKey2["diaryTips"] = "diaryTips";
  I18nKey2["diaryMinutesAgo"] = "diaryMinutesAgo";
  I18nKey2["diaryHoursAgo"] = "diaryHoursAgo";
  I18nKey2["diaryDaysAgo"] = "diaryDaysAgo";
  I18nKey2["notFound"] = "notFound";
  I18nKey2["notFoundTitle"] = "notFoundTitle";
  I18nKey2["notFoundDescription"] = "notFoundDescription";
  I18nKey2["backToHome"] = "backToHome";
  I18nKey2["playlist"] = "playlist";
  I18nKey2["albums"] = "albums";
  I18nKey2["albumsSubtitle"] = "albumsSubtitle";
  I18nKey2["albumsEmpty"] = "albumsEmpty";
  I18nKey2["albumsEmptyDesc"] = "albumsEmptyDesc";
  I18nKey2["albumsBackToList"] = "albumsBackToList";
  I18nKey2["albumsPhotoCount"] = "albumsPhotoCount";
  I18nKey2["albumsPhotosCount"] = "albumsPhotosCount";
  I18nKey2["devices"] = "devices";
  I18nKey2["devicesSubtitle"] = "devicesSubtitle";
  I18nKey2["projects"] = "projects";
  I18nKey2["projectsSubtitle"] = "projectsSubtitle";
  I18nKey2["projectsAll"] = "projectsAll";
  I18nKey2["projectsWeb"] = "projectsWeb";
  I18nKey2["projectsMobile"] = "projectsMobile";
  I18nKey2["projectsDesktop"] = "projectsDesktop";
  I18nKey2["projectsOther"] = "projectsOther";
  I18nKey2["projectTechStack"] = "projectTechStack";
  I18nKey2["projectLiveDemo"] = "projectLiveDemo";
  I18nKey2["projectSourceCode"] = "projectSourceCode";
  I18nKey2["projectDescription"] = "projectDescription";
  I18nKey2["projectStatus"] = "projectStatus";
  I18nKey2["projectStatusCompleted"] = "projectStatusCompleted";
  I18nKey2["projectStatusInProgress"] = "projectStatusInProgress";
  I18nKey2["projectStatusPlanned"] = "projectStatusPlanned";
  I18nKey2["projectsTotal"] = "projectsTotal";
  I18nKey2["projectsCompleted"] = "projectsCompleted";
  I18nKey2["projectsInProgress"] = "projectsInProgress";
  I18nKey2["projectsTechStack"] = "projectsTechStack";
  I18nKey2["projectsFeatured"] = "projectsFeatured";
  I18nKey2["projectsPlanned"] = "projectsPlanned";
  I18nKey2["projectsDemo"] = "projectsDemo";
  I18nKey2["projectsSource"] = "projectsSource";
  I18nKey2["projectsVisit"] = "projectsVisit";
  I18nKey2["projectsGitHub"] = "projectsGitHub";
  I18nKey2["skills"] = "skills";
  I18nKey2["skillsSubtitle"] = "skillsSubtitle";
  I18nKey2["skillsFrontend"] = "skillsFrontend";
  I18nKey2["skillsBackend"] = "skillsBackend";
  I18nKey2["skillsDatabase"] = "skillsDatabase";
  I18nKey2["skillsTools"] = "skillsTools";
  I18nKey2["skillsOther"] = "skillsOther";
  I18nKey2["skillLevel"] = "skillLevel";
  I18nKey2["skillLevelBeginner"] = "skillLevelBeginner";
  I18nKey2["skillLevelIntermediate"] = "skillLevelIntermediate";
  I18nKey2["skillLevelAdvanced"] = "skillLevelAdvanced";
  I18nKey2["skillLevelExpert"] = "skillLevelExpert";
  I18nKey2["skillExperience"] = "skillExperience";
  I18nKey2["skillYears"] = "skillYears";
  I18nKey2["skillMonths"] = "skillMonths";
  I18nKey2["skillsTotal"] = "skillsTotal";
  I18nKey2["skillsExpert"] = "skillsExpert";
  I18nKey2["skillsAdvanced"] = "skillsAdvanced";
  I18nKey2["skillsIntermediate"] = "skillsIntermediate";
  I18nKey2["skillsBeginner"] = "skillsBeginner";
  I18nKey2["skillsAdvancedTitle"] = "skillsAdvancedTitle";
  I18nKey2["skillsProjects"] = "skillsProjects";
  I18nKey2["skillsDistribution"] = "skillsDistribution";
  I18nKey2["skillsByLevel"] = "skillsByLevel";
  I18nKey2["skillsByCategory"] = "skillsByCategory";
  I18nKey2["noData"] = "noData";
  I18nKey2["timeline"] = "timeline";
  I18nKey2["timelineSubtitle"] = "timelineSubtitle";
  I18nKey2["timelineEducation"] = "timelineEducation";
  I18nKey2["timelineWork"] = "timelineWork";
  I18nKey2["timelineProject"] = "timelineProject";
  I18nKey2["timelineAchievement"] = "timelineAchievement";
  I18nKey2["timelinePresent"] = "timelinePresent";
  I18nKey2["timelineLocation"] = "timelineLocation";
  I18nKey2["timelineDescription"] = "timelineDescription";
  I18nKey2["timelineMonths"] = "timelineMonths";
  I18nKey2["timelineYears"] = "timelineYears";
  I18nKey2["timelineTotal"] = "timelineTotal";
  I18nKey2["timelineProjects"] = "timelineProjects";
  I18nKey2["timelineExperience"] = "timelineExperience";
  I18nKey2["timelineCurrent"] = "timelineCurrent";
  I18nKey2["timelineHistory"] = "timelineHistory";
  I18nKey2["timelineAchievements"] = "timelineAchievements";
  I18nKey2["timelineStartDate"] = "timelineStartDate";
  I18nKey2["timelineDuration"] = "timelineDuration";
  I18nKey2["passwordProtected"] = "passwordProtected";
  I18nKey2["passwordProtectedTitle"] = "passwordProtectedTitle";
  I18nKey2["passwordProtectedDescription"] = "passwordProtectedDescription";
  I18nKey2["passwordPlaceholder"] = "passwordPlaceholder";
  I18nKey2["passwordUnlock"] = "passwordUnlock";
  I18nKey2["passwordUnlocking"] = "passwordUnlocking";
  I18nKey2["passwordIncorrect"] = "passwordIncorrect";
  I18nKey2["passwordDecryptError"] = "passwordDecryptError";
  I18nKey2["passwordRequired"] = "passwordRequired";
  I18nKey2["passwordVerifying"] = "passwordVerifying";
  I18nKey2["passwordDecryptFailed"] = "passwordDecryptFailed";
  I18nKey2["passwordDecryptRetry"] = "passwordDecryptRetry";
  I18nKey2["passwordUnlockButton"] = "passwordUnlockButton";
  I18nKey2["copyFailed"] = "copyFailed";
  I18nKey2["syntaxHighlightFailed"] = "syntaxHighlightFailed";
  I18nKey2["autoSyntaxHighlightFailed"] = "autoSyntaxHighlightFailed";
  I18nKey2["decryptionError"] = "decryptionError";
  I18nKey2["lastModifiedPrefix"] = "lastModifiedPrefix";
  I18nKey2["lastModifiedOutdated"] = "lastModifiedOutdated";
  I18nKey2["year"] = "year";
  I18nKey2["month"] = "month";
  I18nKey2["day"] = "day";
  I18nKey2["hour"] = "hour";
  I18nKey2["minute"] = "minute";
  I18nKey2["second"] = "second";
  I18nKey2["rss"] = "rss";
  I18nKey2["rssDescription"] = "rssDescription";
  I18nKey2["rssSubtitle"] = "rssSubtitle";
  I18nKey2["rssLink"] = "rssLink";
  I18nKey2["rssCopyToReader"] = "rssCopyToReader";
  I18nKey2["rssCopyLink"] = "rssCopyLink";
  I18nKey2["rssLatestPosts"] = "rssLatestPosts";
  I18nKey2["rssWhatIsRSS"] = "rssWhatIsRSS";
  I18nKey2["rssWhatIsRSSDescription"] = "rssWhatIsRSSDescription";
  I18nKey2["rssBenefit1"] = "rssBenefit1";
  I18nKey2["rssBenefit2"] = "rssBenefit2";
  I18nKey2["rssBenefit3"] = "rssBenefit3";
  I18nKey2["rssBenefit4"] = "rssBenefit4";
  I18nKey2["rssHowToUse"] = "rssHowToUse";
  I18nKey2["rssCopied"] = "rssCopied";
  I18nKey2["rssCopyFailed"] = "rssCopyFailed";
  I18nKey2["atom"] = "atom";
  I18nKey2["atomDescription"] = "atomDescription";
  I18nKey2["atomSubtitle"] = "atomSubtitle";
  I18nKey2["atomLink"] = "atomLink";
  I18nKey2["atomCopyToReader"] = "atomCopyToReader";
  I18nKey2["atomCopyLink"] = "atomCopyLink";
  I18nKey2["atomLatestPosts"] = "atomLatestPosts";
  I18nKey2["atomWhatIsAtom"] = "atomWhatIsAtom";
  I18nKey2["atomWhatIsAtomDescription"] = "atomWhatIsAtomDescription";
  I18nKey2["atomBenefit1"] = "atomBenefit1";
  I18nKey2["atomBenefit2"] = "atomBenefit2";
  I18nKey2["atomBenefit3"] = "atomBenefit3";
  I18nKey2["atomBenefit4"] = "atomBenefit4";
  I18nKey2["atomHowToUse"] = "atomHowToUse";
  I18nKey2["atomCopied"] = "atomCopied";
  I18nKey2["atomCopyFailed"] = "atomCopyFailed";
  I18nKey2["wallpaperBanner"] = "wallpaperBanner";
  I18nKey2["wallpaperFullscreen"] = "wallpaperFullscreen";
  I18nKey2["wallpaperNone"] = "wallpaperNone";
  I18nKey2["siteStats"] = "siteStats";
  I18nKey2["siteStatsPostCount"] = "siteStatsPostCount";
  I18nKey2["siteStatsCategoryCount"] = "siteStatsCategoryCount";
  I18nKey2["siteStatsTagCount"] = "siteStatsTagCount";
  I18nKey2["siteStatsTotalWords"] = "siteStatsTotalWords";
  I18nKey2["siteStatsRunningDays"] = "siteStatsRunningDays";
  I18nKey2["siteStatsLastUpdate"] = "siteStatsLastUpdate";
  I18nKey2["siteStatsDaysAgo"] = "siteStatsDaysAgo";
  I18nKey2["siteStatsDays"] = "siteStatsDays";
  I18nKey2["calendarSunday"] = "calendarSunday";
  I18nKey2["calendarMonday"] = "calendarMonday";
  I18nKey2["calendarTuesday"] = "calendarTuesday";
  I18nKey2["calendarWednesday"] = "calendarWednesday";
  I18nKey2["calendarThursday"] = "calendarThursday";
  I18nKey2["calendarFriday"] = "calendarFriday";
  I18nKey2["calendarSaturday"] = "calendarSaturday";
  I18nKey2["calendarJanuary"] = "calendarJanuary";
  I18nKey2["calendarFebruary"] = "calendarFebruary";
  I18nKey2["calendarMarch"] = "calendarMarch";
  I18nKey2["calendarApril"] = "calendarApril";
  I18nKey2["calendarMay"] = "calendarMay";
  I18nKey2["calendarJune"] = "calendarJune";
  I18nKey2["calendarJuly"] = "calendarJuly";
  I18nKey2["calendarAugust"] = "calendarAugust";
  I18nKey2["calendarSeptember"] = "calendarSeptember";
  I18nKey2["calendarOctober"] = "calendarOctober";
  I18nKey2["calendarNovember"] = "calendarNovember";
  I18nKey2["calendarDecember"] = "calendarDecember";
  return I18nKey2;
})(I18nKey || {});

const i18nKey = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: I18nKey
}, Symbol.toStringTag, { value: 'Module' }));

var LinkPreset = /* @__PURE__ */ ((LinkPreset2) => {
  LinkPreset2[LinkPreset2["Home"] = 0] = "Home";
  LinkPreset2[LinkPreset2["Archive"] = 1] = "Archive";
  LinkPreset2[LinkPreset2["About"] = 2] = "About";
  LinkPreset2[LinkPreset2["Friends"] = 3] = "Friends";
  LinkPreset2[LinkPreset2["Anime"] = 4] = "Anime";
  LinkPreset2[LinkPreset2["Diary"] = 5] = "Diary";
  LinkPreset2[LinkPreset2["Gallery"] = 6] = "Gallery";
  LinkPreset2[LinkPreset2["Projects"] = 7] = "Projects";
  LinkPreset2[LinkPreset2["Skills"] = 8] = "Skills";
  LinkPreset2[LinkPreset2["Timeline"] = 9] = "Timeline";
  return LinkPreset2;
})(LinkPreset || {});

const config$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	LinkPreset
}, Symbol.toStringTag, { value: 'Module' }));

const SITE_LANG = "en";
const SITE_TIMEZONE = 8;
const siteConfig = {
  title: "CatCopEzzz",
  subtitle: "My blog",
  // 替换原有的 siteURL 设置
  siteStartDate: "2025-12-07",
  // 站点开始运行日期，用于站点统计组件计算运行天数
  timeZone: SITE_TIMEZONE,
  lang: SITE_LANG,
  themeColor: {
    hue: 230},
  // 顶栏标题配置
  navbarTitle: {
    // 顶栏标题文本
    text: "MizukiUI",
    // 顶栏标题图标路径，默认使用 public/assets/home/home.png
    icon: "assets/home/home.png"
  },
  anime: {
    mode: "local"
    // 番剧页面模式："bangumi" 使用Bangumi API，"local" 使用本地配置
  },
  // 文章列表布局配置
  postListLayout: {
    // 默认布局模式："list" 列表模式（单列布局），"grid" 网格模式（双列布局）
    // 注意：如果侧边栏配置启用了"both"双侧边栏，则无法使用文章列表"grid"网格（双列）布局
    defaultMode: "list"},
  // 壁纸模式配置
  wallpaperMode: {
    // 默认壁纸模式：banner=顶部横幅，fullscreen=全屏壁纸，none=无壁纸
    defaultMode: "banner"},
  banner: {
    // 支持单张图片或图片数组，当数组长度 > 1 时自动启用轮播
    src: {
      desktop: [
        "/assets/desktop-banner/1.webp",
        "/assets/desktop-banner/2.webp",
        "/assets/desktop-banner/3.webp",
        "/assets/desktop-banner/4.webp",
        "/assets/desktop-banner/5.webp",
        "/assets/desktop-banner/6.webp"
      ],
      // 桌面横幅图片
      mobile: [
        "/assets/mobile-banner/1.webp",
        "/assets/mobile-banner/2.webp",
        "/assets/mobile-banner/3.webp",
        "/assets/mobile-banner/4.webp",
        "/assets/mobile-banner/5.webp",
        "/assets/mobile-banner/6.webp"
      ]
      // 移动横幅图片
    },
    // 使用本地横幅图片
    position: "center",
    // 这里需要使用PicFlow API的Text返回类型,所以我们需要format=text参数
    // 项目地址:https://github.com/matsuzaka-yuki/PicFlow-API
    // 请自行搭建API
    homeText: {
      // 在主页显示自定义文本
      title: "美しいミズキ",
      // 主页横幅主标题
      subtitle: [
        "特別なことはないけど、君がいると十分です",
        "今でもあなたは私の光",
        "君ってさ、知らないうちに私の毎日になってたよ",
        "君と話すと、なんか毎日がちょっと楽しくなるんだ",
        "今日はなんでもない日。でも、ちょっとだけいい日"
      ],
      typewriter: {
        // 启用副标题打字机效果
        speed: 100,
        // 打字速度（毫秒）
        deleteSpeed: 50,
        // 删除速度（毫秒）
        pauseTime: 2e3
        // 完全显示后的暂停时间（毫秒）
      }
    },
    credit: {
      enable: false},
    navbar: {
      transparentMode: "semifull"
      // 导航栏透明模式："semi" 半透明加圆角，"full" 完全透明，"semifull" 动态透明
    }
  },
  toc: {
    enable: true,
    // 启用目录功能
    depth: 2,
    // 目录深度，1-6，1 表示只显示 h1 标题，2 表示显示 h1 和 h2 标题，依此类推
    useJapaneseBadge: true
    // 使用日语假名标记（あいうえお...）代替数字，开启后会将 1、2、3... 改为 あ、い、う...
  },
  // 启用生成OpenGraph图片功能,注意开启后要渲染很长时间，不建议本地调试的时候开启
  favicon: [
    // 留空以使用默认 favicon
    // {
    //   src: '/favicon/icon.png',    // 图标文件路径
    //   theme: 'light',              // 可选，指定主题 'light' | 'dark'
    //   sizes: '32x32',              // 可选，图标大小
    // }
  ],
  // 字体配置
  font: {
    // 注意：自定义字体需要在 src/styles/main.css 中引入字体文件
    // 注意：字体子集优化功能目前仅支持 TTF 格式字体,开启后需要在生产环境才能看到效果,在Dev环境下显示的是浏览器默认字体!
    asciiFont: {
      // 英文字体 - 优先级最高
      // 指定为英文字体则无论字体包含多大范围，都只会保留 ASCII 字符子集
      fontFamily: "ZenMaruGothic-Medium"},
    cjkFont: {
      // 中日韩字体 - 作为回退字体
      fontFamily: "萝莉体 第二版"}
  }};
const fullscreenWallpaperConfig = {
  src: {
    desktop: [
      "/assets/desktop-banner/1.webp",
      "/assets/desktop-banner/2.webp",
      "/assets/desktop-banner/3.webp",
      "/assets/desktop-banner/4.webp",
      "/assets/desktop-banner/5.webp",
      "/assets/desktop-banner/6.webp"
    ],
    // 桌面横幅图片
    mobile: [
      "/assets/mobile-banner/1.webp",
      "/assets/mobile-banner/2.webp",
      "/assets/mobile-banner/3.webp",
      "/assets/mobile-banner/4.webp",
      "/assets/mobile-banner/5.webp",
      "/assets/mobile-banner/6.webp"
    ]
    // 移动横幅图片
  },
  // 使用本地横幅图片
  position: "center",
  // 壁纸位置，等同于 object-position
  carousel: {
    enable: true,
    // 启用轮播
    interval: 5
    // 轮播间隔时间（秒）
  },
  zIndex: -1,
  // 层级，确保壁纸在背景层
  opacity: 0.8,
  // 壁纸透明度
  blur: 1
  // 背景模糊程度
};
const navBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    // 支持自定义导航栏链接,并且支持多级菜单,3.1版本新加
    {
      name: "Links",
      url: "/links/",
      icon: "material-symbols:link",
      children: [
        {
          name: "GitHub",
          url: "https://github.com/matsuzaka-yuki/Mizuki",
          external: true,
          icon: "fa6-brands:github"
        },
        {
          name: "Bilibili",
          url: "https://space.bilibili.com/701864046",
          external: true,
          icon: "fa6-brands:bilibili"
        },
        {
          name: "Gitee",
          url: "https://gitee.com/matsuzakayuki/Mizuki",
          external: true,
          icon: "mdi:git"
        }
      ]
    },
    {
      name: "My",
      url: "/content/",
      icon: "material-symbols:person",
      children: [
        {
          name: "Anime",
          url: "/anime/",
          icon: "material-symbols:movie"
        },
        {
          name: "Diary",
          url: "/diary/",
          icon: "material-symbols:book"
        },
        {
          name: "Gallery",
          url: "/albums/",
          icon: "material-symbols:photo-library"
        },
        {
          name: "Devices",
          url: "devices/",
          icon: "material-symbols:devices",
          external: false
        }
      ]
    },
    {
      name: "About",
      url: "/content/",
      icon: "material-symbols:info",
      children: [
        {
          name: "About",
          url: "/about/",
          icon: "material-symbols:person"
        },
        {
          name: "Friends",
          url: "/friends/",
          icon: "material-symbols:group"
        }
      ]
    },
    {
      name: "Others",
      url: "#",
      icon: "material-symbols:more-horiz",
      children: [
        {
          name: "Projects",
          url: "/projects/",
          icon: "material-symbols:work"
        },
        {
          name: "Skills",
          url: "/skills/",
          icon: "material-symbols:psychology"
        },
        {
          name: "Timeline",
          url: "/timeline/",
          icon: "material-symbols:timeline"
        }
      ]
    }
  ]
};
const profileConfig = {
  avatar: "assets/images/avatar.webp",
  // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
  name: "Matsuzaka Yuki",
  bio: "The world is big, you have to go and see",
  typewriter: {
    // 启用个人简介打字机效果
    speed: 80
    // 打字速度（毫秒）
  },
  links: [
    {
      name: "Bilibli",
      icon: "fa6-brands:bilibili",
      url: "https://space.bilibili.com/701864046"
    },
    {
      name: "Gitee",
      icon: "mdi:git",
      url: "https://gitee.com/matsuzakayuki"
    },
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/matsuzaka-yuki"
    },
    {
      name: "Codeberg",
      icon: "simple-icons:codeberg",
      url: "https://codeberg.org"
    },
    {
      name: "Discord",
      icon: "fa6-brands:discord",
      url: "https://discord.gg/MqW6TcQtVM"
    }
  ]
};
const licenseConfig = {
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
};
const commentConfig = {
  enable: false,
  // 启用评论功能。当设置为 false 时，评论组件将不会显示在文章区域。
  twikoo: {
    envId: "https://twikoo.vercel.app",
    lang: "en"
    // 设置 Twikoo 评论系统语言为英文
  }
};
const announcementConfig = {
  title: "Announcement",
  // 公告标题
  content: "Welcome to my blog! This is a sample announcement.",
  // 允许用户关闭公告
  link: {
    enable: true,
    // 启用链接
    text: "Learn More",
    // 链接文本
    url: "/about/",
    // 链接 URL
    external: false
    // 内部链接
  }
};
const sidebarLayoutConfig = {
  // 侧边栏位置：单侧(unilateral)或双侧(both)
  position: "both",
  // 侧边栏组件配置列表
  components: [
    {
      // 组件类型：用户资料组件
      type: "profile",
      // 是否启用该组件
      enable: true,
      // 组件显示顺序（数字越小越靠前）
      order: 1,
      // 组件位置："top" 表示固定在顶部
      position: "top",
      // 所在侧边栏
      sidebar: "left",
      // CSS 类名，用于应用样式和动画
      class: "onload-animation",
      // 动画延迟时间（毫秒），用于错开动画效果
      animationDelay: 0
    },
    {
      // 组件类型：公告组件
      type: "announcement",
      // 是否启用该组件（现在通过统一配置控制）
      enable: true,
      // 组件显示顺序
      order: 2,
      // 组件位置："top" 表示固定在顶部
      position: "top",
      // 所在侧边栏
      sidebar: "left",
      // CSS 类名
      class: "onload-animation",
      // 动画延迟时间
      animationDelay: 50
    },
    {
      // 组件类型：分类组件
      type: "categories",
      // 是否启用该组件
      enable: true,
      // 组件显示顺序
      order: 3,
      // 组件位置："sticky" 表示粘性定位，可滚动
      position: "sticky",
      // 所在侧边栏
      sidebar: "left",
      // CSS 类名
      class: "onload-animation",
      // 动画延迟时间
      animationDelay: 150,
      // 响应式配置
      responsive: {
        // 折叠阈值：当分类数量超过5个时自动折叠
        collapseThreshold: 5
      }
    },
    {
      // 组件类型：标签组件
      type: "tags",
      // 是否启用该组件
      enable: true,
      // 组件显示顺序
      order: 5,
      // 组件位置："sticky" 表示粘性定位
      position: "top",
      // 所在侧边栏
      sidebar: "left",
      // CSS 类名
      class: "onload-animation",
      // 动画延迟时间
      animationDelay: 250,
      // 响应式配置
      responsive: {
        // 折叠阈值：当标签数量超过20个时自动折叠
        collapseThreshold: 20
      }
    },
    {
      // 组件类型：站点统计组件
      type: "site-stats",
      // 是否启用该组件
      enable: true,
      // 组件显示顺序
      order: 5,
      // 组件位置
      position: "top",
      // 所在侧边栏
      sidebar: "right",
      // CSS 类名
      class: "onload-animation",
      // 动画延迟时间
      animationDelay: 200
    },
    {
      // 组件类型：日历组件(移动端不显示)
      type: "calendar",
      // 是否启用该组件
      enable: true,
      // 组件显示顺序
      order: 6,
      // 组件位置
      position: "top",
      // 所在侧边栏
      sidebar: "right",
      // CSS 类名
      class: "onload-animation",
      // 动画延迟时间
      animationDelay: 250
    }
  ],
  // 默认动画配置
  defaultAnimation: {
    // 是否启用默认动画
    enable: true,
    // 基础延迟时间（毫秒）
    baseDelay: 0,
    // 递增延迟时间（毫秒），每个组件依次增加的延迟
    increment: 50
  },
  // 响应式布局配置
  responsive: {
    // 断点配置（像素值）
    breakpoints: {
      // 移动端断点：屏幕宽度小于768px
      mobile: 768,
      // 平板端断点：屏幕宽度小于1280px
      tablet: 1280,
      // 桌面端断点：屏幕宽度小于1280px
      desktop: 1280
    },
    // 不同设备的布局模式
    //hidden:不显示侧边栏(桌面端)   drawer:抽屉模式(移动端不显示)   sidebar:显示侧边栏
    layout: {
      // 移动端：抽屉模式
      mobile: "sidebar",
      // 平板端：显示侧边栏
      tablet: "sidebar",
      // 桌面端：显示侧边栏
      desktop: "sidebar"
    }
  }
};
const pioConfig = {
  // 默认模型路径
  position: "left",
  // 默认位置在右侧
  width: 280,
  // 默认宽度
  height: 250};
const umamiConfig = {
  // Umami Cloud API地址
  scripts: `
<script defer src="XXXX.XXX" data-website-id="ABCD1234"></script>
  `.trim()
  // 上面填你要插入的Script,不用再去Layout中插入
};

const config = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	announcementConfig,
	commentConfig,
	fullscreenWallpaperConfig,
	licenseConfig,
	navBarConfig,
	pioConfig,
	profileConfig,
	sidebarLayoutConfig,
	siteConfig,
	umamiConfig
}, Symbol.toStringTag, { value: 'Module' }));

const en = {
  [I18nKey.home]: "Home",
  [I18nKey.about]: "About",
  [I18nKey.archive]: "Archive",
  [I18nKey.search]: "Search",
  [I18nKey.other]: "Other",
  // Navigation bar titles
  [I18nKey.navLinks]: "Links",
  [I18nKey.navMy]: "My",
  [I18nKey.navAbout]: "About",
  [I18nKey.navOthers]: "Others",
  [I18nKey.tags]: "Tags",
  [I18nKey.categories]: "Categories",
  [I18nKey.recentPosts]: "Recent Posts",
  [I18nKey.postList]: "Post List",
  [I18nKey.tableOfContents]: "Table of Contents",
  // Announcement
  [I18nKey.announcement]: "Announcement",
  [I18nKey.announcementClose]: "Close",
  [I18nKey.comments]: "Comments",
  [I18nKey.friends]: "Friends",
  [I18nKey.friendsSubtitle]: "Discover more excellent websites",
  [I18nKey.friendsSearchPlaceholder]: "Search friend name or description...",
  [I18nKey.friendsFilterAll]: "All",
  [I18nKey.friendsNoResults]: "No matching friends found",
  [I18nKey.friendsVisit]: "Visit",
  [I18nKey.friendsCopyLink]: "Copy Link",
  [I18nKey.friendsCopySuccess]: "Copied",
  [I18nKey.friendsTags]: "Tags",
  [I18nKey.untitled]: "Untitled",
  [I18nKey.uncategorized]: "Uncategorized",
  [I18nKey.noTags]: "No Tags",
  [I18nKey.wordCount]: "word",
  [I18nKey.wordsCount]: "words",
  [I18nKey.minuteCount]: "minute",
  [I18nKey.minutesCount]: "minutes",
  [I18nKey.postCount]: "post",
  [I18nKey.postsCount]: "posts",
  [I18nKey.themeColor]: "Theme Color",
  [I18nKey.lightMode]: "Light",
  [I18nKey.darkMode]: "Dark",
  [I18nKey.systemMode]: "System",
  [I18nKey.more]: "More",
  [I18nKey.author]: "Author",
  [I18nKey.publishedAt]: "Published at",
  [I18nKey.license]: "License",
  [I18nKey.anime]: "Anime",
  [I18nKey.diary]: "Diary",
  [I18nKey.gallery]: "Gallery",
  // Anime Page
  [I18nKey.animeTitle]: "My Anime List",
  [I18nKey.animeSubtitle]: "Record my anime journey",
  [I18nKey.animeStatusWatching]: "Watching",
  [I18nKey.animeStatusCompleted]: "Completed",
  [I18nKey.animeStatusPlanned]: "Planned",
  [I18nKey.animeStatusOnHold]: "On Hold",
  [I18nKey.animeStatusDropped]: "Dropped",
  [I18nKey.animeFilterAll]: "All",
  [I18nKey.animeYear]: "Year",
  [I18nKey.animeStudio]: "Studio",
  [I18nKey.animeEmpty]: "No anime data",
  [I18nKey.animeEmptyBangumi]: "Please check Bangumi configuration or network connection",
  [I18nKey.animeEmptyLocal]: "Please add anime information in src/data/anime.ts file",
  // Diary Page
  [I18nKey.diarySubtitle]: "Share life anytime, anywhere",
  [I18nKey.diaryCount]: "diary entries",
  [I18nKey.diaryReply]: "Reply",
  [I18nKey.diaryTips]: "Only show the latest 30 diary entries",
  [I18nKey.diaryMinutesAgo]: "minutes ago",
  [I18nKey.diaryHoursAgo]: "hours ago",
  [I18nKey.diaryDaysAgo]: "days ago",
  // 404 Page
  [I18nKey.notFound]: "404",
  [I18nKey.notFoundTitle]: "Page Not Found",
  [I18nKey.notFoundDescription]: "Sorry, the page you visited does not exist or has been moved.",
  [I18nKey.backToHome]: "Back to Home",
  // Music Player
  [I18nKey.playlist]: "Playlist",
  // Albums Page
  [I18nKey.albums]: "Albums",
  [I18nKey.albumsSubtitle]: "Record beautiful moments in life",
  [I18nKey.albumsEmpty]: "No content",
  [I18nKey.albumsEmptyDesc]: "No albums have been created yet. Go add some beautiful memories!",
  [I18nKey.albumsBackToList]: "Back to Albums",
  // Devices Page
  [I18nKey.devices]: "My Devices",
  [I18nKey.devicesSubtitle]: "Here are the devices I use in my daily life",
  [I18nKey.albumsPhotoCount]: "photo",
  [I18nKey.albumsPhotosCount]: "photos",
  // Projects Page
  [I18nKey.projects]: "Projects",
  [I18nKey.projectsSubtitle]: "My development project portfolio",
  [I18nKey.projectsAll]: "All",
  [I18nKey.projectsWeb]: "Web Applications",
  [I18nKey.projectsMobile]: "Mobile Applications",
  [I18nKey.projectsDesktop]: "Desktop Applications",
  [I18nKey.projectsOther]: "Other",
  [I18nKey.projectTechStack]: "Tech Stack",
  [I18nKey.projectLiveDemo]: "Live Demo",
  [I18nKey.projectSourceCode]: "Source Code",
  [I18nKey.projectDescription]: "Project Description",
  [I18nKey.projectStatus]: "Status",
  [I18nKey.projectStatusCompleted]: "Completed",
  [I18nKey.projectStatusInProgress]: "In Progress",
  [I18nKey.projectStatusPlanned]: "Planned",
  [I18nKey.projectsTotal]: "Total Projects",
  [I18nKey.projectsCompleted]: "Completed",
  [I18nKey.projectsInProgress]: "In Progress",
  [I18nKey.projectsTechStack]: "Tech Stack Statistics",
  [I18nKey.projectsFeatured]: "Featured Projects",
  [I18nKey.projectsPlanned]: "Planned",
  [I18nKey.projectsDemo]: "Live Demo",
  [I18nKey.projectsSource]: "Source Code",
  [I18nKey.projectsVisit]: "Visit Project",
  [I18nKey.projectsGitHub]: "GitHub",
  // RSS Page
  [I18nKey.rss]: "RSS Feed",
  [I18nKey.rssDescription]: "Subscribe to get latest updates",
  [I18nKey.rssSubtitle]: "Subscribe via RSS to get the latest articles and updates imediately",
  [I18nKey.rssLink]: "RSS Link",
  [I18nKey.rssCopyToReader]: "Copy link to your RSS reader",
  [I18nKey.rssCopyLink]: "Copy",
  [I18nKey.rssLatestPosts]: "Latest Posts",
  [I18nKey.rssWhatIsRSS]: "What is RSS?",
  [I18nKey.rssWhatIsRSSDescription]: "RSS (Really Simple Syndication) is a standard format for publishing frequently updated content. With RSS, you can:",
  [I18nKey.rssBenefit1]: "Get the latest website content in time without manually visiting",
  [I18nKey.rssBenefit2]: "Manage subscriptions to multiple websites in one place",
  [I18nKey.rssBenefit3]: "Avoid missing important updates and articles",
  [I18nKey.rssBenefit4]: "Enjoy an ad-free, clean reading experience",
  [I18nKey.rssHowToUse]: "It is recommended to use Feedly, Inoreader or other RSS readers to subscribe to this site.",
  [I18nKey.rssCopied]: "RSS link copied to clipboard!",
  [I18nKey.rssCopyFailed]: "Copy failed, please copy the link manually",
  // Atom Page
  [I18nKey.atom]: "Atom Feed",
  [I18nKey.atomDescription]: "Subscribe to get latest updates",
  [I18nKey.atomSubtitle]: "Subscribe via Atom to get the latest articles and updates immediately",
  [I18nKey.atomLink]: "Atom Link",
  [I18nKey.atomCopyToReader]: "Copy link to your Atom reader",
  [I18nKey.atomCopyLink]: "Copy",
  [I18nKey.atomLatestPosts]: "Latest Posts",
  [I18nKey.atomWhatIsAtom]: "What is Atom?",
  [I18nKey.atomWhatIsAtomDescription]: "Atom (Atom Syndication Format) is an XML-based standard for describing feeds and their items. With Atom, you can:",
  [I18nKey.atomBenefit1]: "Get the latest website content in time without manually visiting",
  [I18nKey.atomBenefit2]: "Manage subscriptions to multiple websites in one place",
  [I18nKey.atomBenefit3]: "Avoid missing important updates and articles",
  [I18nKey.atomBenefit4]: "Enjoy an ad-free, clean reading experience",
  [I18nKey.atomHowToUse]: "It is recommended to use Feedly, Inoreader or other Atom readers to subscribe to this site.",
  [I18nKey.atomCopied]: "Atom link copied to clipboard!",
  [I18nKey.atomCopyFailed]: "Copy failed, please copy the link manually",
  // Wallpaper mode
  [I18nKey.wallpaperBanner]: "Banner Mode",
  [I18nKey.wallpaperFullscreen]: "Fullscreen Mode",
  [I18nKey.wallpaperNone]: "Hide Wallpaper",
  // Skills Page
  [I18nKey.skills]: "Skills",
  [I18nKey.skillsSubtitle]: "My technical skills and expertise",
  [I18nKey.skillsFrontend]: "Frontend Development",
  [I18nKey.skillsBackend]: "Backend Development",
  [I18nKey.skillsDatabase]: "Database",
  [I18nKey.skillsTools]: "Development Tools",
  [I18nKey.skillsOther]: "Other Skills",
  [I18nKey.skillLevel]: "Proficiency",
  [I18nKey.skillLevelBeginner]: "Beginner",
  [I18nKey.skillLevelIntermediate]: "Intermediate",
  [I18nKey.skillLevelAdvanced]: "Advanced",
  [I18nKey.skillLevelExpert]: "Expert",
  [I18nKey.skillExperience]: "Experience",
  [I18nKey.skillYears]: "years",
  [I18nKey.skillMonths]: "months",
  [I18nKey.skillsTotal]: "Total Skills",
  [I18nKey.skillsExpert]: "Expert Level",
  [I18nKey.skillsAdvanced]: "Advanced",
  [I18nKey.skillsIntermediate]: "Intermediate",
  [I18nKey.skillsBeginner]: "Beginner",
  [I18nKey.skillsAdvancedTitle]: "Professional Skills",
  [I18nKey.skillsProjects]: "Related Projects",
  [I18nKey.skillsDistribution]: "Skill Distribution",
  [I18nKey.skillsByLevel]: "By Level",
  [I18nKey.skillsByCategory]: "By Category",
  [I18nKey.noData]: "No data",
  // Timeline Page
  [I18nKey.timeline]: "Timeline",
  [I18nKey.timelineSubtitle]: "My growth journey and important milestones",
  [I18nKey.timelineEducation]: "Education",
  [I18nKey.timelineWork]: "Work Experience",
  [I18nKey.timelineProject]: "Project Experience",
  [I18nKey.timelineAchievement]: "Achievements",
  [I18nKey.timelinePresent]: "Present",
  [I18nKey.timelineLocation]: "Location",
  [I18nKey.timelineDescription]: "Detailed Description",
  [I18nKey.timelineMonths]: "months",
  [I18nKey.timelineYears]: "years",
  [I18nKey.timelineTotal]: "Total",
  [I18nKey.timelineProjects]: "Projects",
  [I18nKey.timelineExperience]: "Work Experience",
  [I18nKey.timelineCurrent]: "Current Status",
  [I18nKey.timelineHistory]: "History",
  [I18nKey.timelineAchievements]: "Achievements",
  [I18nKey.timelineStartDate]: "Start Date",
  [I18nKey.timelineDuration]: "Duration",
  // Password Protection
  [I18nKey.passwordProtected]: "Password Protected",
  [I18nKey.passwordProtectedTitle]: "This content is password protected",
  [I18nKey.passwordProtectedDescription]: "Please enter the password to view the protected content",
  [I18nKey.passwordPlaceholder]: "Enter password",
  [I18nKey.passwordUnlock]: "Unlock",
  [I18nKey.passwordUnlocking]: "Unlocking...",
  [I18nKey.passwordIncorrect]: "Incorrect password, please try again",
  [I18nKey.passwordDecryptError]: "Decryption failed, please check if the password is correct",
  [I18nKey.passwordRequired]: "Please enter the password",
  [I18nKey.passwordVerifying]: "Verifying...",
  [I18nKey.passwordDecryptFailed]: "Decryption failed, please check the password",
  [I18nKey.passwordDecryptRetry]: "Decryption failed, please try again",
  [I18nKey.passwordUnlockButton]: "Unlock",
  [I18nKey.copyFailed]: "Copy failed:",
  [I18nKey.syntaxHighlightFailed]: "Syntax highlighting failed:",
  [I18nKey.autoSyntaxHighlightFailed]: "Automatic syntax highlighting also failed:",
  [I18nKey.decryptionError]: "An error occurred during decryption:",
  // Last Modified Time Card
  [I18nKey.lastModifiedPrefix]: "Time since last edit: ",
  [I18nKey.lastModifiedOutdated]: "Some information may be outdated",
  [I18nKey.year]: "y",
  [I18nKey.month]: "m",
  [I18nKey.day]: "d",
  [I18nKey.hour]: "h",
  [I18nKey.minute]: "min",
  [I18nKey.second]: "s",
  // Site Stats
  [I18nKey.siteStats]: "Site Statistics",
  [I18nKey.siteStatsPostCount]: "Posts",
  [I18nKey.siteStatsCategoryCount]: "Categories",
  [I18nKey.siteStatsTagCount]: "Tags",
  [I18nKey.siteStatsTotalWords]: "Total Words",
  [I18nKey.siteStatsRunningDays]: "Running Time",
  [I18nKey.siteStatsLastUpdate]: "Last Activity",
  [I18nKey.siteStatsDaysAgo]: "{days} days ago",
  [I18nKey.siteStatsDays]: "{days} days",
  // Calendar Component
  [I18nKey.calendarSunday]: "Sun",
  [I18nKey.calendarMonday]: "Mon",
  [I18nKey.calendarTuesday]: "Tue",
  [I18nKey.calendarWednesday]: "Wed",
  [I18nKey.calendarThursday]: "Thu",
  [I18nKey.calendarFriday]: "Fri",
  [I18nKey.calendarSaturday]: "Sat",
  [I18nKey.calendarJanuary]: "Jan",
  [I18nKey.calendarFebruary]: "Feb",
  [I18nKey.calendarMarch]: "Mar",
  [I18nKey.calendarApril]: "Apr",
  [I18nKey.calendarMay]: "May",
  [I18nKey.calendarJune]: "Jun",
  [I18nKey.calendarJuly]: "Jul",
  [I18nKey.calendarAugust]: "Aug",
  [I18nKey.calendarSeptember]: "Sep",
  [I18nKey.calendarOctober]: "Oct",
  [I18nKey.calendarNovember]: "Nov",
  [I18nKey.calendarDecember]: "Dec"
};

const en$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	en
}, Symbol.toStringTag, { value: 'Module' }));

const ja = {
  [I18nKey.home]: "ホーム",
  [I18nKey.about]: "について",
  [I18nKey.archive]: "アーカイブ",
  [I18nKey.search]: "検索",
  [I18nKey.other]: "その他",
  // ナビゲーションバータイトル
  [I18nKey.navLinks]: "リンク",
  [I18nKey.navMy]: "私の",
  [I18nKey.navAbout]: "About",
  [I18nKey.navOthers]: "その他",
  [I18nKey.tags]: "タグ",
  [I18nKey.categories]: "カテゴリ",
  [I18nKey.recentPosts]: "最近の投稿",
  [I18nKey.postList]: "投稿リスト",
  [I18nKey.tableOfContents]: "目次",
  // お知らせ
  [I18nKey.announcement]: "お知らせ",
  [I18nKey.announcementClose]: "閉じる",
  [I18nKey.comments]: "コメント",
  [I18nKey.friends]: "友達",
  [I18nKey.friendsSubtitle]: "より優れたウェブサイトを見つける",
  [I18nKey.friendsSearchPlaceholder]: "友達の名前または説明を検索...",
  [I18nKey.friendsFilterAll]: "すべて",
  [I18nKey.friendsNoResults]: "一致する友達が見つかりません",
  [I18nKey.friendsVisit]: "訪問",
  [I18nKey.friendsCopyLink]: "リンクをコピー",
  [I18nKey.friendsCopySuccess]: "コピー済み",
  [I18nKey.friendsTags]: "タグ",
  [I18nKey.untitled]: "無題",
  [I18nKey.uncategorized]: "未分類",
  [I18nKey.noTags]: "タグなし",
  [I18nKey.wordCount]: "語",
  [I18nKey.wordsCount]: "語",
  [I18nKey.minuteCount]: "分",
  [I18nKey.minutesCount]: "分",
  [I18nKey.postCount]: "投稿",
  [I18nKey.postsCount]: "投稿",
  [I18nKey.themeColor]: "テーマカラー",
  [I18nKey.lightMode]: "ライト",
  [I18nKey.darkMode]: "ダーク",
  [I18nKey.systemMode]: "システム",
  [I18nKey.more]: "もっと",
  [I18nKey.author]: "著者",
  [I18nKey.publishedAt]: "公開日",
  [I18nKey.license]: "ライセンス",
  [I18nKey.anime]: "アニメ",
  [I18nKey.diary]: "日記",
  [I18nKey.gallery]: "ギャラリー",
  // デバイスページ
  [I18nKey.devices]: "私のデバイス",
  [I18nKey.devicesSubtitle]: "ここに私の日常で使用するデバイスを表示します",
  // アニメページ
  [I18nKey.animeTitle]: "私のアニメリスト",
  [I18nKey.animeSubtitle]: "私の二次元の旅を記録する",
  [I18nKey.animeStatusWatching]: "視聴中",
  [I18nKey.animeStatusCompleted]: "完了",
  [I18nKey.animeStatusPlanned]: "予定",
  [I18nKey.animeStatusOnHold]: "一時停止",
  [I18nKey.animeStatusDropped]: "中断",
  [I18nKey.animeFilterAll]: "すべて",
  [I18nKey.animeYear]: "年",
  [I18nKey.animeStudio]: "スタジオ",
  [I18nKey.animeEmpty]: "アニメデータなし",
  [I18nKey.animeEmptyBangumi]: "Bangumiの設定またはネットワーク接続を確認してください",
  [I18nKey.animeEmptyLocal]: "src/data/anime.tsファイルにアニメ情報を追加してください",
  // 日記ページ
  [I18nKey.diarySubtitle]: "いつでもどこでも、生活を共有する",
  [I18nKey.diaryCount]: "日記エントリ",
  [I18nKey.diaryReply]: "返信",
  [I18nKey.diaryTips]: "最新の30件の日記エントリのみを表示",
  [I18nKey.diaryMinutesAgo]: "分前",
  [I18nKey.diaryHoursAgo]: "時間前",
  [I18nKey.diaryDaysAgo]: "日前",
  // 404ページ
  [I18nKey.notFound]: "404",
  [I18nKey.notFoundTitle]: "ページが見つかりません",
  [I18nKey.notFoundDescription]: "申し訳ありませんが、アクセスしたページは存在しないか、移動されています。",
  [I18nKey.backToHome]: "ホームに戻る",
  // 音楽プレーヤー
  [I18nKey.playlist]: "プレイリスト",
  // アルバムページ
  [I18nKey.albums]: "アルバム",
  [I18nKey.albumsSubtitle]: "生活の美しい瞬間を記録する",
  [I18nKey.albumsEmpty]: "コンテンツなし",
  [I18nKey.albumsEmptyDesc]: "アルバムがまだ作成されていません。美しい思い出を追加してください！",
  [I18nKey.albumsBackToList]: "アルバムに戻る",
  [I18nKey.albumsPhotoCount]: "写真",
  [I18nKey.albumsPhotosCount]: "写真",
  // プロジェクトページ
  [I18nKey.projects]: "プロジェクト",
  [I18nKey.projectsSubtitle]: "私の開発プロジェクトポートフォリオ",
  [I18nKey.projectsAll]: "すべて",
  [I18nKey.projectsWeb]: "ウェブアプリケーション",
  [I18nKey.projectsMobile]: "モバイルアプリケーション",
  [I18nKey.projectsDesktop]: "デスクトップアプリケーション",
  [I18nKey.projectsOther]: "その他",
  [I18nKey.projectTechStack]: "技術スタック",
  [I18nKey.projectLiveDemo]: "ライブデモ",
  [I18nKey.projectSourceCode]: "ソースコード",
  [I18nKey.projectDescription]: "プロジェクト説明",
  [I18nKey.projectStatus]: "ステータス",
  [I18nKey.projectStatusCompleted]: "完了",
  [I18nKey.projectStatusInProgress]: "進行中",
  [I18nKey.projectStatusPlanned]: "予定",
  [I18nKey.projectsTotal]: "プロジェクト合計",
  [I18nKey.projectsCompleted]: "完了",
  [I18nKey.projectsInProgress]: "進行中",
  [I18nKey.projectsTechStack]: "技術スタック統計",
  [I18nKey.projectsFeatured]: "注目プロジェクト",
  [I18nKey.projectsPlanned]: "予定",
  [I18nKey.projectsDemo]: "ライブデモ",
  [I18nKey.projectsSource]: "ソースコード",
  [I18nKey.projectsVisit]: "プロジェクトへ",
  [I18nKey.projectsGitHub]: "GitHub",
  // [Key.projectsGitee]: "Gitee",  // Giteeサポートを削除
  // RSSページ
  [I18nKey.rss]: "RSSフィード",
  [I18nKey.rssDescription]: "最新の更新を購読する",
  [I18nKey.rssSubtitle]: "RSSで購読して、最新の記事と更新を第一时间で取得する",
  [I18nKey.rssLink]: "RSSリンク",
  [I18nKey.rssCopyToReader]: "RSSリンクをリーダーにコピー",
  [I18nKey.rssCopyLink]: "リンクをコピー",
  [I18nKey.rssLatestPosts]: "最新の投稿",
  [I18nKey.rssWhatIsRSS]: "RSSとは？",
  [I18nKey.rssWhatIsRSSDescription]: "RSS（Really Simple Syndication）は、頻繁に更新されるコンテンツを公開するための標準形式です。RSSを使用すると：",
  [I18nKey.rssBenefit1]: "手動で訪問することなく、最新のウェブサイトコンテンツを及时に取得",
  [I18nKey.rssBenefit2]: "1か所で複数のウェブサイトの購読を管理",
  [I18nKey.rssBenefit3]: "重要な更新や記事を見逃すことを回避",
  [I18nKey.rssBenefit4]: "広告なしのクリーンな読書体験を楽しむ",
  [I18nKey.rssHowToUse]: "Feedly、Inoreaderまたは他のRSSリーダーを使用してこのサイトを購読することを推奨します。",
  [I18nKey.rssCopied]: "RSSリンクがクリップボードにコピーされました！",
  [I18nKey.rssCopyFailed]: "コピーに失敗しました。手動でリンクをコピーしてください",
  // Atomページ
  [I18nKey.atom]: "Atomフィード",
  [I18nKey.atomDescription]: "最新の更新を購読する",
  [I18nKey.atomSubtitle]: "Atomで購読して、最新の記事と更新を第一时间で取得する",
  [I18nKey.atomLink]: "Atomリンク",
  [I18nKey.atomCopyToReader]: "Atomリンクをリーダーにコピー",
  [I18nKey.atomCopyLink]: "リンクをコピー",
  [I18nKey.atomLatestPosts]: "最新の投稿",
  [I18nKey.atomWhatIsAtom]: "Atomとは？",
  [I18nKey.atomWhatIsAtomDescription]: "Atom連合フォーマット（Atom Syndication Format）は、フィードとそのアイテムを記述するためのXMLベースの標準です。Atomを使用すると：",
  [I18nKey.atomBenefit1]: "手動で訪問することなく、最新のウェブサイトコンテンツを及时に取得",
  [I18nKey.atomBenefit2]: "1か所で複数のウェブサイトの購読を管理",
  [I18nKey.atomBenefit3]: "重要な更新や記事を見逃すことを回避",
  [I18nKey.atomBenefit4]: "広告なしのクリーンな読書体験を楽しむ",
  [I18nKey.atomHowToUse]: "Feedly、Inoreaderまたは他のAtomリーダーを使用してこのサイトを購読することを推奨します。",
  [I18nKey.atomCopied]: "Atomリンクがクリップボードにコピーされました！",
  [I18nKey.atomCopyFailed]: "コピーに失敗しました。手動でリンクをコピーしてください",
  // スキルページ
  [I18nKey.skills]: "スキル",
  [I18nKey.skillsSubtitle]: "私の技術スキルと専門知識",
  [I18nKey.skillsFrontend]: "フロントエンド開発",
  [I18nKey.skillsBackend]: "バックエンド開発",
  [I18nKey.skillsDatabase]: "データベース",
  [I18nKey.skillsTools]: "開発ツール",
  [I18nKey.skillsOther]: "その他のスキル",
  [I18nKey.skillLevel]: "熟練度",
  [I18nKey.skillLevelBeginner]: "初心者",
  [I18nKey.skillLevelIntermediate]: "中級者",
  [I18nKey.skillLevelAdvanced]: "上級者",
  [I18nKey.skillLevelExpert]: "エキスパート",
  [I18nKey.skillExperience]: "経験",
  [I18nKey.skillYears]: "年",
  [I18nKey.skillMonths]: "ヶ月",
  [I18nKey.skillsTotal]: "スキル合計",
  [I18nKey.skillsExpert]: "エキスパートレベル",
  [I18nKey.skillsAdvanced]: "上級者",
  [I18nKey.skillsIntermediate]: "中級者",
  [I18nKey.skillsBeginner]: "初心者",
  [I18nKey.skillsAdvancedTitle]: "専門スキル",
  [I18nKey.skillsProjects]: "関連プロジェクト",
  [I18nKey.skillsDistribution]: "スキル分布",
  [I18nKey.skillsByLevel]: "レベル別分布",
  [I18nKey.skillsByCategory]: "カテゴリ別分布",
  // タイムラインページ
  [I18nKey.timeline]: "タイムライン",
  [I18nKey.timelineSubtitle]: "私の成長の旅と重要なマイルストーン",
  [I18nKey.timelineEducation]: "教育",
  [I18nKey.timelineWork]: "職歴",
  [I18nKey.timelineProject]: "プロジェクト経験",
  [I18nKey.timelineAchievement]: "実績",
  [I18nKey.timelinePresent]: "現在",
  [I18nKey.timelineLocation]: "場所",
  [I18nKey.timelineDescription]: "詳細説明",
  [I18nKey.timelineMonths]: "ヶ月",
  [I18nKey.timelineYears]: "年",
  [I18nKey.timelineTotal]: "合計",
  [I18nKey.timelineProjects]: "プロジェクト",
  [I18nKey.timelineExperience]: "職歴",
  [I18nKey.timelineCurrent]: "現在の状態",
  [I18nKey.timelineHistory]: "履歴",
  [I18nKey.timelineAchievements]: "実績",
  [I18nKey.timelineStartDate]: "開始日",
  [I18nKey.timelineDuration]: "期間",
  // その他
  [I18nKey.noData]: "データなし",
  // パスワード保護
  [I18nKey.passwordProtected]: "パスワード保護",
  [I18nKey.passwordProtectedTitle]: "このコンテンツはパスワードで保護されています",
  [I18nKey.passwordProtectedDescription]: "保護されたコンテンツを表示するにはパスワードを入力してください",
  [I18nKey.passwordPlaceholder]: "パスワードを入力",
  [I18nKey.passwordUnlock]: "ロック解除",
  [I18nKey.passwordUnlocking]: "ロック解除中...",
  [I18nKey.passwordIncorrect]: "パスワードが間違っています。再試行してください",
  [I18nKey.passwordDecryptError]: "復号化に失敗しました。パスワードが正しいか確認してください",
  [I18nKey.passwordRequired]: "パスワードを入力してください",
  [I18nKey.passwordVerifying]: "検証中...",
  [I18nKey.passwordDecryptFailed]: "復号化に失敗しました。パスワードを確認してください",
  [I18nKey.passwordDecryptRetry]: "復号化に失敗しました。再試行してください",
  [I18nKey.passwordUnlockButton]: "ロック解除",
  [I18nKey.copyFailed]: "コピーに失敗しました：",
  [I18nKey.syntaxHighlightFailed]: "構文ハイライトに失敗しました：",
  [I18nKey.autoSyntaxHighlightFailed]: "自動構文ハイライトにも失敗しました：",
  [I18nKey.decryptionError]: "復号化中にエラーが発生しました：",
  // 最終更新時間カード
  [I18nKey.lastModifiedPrefix]: "最終編集からの時間：",
  [I18nKey.lastModifiedOutdated]: "一部の情報は古くなっている可能性があります",
  [I18nKey.year]: "年",
  [I18nKey.month]: "月",
  [I18nKey.day]: "日",
  [I18nKey.hour]: "時間",
  [I18nKey.minute]: "分",
  [I18nKey.second]: "秒",
  // 壁紙モード
  [I18nKey.wallpaperBanner]: "バナーモード",
  [I18nKey.wallpaperFullscreen]: "全画面モード",
  [I18nKey.wallpaperNone]: "壁紙を非表示",
  // サイト統計
  [I18nKey.siteStats]: "サイト統計",
  [I18nKey.siteStatsPostCount]: "記事数",
  [I18nKey.siteStatsCategoryCount]: "カテゴリー数",
  [I18nKey.siteStatsTagCount]: "タグ数",
  [I18nKey.siteStatsTotalWords]: "総字数",
  [I18nKey.siteStatsRunningDays]: "運用日数",
  [I18nKey.siteStatsLastUpdate]: "最終更新",
  [I18nKey.siteStatsDaysAgo]: "{days}日前",
  [I18nKey.siteStatsDays]: "{days}日",
  // カレンダーコンポーネント
  [I18nKey.calendarSunday]: "日",
  [I18nKey.calendarMonday]: "月",
  [I18nKey.calendarTuesday]: "火",
  [I18nKey.calendarWednesday]: "水",
  [I18nKey.calendarThursday]: "木",
  [I18nKey.calendarFriday]: "金",
  [I18nKey.calendarSaturday]: "土",
  [I18nKey.calendarJanuary]: "1月",
  [I18nKey.calendarFebruary]: "2月",
  [I18nKey.calendarMarch]: "3月",
  [I18nKey.calendarApril]: "4月",
  [I18nKey.calendarMay]: "5月",
  [I18nKey.calendarJune]: "6月",
  [I18nKey.calendarJuly]: "7月",
  [I18nKey.calendarAugust]: "8月",
  [I18nKey.calendarSeptember]: "9月",
  [I18nKey.calendarOctober]: "10月",
  [I18nKey.calendarNovember]: "11月",
  [I18nKey.calendarDecember]: "12月"
};

const ja$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	ja
}, Symbol.toStringTag, { value: 'Module' }));

const zh_CN = {
  [I18nKey.home]: "主页",
  [I18nKey.about]: "关于我们",
  [I18nKey.archive]: "归档",
  [I18nKey.search]: "搜索",
  [I18nKey.other]: "其他",
  // 导航栏标题
  [I18nKey.navLinks]: "链接",
  [I18nKey.navMy]: "我的",
  [I18nKey.navAbout]: "关于",
  [I18nKey.navOthers]: "其他",
  [I18nKey.tags]: "标签",
  [I18nKey.categories]: "分类",
  [I18nKey.recentPosts]: "最新文章",
  [I18nKey.postList]: "文章列表",
  [I18nKey.tableOfContents]: "目录",
  // 公告栏
  [I18nKey.announcement]: "公告",
  [I18nKey.announcementClose]: "关闭",
  [I18nKey.comments]: "评论",
  [I18nKey.friends]: "友链",
  [I18nKey.friendsSubtitle]: "发现更多优秀网站",
  [I18nKey.friendsSearchPlaceholder]: "搜索友链名称或描述...",
  [I18nKey.friendsFilterAll]: "全部",
  [I18nKey.friendsNoResults]: "未找到匹配的友链",
  [I18nKey.friendsVisit]: "访问",
  [I18nKey.friendsCopyLink]: "复制链接",
  [I18nKey.friendsCopySuccess]: "已复制",
  [I18nKey.friendsTags]: "标签",
  [I18nKey.untitled]: "无标题",
  [I18nKey.uncategorized]: "未分类",
  [I18nKey.noTags]: "无标签",
  [I18nKey.wordCount]: "字",
  [I18nKey.wordsCount]: "字",
  [I18nKey.minuteCount]: "分钟",
  [I18nKey.minutesCount]: "分钟",
  [I18nKey.postCount]: "篇文章",
  [I18nKey.postsCount]: "篇文章",
  [I18nKey.themeColor]: "主题色",
  [I18nKey.lightMode]: "亮色",
  [I18nKey.darkMode]: "暗色",
  [I18nKey.systemMode]: "跟随系统",
  [I18nKey.more]: "更多",
  [I18nKey.author]: "作者",
  [I18nKey.publishedAt]: "发布于",
  [I18nKey.license]: "许可协议",
  [I18nKey.anime]: "追番",
  [I18nKey.diary]: "日记",
  [I18nKey.gallery]: "相册",
  // 番剧页面
  [I18nKey.animeTitle]: "我的追番记录",
  [I18nKey.animeSubtitle]: "记录我的二次元之旅",
  [I18nKey.animeStatusWatching]: "在看",
  [I18nKey.animeStatusCompleted]: "看过",
  [I18nKey.animeStatusPlanned]: "想看",
  [I18nKey.animeStatusOnHold]: "搁置",
  [I18nKey.animeStatusDropped]: "抛弃",
  [I18nKey.animeFilterAll]: "全部",
  [I18nKey.animeYear]: "年份",
  [I18nKey.animeStudio]: "制作",
  [I18nKey.animeEmpty]: "暂无追番数据",
  [I18nKey.animeEmptyBangumi]: "请检查 Bangumi 配置或网络连接",
  [I18nKey.animeEmptyLocal]: "请在 src/data/anime.ts 文件中添加番剧信息",
  // 短文页面
  [I18nKey.diarySubtitle]: "随时随地，分享生活",
  [I18nKey.diaryCount]: "条短文",
  [I18nKey.diaryReply]: "回复",
  [I18nKey.diaryTips]: "只展示最近30条日记",
  [I18nKey.diaryMinutesAgo]: "分钟前",
  [I18nKey.diaryHoursAgo]: "小时前",
  [I18nKey.diaryDaysAgo]: "天前",
  // 404页面
  [I18nKey.notFound]: "404",
  [I18nKey.notFoundTitle]: "页面未找到",
  [I18nKey.notFoundDescription]: "抱歉，您访问的页面不存在或已被移动。",
  [I18nKey.backToHome]: "返回首页",
  // 音乐播放器
  [I18nKey.playlist]: "播放列表",
  // 相册页面
  [I18nKey.albums]: "相册",
  [I18nKey.albumsSubtitle]: "记录生活中的美好瞬间",
  [I18nKey.albumsEmpty]: "暂无内容",
  [I18nKey.albumsEmptyDesc]: "还没有创建任何相册，快去添加一些美好的回忆吧！",
  [I18nKey.albumsBackToList]: "返回相册",
  [I18nKey.albumsPhotoCount]: "张照片",
  [I18nKey.albumsPhotosCount]: "张照片",
  // 设备页面
  [I18nKey.devices]: "我的设备",
  [I18nKey.devicesSubtitle]: "这里展示了我日常使用的各类设备",
  // 项目展示页面
  [I18nKey.projects]: "项目展示",
  [I18nKey.projectsSubtitle]: "我的开发项目作品集",
  [I18nKey.projectsAll]: "全部",
  [I18nKey.projectsWeb]: "网页应用",
  [I18nKey.projectsMobile]: "移动应用",
  [I18nKey.projectsDesktop]: "桌面应用",
  [I18nKey.projectsOther]: "其他",
  [I18nKey.projectTechStack]: "技术栈",
  [I18nKey.projectLiveDemo]: "在线演示",
  [I18nKey.projectSourceCode]: "源代码",
  [I18nKey.projectDescription]: "项目描述",
  [I18nKey.projectStatus]: "状态",
  [I18nKey.projectStatusCompleted]: "已完成",
  [I18nKey.projectStatusInProgress]: "进行中",
  [I18nKey.projectStatusPlanned]: "计划中",
  [I18nKey.projectsTotal]: "项目总数",
  [I18nKey.projectsCompleted]: "已完成",
  [I18nKey.projectsInProgress]: "进行中",
  [I18nKey.projectsTechStack]: "技术栈统计",
  [I18nKey.projectsFeatured]: "精选项目",
  [I18nKey.projectsPlanned]: "计划中",
  [I18nKey.projectsDemo]: "在线演示",
  [I18nKey.projectsSource]: "源代码",
  [I18nKey.projectsVisit]: "前往",
  [I18nKey.projectsGitHub]: "GitHub",
  // 技能展示页面
  [I18nKey.skills]: "技能展示",
  [I18nKey.skillsSubtitle]: "我的技术技能和专业知识",
  [I18nKey.skillsFrontend]: "前端开发",
  [I18nKey.skillsBackend]: "后端开发",
  [I18nKey.skillsDatabase]: "数据库",
  [I18nKey.skillsTools]: "开发工具",
  [I18nKey.skillsOther]: "其他技能",
  [I18nKey.skillLevel]: "熟练度",
  [I18nKey.skillLevelBeginner]: "初学者",
  [I18nKey.skillLevelIntermediate]: "中级",
  [I18nKey.skillLevelAdvanced]: "高级",
  [I18nKey.skillLevelExpert]: "专家",
  [I18nKey.skillExperience]: "经验",
  [I18nKey.skillYears]: "年",
  [I18nKey.skillMonths]: "个月",
  [I18nKey.skillsTotal]: "总技能数",
  [I18nKey.skillsExpert]: "专家级",
  [I18nKey.skillsAdvanced]: "高级",
  [I18nKey.skillsIntermediate]: "中级",
  [I18nKey.skillsBeginner]: "初级",
  [I18nKey.skillsAdvancedTitle]: "专业技能",
  [I18nKey.skillsProjects]: "相关项目",
  [I18nKey.skillsDistribution]: "技能分布",
  [I18nKey.skillsByLevel]: "按等级分布",
  [I18nKey.skillsByCategory]: "按分类分布",
  [I18nKey.noData]: "暂无数据",
  // 时间线页面
  [I18nKey.timeline]: "时间线",
  [I18nKey.timelineSubtitle]: "我的成长历程和重要里程碑",
  [I18nKey.timelineEducation]: "教育经历",
  [I18nKey.timelineWork]: "工作经历",
  [I18nKey.timelineProject]: "项目经历",
  [I18nKey.timelineAchievement]: "成就荣誉",
  [I18nKey.timelinePresent]: "至今",
  [I18nKey.timelineLocation]: "地点",
  [I18nKey.timelineDescription]: "详细描述",
  [I18nKey.timelineMonths]: "个月",
  [I18nKey.timelineYears]: "年",
  [I18nKey.timelineTotal]: "总计",
  [I18nKey.timelineProjects]: "项目数",
  [I18nKey.timelineExperience]: "工作经验",
  [I18nKey.timelineCurrent]: "当前状态",
  [I18nKey.timelineHistory]: "历史记录",
  [I18nKey.timelineAchievements]: "成就荣誉",
  [I18nKey.timelineStartDate]: "开始日期",
  [I18nKey.timelineDuration]: "持续时间",
  // 密码保护
  [I18nKey.passwordProtected]: "密码保护",
  [I18nKey.passwordProtectedTitle]: "此内容受密码保护",
  [I18nKey.passwordProtectedDescription]: "请输入密码以查看受保护的内容",
  [I18nKey.passwordPlaceholder]: "请输入密码",
  [I18nKey.passwordUnlock]: "解锁",
  [I18nKey.passwordUnlocking]: "解锁中...",
  [I18nKey.passwordIncorrect]: "密码错误，请重试",
  [I18nKey.passwordDecryptError]: "解密失败，请检查密码是否正确",
  [I18nKey.passwordRequired]: "请输入密码",
  [I18nKey.passwordVerifying]: "验证中...",
  [I18nKey.passwordDecryptFailed]: "解密失败，请检查密码",
  [I18nKey.passwordDecryptRetry]: "解密失败，请重试",
  [I18nKey.passwordUnlockButton]: "解锁",
  [I18nKey.copyFailed]: "复制失败:",
  [I18nKey.syntaxHighlightFailed]: "语法高亮失败:",
  [I18nKey.autoSyntaxHighlightFailed]: "自动语法高亮也失败:",
  [I18nKey.decryptionError]: "解密过程中发生错误:",
  //最后编辑时间卡片
  [I18nKey.lastModifiedPrefix]: "距离上次编辑: ",
  [I18nKey.lastModifiedOutdated]: "部分信息可能已经过时",
  [I18nKey.year]: "年",
  [I18nKey.month]: "月",
  [I18nKey.day]: "天",
  [I18nKey.hour]: "小时",
  [I18nKey.minute]: "分",
  [I18nKey.second]: "秒",
  // RSS 页面
  [I18nKey.rss]: "RSS 订阅",
  [I18nKey.rssDescription]: "订阅获取最新更新",
  [I18nKey.rssSubtitle]: "通过 RSS 订阅，第一时间获取最新文章和动态",
  [I18nKey.rssLink]: "RSS 链接",
  [I18nKey.rssCopyToReader]: "复制链接到你的 RSS 阅读器",
  [I18nKey.rssCopyLink]: "复制链接",
  [I18nKey.rssLatestPosts]: "最新文章",
  [I18nKey.rssWhatIsRSS]: "什么是 RSS？",
  [I18nKey.rssWhatIsRSSDescription]: "RSS（Really Simple Syndication）是一种用于发布经常更新内容的标准格式。通过 RSS，你可以：",
  [I18nKey.rssBenefit1]: "及时获取网站最新内容，无需手动访问",
  [I18nKey.rssBenefit2]: "在一个地方管理多个网站的订阅",
  [I18nKey.rssBenefit3]: "避免错过重要更新和文章",
  [I18nKey.rssBenefit4]: "享受无广告的纯净阅读体验",
  [I18nKey.rssHowToUse]: "推荐使用 Feedly、Inoreader 或其他 RSS 阅读器来订阅本站。",
  [I18nKey.rssCopied]: "RSS 链接已复制到剪贴板！",
  [I18nKey.rssCopyFailed]: "复制失败，请手动复制链接",
  // Atom 页面
  [I18nKey.atom]: "Atom 订阅",
  [I18nKey.atomDescription]: "订阅获取最新更新",
  [I18nKey.atomSubtitle]: "通过 Atom 订阅，第一时间获取最新文章和动态",
  [I18nKey.atomLink]: "Atom 链接",
  [I18nKey.atomCopyToReader]: "复制链接到你的 Atom 阅读器",
  [I18nKey.atomCopyLink]: "复制链接",
  [I18nKey.atomLatestPosts]: "最新文章",
  [I18nKey.atomWhatIsAtom]: "什么是 Atom？",
  [I18nKey.atomWhatIsAtomDescription]: "Atom联合格式（Atom Syndication Format）是一个基于XML的标准，用于描述订阅源及其信息项。通过 Atom，你可以：",
  [I18nKey.atomBenefit1]: "及时获取网站最新内容，无需手动访问",
  [I18nKey.atomBenefit2]: "在一个地方管理多个网站的订阅",
  [I18nKey.atomBenefit3]: "避免错过重要更新和文章",
  [I18nKey.atomBenefit4]: "享受无广告的纯净阅读体验",
  [I18nKey.atomHowToUse]: "推荐使用 Feedly、Inoreader 或其他 Atom 阅读器来订阅本站。",
  [I18nKey.atomCopied]: "Atom 链接已复制到剪贴板！",
  [I18nKey.atomCopyFailed]: "复制失败，请手动复制链接",
  // 壁纸模式
  [I18nKey.wallpaperBanner]: "横幅模式",
  [I18nKey.wallpaperFullscreen]: "全屏模式",
  [I18nKey.wallpaperNone]: "隐藏壁纸",
  // 站点统计
  [I18nKey.siteStats]: "站点统计",
  [I18nKey.siteStatsPostCount]: "文章",
  [I18nKey.siteStatsCategoryCount]: "分类",
  [I18nKey.siteStatsTagCount]: "标签",
  [I18nKey.siteStatsTotalWords]: "总字数",
  [I18nKey.siteStatsRunningDays]: "运行时长",
  [I18nKey.siteStatsLastUpdate]: "最后活动",
  [I18nKey.siteStatsDaysAgo]: "{days} 天前",
  [I18nKey.siteStatsDays]: "{days} 天",
  // 日历组件
  [I18nKey.calendarSunday]: "日",
  [I18nKey.calendarMonday]: "一",
  [I18nKey.calendarTuesday]: "二",
  [I18nKey.calendarWednesday]: "三",
  [I18nKey.calendarThursday]: "四",
  [I18nKey.calendarFriday]: "五",
  [I18nKey.calendarSaturday]: "六",
  [I18nKey.calendarJanuary]: "1月",
  [I18nKey.calendarFebruary]: "2月",
  [I18nKey.calendarMarch]: "3月",
  [I18nKey.calendarApril]: "4月",
  [I18nKey.calendarMay]: "5月",
  [I18nKey.calendarJune]: "6月",
  [I18nKey.calendarJuly]: "7月",
  [I18nKey.calendarAugust]: "8月",
  [I18nKey.calendarSeptember]: "9月",
  [I18nKey.calendarOctober]: "10月",
  [I18nKey.calendarNovember]: "11月",
  [I18nKey.calendarDecember]: "12月"
};

const zh_CN$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	zh_CN
}, Symbol.toStringTag, { value: 'Module' }));

const zh_TW = {
  [I18nKey.home]: "首頁",
  [I18nKey.about]: "關於我們",
  [I18nKey.archive]: "歸檔",
  [I18nKey.search]: "搜尋",
  [I18nKey.other]: "其他",
  // 導航欄標題
  [I18nKey.navLinks]: "連結",
  [I18nKey.navMy]: "我的",
  [I18nKey.navAbout]: "關於",
  [I18nKey.navOthers]: "其他",
  [I18nKey.tags]: "標籤",
  [I18nKey.categories]: "分類",
  [I18nKey.recentPosts]: "最新文章",
  [I18nKey.postList]: "文章列表",
  [I18nKey.tableOfContents]: "目錄",
  // 公告欄
  [I18nKey.announcement]: "公告",
  [I18nKey.announcementClose]: "關閉",
  [I18nKey.comments]: "評論",
  [I18nKey.friends]: "友鏈",
  [I18nKey.friendsSubtitle]: "發現更多優秀網站",
  [I18nKey.friendsSearchPlaceholder]: "搜索友鏈名稱或描述...",
  [I18nKey.friendsFilterAll]: "全部",
  [I18nKey.friendsNoResults]: "未找到匹配的友鏈",
  [I18nKey.friendsVisit]: "訪問",
  [I18nKey.friendsCopyLink]: "複製鏈接",
  [I18nKey.friendsCopySuccess]: "已複製",
  [I18nKey.friendsTags]: "標籤",
  [I18nKey.untitled]: "無標題",
  [I18nKey.uncategorized]: "未分類",
  [I18nKey.noTags]: "無標籤",
  [I18nKey.wordCount]: "字",
  [I18nKey.wordsCount]: "字",
  [I18nKey.minuteCount]: "分鐘",
  [I18nKey.minutesCount]: "分鐘",
  [I18nKey.postCount]: "篇文章",
  [I18nKey.postsCount]: "篇文章",
  [I18nKey.themeColor]: "主題色",
  [I18nKey.lightMode]: "亮色",
  [I18nKey.darkMode]: "暗色",
  [I18nKey.systemMode]: "跟隨系統",
  [I18nKey.more]: "更多",
  [I18nKey.author]: "作者",
  [I18nKey.publishedAt]: "發布於",
  [I18nKey.license]: "許可協議",
  [I18nKey.anime]: "追番",
  [I18nKey.diary]: "日記",
  [I18nKey.gallery]: "相冊",
  // 設備頁面
  [I18nKey.devices]: "我的設備",
  [I18nKey.devicesSubtitle]: "這裡展示了我日常使用的各類設備",
  // 番劇頁面
  [I18nKey.animeTitle]: "我的追番記錄",
  [I18nKey.animeSubtitle]: "記錄我的二次元之旅",
  [I18nKey.animeStatusWatching]: "在看",
  [I18nKey.animeStatusCompleted]: "看過",
  [I18nKey.animeStatusPlanned]: "想看",
  [I18nKey.animeStatusOnHold]: "擱置",
  [I18nKey.animeStatusDropped]: "拋棄",
  [I18nKey.animeFilterAll]: "全部",
  [I18nKey.animeYear]: "年份",
  [I18nKey.animeStudio]: "製作",
  [I18nKey.animeEmpty]: "暫無追番數據",
  [I18nKey.animeEmptyBangumi]: "請檢查 Bangumi 配置或網絡連接",
  [I18nKey.animeEmptyLocal]: "請在 src/data/anime.ts 文件中添加番劇信息",
  // 短文頁面
  [I18nKey.diarySubtitle]: "隨時隨地，分享生活",
  [I18nKey.diaryCount]: "條短文",
  [I18nKey.diaryReply]: "回復",
  [I18nKey.diaryTips]: "只展示最近30條日記",
  [I18nKey.diaryMinutesAgo]: "分鐘前",
  [I18nKey.diaryHoursAgo]: "小時前",
  [I18nKey.diaryDaysAgo]: "天前",
  // 404頁面
  [I18nKey.notFound]: "404",
  [I18nKey.notFoundTitle]: "頁面未找到",
  [I18nKey.notFoundDescription]: "抱歉，您訪問的頁面不存在或已被移動。",
  [I18nKey.backToHome]: "返回首頁",
  // 音樂播放器
  [I18nKey.playlist]: "播放列表",
  // 相冊頁面
  [I18nKey.albums]: "相冊",
  [I18nKey.albumsSubtitle]: "記錄生活中的美好瞬間",
  [I18nKey.albumsEmpty]: "暫無內容",
  [I18nKey.albumsEmptyDesc]: "還沒有創建任何相冊，快去添加一些美好的回憶吧！",
  [I18nKey.albumsBackToList]: "返回相冊",
  [I18nKey.albumsPhotoCount]: "張照片",
  [I18nKey.albumsPhotosCount]: "張照片",
  // 項目展示頁面
  [I18nKey.projects]: "項目展示",
  [I18nKey.projectsSubtitle]: "我的開發項目作品集",
  [I18nKey.projectsAll]: "全部",
  [I18nKey.projectsWeb]: "網頁應用",
  [I18nKey.projectsMobile]: "移動應用",
  [I18nKey.projectsDesktop]: "桌面應用",
  [I18nKey.projectsOther]: "其他",
  [I18nKey.projectTechStack]: "技術棧",
  [I18nKey.projectLiveDemo]: "在線演示",
  [I18nKey.projectSourceCode]: "源代碼",
  [I18nKey.projectDescription]: "項目描述",
  [I18nKey.projectStatus]: "狀態",
  [I18nKey.projectStatusCompleted]: "已完成",
  [I18nKey.projectStatusInProgress]: "進行中",
  [I18nKey.projectStatusPlanned]: "計劃中",
  [I18nKey.projectsTotal]: "項目總數",
  [I18nKey.projectsCompleted]: "已完成",
  [I18nKey.projectsInProgress]: "進行中",
  [I18nKey.projectsTechStack]: "技術棧統計",
  [I18nKey.projectsFeatured]: "精選項目",
  [I18nKey.projectsPlanned]: "計劃中",
  [I18nKey.projectsDemo]: "線上展示",
  [I18nKey.projectsSource]: "原始碼",
  [I18nKey.projectsVisit]: "前往專案",
  [I18nKey.projectsGitHub]: "GitHub",
  // [Key.projectsGitee]: "Gitee",  // 移除 Gitee 支援
  // RSS 頁面
  [I18nKey.rss]: "RSS 訂閱",
  [I18nKey.rssDescription]: "訂閱獲取最新更新",
  [I18nKey.rssSubtitle]: "通過 RSS 訂閱，第一時間獲取最新文章和動態",
  [I18nKey.rssLink]: "RSS 鏈接",
  [I18nKey.rssCopyToReader]: "複製鏈接到你的 RSS 閱讀器",
  [I18nKey.rssCopyLink]: "複製鏈接",
  [I18nKey.rssLatestPosts]: "最新文章",
  [I18nKey.rssWhatIsRSS]: "什麼是 RSS？",
  [I18nKey.rssWhatIsRSSDescription]: "RSS（Really Simple Syndication）是一種用於發布經常更新內容的標準格式。通過 RSS，你可以：",
  [I18nKey.rssBenefit1]: "及時獲取網站最新內容，無需手動訪問",
  [I18nKey.rssBenefit2]: "在一個地方管理多個網站的訂閱",
  [I18nKey.rssBenefit3]: "避免錯過重要更新和文章",
  [I18nKey.rssBenefit4]: "享受無廣告的純淨閱讀體驗",
  [I18nKey.rssHowToUse]: "推薦使用 Feedly、Inoreader 或其他 RSS 閱讀器來訂閱本站。",
  [I18nKey.rssCopied]: "RSS 鏈接已複製到剪貼板！",
  [I18nKey.rssCopyFailed]: "複製失敗，請手動複製鏈接",
  //Atom Feed 頁面
  [I18nKey.atom]: "Atom 訂閱",
  [I18nKey.atomDescription]: "訂閱獲取最新更新",
  [I18nKey.atomSubtitle]: "通過 Atom 訂閱，第一時間獲取最新文章和動態",
  [I18nKey.atomLink]: "Atom 鏈接",
  [I18nKey.atomCopyToReader]: "複製鏈接到你的 Atom 閱讀器",
  [I18nKey.atomCopyLink]: "複製鏈接",
  [I18nKey.atomLatestPosts]: "最新文章",
  [I18nKey.atomWhatIsAtom]: "什麼是 Atom？",
  [I18nKey.atomWhatIsAtomDescription]: "Atom聯合格式（Atom Syndication Format）是一個基於XML的標準，用於描述訂閱源及其信息項。通過 Atom，你可以：",
  [I18nKey.atomBenefit1]: "及時獲取網站最新內容，無需手動訪問",
  [I18nKey.atomBenefit2]: "在一個地方管理多個網站的訂閱",
  [I18nKey.atomBenefit3]: "避免錯過重要更新和文章",
  [I18nKey.atomBenefit4]: "享受無廣告的純淨閱讀體驗",
  [I18nKey.atomHowToUse]: "推薦使用 Feedly、Inoreader 或其他 Atom 閱讀器來訂閱本站。",
  [I18nKey.atomCopied]: "Atom 鏈接已複製到剪貼板！",
  [I18nKey.atomCopyFailed]: "複製失敗，請手動複製鏈接",
  // 技能展示頁面
  [I18nKey.skills]: "技能展示",
  [I18nKey.skillsSubtitle]: "我的技術技能和專業知識",
  [I18nKey.skillsFrontend]: "前端開發",
  [I18nKey.skillsBackend]: "後端開發",
  [I18nKey.skillsDatabase]: "數據庫",
  [I18nKey.skillsTools]: "開發工具",
  [I18nKey.skillsOther]: "其他技能",
  [I18nKey.skillLevel]: "熟練度",
  [I18nKey.skillLevelBeginner]: "初學者",
  [I18nKey.skillLevelIntermediate]: "中級",
  [I18nKey.skillLevelAdvanced]: "高級",
  [I18nKey.skillLevelExpert]: "專家",
  [I18nKey.skillExperience]: "經驗",
  [I18nKey.skillYears]: "年",
  [I18nKey.skillMonths]: "個月",
  [I18nKey.skillsTotal]: "總技能數",
  [I18nKey.skillsExpert]: "專家級",
  [I18nKey.skillsAdvanced]: "高級",
  [I18nKey.skillsIntermediate]: "中級",
  [I18nKey.skillsBeginner]: "初級",
  [I18nKey.skillsAdvancedTitle]: "專業技能",
  [I18nKey.skillsProjects]: "相關項目",
  [I18nKey.skillsDistribution]: "技能分布",
  [I18nKey.skillsByLevel]: "按等級分布",
  [I18nKey.skillsByCategory]: "按分類分布",
  // 時間線頁面
  [I18nKey.timeline]: "時間線",
  [I18nKey.timelineSubtitle]: "我的成長歷程和重要里程碑",
  [I18nKey.timelineEducation]: "教育經歷",
  [I18nKey.timelineWork]: "工作經歷",
  [I18nKey.timelineProject]: "項目經歷",
  [I18nKey.timelineAchievement]: "成就榮譽",
  [I18nKey.timelinePresent]: "至今",
  [I18nKey.timelineLocation]: "地點",
  [I18nKey.timelineDescription]: "詳細描述",
  [I18nKey.timelineMonths]: "個月",
  [I18nKey.timelineYears]: "年",
  [I18nKey.timelineTotal]: "總計",
  [I18nKey.timelineProjects]: "項目數",
  [I18nKey.timelineExperience]: "工作經驗",
  [I18nKey.timelineCurrent]: "當前狀態",
  [I18nKey.timelineHistory]: "歷史記錄",
  [I18nKey.timelineAchievements]: "成就榮譽",
  [I18nKey.timelineStartDate]: "開始日期",
  [I18nKey.timelineDuration]: "持續時間",
  // 其他
  [I18nKey.noData]: "暫無數據",
  // 密碼保護
  [I18nKey.passwordProtected]: "密碼保護",
  [I18nKey.passwordProtectedTitle]: "此內容受密碼保護",
  [I18nKey.passwordProtectedDescription]: "請輸入密碼以查看受保護的內容",
  [I18nKey.passwordPlaceholder]: "請輸入密碼",
  [I18nKey.passwordUnlock]: "解鎖",
  [I18nKey.passwordUnlocking]: "解鎖中...",
  [I18nKey.passwordIncorrect]: "密碼錯誤，請重試",
  [I18nKey.passwordDecryptError]: "解密失敗，請檢查密碼是否正確",
  [I18nKey.passwordRequired]: "請輸入密碼",
  [I18nKey.passwordVerifying]: "驗證中...",
  [I18nKey.passwordDecryptFailed]: "解密失敗，請檢查密碼",
  [I18nKey.passwordDecryptRetry]: "解密失敗，請重試",
  [I18nKey.passwordUnlockButton]: "解鎖",
  [I18nKey.copyFailed]: "複製失敗:",
  [I18nKey.syntaxHighlightFailed]: "語法高亮失敗:",
  [I18nKey.autoSyntaxHighlightFailed]: "自動語法高亮也失敗:",
  [I18nKey.decryptionError]: "解密過程中發生錯誤:",
  //最後編輯時間卡片
  [I18nKey.lastModifiedPrefix]: "距離上次編輯: ",
  [I18nKey.lastModifiedOutdated]: "部分信息可能已經過時",
  [I18nKey.year]: "年",
  [I18nKey.month]: "月",
  [I18nKey.day]: "天",
  [I18nKey.hour]: "小時",
  [I18nKey.minute]: "分",
  [I18nKey.second]: "秒",
  // 壁紙模式
  [I18nKey.wallpaperBanner]: "橫幅模式",
  [I18nKey.wallpaperFullscreen]: "全屏模式",
  [I18nKey.wallpaperNone]: "隱藏壁紙",
  // 站點統計
  [I18nKey.siteStats]: "站點統計",
  [I18nKey.siteStatsPostCount]: "文章數",
  [I18nKey.siteStatsCategoryCount]: "分類數",
  [I18nKey.siteStatsTagCount]: "標籤數",
  [I18nKey.siteStatsTotalWords]: "總字數",
  [I18nKey.siteStatsRunningDays]: "運行天數",
  [I18nKey.siteStatsLastUpdate]: "最後活動",
  [I18nKey.siteStatsDaysAgo]: "{days} 天前",
  [I18nKey.siteStatsDays]: "{days} 天",
  // 日曆組件
  [I18nKey.calendarSunday]: "日",
  [I18nKey.calendarMonday]: "一",
  [I18nKey.calendarTuesday]: "二",
  [I18nKey.calendarWednesday]: "三",
  [I18nKey.calendarThursday]: "四",
  [I18nKey.calendarFriday]: "五",
  [I18nKey.calendarSaturday]: "六",
  [I18nKey.calendarJanuary]: "1月",
  [I18nKey.calendarFebruary]: "2月",
  [I18nKey.calendarMarch]: "3月",
  [I18nKey.calendarApril]: "4月",
  [I18nKey.calendarMay]: "5月",
  [I18nKey.calendarJune]: "6月",
  [I18nKey.calendarJuly]: "7月",
  [I18nKey.calendarAugust]: "8月",
  [I18nKey.calendarSeptember]: "9月",
  [I18nKey.calendarOctober]: "10月",
  [I18nKey.calendarNovember]: "11月",
  [I18nKey.calendarDecember]: "12月"
};

const zh_TW$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	zh_TW
}, Symbol.toStringTag, { value: 'Module' }));

var e=e=>Object.prototype.toString.call(e),t=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),o=t=>"[object Date]"===e(t),n=t=>"[object RegExp]"===e(t),r=t=>"[object Error]"===e(t),s=t=>"[object Boolean]"===e(t),l=t=>"[object Number]"===e(t),i=t=>"[object String]"===e(t),c=Array.isArray,u=Object.getOwnPropertyDescriptor,a=Object.prototype.propertyIsEnumerable,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.keys;function d(e){const t=h(e),o=f(e);for(let n=0;n<o.length;n++)a.call(e,o[n])&&t.push(o[n]);return t}function b(e,t){return !u(e,t)?.writable}function y(e,u){if("object"==typeof e&&null!==e){let a;if(c(e))a=[];else if(o(e))a=new Date(e.getTime?e.getTime():e);else if(n(e))a=new RegExp(e);else if(r(e))a={message:e.message};else if(s(e)||l(e)||i(e))a=Object(e);else {if(t(e))return e.slice();a=Object.create(Object.getPrototypeOf(e));}const f=u.includeSymbols?d:h;for(const t of f(e))a[t]=e[t];return a}return e}var g={includeSymbols:false,immutable:false};function m(e,t,o=g){const n=[],r=[];let s=true;const l=o.includeSymbols?d:h,i=!!o.immutable;return function e(u){const a=i?y(u,o):u,f={};let h=true;const d={node:a,node_:u,path:[].concat(n),parent:r[r.length-1],parents:r,key:n[n.length-1],isRoot:0===n.length,level:n.length,circular:void 0,isLeaf:false,notLeaf:true,notRoot:true,isFirst:false,isLast:false,update:function(e,t=false){d.isRoot||(d.parent.node[d.key]=e),d.node=e,t&&(h=false);},delete:function(e){delete d.parent.node[d.key],e&&(h=false);},remove:function(e){c(d.parent.node)?d.parent.node.splice(d.key,1):delete d.parent.node[d.key],e&&(h=false);},keys:null,before:function(e){f.before=e;},after:function(e){f.after=e;},pre:function(e){f.pre=e;},post:function(e){f.post=e;},stop:function(){s=false;},block:function(){h=false;}};if(!s)return d;function g(){if("object"==typeof d.node&&null!==d.node){d.keys&&d.node_===d.node||(d.keys=l(d.node)),d.isLeaf=0===d.keys.length;for(let e=0;e<r.length;e++)if(r[e].node_===u){d.circular=r[e];break}}else d.isLeaf=true,d.keys=null;d.notLeaf=!d.isLeaf,d.notRoot=!d.isRoot;}g();const m=t(d,d.node);if(void 0!==m&&d.update&&d.update(m),f.before&&f.before(d,d.node),!h)return d;if("object"==typeof d.node&&null!==d.node&&!d.circular){r.push(d),g();for(const[t,o]of Object.entries(d.keys??[])){n.push(o),f.pre&&f.pre(d,d.node[o],o);const r=e(d.node[o]);i&&p.call(d.node,o)&&!b(d.node,o)&&(d.node[o]=r.node),r.isLast=!!d.keys?.length&&+t==d.keys.length-1,r.isFirst=0==+t,f.post&&f.post(d,r),n.pop();}r.pop();}return f.after&&f.after(d,d.node),d}(e).node}var j=class{#e;#t;constructor(e,t=g){this.#e=e,this.#t=t;}get(e){let t=this.#e;for(let o=0;t&&o<e.length;o++){const n=e[o];if(!p.call(t,n)||!this.#t.includeSymbols&&"symbol"==typeof n)return;t=t[n];}return t}has(e){let t=this.#e;for(let o=0;t&&o<e.length;o++){const n=e[o];if(!p.call(t,n)||!this.#t.includeSymbols&&"symbol"==typeof n)return  false;t=t[n];}return  true}set(e,t){let o=this.#e,n=0;for(n=0;n<e.length-1;n++){const t=e[n];p.call(o,t)||(o[t]={}),o=o[t];}return o[e[n]]=t,t}map(e){return m(this.#e,e,{immutable:true,includeSymbols:!!this.#t.includeSymbols})}forEach(e){return this.#e=m(this.#e,e,this.#t),this.#e}reduce(e,t){const o=1===arguments.length;let n=o?this.#e:t;return this.forEach(((t,r)=>{t.isRoot&&o||(n=e(t,n,r));})),n}paths(){const e=[];return this.forEach((t=>{e.push(t.path);})),e}nodes(){const e=[];return this.forEach((t=>{e.push(t.node);})),e}clone(){const e=[],o=[],n=this.#t;return t(this.#e)?this.#e.slice():function t(r){for(let t=0;t<e.length;t++)if(e[t]===r)return o[t];if("object"==typeof r&&null!==r){const s=y(r,n);e.push(r),o.push(s);const l=n.includeSymbols?d:h;for(const e of l(r))s[e]=t(r[e]);return e.pop(),o.pop(),s}return r}(this.#e)}};

/*
How it works:
`this.#head` is an instance of `Node` which keeps track of its current value and nests another instance of `Node` that keeps the value that comes after it. When a value is provided to `.enqueue()`, the code needs to iterate through `this.#head`, going deeper and deeper to find the last value. However, iterating through every single item is slow. This problem is solved by saving a reference to the last value as `this.#tail` so that it can reference it to add a new value.
*/

class Node {
	value;
	next;

	constructor(value) {
		this.value = value;
	}
}

class Queue {
	#head;
	#tail;
	#size;

	constructor() {
		this.clear();
	}

	enqueue(value) {
		const node = new Node(value);

		if (this.#head) {
			this.#tail.next = node;
			this.#tail = node;
		} else {
			this.#head = node;
			this.#tail = node;
		}

		this.#size++;
	}

	dequeue() {
		const current = this.#head;
		if (!current) {
			return;
		}

		this.#head = this.#head.next;
		this.#size--;

		// Clean up tail reference when queue becomes empty
		if (!this.#head) {
			this.#tail = undefined;
		}

		return current.value;
	}

	peek() {
		if (!this.#head) {
			return;
		}

		return this.#head.value;

		// TODO: Node.js 18.
		// return this.#head?.value;
	}

	clear() {
		this.#head = undefined;
		this.#tail = undefined;
		this.#size = 0;
	}

	get size() {
		return this.#size;
	}

	* [Symbol.iterator]() {
		let current = this.#head;

		while (current) {
			yield current.value;
			current = current.next;
		}
	}

	* drain() {
		while (this.#head) {
			yield this.dequeue();
		}
	}
}

function pLimit(concurrency) {
	validateConcurrency(concurrency);

	const queue = new Queue();
	let activeCount = 0;

	const resumeNext = () => {
		if (activeCount < concurrency && queue.size > 0) {
			queue.dequeue()();
			// Since `pendingCount` has been decreased by one, increase `activeCount` by one.
			activeCount++;
		}
	};

	const next = () => {
		activeCount--;

		resumeNext();
	};

	const run = async (function_, resolve, arguments_) => {
		const result = (async () => function_(...arguments_))();

		resolve(result);

		try {
			await result;
		} catch {}

		next();
	};

	const enqueue = (function_, resolve, arguments_) => {
		// Queue `internalResolve` instead of the `run` function
		// to preserve asynchronous context.
		new Promise(internalResolve => {
			queue.enqueue(internalResolve);
		}).then(
			run.bind(undefined, function_, resolve, arguments_),
		);

		(async () => {
			// This function needs to wait until the next microtask before comparing
			// `activeCount` to `concurrency`, because `activeCount` is updated asynchronously
			// after the `internalResolve` function is dequeued and called. The comparison in the if-statement
			// needs to happen asynchronously as well to get an up-to-date value for `activeCount`.
			await Promise.resolve();

			if (activeCount < concurrency) {
				resumeNext();
			}
		})();
	};

	const generator = (function_, ...arguments_) => new Promise(resolve => {
		enqueue(function_, resolve, arguments_);
	});

	Object.defineProperties(generator, {
		activeCount: {
			get: () => activeCount,
		},
		pendingCount: {
			get: () => queue.size,
		},
		clearQueue: {
			value() {
				queue.clear();
			},
		},
		concurrency: {
			get: () => concurrency,

			set(newConcurrency) {
				validateConcurrency(newConcurrency);
				concurrency = newConcurrency;

				queueMicrotask(() => {
					// eslint-disable-next-line no-unmodified-loop-condition
					while (activeCount < concurrency && queue.size > 0) {
						resumeNext();
					}
				});
			},
		},
	});

	return generator;
}

function validateConcurrency(concurrency) {
	if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
		throw new TypeError('Expected `concurrency` to be a number from 1 and up');
	}
}

function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function removeLeadingForwardSlash(path) {
  return path.startsWith("/") ? path.substring(1) : path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map((path, i) => {
    if (i === 0) {
      return removeTrailingForwardSlash(path);
    } else if (i === paths.length - 1) {
      return removeLeadingForwardSlash(path);
    } else {
      return trimSlashes(path);
    }
  }).join("/");
}
function isRemotePath(src) {
  if (!src) return false;
  const trimmed = src.trim();
  if (!trimmed) return false;
  let decoded = trimmed;
  let previousDecoded = "";
  let maxIterations = 10;
  while (decoded !== previousDecoded && maxIterations > 0) {
    previousDecoded = decoded;
    try {
      decoded = decodeURIComponent(decoded);
    } catch {
      break;
    }
    maxIterations--;
  }
  if (/^[a-zA-Z]:/.test(decoded)) {
    return false;
  }
  if (decoded[0] === "/" && decoded[1] !== "/" && decoded[1] !== "\\") {
    return false;
  }
  if (decoded[0] === "\\") {
    return true;
  }
  if (decoded.startsWith("//")) {
    return true;
  }
  try {
    const url = new URL(decoded, "http://n");
    if (url.username || url.password) {
      return true;
    }
    if (decoded.includes("@") && !url.pathname.includes("@") && !url.search.includes("@")) {
      return true;
    }
    if (url.origin !== "http://n") {
      const protocol = url.protocol.toLowerCase();
      if (protocol === "file:") {
        return false;
      }
      return true;
    }
    if (URL.canParse(decoded)) {
      return true;
    }
    return false;
  } catch {
    return true;
  }
}
function slash(path) {
  return path.replace(/\\/g, "/");
}
function removeBase(path, base) {
  if (path.startsWith(base)) {
    return path.slice(removeTrailingForwardSlash(base).length);
  }
  return path;
}

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";
const CONTENT_LAYER_TYPE = "content_layer";
const LIVE_CONTENT_TYPE = "live";

const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position"
];

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

function getImporterFilename() {
  const stackLine = new Error().stack?.split("\n").find(
    (line) => !line.includes("defineCollection") && !line.includes("defineLiveCollection") && !line.includes("getImporterFilename") && !line.startsWith("Error")
  );
  if (!stackLine) {
    return void 0;
  }
  const match = /\/((?:src|chunks)\/.*?):\d+:\d+/.exec(stackLine);
  return match?.[1] ?? void 0;
}
function defineCollection$1(config) {
  const importerFilename = getImporterFilename();
  if (importerFilename?.includes("live.config")) {
    throw new AstroError({
      ...LiveContentConfigError,
      message: LiveContentConfigError.message(
        "Collections in a live config file must use `defineLiveCollection`.",
        importerFilename
      )
    });
  }
  if ("loader" in config) {
    if (config.type && config.type !== CONTENT_LAYER_TYPE) {
      throw new AstroUserError(
        `Collections that use the Content Layer API must have a \`loader\` defined and no \`type\` set. Check your collection definitions in ${importerFilename ?? "your content config file"}.`
      );
    }
    if (typeof config.loader === "object" && typeof config.loader.load !== "function" && ("loadEntry" in config.loader || "loadCollection" in config.loader)) {
      throw new AstroUserError(
        `Live content collections must be defined in "src/live.config.ts" file. Check your collection definitions in "${importerFilename ?? "your content config file"}" to ensure you are not using a live loader.`
      );
    }
    config.type = CONTENT_LAYER_TYPE;
  }
  if (!config.type) config.type = "content";
  return config;
}

/**
 * Base64 Encodes an arraybuffer
 * @param {ArrayBuffer} arraybuffer
 * @returns {string}
 */

/**
 * Decodes a base64 string into an arraybuffer
 * @param {string} string
 * @returns {ArrayBuffer}
 */
function decode64(string) {
  const binaryString = asciiToBinary(string);
  const arraybuffer = new ArrayBuffer(binaryString.length);
  const dv = new DataView(arraybuffer);

  for (let i = 0; i < arraybuffer.byteLength; i++) {
    dv.setUint8(i, binaryString.charCodeAt(i));
  }

  return arraybuffer;
}

const KEY_STRING =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

/**
 * Substitute for atob since it's deprecated in node.
 * Does not do any input validation.
 *
 * @see https://github.com/jsdom/abab/blob/master/lib/atob.js
 *
 * @param {string} data
 * @returns {string}
 */
function asciiToBinary(data) {
  if (data.length % 4 === 0) {
    data = data.replace(/==?$/, "");
  }

  let output = "";
  let buffer = 0;
  let accumulatedBits = 0;

  for (let i = 0; i < data.length; i++) {
    buffer <<= 6;
    buffer |= KEY_STRING.indexOf(data[i]);
    accumulatedBits += 6;
    if (accumulatedBits === 24) {
      output += String.fromCharCode((buffer & 0xff0000) >> 16);
      output += String.fromCharCode((buffer & 0xff00) >> 8);
      output += String.fromCharCode(buffer & 0xff);
      buffer = accumulatedBits = 0;
    }
  }
  if (accumulatedBits === 12) {
    buffer >>= 4;
    output += String.fromCharCode(buffer);
  } else if (accumulatedBits === 18) {
    buffer >>= 2;
    output += String.fromCharCode((buffer & 0xff00) >> 8);
    output += String.fromCharCode(buffer & 0xff);
  }
  return output;
}

const UNDEFINED = -1;
const HOLE = -2;
const NAN = -3;
const POSITIVE_INFINITY = -4;
const NEGATIVE_INFINITY = -5;
const NEGATIVE_ZERO = -6;

/**
 * Revive a value flattened with `devalue.stringify`
 * @param {number | any[]} parsed
 * @param {Record<string, (value: any) => any>} [revivers]
 */
function unflatten(parsed, revivers) {
	if (typeof parsed === 'number') return hydrate(parsed, true);

	if (!Array.isArray(parsed) || parsed.length === 0) {
		throw new Error('Invalid input');
	}

	const values = /** @type {any[]} */ (parsed);

	const hydrated = Array(values.length);

	/**
	 * @param {number} index
	 * @returns {any}
	 */
	function hydrate(index, standalone = false) {
		if (index === UNDEFINED) return undefined;
		if (index === NAN) return NaN;
		if (index === POSITIVE_INFINITY) return Infinity;
		if (index === NEGATIVE_INFINITY) return -Infinity;
		if (index === NEGATIVE_ZERO) return -0;

		if (standalone || typeof index !== 'number') {
			throw new Error(`Invalid input`);
		}

		if (index in hydrated) return hydrated[index];

		const value = values[index];

		if (!value || typeof value !== 'object') {
			hydrated[index] = value;
		} else if (Array.isArray(value)) {
			if (typeof value[0] === 'string') {
				const type = value[0];

				switch (type) {
					case 'Date':
						hydrated[index] = new Date(value[1]);
						break;

					case 'Set':
						const set = new Set();
						hydrated[index] = set;
						for (let i = 1; i < value.length; i += 1) {
							set.add(hydrate(value[i]));
						}
						break;

					case 'Map':
						const map = new Map();
						hydrated[index] = map;
						for (let i = 1; i < value.length; i += 2) {
							map.set(hydrate(value[i]), hydrate(value[i + 1]));
						}
						break;

					case 'RegExp':
						hydrated[index] = new RegExp(value[1], value[2]);
						break;

					case 'Object':
						hydrated[index] = Object(value[1]);
						break;

					case 'BigInt':
						hydrated[index] = BigInt(value[1]);
						break;

					case 'null':
						const obj = Object.create(null);
						hydrated[index] = obj;
						for (let i = 1; i < value.length; i += 2) {
							obj[value[i]] = hydrate(value[i + 1]);
						}
						break;

					case 'Int8Array':
					case 'Uint8Array':
					case 'Uint8ClampedArray':
					case 'Int16Array':
					case 'Uint16Array':
					case 'Int32Array':
					case 'Uint32Array':
					case 'Float32Array':
					case 'Float64Array':
					case 'BigInt64Array':
					case 'BigUint64Array': {
						const TypedArrayConstructor = globalThis[type];
						const typedArray = new TypedArrayConstructor(hydrate(value[1]));

						hydrated[index] =
							value[2] !== undefined
								? typedArray.subarray(value[2], value[3])
								: typedArray;

						break;
					}

					case 'ArrayBuffer': {
						const base64 = value[1];
						const arraybuffer = decode64(base64);
						hydrated[index] = arraybuffer;
						break;
					}

					case 'Temporal.Duration':
					case 'Temporal.Instant':
					case 'Temporal.PlainDate':
					case 'Temporal.PlainTime':
					case 'Temporal.PlainDateTime':
					case 'Temporal.PlainMonthDay':
					case 'Temporal.PlainYearMonth':
					case 'Temporal.ZonedDateTime': {
						const temporalName = type.slice(9);
						// @ts-expect-error TS doesn't know about Temporal yet
						hydrated[index] = Temporal[temporalName].from(value[1]);
						break;
					}

					case 'URL': {
						const url = new URL(value[1]);
						hydrated[index] = url;
						break;
					}

					case 'URLSearchParams': {
						const url = new URLSearchParams(value[1]);
						hydrated[index] = url;
						break;
					}

					default:
						throw new Error(`Unknown type ${type}`);
				}
			} else {
				const array = new Array(value.length);
				hydrated[index] = array;

				for (let i = 0; i < value.length; i += 1) {
					const n = value[i];
					if (n === HOLE) continue;

					array[i] = hydrate(n);
				}
			}
		} else {
			/** @type {Record<string, any>} */
			const object = {};
			hydrated[index] = object;

			for (const key in value) {
				if (key === '__proto__') {
					throw new Error('Cannot parse an object with a `__proto__` property');
				}

				const n = value[key];
				object[key] = hydrate(n);
			}
		}

		return hydrated[index];
	}

	return hydrate(0);
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_CdtjRn_M.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/mizuki-blog/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
objectType({
  tags: arrayType(stringType()).optional(),
  lastModified: dateType().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames,
  liveCollections
}) {
  return async function getEntry(collectionOrLookupObject, lookup) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!lookup)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = lookup;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
      });
    }
    if (typeof lookupId === "object") {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `The entry identifier must be a string. Received object.`
      });
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      if (entry2.legacyId) {
        return emulateLegacyEntry({ ...entry2, collection });
      }
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(
        `The collection ${JSON.stringify(collection)} does not exist. Please ensure it is defined in your content config.`
      );
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_CT7LrGpm.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { Path: process.env.Path }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new j(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}
function defineCollection(config) {
  if (config.type === "live") {
    throw new AstroError({
      ...LiveContentConfigError,
      message: LiveContentConfigError.message(
        "Collections with type `live` must be defined in a `src/live.config.ts` file."
      )
    });
  }
  return defineCollection$1(config);
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
	liveCollections,
});

export { config as A, en$1 as B, CONTENT_LAYER_TYPE as C, DEFAULT_OUTPUT_FORMAT as D, ja$1 as E, zh_CN$1 as F, zh_TW$1 as G, I18nKey as I, LIVE_CONTENT_TYPE as L, VALID_SUPPORTED_FORMATS as V, siteConfig as a, slash as b, commentConfig as c, defineCollection as d, pLimit as e, DEFAULT_HASH_PROPS as f, getEntry as g, announcementConfig as h, isRemotePath as i, joinPaths as j, LinkPreset as k, licenseConfig as l, pioConfig as m, navBarConfig as n, fullscreenWallpaperConfig as o, profileConfig as p, ja as q, renderEntry as r, sidebarLayoutConfig as s, zh_CN as t, umamiConfig as u, en as v, getCollection as w, i18nKey as x, config$1 as y, zh_TW as z };
