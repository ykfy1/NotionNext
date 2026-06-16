const CONFIG = {

  LANDING_HEADER_BUTTON_1_TITLE: 'Github开源',
  LANDING_HEADER_BUTTON_1_URL: 'https://github.com/',

  LANDING_HEADER_BUTTON_2_TITLE: '楊飛躍的博客',
  LANDING_HEADER_BUTTON_2_URL: 'https://blog.yangfeiyue.eu.cc/?theme=hexo',

  // 首页大图英雄板块
  LANDING_HERO_TITLE_1: 'NotionNext',
  LANDING_HERO_P_1: '快速搭建独立站',
  LANDING_HERO_BUTTON_1_TEXT: '开始体验',
  LANDING_HERO_BUTTON_1_LINK: '',
  LANDING_HERO_BUTTON_2_TEXT: '',
  LANDING_HERO_BUTTON_2_LINK: '',
  LANDING_HERO_VIDEO_IMAGE: '/images/home.png',
  //   HERO_VIDEO_URL: '/videos/video.mp4',
  LANDING_HERO_VIDEO_IFRAME: '//player.bilibili.com/player.html?aid=913088616&bvid=BV1fM4y1L7Qi&cid=1187218697&page=1&&high_quality=1',
  LANDING_HERO_VIDEO_TIPS: 'Watch the full video (2 min)',

  // 特性介绍
  LANDING_FEATURES_HEADER_1: '探索的过程',
  LANDING_FEATURES_HEADER_1_P: "如何搭建自己的门户网站，塑造一个品牌展示中心？<br/>曾经，它是系统<strong class='font-bold text-red-500'>繁重</strong>的Wordpress、是操作<strong class='font-bold  text-red-500'>复杂</strong>的Hexo、是<strong class='font-bold text-red-500'>昂贵</strong>且<strong class='font-bold text-red-500'>不稳定</strong>的技术团队;<br/>现在，只要一个Notion笔记就够了",
  LANDING_FEATURES_HEADER_2: 'Notion+NextJs组合方案',
  LANDING_FEATURES_HEADER_2_P: '在Notion笔记中管理文章数据，NextJs将其渲染成网页排版，通过Vercel等第三方平台将您的网站发布到全球。',
  LANDING_FEATURES_CARD_1_TITLE: '简单快速的系统',
  LANDING_FEATURES_CARD_1_P: '在Notion中写下一篇文章，内容立刻在您的网站首页中呈现给互联网',
  LANDING_FEATURES_CARD_2_TITLE: '高效传播的媒介',
  LANDING_FEATURES_CARD_2_P: '优秀的SEO、快速的响应速度，让您的产品和宣传触达到更多的受众',
  LANDING_FEATURES_CARD_3_TITLE: '人性化的定制工具',
  LANDING_FEATURES_CARD_3_P: '多款主题供您挑选，可以搭建各种不同风格和作用的网站，更多的主题正在陆续加入中。',

  // 特性介绍2
  LANDING_FEATURES_BLOCK_HEADER: '解决方案',
  LANDING_FEATURES_BLOCK_P: '人人自媒体的时代，一个网站将帮您链接更多的人，带给你无限的机会和客户。<br/>您还在等什么呢？',
  LANDING_FEATURES_BLOCK_1_TITLE: '用网站来展示品牌',
  LANDING_FEATURES_BLOCK_1_P: '比起线下渠道、一个公开域名和网站更有说服力',
  LANDING_FEATURES_BLOCK_2_TITLE: 'SEO带来更多流量',
  LANDING_FEATURES_BLOCK_2_P: '借助搜索引擎，精准定位您的受众',
  LANDING_FEATURES_BLOCK_3_TITLE: '网站的性能很重要',
  LANDING_FEATURES_BLOCK_3_P: '更快的响应，更好的用户体验',
  LANDING_FEATURES_BLOCK_4_TITLE: '打造您的个人品牌',
  LANDING_FEATURES_BLOCK_4_P: '继马斯克、乔布斯之后，您将是下一个传奇',
  LANDING_FEATURES_BLOCK_5_TITLE: '写作表达是核心技能',
  LANDING_FEATURES_BLOCK_5_P: '比起只阅读输入，更重要的是反思和输出',
  LANDING_FEATURES_BLOCK_6_TITLE: '开始写博客吧',
  LANDING_FEATURES_BLOCK_6_P: 'NotionNext，助您轻松开始写作',

  // 感言
  LANDING_TESTIMONIALS_HEADER: '',
  LANDING_TESTIMONIALS_P: '',

  LANDING_TESTIMONIALS_AVATAR: '',
  LANDING_TESTIMONIALS_NICKNAME: '',
  LANDING_TESTIMONIALS_ID: '',
  LANDING_TESTIMONIALS_SOCIAL_NAME: '',
  LANDING_TESTIMONIALS_SOCIAL_URL: '',
  LANDING_TESTIMONIALS_WORD: '',

  LANDING_POST_REDIRECT_ENABLE: process.env.NEXT_PUBLIC_POST_REDIRECT_ENABLE || false, // 是否开启文章地址重定向 ； 用于迁移旧网站域名
  LANDING_POST_REDIRECT_URL: process.env.NEXT_PUBLIC_POST_REDIRECT_URL || 'https://blog.yangfeiyue.eu.cc/', // 重定向网站地址

  LANDING_PRICING_TITLE: '',
  LANDING_PRICING_P: '',

  LANDING_PRICING_1_TITLE: '',
  LANDING_PRICING_1_PRICE: '',
  LANDING_PRICING_1_CONTENT: '',
  LANDING_PRICING_1_BUTTON: '',
  LANDING_PRICING_1_URL: '',

  LANDING_PRICING_2_TITLE: '',
  LANDING_PRICING_2_PRICE: '',
  LANDING_PRICING_2_CONTENT: '',
  LANDING_PRICING_2_BUTTON: '',
  LANDING_PRICING_2_URL: '',

  LANDING_PRICING_3_TITLE: '',
  LANDING_PRICING_3_PRICE: '',
  LANDING_PRICING_3_CONTENT: '',
  LANDING_PRICING_3_BUTTON: '',
  LANDING_PRICING_3_URL: '',

  LANDING_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_LANDING_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
