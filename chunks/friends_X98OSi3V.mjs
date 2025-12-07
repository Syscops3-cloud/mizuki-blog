/* empty css                          */
import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, b as addAttribute, m as maybeRenderHead, r as renderScript } from './astro/server_CFIJpBV_.mjs';
import { g as getEntry, r as renderEntry, I as I18nKey } from './_astro_content_nJCuh7Be.mjs';
import $$Markdown from './Markdown_CVimKEuO.mjs';
import { getShuffledFriendsList } from './friends_D-8vOcHI.mjs';
import { i as i18n } from './sakura-manager_BcW8Ox11.mjs';
import { $ as $$MainGridLayout } from './MainGridLayout_CN5EEUhk.mjs';
/* empty css                           */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Friends = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Friends;
  const friendsPost = await getEntry("spec", "friends");
  if (!friendsPost) {
    throw new Error("friends page content not found");
  }
  const { Content } = await renderEntry(friendsPost);
  const friendsList = getShuffledFriendsList();
  const allTags = Array.from(new Set(friendsList.flatMap((item) => item.tags)));
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.friends), "description": i18n(I18nKey.friends), "data-astro-cid-spp2p3no": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  <script>\n		// \u6807\u8BB0\u5F53\u524D\u9875\u9762\u4E3A\u53CB\u60C5\u94FE\u63A5\u9875\u9762\n		window.isFriendsPage = true;\n	<\/script> ", " ", '<div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative min-h-32" data-astro-cid-spp2p3no> <div class="card-base z-10 px-9 py-6 relative w-full" data-astro-cid-spp2p3no> <!-- \u9875\u9762\u6807\u9898 --> <div class="flex flex-col items-start justify-center mb-8" data-astro-cid-spp2p3no> <h1 class="text-4xl font-bold text-black/90 dark:text-white/90 mb-2 relative\n                  before:w-1 before:h-8 before:rounded-md before:bg-[var(--primary)]\n                  before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-4" data-astro-cid-spp2p3no> ', ' </h1> <p class="text-lg text-black/60 dark:text-white/60" data-astro-cid-spp2p3no> ', ' </p> </div> <!-- \u641C\u7D22\u548C\u7B5B\u9009\u680F --> <div class="mb-6 space-y-3" data-astro-cid-spp2p3no> <!-- \u641C\u7D22\u6846 --> <div class="w-full" data-astro-cid-spp2p3no> <div class="relative" data-astro-cid-spp2p3no> <input type="text" id="friend-search"', ' class="w-full px-4 py-2 pl-10 rounded-lg bg-[var(--btn-regular-bg)] \n									text-black/90 dark:text-white/90\n									border border-black/10 dark:border-white/10\n									focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50\n									transition-all duration-200" data-astro-cid-spp2p3no> <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40 dark:text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-spp2p3no> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-spp2p3no></path> </svg> </div> </div> <!-- \u6807\u7B7E\u7B5B\u9009 --> <div class="filter-container flex flex-wrap gap-2" data-astro-cid-spp2p3no> <button class="filter-tag active" data-tag="all" data-astro-cid-spp2p3no> ', " </button> ", ' </div> </div> <!-- \u53CB\u94FE\u5361\u7247\u7F51\u683C --> <div id="friends-grid" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-6" data-astro-cid-spp2p3no> ', ' </div> <!-- \u65E0\u7ED3\u679C\u63D0\u793A --> <div id="no-results" class="hidden text-center py-12" data-astro-cid-spp2p3no> <svg class="w-16 h-16 mx-auto mb-4 text-black/20 dark:text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-spp2p3no> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-spp2p3no></path> </svg> <p class="text-black/50 dark:text-white/50 text-lg" data-astro-cid-spp2p3no>', "</p> </div> <!-- \u8BF4\u660E\u6587\u6863 --> ", ' <!-- \u9690\u85CF\u5143\u7D20\u7528\u4E8E\u4F20\u9012 i18n \u6587\u672C\u5230\u5168\u5C40\u811A\u672C --> <div id="friends-copy-success-text" style="display: none;" data-astro-cid-spp2p3no>', '</div> </div> </div>  <script src="/js/friends-page-handler.js"><\/script> '])), renderScript($$result2, "D:/lyf/blog/my_blog/src/pages/friends.astro?astro&type=script&index=0&lang.ts"), maybeRenderHead(), i18n(I18nKey.friends), i18n(I18nKey.friendsSubtitle), addAttribute(i18n(I18nKey.friendsSearchPlaceholder), "placeholder"), i18n(I18nKey.friendsFilterAll), allTags.map((tag) => renderTemplate`<button class="filter-tag"${addAttribute(tag, "data-tag")} data-astro-cid-spp2p3no> ${tag} </button>`), friendsList.map((item) => renderTemplate`<div class="friend-card group relative bg-transparent rounded-xl border border-black/10 dark:border-white/10
								 overflow-hidden transition-all duration-300
								 hover:shadow-xl hover:-translate-y-1"${addAttribute(item.title.toLowerCase(), "data-title")}${addAttribute(item.desc.toLowerCase(), "data-desc")}${addAttribute(item.tags.join(","), "data-tags")} data-astro-cid-spp2p3no> <!-- 卡片内容 --> <div class="p-6" data-astro-cid-spp2p3no> <!-- 头像和标题区 --> <div class="flex items-start gap-4 mb-4" data-astro-cid-spp2p3no> <!-- 网站图标 --> <div class="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden 
												bg-[var(--btn-regular-bg)] 
												ring-2 ring-transparent
												transition-all duration-300" data-astro-cid-spp2p3no> <img${addAttribute(item.imgurl, "src")}${addAttribute(item.title, "alt")} class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" loading="lazy" data-astro-cid-spp2p3no> </div> <!-- 标题和链接 --> <div class="flex-1 min-w-0" data-astro-cid-spp2p3no> <h3 class="text-xl font-bold text-black/90 dark:text-white/90 mb-1 truncate
												 group-hover:text-[var(--primary)] transition-colors duration-200" data-astro-cid-spp2p3no> ${item.title} </h3> <a${addAttribute(item.siteurl, "href")} target="_blank" rel="noopener noreferrer" class="text-xs text-black/50 dark:text-white/50 hover:text-[var(--primary)] 
												 truncate block transition-colors duration-200" data-astro-cid-spp2p3no> ${new URL(item.siteurl).hostname} </a> </div> </div> <!-- 描述 --> <p class="text-sm text-black/60 dark:text-white/60 mb-4 line-clamp-2 min-h-[2.5rem]" data-astro-cid-spp2p3no> ${item.desc} </p> <!-- 标签 --> <div class="flex flex-wrap gap-2 mb-4" data-astro-cid-spp2p3no> ${item.tags.map((tag) => renderTemplate`<span class="px-2 py-1 text-xs rounded-md 
													bg-[var(--primary)]/10 text-[var(--primary)] 
													font-medium" data-astro-cid-spp2p3no> ${tag} </span>`)} </div> <!-- 操作按钮 --> <div class="flex gap-2" data-astro-cid-spp2p3no> <a${addAttribute(item.siteurl, "href")} target="_blank" rel="noopener noreferrer" class="flex-1 flex items-center justify-center gap-2 px-4 py-2 
											 rounded-lg bg-[var(--primary)] text-white 
											 hover:bg-[var(--primary)]/90 
											 active:scale-95 transition-all duration-200
											 font-medium text-sm" data-astro-cid-spp2p3no> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-spp2p3no> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-astro-cid-spp2p3no></path> </svg> ${i18n(I18nKey.friendsVisit)} </a> <button class="copy-link-btn px-3 py-2 rounded-lg 
											 bg-[var(--btn-regular-bg)] 
											 hover:bg-[var(--btn-regular-bg-hover)] 
											 active:scale-95 transition-all duration-200
											 text-black/70 dark:text-white/70"${addAttribute(item.siteurl, "data-url")}${addAttribute(i18n(I18nKey.friendsCopyLink), "title")} data-astro-cid-spp2p3no> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-spp2p3no> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" data-astro-cid-spp2p3no></path> </svg> </button> </div> </div> <!-- 悬停装饰效果 --> <div class="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent 
										opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" data-astro-cid-spp2p3no></div> </div>`), i18n(I18nKey.friendsNoResults), renderComponent($$result2, "Markdown", $$Markdown, { "class": "mt-8 prose dark:prose-invert max-w-none", "data-astro-cid-spp2p3no": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, { "data-astro-cid-spp2p3no": true })} ` }), i18n(I18nKey.friendsCopySuccess)) })} `;
}, "D:/lyf/blog/my_blog/src/pages/friends.astro", void 0);

const $$file = "D:/lyf/blog/my_blog/src/pages/friends.astro";
const $$url = "/mizuki-blog/friends/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Friends,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
