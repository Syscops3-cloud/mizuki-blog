import { c as createComponent, m as maybeRenderHead, b as addAttribute, e as renderComponent, d as renderTemplate } from './astro/server_CFIJpBV_.mjs';
import { s as sidebarLayoutConfig } from './_astro_content_nJCuh7Be.mjs';
import { g as $$SiteStats, i as $$Calendar } from './MainGridLayout_CN5EEUhk.mjs';
import './_page_.12145de2_ClrpWW0d.mjs';

const $$RightSideBar = createComponent(($$result, $$props, $$slots) => {
  const rightSidebarComponents = sidebarLayoutConfig.components.filter(
    (component) => {
      return component.enable && component.sidebar === "right";
    }
  );
  rightSidebarComponents.sort((a, b) => a.order - b.order);
  const topComponents = rightSidebarComponents.filter(
    (component) => component.position === "top"
  );
  const stickyComponents = rightSidebarComponents.filter(
    (component) => component.position === "sticky"
  );
  return renderTemplate`${maybeRenderHead()}<div class="right-sidebar" id="right-sidebar" data-astro-cid-3qtauz4f> <!-- 顶部固定区域 --> <div class="sidebar-top" data-astro-cid-3qtauz4f> ${topComponents.map((component, _index) => renderTemplate`<div${addAttribute(`sidebar-component ${component.class || ""}`, "class")}${addAttribute(`animation-delay: ${component.animationDelay || 0}ms; ${component.style || ""}`, "style")} data-astro-cid-3qtauz4f> ${component.type === "site-stats" && renderTemplate`${renderComponent($$result, "SiteStats", $$SiteStats, { "data-astro-cid-3qtauz4f": true })}`} ${component.type === "calendar" && renderTemplate`${renderComponent($$result, "Calendar", $$Calendar, { "data-astro-cid-3qtauz4f": true })}`} </div>`)} </div> <!-- 粘性定位区域 --> <div class="sidebar-sticky" data-astro-cid-3qtauz4f> ${stickyComponents.map((component, _index) => renderTemplate`<div${addAttribute(`sidebar-component ${component.class || ""}`, "class")}${addAttribute(`animation-delay: ${component.animationDelay || 0}ms; ${component.style || ""}`, "style")} data-astro-cid-3qtauz4f> ${component.type === "site-stats" && renderTemplate`${renderComponent($$result, "SiteStats", $$SiteStats, { "data-astro-cid-3qtauz4f": true })}`} ${component.type === "calendar" && renderTemplate`${renderComponent($$result, "Calendar", $$Calendar, { "data-astro-cid-3qtauz4f": true })}`} </div>`)} </div> </div> `;
}, "D:/lyf/blog/my_blog/src/components/widget/RightSideBar.astro", void 0);

export { $$RightSideBar as default };
