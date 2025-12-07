class AnimationManager {
  static instance;
  isAnimating = false;
  animationQueue = [];
  static getInstance() {
    if (!AnimationManager.instance) {
      AnimationManager.instance = new AnimationManager();
    }
    return AnimationManager.instance;
  }
  /**
   * 初始化动画系统
   */
  init() {
    this.setupSwupIntegration();
    this.setupScrollAnimations();
    console.log("🎨 Animation Manager initialized");
  }
  /**
   * 设置 Swup 集成
   */
  setupSwupIntegration() {
    if (typeof window !== "undefined" && window.swup) {
      const swup = window.swup;
      swup.hooks.on("animation:out:start", () => {
        this.triggerPageLeaveAnimation();
      });
      swup.hooks.on("animation:in:start", () => {
        this.triggerPageEnterAnimation();
      });
      swup.hooks.on("content:replace", () => {
        setTimeout(() => {
          this.initializePageAnimations();
        }, 50);
      });
    }
  }
  /**
   * 触发页面离开动画
   */
  triggerPageLeaveAnimation() {
    this.isAnimating = true;
    document.documentElement.classList.add("is-leaving");
    const isMobile = window.innerWidth <= 768;
    const delay = isMobile ? 10 : 30;
    const mainElements = document.querySelectorAll(".transition-leaving");
    mainElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("animate-leave");
      }, index * delay);
    });
  }
  /**
   * 触发页面进入动画
   */
  triggerPageEnterAnimation() {
    document.documentElement.classList.remove("is-leaving");
    document.documentElement.classList.add("is-entering");
    const elements = document.querySelectorAll(".animate-leave");
    elements.forEach((element) => {
      element.classList.remove("animate-leave");
    });
    setTimeout(() => {
      document.documentElement.classList.remove("is-entering");
      this.isAnimating = false;
      this.processAnimationQueue();
    }, 300);
  }
  /**
   * 初始化页面动画
   */
  initializePageAnimations() {
    const animatedElements = document.querySelectorAll(".onload-animation");
    animatedElements.forEach((element, index) => {
      const htmlElement = element;
      const delay = Number.parseInt(htmlElement.style.animationDelay, 10) || index * 50;
      htmlElement.style.opacity = "0";
      htmlElement.style.transform = "translateY(1.5rem)";
      setTimeout(() => {
        htmlElement.style.transition = "opacity 320ms cubic-bezier(0.4, 0, 0.2, 1), transform 320ms cubic-bezier(0.4, 0, 0.2, 1)";
        htmlElement.style.opacity = "1";
        htmlElement.style.transform = "translateY(0)";
      }, delay);
    });
    this.initializeSidebarComponents();
  }
  /**
   * 初始化侧边栏组件
   */
  initializeSidebarComponents() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      const event = new CustomEvent("sidebar:init");
      sidebar.dispatchEvent(event);
    }
    const globalEvent = new CustomEvent("page:reinit");
    document.dispatchEvent(globalEvent);
  }
  /**
   * 设置滚动动画
   */
  setupScrollAnimations() {
    if (typeof window === "undefined") return;
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -100px 0px",
      threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    const scrollElements = document.querySelectorAll(".animate-on-scroll");
    scrollElements.forEach((element) => {
      observer.observe(element);
    });
  }
  /**
   * 添加动画到队列
   */
  queueAnimation(callback) {
    if (this.isAnimating) {
      this.animationQueue.push(callback);
    } else {
      callback();
    }
  }
  /**
   * 处理动画队列
   */
  processAnimationQueue() {
    while (this.animationQueue.length > 0) {
      const callback = this.animationQueue.shift();
      if (callback) {
        callback();
      }
    }
  }
  /**
   * 创建自定义动画
   */
  createAnimation(element, config) {
    const {
      duration = 300,
      delay = 0,
      easing = "cubic-bezier(0.4, 0, 0.2, 1)",
      direction = "up"
    } = config;
    const transforms = {
      up: "translateY(1.5rem)",
      down: "translateY(-1.5rem)",
      left: "translateX(1.5rem)",
      right: "translateX(-1.5rem)"
    };
    element.style.opacity = "0";
    element.style.transform = transforms[direction];
    element.style.transition = `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`;
    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translate(0)";
    }, delay);
  }
  // batchAnimate is deprecated, use staggerAnimations instead
  // batchAnimate(
  // 	elements: NodeListOf<Element> | Element[],
  // 	config: AnimationConfig & { stagger?: number } = {},
  // ): void {
  // 	const { stagger = 50, ...animationConfig } = config;
  //
  // 	elements.forEach((element, index) => {
  // 		this.createAnimation(element as HTMLElement, {
  // 			...animationConfig,
  // 			delay: (animationConfig.delay || 0) + index * stagger,
  // 		});
  // 	});
  // }
  /**
   * 批量动画
   */
  staggerAnimations(elements, config = {}) {
    const { stagger = 50, ...animationConfig } = config;
    elements.forEach((element, index) => {
      this.createAnimation(element, {
        ...animationConfig,
        delay: (animationConfig.delay || 0) + index * stagger
      });
    });
  }
  /**
   * 检查是否正在动画
   */
  isCurrentlyAnimating() {
    return this.isAnimating;
  }
}
const animationManager = AnimationManager.getInstance();
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      animationManager.init();
    });
  } else {
    animationManager.init();
  }
}

export { AnimationManager, animationManager };
