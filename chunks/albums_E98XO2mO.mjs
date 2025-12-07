/* empty css                          */
import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, r as renderScript, m as maybeRenderHead, b as addAttribute } from './astro/server_CFIJpBV_.mjs';
import { I as I18nKey } from './_astro_content_nJCuh7Be.mjs';
import { i as i18n } from './sakura-manager_BcW8Ox11.mjs';
import { $ as $$MainGridLayout } from './MainGridLayout_CN5EEUhk.mjs';
import { scanAlbums } from './album-scanner_CDsbbxoy.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$Albums = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Albums;
  const albumsData = await scanAlbums();
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.albums), "description": i18n(I18nKey.albumsSubtitle), "data-astro-cid-b6yaaygw": true }, { "default": async ($$result2) => renderTemplate`  ${renderScript($$result2, "D:/lyf/blog/my_blog/src/pages/albums.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative min-h-32" data-astro-cid-b6yaaygw> <div class="card-base z-10 px-9 py-6 relative w-full" data-astro-cid-b6yaaygw> <!-- 页面标题 --> <header class="mb-8" data-astro-cid-b6yaaygw> <h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 relative
                  before:w-1 before:h-8 before:rounded-md before:bg-[var(--primary)]
                  before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-4" data-astro-cid-b6yaaygw> ${i18n(I18nKey.albums)} </h1> <p class="text-neutral-600 dark:text-neutral-400" data-astro-cid-b6yaaygw> ${i18n(I18nKey.albumsSubtitle)} </p> </header> <!-- 相册网格 --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-b6yaaygw> ${albumsData.map((album) => renderTemplate`<article class="album-card group bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200 dark:border-neutral-800" data-astro-cid-b6yaaygw> <a${addAttribute(`/albums/${album.id}/`, "href")} class="block" data-astro-cid-b6yaaygw> <!-- 封面图片 --> <div class="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-700" data-astro-cid-b6yaaygw> <img${addAttribute(album.cover, "src")}${addAttribute(album.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" data-astro-cid-b6yaaygw> </div> <!-- 相册信息 --> <div class="p-4" data-astro-cid-b6yaaygw> <h3 class="font-bold text-lg text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-[var(--primary)] transition-colors" data-astro-cid-b6yaaygw> ${album.title} </h3> ${album.description && renderTemplate`<p class="text-neutral-600 dark:text-neutral-400 text-sm mb-3 line-clamp-2" data-astro-cid-b6yaaygw> ${album.description} </p>`} <!-- 元数据 --> <div class="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-500" data-astro-cid-b6yaaygw> <div class="flex items-center gap-4" data-astro-cid-b6yaaygw> <span data-astro-cid-b6yaaygw>${album.photos.length} ${album.photos.length > 1 ? i18n(I18nKey.albumsPhotosCount) : i18n(I18nKey.albumsPhotoCount)}</span> ${album.location && renderTemplate`<span class="flex items-center gap-1" data-astro-cid-b6yaaygw> <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-b6yaaygw> <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" data-astro-cid-b6yaaygw></path> </svg> ${album.location} </span>`} </div> <time data-astro-cid-b6yaaygw>${new Date(album.date).toLocaleDateString("zh-CN")}</time> </div> <!-- 标签 --> ${album.tags && album.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1 mt-3" data-astro-cid-b6yaaygw> ${album.tags.slice(0, 3).map((tag) => renderTemplate`<span class="btn-regular h-6 text-xs px-2 rounded-lg" data-astro-cid-b6yaaygw> ${tag} </span>`)} ${album.tags.length > 3 && renderTemplate`<span class="btn-regular h-6 text-xs px-2 rounded-lg" data-astro-cid-b6yaaygw>
+${album.tags.length - 3} </span>`} </div>`} </div> </a> </article>`)} </div> <!-- 空状态 --> ${albumsData.length === 0 && renderTemplate`<div class="text-center py-12" data-astro-cid-b6yaaygw> <div class="text-neutral-400 dark:text-neutral-600 mb-4" data-astro-cid-b6yaaygw> <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-b6yaaygw> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-b6yaaygw></path> </svg> </div> <h3 class="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-2" data-astro-cid-b6yaaygw> ${i18n(I18nKey.albumsEmpty)} </h3> <p class="text-neutral-600 dark:text-neutral-400" data-astro-cid-b6yaaygw> ${i18n(I18nKey.albumsEmptyDesc)} </p> </div>`} </div> </div> ` })} `;
}, "D:/lyf/blog/my_blog/src/pages/albums.astro", void 0);

const $$file = "D:/lyf/blog/my_blog/src/pages/albums.astro";
const $$url = "/mizuki-blog/albums/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Albums,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
