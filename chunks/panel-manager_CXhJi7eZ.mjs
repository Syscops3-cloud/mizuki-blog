class PanelManager {
  activePanels = /* @__PURE__ */ new Set();
  panelStack = [];
  duration = 100;
  /**
   * 应用动画打开浮窗
   */
  animateIn(panel) {
    return new Promise((resolve) => {
      const isThemeTransitioning = document.documentElement.classList.contains(
        "is-theme-transitioning"
      );
      if (isThemeTransitioning) {
        panel.classList.remove("float-panel-closed");
        panel.style.opacity = "1";
        panel.style.transform = "scale(1) translateY(0)";
        resolve();
        return;
      }
      panel.classList.remove("float-panel-closed");
      panel.style.opacity = "0";
      panel.style.transform = "scale(0.95) translateY(-10px)";
      panel.style.pointerEvents = "none";
      panel.offsetHeight;
      panel.style.transition = `all ${this.duration}ms ease-out`;
      requestAnimationFrame(() => {
        panel.style.opacity = "1";
        panel.style.transform = "scale(1) translateY(0)";
        panel.style.pointerEvents = "auto";
        setTimeout(() => {
          panel.style.transition = "";
          resolve();
        }, this.duration);
      });
    });
  }
  /**
   * 应用动画关闭浮窗
   */
  animateOut(panel) {
    return new Promise((resolve) => {
      const isThemeTransitioning = document.documentElement.classList.contains(
        "is-theme-transitioning"
      );
      if (isThemeTransitioning) {
        panel.classList.add("float-panel-closed");
        panel.style.opacity = "";
        panel.style.transform = "";
        resolve();
        return;
      }
      panel.style.transition = `all ${this.duration}ms ease-out`;
      panel.style.pointerEvents = "none";
      panel.style.opacity = "0";
      panel.style.transform = "scale(0.95) translateY(-10px)";
      setTimeout(() => {
        panel.classList.add("float-panel-closed");
        panel.style.transition = "";
        panel.style.opacity = "";
        panel.style.transform = "";
        panel.style.pointerEvents = "";
        resolve();
      }, this.duration);
    });
  }
  /**
   * 切换指定浮窗的开关状态
   * @param panelId 浮窗ID
   * @param forceState 强制设置状态 (可选)
   * @returns 浮窗最终状态 (true: 打开, false: 关闭)
   */
  async togglePanel(panelId, forceState) {
    const panel = document.getElementById(panelId);
    if (!panel) {
      console.warn(`Panel ${panelId} not found`);
      return false;
    }
    const isClosed = panel.classList.contains("float-panel-closed");
    const shouldOpen = forceState !== void 0 ? forceState : isClosed;
    if (shouldOpen) {
      await this.closeAllPanelsExcept(panelId);
      await this.animateIn(panel);
      this.activePanels.add(panelId);
      this.panelStack = this.panelStack.filter((id) => id !== panelId);
      this.panelStack.push(panelId);
      return true;
    }
    await this.closePanel(panelId);
    return false;
  }
  /**
   * 关闭指定浮窗
   * @param panelId 浮窗ID
   */
  async closePanel(panelId) {
    const panel = document.getElementById(panelId);
    if (panel && !panel.classList.contains("float-panel-closed")) {
      await this.animateOut(panel);
      this.activePanels.delete(panelId);
      this.panelStack = this.panelStack.filter((id) => id !== panelId);
    }
  }
  /**
   * 关闭指定浮窗外的所有浮窗
   * @param exceptPanelId 要保持打开的浮窗ID
   */
  async closeAllPanelsExcept(exceptPanelId) {
    const closingPromises = Array.from(this.activePanels).filter((panelId) => panelId !== exceptPanelId).map((panelId) => this.closePanel(panelId));
    await Promise.all(closingPromises);
  }
}
const panelManager = new PanelManager();
if (typeof window !== "undefined") {
  window.panelManager = panelManager;
}

export { panelManager as default, panelManager };
