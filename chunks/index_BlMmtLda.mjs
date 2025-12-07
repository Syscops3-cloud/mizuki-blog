/* empty css                          */
import { c as createComponent, a as createAstro, e as renderComponent, r as renderScript, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_CFIJpBV_.mjs';
import { I as I18nKey } from './_astro_content_nJCuh7Be.mjs';
import { i as i18n } from './sakura-manager_BcW8Ox11.mjs';
import { $ as $$MainGridLayout } from './MainGridLayout_CN5EEUhk.mjs';
import { scanAlbums } from './album-scanner_CDsbbxoy.mjs';
/* empty css                         */

const $$Astro = createAstro();
const getStaticPaths = async () => {
  const albumsData = await scanAlbums();
  return albumsData.map((album) => ({
    params: { id: album.id },
    props: { album }
  }));
};
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { album } = Astro2.props;
  if (!album) {
    return Astro2.redirect("/404/");
  }
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": album.title, "description": album.description || album.title, "data-astro-cid-rgidg7mq": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative min-h-32" data-astro-cid-rgidg7mq> <div class="card-base z-10 px-9 py-6 relative w-full" data-astro-cid-rgidg7mq> <!-- 返回按钮 --> <div class="mb-6" data-astro-cid-rgidg7mq> <a href="/albums/" class="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-[var(--primary)] transition-colors" data-astro-cid-rgidg7mq> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-rgidg7mq> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-rgidg7mq></path> </svg> ${i18n(I18nKey.albumsBackToList)} </a> </div> <!-- 相册标题信息 --> <header class="mb-8" data-astro-cid-rgidg7mq> <h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-3" data-astro-cid-rgidg7mq> ${album.title} </h1> ${album.description && renderTemplate`<p class="text-neutral-600 dark:text-neutral-400 mb-4" data-astro-cid-rgidg7mq> ${album.description} </p>`} <!-- 相册元数据 --> <div class="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500" data-astro-cid-rgidg7mq> <span data-astro-cid-rgidg7mq>${album.photos.length} ${album.photos.length > 1 ? i18n(I18nKey.albumsPhotosCount) : i18n(I18nKey.albumsPhotoCount)}</span> <time data-astro-cid-rgidg7mq>${new Date(album.date).toLocaleDateString("zh-CN")}</time> ${album.location && renderTemplate`<span class="flex items-center gap-1" data-astro-cid-rgidg7mq> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-rgidg7mq> <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" data-astro-cid-rgidg7mq></path> </svg> ${album.location} </span>`} </div> <!-- 标签 --> ${album.tags && album.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mt-4" data-astro-cid-rgidg7mq> ${album.tags.map((tag) => renderTemplate`<span class="btn-regular h-8 text-sm px-3 rounded-lg" data-astro-cid-rgidg7mq> ${tag} </span>`)} </div>`} </header> <!-- 照片网格 --> <div${addAttribute(`photo-gallery moment-images ${album.layout === "masonry" ? "masonry-layout" : "grid-layout"}`, "class")}${addAttribute(album.layout || "grid", "data-layout")}${addAttribute(album.columns || 3, "data-columns")} data-astro-cid-rgidg7mq> ${album.photos.map((photo, _index) => renderTemplate`<figure class="photo-item group relative overflow-hidden rounded-lg" data-astro-cid-rgidg7mq> <a href="javascript:void(0)"${addAttribute(photo.src, "data-src")} data-fancybox="gallery"${addAttribute(photo.title || photo.alt, "data-caption")} class="block" data-astro-cid-rgidg7mq> <img${addAttribute(photo.src, "src")}${addAttribute(photo.alt, "alt")} class="photo-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer" loading="lazy" data-astro-cid-rgidg7mq> </a> </figure>`)} </div> </div> </div> ` })} ${renderScript($$result, "D:/lyf/blog/my_blog/src/pages/albums/[id]/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/lyf/blog/my_blog/src/pages/albums/[id]/index.astro", void 0);

const $$file = "D:/lyf/blog/my_blog/src/pages/albums/[id]/index.astro";
const $$url = "/mizuki-blog/albums/[id]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
