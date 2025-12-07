/* empty css                          */
import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, r as renderScript, m as maybeRenderHead, b as addAttribute } from './astro/server_CFIJpBV_.mjs';
import { I as I18nKey, a as siteConfig } from './_astro_content_nJCuh7Be.mjs';
import { getDiaryList, getDiaryStats } from './diary_C88Z95DQ.mjs';
import { i as i18n } from './sakura-manager_BcW8Ox11.mjs';
import { $ as $$MainGridLayout } from './MainGridLayout_CN5EEUhk.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$Diary = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Diary;
  const moments = getDiaryList();
  const diaryStats = getDiaryStats();
  function formatTime(dateString) {
    var TG = 8;
    TG = siteConfig.timeZone;
    const timeGap = TG;
    const now = /* @__PURE__ */ new Date();
    const date = new Date(dateString);
    const diffInMinutes = Math.floor(
      (now.getTime() + timeGap * 60 * 60 * 1e3 - date.getTime()) / (1e3 * 60)
    );
    if (diffInMinutes < 60) {
      return `${diffInMinutes}${i18n(I18nKey.diaryMinutesAgo)}`;
    }
    if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours}${i18n(I18nKey.diaryHoursAgo)}`;
    }
    const days = Math.floor(diffInMinutes / 1440);
    return `${days}${i18n(I18nKey.diaryDaysAgo)}`;
  }
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.diary), "description": "\u5373\u523B\u77ED\u6587", "data-astro-cid-pyfuvgrx": true }, { "default": ($$result2) => renderTemplate`  ${renderScript($$result2, "D:/lyf/blog/my_blog/src/pages/diary.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative min-h-32" data-astro-cid-pyfuvgrx> <div class="card-base z-10 px-4 py-4 md:px-6 md:py-5 relative w-full" data-astro-cid-pyfuvgrx> <div class="relative max-w-4xl w-full px-2 md:px-0" data-astro-cid-pyfuvgrx> <!-- 页面头部 --> <div class="moments-header mb-6" data-astro-cid-pyfuvgrx> <div class="header-content" data-astro-cid-pyfuvgrx> <div class="header-info" data-astro-cid-pyfuvgrx> <h1 class="moments-title text-xl md:text-2xl lg:text-3xl font-bold text-90 mb-1" data-astro-cid-pyfuvgrx>${i18n(I18nKey.diary)}</h1> <p class="moments-subtitle text-sm md:text-base lg:text-lg text-75" data-astro-cid-pyfuvgrx>${i18n(I18nKey.diarySubtitle)}</p> </div> <div class="header-stats" data-astro-cid-pyfuvgrx> <div class="stat-item text-center" data-astro-cid-pyfuvgrx> <span class="stat-number text-lg md:text-xl lg:text-2xl font-bold text-[var(--primary)]" data-astro-cid-pyfuvgrx>${diaryStats.total}</span> <span class="stat-label text-xs md:text-sm lg:text-base text-75" data-astro-cid-pyfuvgrx>${i18n(I18nKey.diaryCount)}</span> </div> </div> </div> </div> <!-- 短文列表 --> <div class="moments-timeline" data-astro-cid-pyfuvgrx> <div class="timeline-list space-y-4" data-astro-cid-pyfuvgrx> ${moments.map((moment) => renderTemplate`<div class="moment-item card-base p-4 md:p-6 lg:p-8 hover:shadow-lg transition-all" data-astro-cid-pyfuvgrx> <div class="moment-content" data-astro-cid-pyfuvgrx> <p class="moment-text text-sm md:text-base lg:text-lg text-90 leading-relaxed mb-3 md:mb-4" data-astro-cid-pyfuvgrx>${moment.content}</p> ${moment.images && moment.images.length > 0 && renderTemplate`<div class="moment-images grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 mb-3 md:mb-4" data-astro-cid-pyfuvgrx> ${moment.images.map((image, _index) => renderTemplate`<div class="image-item relative rounded-md overflow-hidden aspect-square cursor-pointer hover:scale-105 transition-transform" data-astro-cid-pyfuvgrx> <img${addAttribute(image, "src")} alt="diary moment image" class="w-full h-full object-cover" loading="lazy" data-astro-cid-pyfuvgrx> </div>`)} </div>`} </div> <hr class="moment-divider border-t border-[var(--line-divider)] my-3 md:my-4" data-astro-cid-pyfuvgrx> <div class="moment-footer flex justify-between items-center" data-astro-cid-pyfuvgrx> <div class="moment-time flex items-center gap-1.5 text-75 text-xs md:text-sm lg:text-base" data-astro-cid-pyfuvgrx> <i class="time-icon text-xs md:text-sm" data-astro-cid-pyfuvgrx>🕐</i> <time${addAttribute(moment.date, "datetime")} data-astro-cid-pyfuvgrx> ${formatTime(moment.date)} </time> </div> </div> </div>`)} </div> </div> <!-- 底部提示 --> <div class="moments-tips text-center mt-6 md:mt-8 lg:mt-10 text-75 text-xs md:text-sm lg:text-base italic" data-astro-cid-pyfuvgrx> ${i18n(I18nKey.diaryTips)} </div> </div> </div> </div> ` })} `;
}, "D:/lyf/blog/my_blog/src/pages/diary.astro", void 0);

const $$file = "D:/lyf/blog/my_blog/src/pages/diary.astro";
const $$url = "/mizuki-blog/diary/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Diary,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
