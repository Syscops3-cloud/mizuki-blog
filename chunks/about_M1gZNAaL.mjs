/* empty css                          */
import { c as createComponent, e as renderComponent, d as renderTemplate, r as renderScript, m as maybeRenderHead } from './astro/server_CFIJpBV_.mjs';
import { g as getEntry, r as renderEntry, I as I18nKey } from './_astro_content_nJCuh7Be.mjs';
import $$Markdown from './Markdown_CVimKEuO.mjs';
import { i as i18n } from './sakura-manager_BcW8Ox11.mjs';
import { $ as $$MainGridLayout } from './MainGridLayout_CN5EEUhk.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const aboutPost = await getEntry("spec", "about");
  if (!aboutPost) {
    throw new Error("About page content not found");
  }
  const { Content } = await renderEntry(aboutPost);
  const title = i18n(I18nKey.about);
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": title }, { "default": async ($$result2) => renderTemplate`  ${renderScript($$result2, "D:/lyf/blog/my_blog/src/pages/about.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative min-h-32"> <div class="card-base z-10 px-9 py-6 relative w-full"> <!-- 页面标题 --> <div class="flex flex-col items-start justify-center mb-8"> <h1 class="text-4xl font-bold text-black/90 dark:text-white/90 mb-2 relative
                          before:w-1 before:h-8 before:rounded-md before:bg-[var(--primary)]
                          before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-4"> ${title} </h1> </div> <!-- 从MD文件读取的内容 --> ${renderComponent($$result2, "Markdown", $$Markdown, { "class": "mt-2" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, {})} ` })} </div> </div> ` })}`;
}, "D:/lyf/blog/my_blog/src/pages/about.astro", void 0);

const $$file = "D:/lyf/blog/my_blog/src/pages/about.astro";
const $$url = "/mizuki-blog/about/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
