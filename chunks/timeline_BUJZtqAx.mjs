/* empty css                          */
import { c as createComponent, a as createAstro, e as renderComponent, r as renderScript, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_CFIJpBV_.mjs';
import $$Icon from './Icon_BgTtGbvk.mjs';
import { $ as $$MainGridLayout, c as $$IconifyLoader } from './MainGridLayout_CN5EEUhk.mjs';
import { I as I18nKey } from './_astro_content_nJCuh7Be.mjs';
import { timelineData, getTimelineStats, getCurrentItems, getTotalWorkExperience, getTimelineByType } from './timeline_CrVsVyvF.mjs';
import { i as i18n } from './sakura-manager_BcW8Ox11.mjs';
/* empty css                            */

const $$Astro = createAstro();
const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Timeline;
  const allIcons = timelineData.map((item) => item.icon || getTypeIcon(item.type)).filter(Boolean);
  const stats = getTimelineStats();
  const currentItems = getCurrentItems();
  const workExperience = getTotalWorkExperience();
  const allTimelineItems = getTimelineByType();
  const getTypeIcon = (type) => {
    switch (type) {
      case "education":
        return "material-symbols:school";
      case "work":
        return "material-symbols:work";
      case "project":
        return "material-symbols:code";
      case "achievement":
        return "material-symbols:emoji-events";
      default:
        return "material-symbols:event";
    }
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("zh-CN", { year: "numeric", month: "long" });
  };
  const getDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : /* @__PURE__ */ new Date();
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffMonths = Math.ceil(diffTime / (1e3 * 60 * 60 * 24 * 30));
    if (diffMonths < 12) {
      return `${diffMonths} ${i18n(I18nKey.timelineMonths)}`;
    }
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
    if (months === 0) {
      return `${years} ${i18n(I18nKey.timelineYears)}`;
    }
    return `${years} ${i18n(I18nKey.timelineYears)} ${months} ${i18n(I18nKey.timelineMonths)}`;
  };
  const title = i18n(I18nKey.timeline);
  const subtitle = i18n(I18nKey.timelineSubtitle);
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": title, "description": subtitle, "data-astro-cid-qlh7ngej": true }, { "default": ($$result2) => renderTemplate`  ${renderScript($$result2, "D:/lyf/blog/my_blog/src/pages/timeline.astro?astro&type=script&index=0&lang.ts")}  ${renderComponent($$result2, "IconifyLoader", $$IconifyLoader, { "preloadIcons": allIcons, "data-astro-cid-qlh7ngej": true })} ${maybeRenderHead()}<div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative min-h-32" data-astro-cid-qlh7ngej> <div class="card-base z-10 px-6 py-8 md:px-9 md:py-1ss0 relative w-full" data-astro-cid-qlh7ngej> <!-- 页面标题 --> <div class="flex flex-col items-start justify-center mb-10" data-astro-cid-qlh7ngej> <h1 class="text-3xl md:text-4xl font-bold text-black/90 dark:text-white/90 mb-3 relative
                  before:w-1 before:h-8 before:rounded-md before:bg-[var(--primary)]
                  before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-4" data-astro-cid-qlh7ngej> ${i18n(I18nKey.timeline)} </h1> <p class="text-base md:text-lg text-black/60 dark:text-white/60" data-astro-cid-qlh7ngej> ${i18n(I18nKey.timelineSubtitle)} </p> </div> <!-- 统计信息卡片 --> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10" data-astro-cid-qlh7ngej> <div class="bg-blue-500/10 dark:bg-blue-900/30 rounded-xl p-5 border border-blue-500/20 dark:border-blue-900/30 hover:shadow-lg transition-shadow duration-300" data-astro-cid-qlh7ngej> <div class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1" data-astro-cid-qlh7ngej>${stats.total}</div> <div class="text-sm text-blue-600/70 dark:text-blue-400/70" data-astro-cid-qlh7ngej>${i18n(I18nKey.timelineTotal)}</div> </div> <div class="bg-green-500/10 dark:bg-green-900/30 rounded-xl p-5 border border-green-500/20 dark:border-green-900/30 hover:shadow-lg transition-shadow duration-300" data-astro-cid-qlh7ngej> <div class="text-2xl font-bold text-green-600 dark:text-green-400 mb-1" data-astro-cid-qlh7ngej>${stats.byType.work}</div> <div class="text-sm text-green-600/70 dark:text-green-400/70" data-astro-cid-qlh7ngej>${i18n(I18nKey.timelineWork)}</div> </div> <div class="bg-purple-500/10 dark:bg-purple-900/30 rounded-xl p-5 border border-purple-500/20 dark:border-purple-900/30 hover:shadow-lg transition-shadow duration-300" data-astro-cid-qlh7ngej> <div class="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1" data-astro-cid-qlh7ngej>${stats.byType.project}</div> <div class="text-sm text-purple-600/70 dark:text-purple-400/70" data-astro-cid-qlh7ngej>${i18n(I18nKey.timelineProjects)}</div> </div> <div class="bg-orange-500/10 dark:bg-orange-900/30 rounded-xl p-5 border border-orange-500/20 dark:border-orange-900/30 hover:shadow-lg transition-shadow duration-300" data-astro-cid-qlh7ngej> <div class="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1" data-astro-cid-qlh7ngej> ${workExperience.years}+
