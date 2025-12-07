/* empty css                          */
import { c as createComponent, a as createAstro, e as renderComponent, r as renderScript, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_CFIJpBV_.mjs';
import { $ as $$MainGridLayout, a as $$Icon } from './MainGridLayout_CN5EEUhk.mjs';
import { c as getSortedPosts, i as i18n } from './sakura-manager_BcW8Ox11.mjs';
import { formatDateToYYYYMMDD } from './date-utils_B-gLlDu-.mjs';
import { I as I18nKey } from './_astro_content_nJCuh7Be.mjs';

const $$Astro = createAstro();
const $$Atom = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Atom;
  const posts = (await getSortedPosts()).filter((post) => !post.data.encrypted);
  const recentPosts = posts.slice(0, 6);
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.atom), "description": i18n(I18nKey.atomDescription) }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="onload-animation"> <!-- Atom 标题和介绍 --> <div class="card-base rounded-[var(--radius-large)] p-8 mb-6"> <div class="text-center"> <div class="inline-flex items-center justify-center w-16 h-16 bg-[var(--primary)] rounded-2xl mb-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:rss-feed", "class": "text-white text-3xl" })} </div> <h1 class="text-3xl font-bold text-[var(--primary)] mb-3">${i18n(I18nKey.atom)}</h1> <p class="text-75 max-w-2xl mx-auto"> ${i18n(I18nKey.atomSubtitle)} </p> </div> </div> <!-- Atom 链接复制区域 --> <div class="card-base rounded-[var(--radius-large)] p-6 mb-6"> <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"> <div class="flex items-center"> <div class="w-12 h-12 bg-[var(--primary)] rounded-xl flex items-center justify-center mr-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:link", "class": "text-white text-xl" })} </div> <div> <h3 class="font-semibold text-90 mb-1">${i18n(I18nKey.atomLink)}</h3> <p class="text-sm text-75">${i18n(I18nKey.atomCopyToReader)}</p> </div> </div> <div class="flex flex-col sm:flex-row gap-3"> <code class="bg-[var(--card-bg)] px-3 py-2 rounded-lg text-sm font-mono text-75 border border-[var(--line-divider)] break-all"> ${Astro2.site}atom.xml
</code> <button id="copy-atom-btn" class="px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:opacity-80 transition-all duration-200 font-medium text-sm whitespace-nowrap"${addAttribute(`${Astro2.site}atom.xml`, "data-url")}> ${i18n(I18nKey.atomCopyLink) || "Copy Link"} </button> </div> </div> </div> <!-- 最新文章预览 --> <div class="card-base rounded-[var(--radius-large)] p-6 mb-6"> <h2 class="text-xl font-bold text-90 mb-4 flex items-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:article", "class": "mr-2 text-[var(--primary)]" })} ${i18n(I18nKey.atomLatestPosts)} </h2> <div class="space-y-4"> ${recentPosts.map((post) => renderTemplate`<article class="bg-[var(--card-bg)] rounded-xl p-4 border border-[var(--line-divider)] hover:border-[var(--primary)] transition-all duration-300"> <h3 class="text-lg font-semibold text-90 mb-2 hover:text-[var(--primary)] transition-colors"> <a${addAttribute(`/posts/${post.id}/`, "href")} class="hover:underline"> ${post.data.title} </a> </h3> ${post.data.description && renderTemplate`<p class="text-75 mb-3 line-clamp-2"> ${post.data.description} </p>`} <div class="flex items-center gap-4 text-sm text-60"> <time${addAttribute(post.data.published.toISOString(), "datetime")} class="text-75"> ${formatDateToYYYYMMDD(post.data.published)} </time> </div> </article>`)} </div> </div> <!-- Atom 说明 --> <div class="card-base rounded-[var(--radius-large)] p-6"> <h2 class="text-xl font-bold text-90 mb-4 flex items-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:help-outline", "class": "mr-2 text-[var(--primary)]" })} ${i18n(I18nKey.atomWhatIsAtom)} </h2> <div class="text-75 space-y-3"> <p> ${i18n(I18nKey.atomWhatIsAtomDescription)} </p> <ul class="list-disc list-inside space-y-1 ml-4"> <li>${i18n(I18nKey.atomBenefit1)}</li> <li>${i18n(I18nKey.atomBenefit2)}</li> <li>${i18n(I18nKey.atomBenefit3)}</li> <li>${i18n(I18nKey.atomBenefit4)}</li> </ul> </div> </div> </div> ` })} ${renderScript($$result, "D:/lyf/blog/my_blog/src/pages/atom.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/lyf/blog/my_blog/src/pages/atom.astro", void 0);

const $$file = "D:/lyf/blog/my_blog/src/pages/atom.astro";
const $$url = "/mizuki-blog/atom/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Atom,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
