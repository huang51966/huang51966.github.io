(() => {
  const revealItems = document.querySelectorAll("[data-reveal]");
  const reveal = (element) => element.classList.add("is-visible");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealItems.forEach((element) => observer.observe(element));
  } else {
    revealItems.forEach(reveal);
  }

  const langToggle = document.querySelector("[data-lang-toggle]");
  const i18n = {
    zh: {
      title: "黄思柏 | 科技感个人网站",
      "brand-name": "黄思柏",
      "brand-tag": "本科生",
      "nav-about": "关于",
      "nav-projects": "项目",
      "nav-blog": "博客",
      "nav-contact": "联系",
      status: "开放合作",
      eyebrow: "你好，我是",
      "hero-title": "黄思柏",
      "hero-lead":
        "是一名热爱编程，热爱生活的计算机er。<br>目前就读于北京大学信息科学技术学院，是一名24级计算机科学与技术专业的学生。<br>我的兴趣主要在CV与大语言模型方向。<br>偶尔会打Valorant。",
      "cta-projects": "查看项目",
      "cta-contact": "联系我",
      "info-focus-label": "方向",
      "info-focus-value": "计算机科学与技术",
      "info-location-label": "位置",
      "info-location-value": "中国 / 北京",
      "info-status-label": "状态",
      "info-status-value": "可合作",
      "about-title": "关于我",
      "about-subtitle": "热衷用清晰的交互与视觉语言让技术更可感",
      "stack-title": "技术栈",
      "stack-desc": "编程语言与软技能",
      "focus-title": "正在关注",
      "focus-desc": "关注计算机视觉、强化学习与大语言模型方向。",
      "focus-chip-cv": "CV",
      "focus-chip-rl": "强化学习",
      "focus-chip-llm": "大语言模型",
      "projects-title": "项目选集",
      "projects-desc": "以下为我近期完成的项目，点击可查看源码。",
      "project-1-meta": "桌面应用 / Qt + C++",
      "project-1-title": "北大树坑 · 校园论坛系统",
      "project-1-desc": "基于 Qt 的客户端-服务器校园论坛，支持发帖、评论、收藏、搜索与匿名发布，采用 JSON 通信与多客户端并发。",
      "project-2-meta": "AI 应用 / 多 Agent",
      "project-2-title": "学术论文写作助手",
      "project-2-desc": "多 Agent 协作写作系统，提供文献推荐、PDF 总结与学术诚信检查，含 PyQt6 桌面端交互。",
      "project-3-meta": "桌面游戏 / C++ + EasyX",
      "project-3-title": "五子棋 · Renju Game",
      "project-3-desc": "基于 C++ 与 EasyX 的五子棋小游戏，包含菜单界面、双人/人机对战、黑棋禁手规则与存档读档功能。",
      "contact-title": "联系",
      "contact-desc": "如果你有新项目或合作想法，欢迎联系。",
      "contact-email-label": "邮箱",
      "contact-github-label": "GitHub",
      "copy-email": "复制邮箱",
      "copy-toast": "已复制邮箱",
      "blog-title": "博客",
      "blog-desc": "记录学习与项目的思考，以及一些有趣的技术片段。",
      "blog-back": "返回主页",
      "blog-1-meta": "2025.01 · 学习笔记",
      "blog-1-title": "从博弈到搜索：五子棋 AI 的小结",
      "blog-1-desc": "记录评分函数、禁手判断与对局体验的实现要点。",
      "blog-1-status": "草稿",
      "blog-2-meta": "2024.12 · 项目复盘",
      "blog-2-title": "视觉与交互：EasyX 项目体验总结",
      "blog-2-desc": "复盘界面动效、可用性设计与代码结构优化思路。",
      "blog-2-status": "整理中",
      "blog-3-meta": "2024.11 · 研究方向",
      "blog-3-title": "CV 与大语言模型的交叉可能性",
      "blog-3-desc": "记录近期阅读的想法，以及可能的研究方向。",
      "blog-3-status": "构思中",
    },
    en: {
      title: "Huang Sibai | Tech Portfolio",
      "brand-name": "Huang Sibai",
      "brand-tag": "Undergraduate Student",
      "nav-about": "About",
      "nav-projects": "Projects",
      "nav-blog": "Blog",
      "nav-contact": "Contact",
      status: "Available for collaboration",
      eyebrow: "Hello, I'm",
      "hero-title": "Huang Sibai",
      "hero-lead":
        "A CS student who loves coding and life.<br>Currently studying at the School of Information Science and Technology, Peking University (Class of 2024), majoring in Computer Science and Technology.<br>My interests focus on computer vision and large language models.<br>I occasionally play Valorant.",
      "cta-projects": "View Projects",
      "cta-contact": "Contact Me",
      "info-focus-label": "Focus",
      "info-focus-value": "Computer Science and Technology",
      "info-location-label": "Location",
      "info-location-value": "China / Beijing",
      "info-status-label": "Status",
      "info-status-value": "Available",
      "about-title": "About",
      "about-subtitle": "Passionate about making technology tangible with clear interaction and visual language.",
      "stack-title": "Tech Stack",
      "stack-desc": "Programming languages and soft skills",
      "focus-title": "Focus Areas",
      "focus-desc": "Interested in computer vision, reinforcement learning, and large language models.",
      "focus-chip-cv": "CV",
      "focus-chip-rl": "Reinforcement Learning",
      "focus-chip-llm": "Large Language Models",
      "projects-title": "Projects",
      "projects-desc": "Recent projects with source code links.",
      "project-1-meta": "Desktop App / Qt + C++",
      "project-1-title": "PKU Treehole · Campus Forum",
      "project-1-desc":
        "A Qt-based client-server campus forum featuring posts, comments, favorites, search, and anonymous sharing with JSON messaging and multi-client concurrency.",
      "project-2-meta": "AI App / Multi-Agent",
      "project-2-title": "Academic Writing Assistant",
      "project-2-desc":
        "A multi-agent writing system with literature recommendations, PDF summaries, and academic integrity checks, plus a PyQt6 desktop UI.",
      "project-3-meta": "Desktop Game / C++ + EasyX",
      "project-3-title": "Renju Game",
      "project-3-desc":
        "A C++/EasyX Renju game with menu UI, PvP/PvE modes, forbidden move rules, and save/load support.",
      "contact-title": "Contact",
      "contact-desc": "If you have a project or collaboration in mind, feel free to reach out.",
      "contact-email-label": "Email",
      "contact-github-label": "GitHub",
      "copy-email": "Copy Email",
      "copy-toast": "Email copied",
      "blog-title": "Blog",
      "blog-desc": "Notes on learning, projects, and interesting technical snippets.",
      "blog-back": "Back to Home",
      "blog-1-meta": "2025.01 · Study Notes",
      "blog-1-title": "From Game to Search: Notes on Renju AI",
      "blog-1-desc": "Key ideas on scoring functions, forbidden moves, and gameplay experience.",
      "blog-1-status": "Draft",
      "blog-2-meta": "2024.12 · Project Review",
      "blog-2-title": "Visuals & Interaction: EasyX Project Takeaways",
      "blog-2-desc": "Reflections on motion, usability, and code structure improvements.",
      "blog-2-status": "In Progress",
      "blog-3-meta": "2024.11 · Research",
      "blog-3-title": "Where CV Meets LLMs",
      "blog-3-desc": "Recent reading notes and possible research directions.",
      "blog-3-status": "Idea",
    },
  };

  const i18nText = document.querySelectorAll("[data-i18n]");
  const i18nHtml = document.querySelectorAll("[data-i18n-html]");
  let currentLang = "zh";

  const getTranslation = (lang, key) => {
    const table = i18n[lang] || i18n.zh;
    return table[key] || i18n.zh[key] || "";
  };

  const applyTranslations = (lang) => {
    const normalized = lang === "en" ? "en" : "zh";
    document.documentElement.lang = normalized === "en" ? "en" : "zh-CN";

    i18nText.forEach((element) => {
      const key = element.dataset.i18n;
      const value = getTranslation(normalized, key);
      if (value) {
        element.textContent = value;
      }
    });

    i18nHtml.forEach((element) => {
      const key = element.dataset.i18nHtml;
      const value = getTranslation(normalized, key);
      if (value) {
        element.innerHTML = value;
      }
    });

    const title = document.querySelector("title");
    if (title) {
      const value = getTranslation(normalized, "title");
      if (value) {
        title.textContent = value;
      }
    }

    if (langToggle) {
      const toggleText = normalized === "en" ? "EN / 中文" : "中文 / EN";
      const toggleLabel = normalized === "en" ? "Switch to Chinese" : "切换为英文";
      langToggle.textContent = toggleText;
      langToggle.setAttribute("aria-label", toggleLabel);
      langToggle.setAttribute("title", toggleLabel);
    }
  };

  const setLanguage = (lang) => {
    currentLang = lang === "en" ? "en" : "zh";
    applyTranslations(currentLang);
    try {
      window.localStorage.setItem("lang", currentLang);
    } catch (error) {
      // Ignore storage errors.
    }
  };

  const getInitialLang = () => {
    try {
      const stored = window.localStorage.getItem("lang");
      if (stored === "en" || stored === "zh") {
        return stored;
      }
    } catch (error) {
      // Ignore storage errors.
    }
    const browserLang = (navigator.language || "").toLowerCase();
    return browserLang.startsWith("zh") ? "zh" : "en";
  };

  setLanguage(getInitialLang());

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      setLanguage(currentLang === "zh" ? "en" : "zh");
    });
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const getActivePage = () => document.querySelector("[data-page].is-active");

  const switchPage = (pageId, onDone) => {
    const current = getActivePage();
    const target = document.querySelector(`[data-page="${pageId}"]`);
    if (!target || target === current) {
      if (typeof onDone === "function") {
        onDone();
      }
      return;
    }

    target.classList.remove("is-active");

    if (reduceMotion.matches) {
      if (current) {
        current.classList.remove("is-active");
      }
      target.classList.add("is-active");
      if (typeof onDone === "function") {
        onDone();
      }
      return;
    }

    if (current) {
      current.classList.add("is-exiting");
    }
    target.classList.add("is-entering");

    const handleExit = () => {
      if (!current) {
        return;
      }
      current.classList.remove("is-exiting", "is-active");
      current.removeEventListener("animationend", handleExit);
    };

    const handleEnter = () => {
      target.classList.remove("is-entering");
      target.classList.add("is-active");
      target.removeEventListener("animationend", handleEnter);
      if (typeof onDone === "function") {
        onDone();
      }
    };

    if (current) {
      current.addEventListener("animationend", handleExit);
    }
    target.addEventListener("animationend", handleEnter);
  };

  const pageButtons = document.querySelectorAll("[data-page-switch]");
  pageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetPage = button.dataset.pageSwitch;
      if (!targetPage) {
        return;
      }
      switchPage(targetPage, () => {
        window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
      });
    });
  });

  const hashLinks = document.querySelectorAll('a[href^="#"]');
  hashLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") {
        return;
      }
      const target = document.querySelector(hash);
      if (!target) {
        return;
      }
      const activePage = getActivePage();
      if (activePage && activePage.dataset.page !== "home") {
        event.preventDefault();
        switchPage("home", () => {
          target.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth" });
        });
      }
    });
  });

  const copyButton = document.querySelector("[data-copy-email]");
  const copyToast = document.querySelector("[data-copy-toast]");
  let toastTimer;

  const showToast = () => {
    if (!copyToast) {
      return;
    }
    copyToast.classList.add("is-visible");
    if (toastTimer) {
      window.clearTimeout(toastTimer);
    }
    toastTimer = window.setTimeout(() => {
      copyToast.classList.remove("is-visible");
    }, 1800);
  };

  const fallbackCopy = (value) => {
    const helper = document.createElement("textarea");
    helper.value = value;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    try {
      document.execCommand("copy");
    } catch (error) {
      // Ignore copy failures; toast still informs the user.
    }
    document.body.removeChild(helper);
  };

  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      const email = copyButton.dataset.email;
      if (!email) {
        return;
      }
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          fallbackCopy(email);
        }
      } catch (error) {
        fallbackCopy(email);
      }
      showToast();
    });
  }
})();