</div> <div class="text-sm text-orange-600/70 dark:text-orange-400/70" data-astro-cid-qlh7ngej>${i18n(I18nKey.timelineExperience)}</div> </div> </div> <!-- 当前进行中的项目 --> ${currentItems.length > 0 && renderTemplate`<div class="mb-12" data-astro-cid-qlh7ngej> <h2 class="text-2xl font-bold text-black/90 dark:text-white/90 mb-6 flex items-center" data-astro-cid-qlh7ngej> <span class="w-3 h-3 rounded-full bg-green-500 mr-3" data-astro-cid-qlh7ngej></span> ${i18n(I18nKey.timelineCurrent)} </h2> <div class="grid grid-cols-1 gap-6" data-astro-cid-qlh7ngej> ${currentItems.map((item) => renderTemplate`<div class="bg-transparent rounded-xl border border-black/10 dark:border-white/10 p-6 hover:shadow-lg transition-shadow duration-300" data-astro-cid-qlh7ngej> <div class="flex flex-col md:flex-row md:items-start gap-5" data-astro-cid-qlh7ngej> <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"${addAttribute(`background-color: ${item.color || "rgb(99 102 241)"}20`, "style")} data-astro-cid-qlh7ngej> ${renderComponent($$result2, "Icon", $$Icon, { "icon": item.icon || getTypeIcon(item.type), "class": "text-2xl", "color": item.color || "rgb(99 102 241)", "fallback": item.title.charAt(0), "loading": "eager", "data-astro-cid-qlh7ngej": true })} </div> <div class="flex-1" data-astro-cid-qlh7ngej> <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3" data-astro-cid-qlh7ngej> <div data-astro-cid-qlh7ngej> <h3 class="text-xl font-semibold text-black/90 dark:text-white/90 mb-1" data-astro-cid-qlh7ngej> ${item.title} </h3> ${item.organization && renderTemplate`<div class="text-sm text-black/70 dark:text-white/70" data-astro-cid-qlh7ngej> ${item.organization} ${item.position && `\u2022 ${item.position}`} </div>`} </div> <span class="px-3 py-1.5 text-xs bg-green-600/20 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full self-start" data-astro-cid-qlh7ngej> ${i18n(I18nKey.timelineCurrent)} </span> </div> ${item.location && renderTemplate`<div class="flex items-center text-sm text-black/60 dark:text-white/60 mb-3" data-astro-cid-qlh7ngej> <span class="mr-2" data-astro-cid-qlh7ngej>📍</span> <span data-astro-cid-qlh7ngej>${item.location}</span> </div>`} <p class="text-black/70 dark:text-white/70 mb-4" data-astro-cid-qlh7ngej> ${item.description} </p> <div class="flex flex-wrap items-center gap-4 mb-4" data-astro-cid-qlh7ngej> <div class="text-sm text-black/70 dark:text-white/70" data-astro-cid-qlh7ngej> <span class="font-medium" data-astro-cid-qlh7ngej>${i18n(I18nKey.timelineStartDate)}:</span> ${formatDate(item.startDate)} </div> <div class="text-sm text-black/70 dark:text-white/70" data-astro-cid-qlh7ngej> <span class="font-medium" data-astro-cid-qlh7ngej>${i18n(I18nKey.timelineDuration)}:</span> ${getDuration(item.startDate)} </div> </div> ${item.skills && item.skills.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mb-4" data-astro-cid-qlh7ngej> ${item.skills.map((skill) => renderTemplate`<span class="px-3 py-1.5 text-xs bg-indigo-600/20 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-full" data-astro-cid-qlh7ngej> ${skill} </span>`)} </div>`} ${item.links && item.links.length > 0 && renderTemplate`<div class="flex flex-wrap gap-4 pt-2" data-astro-cid-qlh7ngej> ${item.links.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium flex items-center gap-1" data-astro-cid-qlh7ngej> ${link.type === "certificate" && "\u{1F3C6}"} ${link.type === "project" && "\u{1F517}"} ${link.type === "website" && "\u{1F310}"} ${link.name} </a>`)} </div>`} </div> </div> </div>`)} </div> </div>`} <!-- 时间线 --> <div class="mb-12" data-astro-cid-qlh7ngej> <h2 class="text-2xl font-bold text-black/90 dark:text-white/90 mb-8 flex items-center" data-astro-cid-qlh7ngej> <span class="w-3 h-3 rounded-full bg-indigo-500 mr-3" data-astro-cid-qlh7ngej></span> ${i18n(I18nKey.timelineHistory)} </h2> <!-- 横向时间线容器 --> <div class="relative overflow-hidden rounded-xl bg-transparent border border-black/10 dark:border-white/10 p-6 hover:shadow-lg transition-shadow duration-300" data-astro-cid-qlh7ngej> <!-- 水平滚动区域 --> <div class="flex overflow-x-auto pb-6 -mx-2 px-2 timeline-horizontal-scroll" id="timeline-scrollbar" data-astro-cid-qlh7ngej> <div class="flex space-x-8 min-w-max" data-astro-cid-qlh7ngej> ${allTimelineItems.map((item, index) => renderTemplate`<div class="flex flex-col items-center flex-shrink-0 w-72"${addAttribute(index, "data-key")} data-astro-cid-qlh7ngej>  <div class="relative z-10 w-16 h-16 rounded-xl flex items-center justify-center mb-6"${addAttribute(`background-color: ${item.color || "rgb(99 102 241)"}`, "style")} data-astro-cid-qlh7ngej> ${renderComponent($$result2, "Icon", $$Icon, { "icon": item.icon || getTypeIcon(item.type), "class": "text-2xl text-white", "color": "white", "fallback": item.title.charAt(0), "loading": "eager", "data-astro-cid-qlh7ngej": true })}  <div class="absolute inset-0 rounded-xl border-2 border-white/30" data-astro-cid-qlh7ngej></div> </div>  <div class="text-xs text-black/50 dark:text-white/50 mb-2" data-astro-cid-qlh7ngej> ${formatDate(item.startDate)} </div>  <div class="flex-1 bg-transparent rounded-xl border border-black/10 dark:border-white/10 p-5 w-full" data-astro-cid-qlh7ngej> <div class="flex flex-col gap-3" data-astro-cid-qlh7ngej> <div data-astro-cid-qlh7ngej> <h3 class="text-lg font-semibold text-black/90 dark:text-white/90 line-clamp-2" data-astro-cid-qlh7ngej> ${item.title} </h3> ${item.organization && renderTemplate`<div class="text-xs text-black/70 dark:text-white/70 mt-1" data-astro-cid-qlh7ngej> ${item.organization} ${item.position && `\u2022 ${item.position}`} </div>`} </div> <span${addAttribute(`px-2 py-1 text-xs rounded-full self-start ${item.type === "education" ? "bg-blue-600/20 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" : item.type === "work" ? "bg-green-600/20 text-green-700 dark:bg-green-900/30 dark:text-green-400" : item.type === "project" ? "bg-purple-600/20 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" : "bg-orange-600/20 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"}`, "class")} data-astro-cid-qlh7ngej> ${i18n(item.type === "education" ? I18nKey.timelineEducation : item.type === "work" ? I18nKey.timelineWork : item.type === "project" ? I18nKey.timelineProject : I18nKey.timelineAchievement)} </span> <p class="text-sm text-black/70 dark:text-white/70 line-clamp-3" data-astro-cid-qlh7ngej> ${item.description} </p> <div class="flex items-center justify-between text-xs text-black/60 dark:text-white/60 mt-2" data-astro-cid-qlh7ngej> <div data-astro-cid-qlh7ngej> ${getDuration(item.startDate, item.endDate)} </div> ${item.location && renderTemplate`<div class="flex items-center" data-astro-cid-qlh7ngej> <span class="mr-1" data-astro-cid-qlh7ngej>📍</span> <span class="truncate max-w-[80px]" data-astro-cid-qlh7ngej>${item.location}</span> </div>`} </div> </div> </div> </div>`)} </div> </div>  <div class="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-transparent to-transparent pointer-events-none hidden md:block" data-astro-cid-qlh7ngej></div> </div> </div> </div> </div> ` })}  ${renderScript($$result, "D:/lyf/blog/my_blog/src/pages/timeline.astro?astro&type=script&index=1&lang.ts")}`;
}, "D:/lyf/blog/my_blog/src/pages/timeline.astro", void 0);

const $$file = "D:/lyf/blog/my_blog/src/pages/timeline.astro";
const $$url = "/mizuki-blog/timeline/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Timeline,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
