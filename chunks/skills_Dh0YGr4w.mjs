/* empty css                          */
import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, b as addAttribute, m as maybeRenderHead, r as renderScript } from './astro/server_CFIJpBV_.mjs';
import $$Icon from './Icon_BgTtGbvk.mjs';
import { $ as $$MainGridLayout, c as $$IconifyLoader, U as UNCATEGORIZED } from './MainGridLayout_CN5EEUhk.mjs';
import $$SkillsChart from './SkillsChart_CcGukovA.mjs';
import { I as I18nKey } from './_astro_content_nJCuh7Be.mjs';
import { getSkillStats, getAdvancedSkills, getTotalExperience, skillsData, getSkillsByCategory } from './skills_C8bENvCP.mjs';
import { i as i18n } from './sakura-manager_BcW8Ox11.mjs';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Skills;
  const stats = getSkillStats();
  const advancedSkills = getAdvancedSkills();
  const totalExperience = getTotalExperience();
  const categories = [...new Set(skillsData.map((skill) => skill.category))];
  const skillsByCategory = categories.reduce(
    (acc, category) => {
      acc[category] = getSkillsByCategory(category);
      return acc;
    },
    {}
  );
  const getLevelColor = (level) => {
    switch (level) {
      case "expert":
        return "bg-red-600/20 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      case "advanced":
        return "bg-orange-600/20 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
      case "intermediate":
        return "bg-yellow-600/20 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "beginner":
        return "bg-green-600/20 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      default:
        return "bg-gray-600/20 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };
  const getLevelWidth = (level) => {
    switch (level) {
      case "expert":
        return "100%";
      case "advanced":
        return "80%";
      case "intermediate":
        return "60%";
      case "beginner":
        return "40%";
      default:
        return "20%";
    }
  };
  const getCategoryText = (category) => {
    switch (category) {
      case "frontend":
        return i18n(I18nKey.skillsFrontend);
      case "backend":
        return i18n(I18nKey.skillsBackend);
      case "database":
        return i18n(I18nKey.skillsDatabase);
      case "tools":
        return i18n(I18nKey.skillsTools);
      case "other":
        return i18n(I18nKey.skillsOther);
      case UNCATEGORIZED:
        return i18n(I18nKey.uncategorized);
      default:
        return category;
    }
  };
  const title = i18n(I18nKey.skills);
  const subtitle = i18n(I18nKey.skillsSubtitle);
  const allIcons = skillsData.map((skill) => skill.icon).filter(Boolean);
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": title, "description": subtitle, "data-astro-cid-xahix5fp": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  <script>\n    document.documentElement.setAttribute('data-page-type', 'skills');\n  <\/script>  ", "  ", " ", '<div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative min-h-32" data-astro-cid-xahix5fp> <div class="card-base z-10 px-9 py-6 relative w-full" data-astro-cid-xahix5fp> <!-- \u9875\u9762\u6807\u9898 --> <div class="flex flex-col items-start justify-center mb-8" data-astro-cid-xahix5fp> <h1 class="text-4xl font-bold text-black/90 dark:text-white/90 mb-2 relative\n                  before:w-1 before:h-8 before:rounded-md before:bg-[var(--primary)]\n                  before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-4" data-astro-cid-xahix5fp> ', ' </h1> <p class="text-lg text-black/60 dark:text-white/60" data-astro-cid-xahix5fp> ', " </p> </div> <!-- \u6280\u80FD\u56FE\u8868 --> ", " <!-- \u4E13\u4E1A\u6280\u80FD --> ", ' <!-- \u6309\u5206\u7C7B\u5C55\u793A\u6280\u80FD --> <div class="space-y-8 skills-container" style="container-type: inline-size;" data-astro-cid-xahix5fp> ', " </div> </div> </div> "])), renderScript($$result2, "D:/lyf/blog/my_blog/src/pages/skills.astro?astro&type=script&index=0&lang.ts"), renderComponent($$result2, "IconifyLoader", $$IconifyLoader, { "preloadIcons": allIcons, "data-astro-cid-xahix5fp": true }), maybeRenderHead(), i18n(I18nKey.skills), i18n(I18nKey.skillsSubtitle), renderComponent($$result2, "SkillsChart", $$SkillsChart, { "stats": stats, "totalExperience": totalExperience, "data-astro-cid-xahix5fp": true }), advancedSkills.length > 0 && renderTemplate`<div class="mb-8" data-astro-cid-xahix5fp> <h2 class="text-2xl font-bold text-black/90 dark:text-white/90 mb-4 relative
                    before:w-1 before:h-6 before:rounded-md before:bg-[var(--primary)]
                    before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-4" data-astro-cid-xahix5fp> ${i18n(I18nKey.skillsAdvancedTitle)} </h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-xahix5fp> ${advancedSkills.map((skill) => renderTemplate`<div class="bg-transparent rounded-lg border border-black/10 dark:border-white/10 p-6 hover:shadow-lg transition-shadow duration-300" data-astro-cid-xahix5fp> <div class="flex items-start gap-4" data-astro-cid-xahix5fp> ${skill.icon && renderTemplate`<div class="w-12 h-12 rounded-lg flex items-center justify-center"${addAttribute(`background-color: ${skill.color || "rgb(99 102 241)"}20`, "style")} data-astro-cid-xahix5fp> ${renderComponent($$result2, "Icon", $$Icon, { "icon": skill.icon, "class": "text-2xl", "color": skill.color && skill.color !== "#000000" ? skill.color : "rgb(99 102 241)", "fallback": skill.name.charAt(0), "loading": "eager", "data-astro-cid-xahix5fp": true })} </div>`} <div class="flex-1" data-astro-cid-xahix5fp> <div class="flex items-center justify-between mb-2" data-astro-cid-xahix5fp> <h3 class="text-xl font-semibold text-black/90 dark:text-white/90" data-astro-cid-xahix5fp> ${skill.name} </h3> <span${addAttribute(`px-2 py-1 text-xs rounded-full ${getLevelColor(skill.level)}`, "class")} data-astro-cid-xahix5fp> ${skill.level === "expert" ? i18n(I18nKey.skillLevelExpert) : skill.level === "advanced" ? i18n(I18nKey.skillLevelAdvanced) : skill.level === "intermediate" ? i18n(I18nKey.skillLevelIntermediate) : i18n(I18nKey.skillLevelBeginner)} </span> </div> <p class="text-black/60 dark:text-white/60 mb-3 text-sm" data-astro-cid-xahix5fp> ${skill.description} </p> <div class="mb-3" data-astro-cid-xahix5fp> <div class="flex justify-between text-sm mb-1" data-astro-cid-xahix5fp> <span class="text-black/60 dark:text-white/60" data-astro-cid-xahix5fp>${i18n(I18nKey.skillExperience)}</span> <span class="text-black/80 dark:text-white/80" data-astro-cid-xahix5fp> ${skill.experience.years} ${i18n(I18nKey.skillYears)}${skill.experience.months > 0 ? ` ${skill.experience.months} ${i18n(I18nKey.skillMonths)}` : ""} </span> </div> <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2" data-astro-cid-xahix5fp> <div class="h-2 rounded-full transition-all duration-300"${addAttribute(`width: ${getLevelWidth(skill.level)}; background-color: ${skill.color || "rgb(99 102 241)"};`, "style")} data-astro-cid-xahix5fp></div> </div> </div> ${skill.certifications && skill.certifications.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1" data-astro-cid-xahix5fp> ${skill.certifications.map((cert) => renderTemplate`<span class="px-2 py-1 text-xs bg-green-600/20 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded" data-astro-cid-xahix5fp> ${cert} </span>`)} </div>`} </div> </div> </div>`)} </div> </div>`, categories.map((category) => {
    const categorySkills = skillsByCategory[category];
    if (categorySkills.length === 0) return null;
    return renderTemplate`<div data-astro-cid-xahix5fp> <h2 class="text-2xl font-bold text-black/90 dark:text-white/90 mb-4 relative
                        before:w-1 before:h-6 before:rounded-md before:bg-[var(--primary)]
                        before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-4" data-astro-cid-xahix5fp> ${getCategoryText(category)} <span class="text-lg font-normal text-black/60 dark:text-white/60 ml-2" data-astro-cid-xahix5fp>
