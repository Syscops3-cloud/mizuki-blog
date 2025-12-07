/* empty css                          */
import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, r as renderScript, m as maybeRenderHead, b as addAttribute } from './astro/server_CFIJpBV_.mjs';
import { I as I18nKey } from './_astro_content_nJCuh7Be.mjs';
import { $ as $$MainGridLayout, U as UNCATEGORIZED } from './MainGridLayout_CN5EEUhk.mjs';
import { getProjectStats, getFeaturedProjects, getAllTechStack, projectsData, getProjectsByCategory } from './projects_DOnat5C3.mjs';
import { i as i18n } from './sakura-manager_BcW8Ox11.mjs';
/* empty css                            */

const $$Astro = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const stats = getProjectStats();
  const featuredProjects = getFeaturedProjects();
  const allTechStack = getAllTechStack();
  const categories = [
    ...new Set(projectsData.map((project) => project.category))
  ];
  const projectsByCategory = categories.reduce(
    (acc, category) => {
      acc[category] = getProjectsByCategory(category);
      return acc;
    },
    {}
  );
  const title = i18n(I18nKey.projects);
  const subtitle = i18n(I18nKey.projectsSubtitle);
  const getCategoryText = (category) => {
    switch (category) {
      case "web":
        return i18n(I18nKey.projectsWeb);
      case "mobile":
        return i18n(I18nKey.projectsMobile);
      case "desktop":
        return i18n(I18nKey.projectsDesktop);
      case "other":
        return i18n(I18nKey.projectsOther);
      case UNCATEGORIZED:
        return i18n(I18nKey.uncategorized);
      default:
        return category;
    }
  };
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": title, "description": subtitle, "data-astro-cid-aid3sr62": true }, { "default": ($$result2) => renderTemplate`  ${renderScript($$result2, "D:/lyf/blog/my_blog/src/pages/projects.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative min-h-32" data-astro-cid-aid3sr62> <div class="card-base z-10 px-9 py-6 relative w-full" data-astro-cid-aid3sr62> <!-- 页面标题 --> <div class="flex flex-col items-start justify-center mb-8" data-astro-cid-aid3sr62> <h1 class="text-4xl font-bold text-black/90 dark:text-white/90 mb-2 relative
                  before:w-1 before:h-8 before:rounded-md before:bg-[var(--primary)]
                  before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-4" data-astro-cid-aid3sr62> ${i18n(I18nKey.projects)} </h1> <p class="text-lg text-black/60 dark:text-white/60" data-astro-cid-aid3sr62> ${i18n(I18nKey.projectsSubtitle)} </p> </div> <!-- 统计信息 --> <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8" data-astro-cid-aid3sr62> <div class="bg-blue-500/10 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-500/20 dark:border-blue-900/30 hover:shadow-lg transition-shadow duration-300" data-astro-cid-aid3sr62> <div class="text-2xl font-bold text-blue-600 dark:text-blue-400" data-astro-cid-aid3sr62>${stats.total}</div> <div class="text-sm text-blue-600/70 dark:text-blue-400/70" data-astro-cid-aid3sr62>${i18n(I18nKey.projectsTotal)}</div> </div> <div class="bg-green-500/10 dark:bg-green-900/30 rounded-lg p-4 border border-green-500/20 dark:border-green-900/30 hover:shadow-lg transition-shadow duration-300" data-astro-cid-aid3sr62> <div class="text-2xl font-bold text-green-600 dark:text-green-400" data-astro-cid-aid3sr62>${stats.byStatus.completed}</div> <div class="text-sm text-green-600/70 dark:text-green-400/70" data-astro-cid-aid3sr62>${i18n(I18nKey.projectsCompleted)}</div> </div> <div class="bg-yellow-500/10 dark:bg-yellow-900/30 rounded-lg p-4 border border-yellow-500/20 dark:border-yellow-900/30 hover:shadow-lg transition-shadow duration-300" data-astro-cid-aid3sr62> <div class="text-2xl font-bold text-yellow-600 dark:text-yellow-400" data-astro-cid-aid3sr62>${stats.byStatus.inProgress}</div> <div class="text-sm text-yellow-600/70 dark:text-yellow-400/70" data-astro-cid-aid3sr62>${i18n(I18nKey.projectsInProgress)}</div> </div> <div class="bg-purple-500/10 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-500/20 dark:border-purple-900/30 hover:shadow-lg transition-shadow duration-300" data-astro-cid-aid3sr62> <div class="text-2xl font-bold text-purple-600 dark:text-purple-400" data-astro-cid-aid3sr62>${allTechStack.length}</div> <div class="text-sm text-purple-600/70 dark:text-purple-400/70" data-astro-cid-aid3sr62>${i18n(I18nKey.projectsTechStack)}</div> </div> </div> <!-- 特色项目 --> ${featuredProjects.length > 0 && renderTemplate`<div class="mb-8" data-astro-cid-aid3sr62> <h2 class="text-2xl font-bold text-black/90 dark:text-white/90 mb-4 relative
                    before:w-1 before:h-6 before:rounded-md before:bg-[var(--primary)]
                    before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-4" data-astro-cid-aid3sr62> ${i18n(I18nKey.projectsFeatured)} </h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-aid3sr62> ${featuredProjects.map((project) => renderTemplate`<div class="bg-transparent rounded-lg border border-black/10 dark:border-white/10 overflow-hidden hover:shadow-lg transition-shadow duration-300" data-astro-cid-aid3sr62> ${project.image && renderTemplate`<div class="aspect-video overflow-hidden" data-astro-cid-aid3sr62> <img${addAttribute(project.image, "src")}${addAttribute(project.title, "alt")} class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" data-astro-cid-aid3sr62> </div>`} <div class="p-6" data-astro-cid-aid3sr62> <div class="flex items-start justify-between mb-3" data-astro-cid-aid3sr62> <h3 class="text-xl font-semibold text-black/90 dark:text-white/90" data-astro-cid-aid3sr62> ${project.title} </h3> <span${addAttribute(`px-2 py-1 text-xs rounded-full ${project.status === "completed" ? "bg-green-600/20 text-green-700 dark:bg-green-900/30 dark:text-green-400" : project.status === "in-progress" ? "bg-yellow-600/20 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" : "bg-gray-600/20 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"}`, "class")} data-astro-cid-aid3sr62> ${i18n(project.status === "completed" ? I18nKey.projectsCompleted : project.status === "in-progress" ? I18nKey.projectsInProgress : I18nKey.projectsPlanned)} </span> </div> <p class="text-black/60 dark:text-white/60 mb-4 line-clamp-2" data-astro-cid-aid3sr62> ${project.description} </p> <div class="flex flex-wrap gap-2 mb-4" data-astro-cid-aid3sr62> ${project.techStack.slice(0, 4).map((tech) => renderTemplate`<span class="px-2 py-1 text-xs bg-blue-600/20 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded" data-astro-cid-aid3sr62> ${tech} </span>`)} ${project.techStack.length > 4 && renderTemplate`<span class="px-2 py-1 text-xs bg-gray-600/20 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400 rounded" data-astro-cid-aid3sr62>
+${project.techStack.length - 4} </span>`} </div> <div class="flex flex-wrap gap-2 text-sm" data-astro-cid-aid3sr62> ${project.visitUrl && renderTemplate`<a${addAttribute(project.visitUrl, "href")} target="_blank" rel="noopener noreferrer" class="btn-gradient btn-gradient-primary btn-gradient-md" data-astro-cid-aid3sr62> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "material-symbols:open-in-new", "width": "18", "height": "18", "data-astro-cid-aid3sr62": true })} ${i18n(I18nKey.projectsVisit)} </a>`} ${project.sourceCode && renderTemplate`<a${addAttribute(project.sourceCode, "href")} target="_blank" rel="noopener noreferrer" class="btn-gradient btn-github btn-gradient-md" data-astro-cid-aid3sr62> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:github", "width": "18", "height": "18", "data-astro-cid-aid3sr62": true })} ${i18n(I18nKey.projectsGitHub)} </a>`} </div> </div> </div>`)} </div> </div>`} <!-- 按分类展示项目 --> <div class="space-y-8" data-astro-cid-aid3sr62> ${categories.map((category) => {
    const categoryProjects = projectsByCategory[category];
    if (categoryProjects.length === 0) return null;
    return renderTemplate`<div data-astro-cid-aid3sr62> <h2 class="text-2xl font-bold text-black/90 dark:text-white/90 mb-4 relative
                        before:w-1 before:h-6 before:rounded-md before:bg-[var(--primary)]
                        before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-4" data-astro-cid-aid3sr62> ${getCategoryText(category)} <span class="text-lg font-normal text-black/60 dark:text-white/60 ml-2" data-astro-cid-aid3sr62>
(${categoryProjects.length})
</span> </h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-aid3sr62> ${categoryProjects.map((project) => renderTemplate`<div class="bg-transparent rounded-lg border border-black/10 dark:border-white/10 overflow-hidden hover:shadow-lg transition-shadow duration-300" data-astro-cid-aid3sr62> ${project.image && renderTemplate`<div class="aspect-video overflow-hidden" data-astro-cid-aid3sr62> <img${addAttribute(project.image, "src")}${addAttribute(project.title, "alt")} class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" data-astro-cid-aid3sr62> </div>`} <div class="p-4" data-astro-cid-aid3sr62> <div class="flex items-start justify-between mb-2" data-astro-cid-aid3sr62> <h3 class="text-lg font-semibold text-black/90 dark:text-white/90 line-clamp-1" data-astro-cid-aid3sr62> ${project.title} </h3> <span${addAttribute(`px-2 py-1 text-xs rounded-full shrink-0 ml-2 ${project.status === "completed" ? "bg-green-600/20 text-green-700 dark:bg-green-900/30 dark:text-green-400" : project.status === "in-progress" ? "bg-yellow-600/20 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" : "bg-gray-600/20 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"}`, "class")} data-astro-cid-aid3sr62> ${i18n(project.status === "completed" ? I18nKey.projectsCompleted : project.status === "in-progress" ? I18nKey.projectsInProgress : I18nKey.projectsPlanned)} </span> </div> <p class="text-black/60 dark:text-white/60 mb-3 text-sm line-clamp-2" data-astro-cid-aid3sr62> ${project.description} </p> <div class="flex flex-wrap gap-1 mb-3" data-astro-cid-aid3sr62> ${project.techStack.slice(0, 3).map((tech) => renderTemplate`<span class="px-2 py-1 text-xs bg-blue-600/20 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded" data-astro-cid-aid3sr62> ${tech} </span>`)} ${project.techStack.length > 3 && renderTemplate`<span class="px-2 py-1 text-xs bg-gray-600/20 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400 rounded" data-astro-cid-aid3sr62>
+${project.techStack.length - 3} </span>`} </div> <div class="flex flex-wrap gap-2 text-sm" data-astro-cid-aid3sr62> ${project.visitUrl && renderTemplate`<a${addAttribute(project.visitUrl, "href")} target="_blank" rel="noopener noreferrer" class="btn-gradient btn-gradient-primary btn-gradient-md" data-astro-cid-aid3sr62> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "material-symbols:open-in-new", "width": "18", "height": "18", "data-astro-cid-aid3sr62": true })} ${i18n(I18nKey.projectsVisit)} </a>`} ${project.sourceCode && renderTemplate`<a${addAttribute(project.sourceCode, "href")} target="_blank" rel="noopener noreferrer" class="btn-gradient btn-github btn-gradient-md" data-astro-cid-aid3sr62> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:github", "width": "18", "height": "18", "data-astro-cid-aid3sr62": true })} ${i18n(I18nKey.projectsGitHub)} </a>`} </div> </div> </div>`)} </div> </div>`;
  })} </div> <!-- 技术栈统计 --> <div class="mt-12 pt-8 border-t border-black/10 dark:border-white/10" data-astro-cid-aid3sr62> <h2 class="text-2xl font-bold text-black/90 dark:text-white/90 mb-4" data-astro-cid-aid3sr62> ${i18n(I18nKey.projectsTechStack)} </h2> <div class="flex flex-wrap gap-2" data-astro-cid-aid3sr62> ${allTechStack.map((tech) => renderTemplate`<span class="px-3 py-1 text-sm bg-gray-600/20 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full" data-astro-cid-aid3sr62> ${tech} </span>`)} </div> </div> </div> </div> ` })} `;
}, "D:/lyf/blog/my_blog/src/pages/projects.astro", void 0);

const $$file = "D:/lyf/blog/my_blog/src/pages/projects.astro";
const $$url = "/mizuki-blog/projects/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
