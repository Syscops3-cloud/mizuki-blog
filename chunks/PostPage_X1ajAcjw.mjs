import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderScript, e as renderComponent, d as renderTemplate } from './astro/server_CFIJpBV_.mjs';
import { d as getPostUrl } from './sakura-manager_BcW8Ox11.mjs';
import { s as sidebarLayoutConfig, a as siteConfig } from './_astro_content_nJCuh7Be.mjs';
import $$PostCard from './PostCard_BOqRwHDr.mjs';
import './_page_.12145de2_ClrpWW0d.mjs';

const $$Astro = createAstro();
const $$PostPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostPage;
  const { page } = Astro2.props;
  let delay = 0;
  const interval = 50;
  const isBothSidebars = sidebarLayoutConfig.position === "both";
  const defaultLayout = siteConfig.postListLayout.defaultMode;
  const initialLayoutClass = "flex flex-col gap-2 md:gap-4 list-mode";
  return renderTemplate`${maybeRenderHead()}<div id="post-list-container"${addAttribute(`transition-all duration-500 ease-in-out rounded-[var(--radius-large)] bg-[var(--card-bg)] py-0 md:py-0 md:bg-transparent mb-4 ${initialLayoutClass}`, "class")}${addAttribute(defaultLayout, "data-default-layout")}${addAttribute(isBothSidebars, "data-both-sidebars")} data-astro-cid-l6a6buid> ${page.data.map((entry) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "entry": entry, "title": entry.data.title, "tags": entry.data.tags, "category": entry.data.category, "published": entry.data.published, "updated": entry.data.updated, "url": getPostUrl(entry), "image": entry.data.image, "description": entry.data.description, "draft": entry.data.draft, "pinned": entry.data.pinned, "class:list": "onload-animation", "style": `animation-delay: calc(var(--content-delay) + ${delay++ * interval}ms);`, "data-astro-cid-l6a6buid": true })}`)} </div> ${renderScript($$result, "D:/lyf/blog/my_blog/src/components/PostPage.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/lyf/blog/my_blog/src/components/PostPage.astro", void 0);

export { $$PostPage as default };