(${categorySkills.length})
</span> </h2> <div class="skills-grid-container grid grid-cols-1 gap-4" data-astro-cid-xahix5fp> ${categorySkills.map((skill) => renderTemplate`<div class="bg-transparent rounded-lg border border-black/10 dark:border-white/10 p-4 hover:shadow-lg transition-shadow duration-300" data-astro-cid-xahix5fp> <div class="flex items-start gap-3" data-astro-cid-xahix5fp> ${skill.icon && renderTemplate`<div class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"${addAttribute(`background-color: ${skill.color || "rgb(99 102 241)"}20`, "style")} data-astro-cid-xahix5fp> ${renderComponent($$result2, "Icon", $$Icon, { "icon": skill.icon, "class": "text-lg", "color": skill.color && skill.color !== "#000000" ? skill.color : "rgb(99 102 241)", "fallback": skill.name.charAt(0), "loading": "eager", "data-astro-cid-xahix5fp": true })} </div>`} <div class="flex-1 min-w-0" data-astro-cid-xahix5fp> <div class="flex items-center justify-between mb-1" data-astro-cid-xahix5fp> <h3 class="text-lg font-semibold text-black/90 dark:text-white/90 truncate" data-astro-cid-xahix5fp> ${skill.name} </h3> <span${addAttribute(`px-2 py-1 text-xs rounded-full shrink-0 ml-2 ${getLevelColor(skill.level)}`, "class")} data-astro-cid-xahix5fp> ${skill.level === "expert" ? i18n(I18nKey.skillLevelExpert) : skill.level === "advanced" ? i18n(I18nKey.skillLevelAdvanced) : skill.level === "intermediate" ? i18n(I18nKey.skillLevelIntermediate) : i18n(I18nKey.skillLevelBeginner)} </span> </div> <p class="text-black/60 dark:text-white/60 mb-2 text-sm line-clamp-2" data-astro-cid-xahix5fp> ${skill.description} </p> <div class="text-xs text-black/60 dark:text-white/60" data-astro-cid-xahix5fp> <span data-astro-cid-xahix5fp> ${skill.experience.years} ${i18n(I18nKey.skillYears)}${skill.experience.months > 0 ? ` ${skill.experience.months} ${i18n(I18nKey.skillMonths)}` : ""} </span> </div> <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2" data-astro-cid-xahix5fp> <div class="h-2 rounded-full transition-all duration-300"${addAttribute(`width: ${getLevelWidth(skill.level)}; background-color: ${skill.color || "rgb(99 102 241)"};`, "style")} data-astro-cid-xahix5fp></div> </div> </div> </div> </div>`)} </div> </div>`;
  })) })} `;
}, "D:/lyf/blog/my_blog/src/pages/skills.astro", void 0);

const $$file = "D:/lyf/blog/my_blog/src/pages/skills.astro";
const $$url = "/mizuki-blog/skills/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Skills,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
