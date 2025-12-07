/* empty css                          */
import { c as createComponent, e as renderComponent, d as renderTemplate, r as renderScript } from './astro/server_CFIJpBV_.mjs';
import { I as I18nKey } from './_astro_content_nJCuh7Be.mjs';
import { b as getSortedPostsList, i as i18n } from './sakura-manager_BcW8Ox11.mjs';
import { $ as $$MainGridLayout } from './MainGridLayout_CN5EEUhk.mjs';

const $$Archive = createComponent(async ($$result, $$props, $$slots) => {
  const sortedPostsList = await getSortedPostsList();
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.archive) }, { "default": async ($$result2) => renderTemplate`  ${renderScript($$result2, "D:/lyf/blog/my_blog/src/pages/archive.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result2, "ArchivePanel", null, { "sortedPosts": sortedPostsList, "client:only": "svelte", "client:component-hydration": "only", "client:component-path": "@components/ArchivePanel.svelte", "client:component-export": "default" })} ` })}`;
}, "D:/lyf/blog/my_blog/src/pages/archive.astro", void 0);

const $$file = "D:/lyf/blog/my_blog/src/pages/archive.astro";
const $$url = "/mizuki-blog/archive/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Archive,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
