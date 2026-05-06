export const defaultLang = "zh";

export const languages = {
  zh: "简体中文",
  en: "English",
};

export const ui = {
  zh: {
    "nav.skills": "Skills",
    "nav.pipelines": "Pipelines",
    "nav.customs": "Customs",
    "nav.experiences": "Experiences",
    "hero.title": "MaaHub",
    "hero.subtitle": "探索、分享、构建强大的 AI Agent 生态",
    "hero.search": "搜索 Skills, Pipelines, 自定义代码...",
    "search.placeholder": "搜索...",
    "hero.stats.skills": "个 Skills",
    "hero.stats.pipelines": "条 Pipelines",
    "hero.stats.downloads": "次下载",
    "hero.badge": "欢迎来到 MaaHub",
    "hero.title.prefix": "开放分享式",
    "hero.title.highlight": "MaaFramework",
    "hero.title.suffix": "社区集市",
    "hero.desc": "发现、挑选并集成由社区分享的 Skill、Pipeline、Custom 与经验",
    "hero.explore": "探索集市",
    "hero.contribute": "贡献指南",
    "hero.available": "可用项目",
    "category.skills.title": "Skills",
    "category.skills.desc":
      "开箱即用的实用 Agent skills，帮助您的 AI 更好的理解MaaFrameWork。",
    "category.pipelines.title": "Pipelines",
    "category.pipelines.desc": "常见范式、复杂场景与最佳实践。",
    "category.customs.title": "Customs",
    "category.customs.desc": "Python、Go等多语言的自定义扩展代码。",
    "category.experiences.title": "经验",
    "category.experiences.desc": "来自社区前辈的教程、指南与最佳实践！",
    "trending.title": "热门项目",
    "trending.desc": "社区中最受欢迎的 Skills、Pipelines 和 Customs 之一。",
    "trending.randomBadge": "随机发现",
    "trending.viewAll": "查看全部",
    "contribute.title": "参与贡献",
    "contribute.desc":
      "MaaHub 由社区驱动，向千万 MaaFramework 开发者分享您的 skill、pipeline、custom 以及您宝贵的经验！",
    "contribute.docs": "查看 PR 文档",
    "footer.built": "由 ",
    "footer.github": "MaaXYZ 社区",
    "footer.on": " 构建。",

    // Skills Page
    "skills.title": "探索 Skills",
    "skills.desc":
      "开箱即用的实用 Agent skills，帮助您的 AI 更好的理解MaaFrameWork。",
    "skills.search": "搜索 Skills...",
    "skills.filter.all": "所有状态",
    "skills.filter.stable": "稳定版 (Stable)",
    "skills.filter.beta": "测试版 (Beta)",
    "skills.sort.popular": "最多下载",
    "skills.sort.newest": "最新更新",
    "skills.empty": "没有找到符合条件的 Skills。",

    // Pipelines Page
    "pipelines.title": "探索 Pipelines",
    "pipelines.desc": "常见范式、复杂场景与最佳实践。",
    "pipelines.search": "搜索 Pipelines...",
    "pipelines.filter.all": "所有状态",
    "pipelines.filter.stable": "稳定版 (Stable)",
    "pipelines.filter.beta": "测试版 (Beta)",
    "pipelines.sort.popular": "最多下载",
    "pipelines.sort.newest": "最新更新",
    "pipelines.empty": "没有找到符合条件的 Pipelines。",

    // Customs Page
    "customs.title": "探索 Customs",
    "customs.desc": "Python、Go等多语言的自定义扩展代码。",
    "customs.search": "搜索 Customs...",
    "customs.filter.all": "所有状态",
    "customs.filter.stable": "稳定版 (Stable)",
    "customs.filter.beta": "测试版 (Beta)",
    "customs.sort.popular": "最多下载",
    "customs.sort.newest": "最新更新",
    "customs.empty": "没有找到符合条件的 Customs。",

    // Experiences Page
    "experiences.title": "探索 Experiences",
    "experiences.desc": "来自社区前辈的教程、指南与最佳实践！",
    "experiences.search": "搜索 Experiences...",
    "experiences.filter.all": "所有状态",
    "experiences.filter.stable": "稳定版 (Stable)",
    "experiences.filter.beta": "测试版 (Beta)",
    "experiences.sort.popular": "最多阅读",
    "experiences.sort.newest": "最新发布",
    "experiences.empty": "没有找到符合条件的 Experiences。",

    // Detail Pages
    "skill.install": "安装命令",
    "skill.readme": "说明文档",
    "skill.files": "文件列表",
    "skill.files.empty": "暂无可展示的文件。",
    "skill.download.title": "下载至本地",
    "skill.download": "下载 ZIP",
    "skill.download.desc": "下载当前模块的 ZIP 文件，方便本地使用或手动安装。",
    "skill.download.preparing": "正在准备 ZIP...",
    "skill.download.empty": "当前没有可下载的文件。",
    "skill.download.failed": "生成 ZIP 包失败。",
    "skill.inputs": "输入参数",
    "skill.outputs": "输出结果",
    "custom.aiWrite.title": "让 AI 写同款",
    "custom.aiWrite.desc": "将预制提示词与当前 custom 的全部文件内容拼成纯文本，复制后可直接粘贴到 Codex、CC、Kilo 等 agent IDE。",
    "custom.aiWrite.action": "复制给 AI 写同款",
    "custom.aiWrite.copied": "已复制到剪贴板",
    "custom.aiWrite.empty": "当前没有可用于生成提示词的文件。",
    "custom.aiWrite.failed": "复制提示词失败。",

    "pipeline.view.files": "文件模式",
    "pipeline.view.visual": "可视化模式",
    "pipeline.visual.loading": "正在连接可视化编辑器...",
    "pipeline.visual.ready": "可视化已加载",
    "pipeline.visual.fileLabel": "当前文件",
    "pipeline.visual.unavailable": "未找到可视化可用的 pipeline JSON 文件，暂不可使用可视化模式。",
    "pipeline.visual.invalidJson": "存在 JSON 文件解析失败，可改用文件模式查看源码。",
    "pipeline.visual.handshakeFailed": "可视化编辑器连接超时，请改用文件模式查看。",
    "pipeline.visual.loadFailed": "可视化加载失败，请改用文件模式查看。",

    "common.back": "返回",
    "common.updated": "更新于",
  },
  en: {
    "nav.skills": "Skills",
    "nav.pipelines": "Pipelines",
    "nav.customs": "Customs",
    "nav.experiences": "Experiences",
    "hero.title": "MaaHub",
    "hero.subtitle": "Explore, share, and build a powerful AI Agent ecosystem",
    "hero.search": "Search Skills, Pipelines, custom code...",
    "search.placeholder": "Search...",
    "hero.stats.skills": "Skills",
    "hero.stats.pipelines": "Pipelines",
    "hero.stats.downloads": "Downloads",
    "hero.badge": "Welcome to MaaHub",
    "hero.title.prefix": "Open Sharing",
    "hero.title.highlight": "MaaFramework",
    "hero.title.suffix": "Community Marketplace",
    "hero.desc":
      "Discover, select, and integrate community-shared Skills, Pipelines, Customs, and experiences.",
    "hero.explore": "Explore Marketplace",
    "hero.contribute": "Contribution Guide",
    "hero.available": "Available Items",
    "category.skills.title": "Skills",
    "category.skills.desc":
      "Ready-to-use practical Agent skills that help your AI better understand MaaFramework.",
    "category.pipelines.title": "Pipelines",
    "category.pipelines.desc":
      "Common paradigms, complex scenarios, and best practices.",
    "category.customs.title": "Customs",
    "category.customs.desc":
      "Custom extension code in multiple languages such as Python and Go.",
    "category.experiences.title": "Experiences",
    "category.experiences.desc":
      "Tutorials, guides, and best practices from experienced community members!",
    "trending.title": "Trending Items",
    "trending.desc":
      "The most popular Skills, Pipelines, and Customs from the community.",
    "trending.viewAll": "View All",
    "trending.randomBadge": "Discover Random",
    "contribute.title": "Join the Community",
    "contribute.desc":
      "MaaHub is community-driven. Share your skills, pipelines, customs, and valuable experiences with millions of MaaFramework developers!",
    "contribute.docs": "View PR Docs",
    "footer.built": "Built by the ",
    "footer.github": "MaaXYZ Community",
    "footer.on": ".",

    // Skills Page
    "skills.title": "Explore Skills",
    "skills.desc":
      "Ready-to-use practical Agent skills that help your AI better understand MaaFramework.",
    "skills.search": "Search Skills...",
    "skills.filter.all": "All Status",
    "skills.filter.stable": "Stable",
    "skills.filter.beta": "Beta",
    "skills.sort.popular": "Most Popular",
    "skills.sort.newest": "Newest",
    "skills.empty": "No matching skills found.",

    // Pipelines Page
    "pipelines.title": "Explore Pipelines",
    "pipelines.desc":
      "Common paradigms, complex scenarios, and best practices.",
    "pipelines.search": "Search Pipelines...",
    "pipelines.filter.all": "All Status",
    "pipelines.filter.stable": "Stable",
    "pipelines.filter.beta": "Beta",
    "pipelines.sort.popular": "Most Popular",
    "pipelines.sort.newest": "Newest",
    "pipelines.empty": "No matching pipelines found.",

    // Customs Page
    "customs.title": "Explore Customs",
    "customs.desc":
      "Custom extension code in multiple languages such as Python and Go.",
    "customs.search": "Search Customs...",
    "customs.filter.all": "All Status",
    "customs.filter.stable": "Stable",
    "customs.filter.beta": "Beta",
    "customs.sort.popular": "Most Popular",
    "customs.sort.newest": "Newest",
    "customs.empty": "No matching customs found.",

    // Experiences Page
    "experiences.title": "Explore Experiences",
    "experiences.desc":
      "Tutorials, guides, and best practices from experienced community members!",
    "experiences.search": "Search Experiences...",
    "experiences.filter.all": "All Status",
    "experiences.filter.stable": "Stable",
    "experiences.filter.beta": "Beta",
    "experiences.sort.popular": "Most Read",
    "experiences.sort.newest": "Newest",
    "experiences.empty": "No matching experiences found.",

    // Detail Pages
    "skill.install": "Install Command",
    "skill.readme": "README",
    "skill.files": "Files",
    "skill.files.empty": "No files available to display.",
    "skill.download.title": "Download to Local",
    "skill.download": "Download ZIP",
    "skill.download.desc": "Download the current module as a ZIP package for local use or manual installation.",
    "skill.download.preparing": "Preparing ZIP...",
    "skill.download.empty": "There are no files available for download.",
    "skill.download.failed": "Failed to generate the ZIP package.",
    "skill.inputs": "Inputs",
    "skill.outputs": "Outputs",
    "custom.aiWrite.title": "Write a Similar One",
    "custom.aiWrite.desc": "Combine a preset prompt with all files from this custom as plain text, then copy it for agent IDEs such as Codex, CC, and Kilo.",
    "custom.aiWrite.action": "Copy Prompt for AI",
    "custom.aiWrite.copied": "Copied to clipboard",
    "custom.aiWrite.empty": "There are no files available to build the prompt.",
    "custom.aiWrite.failed": "Failed to copy the prompt.",

    "pipeline.view.files": "Files",
    "pipeline.view.visual": "Visual",
    "pipeline.visual.loading": "Connecting to the visual editor...",
    "pipeline.visual.ready": "Visual editor loaded",
    "pipeline.visual.fileLabel": "File",
    "pipeline.visual.unavailable": "No pipeline JSON files are available for visualization, so visual mode is unavailable.",
    "pipeline.visual.invalidJson": "Some JSON files could not be parsed. Use files mode to inspect the source.",
    "pipeline.visual.handshakeFailed": "The visual editor connection timed out. Use files mode instead.",
    "pipeline.visual.loadFailed": "Failed to load the visual editor. Use files mode instead.",

    "common.back": "Back",
    "common.updated": "Updated",
  },
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}
