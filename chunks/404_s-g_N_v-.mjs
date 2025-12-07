/* empty css                          */
import { c as createComponent, e as renderComponent, d as renderTemplate, r as renderScript, m as maybeRenderHead } from './astro/server_CFIJpBV_.mjs';
import { $ as $$MainGridLayout, a as $$Icon } from './MainGridLayout_CN5EEUhk.mjs';
import { I as I18nKey } from './_astro_content_nJCuh7Be.mjs';
import { i as i18n } from './sakura-manager_BcW8Ox11.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.notFound), "description": i18n(I18nKey.notFoundDescription), "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate`  ${renderScript($$result2, "D:/lyf/blog/my_blog/src/pages/404.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative min-h-96" data-astro-cid-zetdm5md> <div class="card-base z-10 px-9 py-12 relative w-full flex flex-col items-center justify-center text-center" data-astro-cid-zetdm5md> <!-- 404 大号数字 --> <div class="text-8xl md:text-9xl font-bold text-[var(--primary)] opacity-20 mb-4" data-astro-cid-zetdm5md> ${i18n(I18nKey.notFound)} </div> <!-- 404 图标 --> <div class="mb-6" data-astro-cid-zetdm5md> ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:error-outline", "class": "text-6xl text-[var(--primary)]", "data-astro-cid-zetdm5md": true })} </div> <!-- 标题 --> <h1 class="text-3xl md:text-4xl font-bold mb-4 text-90" data-astro-cid-zetdm5md> ${i18n(I18nKey.notFoundTitle)} </h1> <!-- 描述 --> <p class="text-lg text-75 mb-8 max-w-md" data-astro-cid-zetdm5md> ${i18n(I18nKey.notFoundDescription)} </p> <!-- 返回首页按钮 --> <a href="/" class="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-[var(--radius-large)] hover:opacity-95 transition-colors transition-transform duration-200 font-medium" data-astro-cid-zetdm5md> ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:home", "class": "text-xl", "data-astro-cid-zetdm5md": true })} ${i18n(I18nKey.backToHome)} </a> <!-- 装饰性元素 --> <div class="absolute top-4 left-4 opacity-10" data-astro-cid-zetdm5md> ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:sentiment-sad", "class": "text-4xl text-[var(--primary)]", "data-astro-cid-zetdm5md": true })} </div> <div class="absolute bottom-4 right-4 opacity-10" data-astro-cid-zetdm5md> ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:search-off", "class": "text-4xl text-[var(--primary)]", "data-astro-cid-zetdm5md": true })} </div> </div> </div> ` })} `;
}, "D:/lyf/blog/my_blog/src/pages/404.astro", void 0);

const $$file = "D:/lyf/blog/my_blog/src/pages/404.astro";
const $$url = "/mizuki-blog/404/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
