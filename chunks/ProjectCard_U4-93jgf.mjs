import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, d as renderTemplate } from './astro/server_CFIJpBV_.mjs';
import { I as I18nKey } from './_astro_content_nJCuh7Be.mjs';
import { i as i18n } from './sakura-manager_BcW8Ox11.mjs';
import './_page_.12145de2_ClrpWW0d.mjs';

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    project,
    size = "medium",
    showImage = true,
    maxTechStack = 4
  } = Astro2.props;
  const getStatusStyle = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-600/20 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "in-progress":
        return "bg-yellow-600/20 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "planned":
        return "bg-gray-600/20 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
      default:
        return "bg-gray-600/20 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };
  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return i18n(I18nKey.projectsCompleted);
      case "in-progress":
        return i18n(I18nKey.projectsInProgress);
      case "planned":
        return i18n(I18nKey.projectsPlanned);
      default:
        return status;
    }
  };
  const getSizeClasses = (size2) => {
    switch (size2) {
      case "small":
        return {
          container: "p-4",
          title: "text-lg",
          description: "text-sm line-clamp-2",
          tech: "text-xs",
          links: "text-sm"
        };
      case "large":
        return {
          container: "p-6",
          title: "text-xl",
          description: "text-base line-clamp-3",
          tech: "text-sm",
          links: "text-base"
        };
      default:
        return {
          container: "p-5",
          title: "text-lg",
          description: "text-sm line-clamp-2",
          tech: "text-xs",
          links: "text-sm"
        };
    }
  };
  const sizeClasses = getSizeClasses(size);
  return renderTemplate`${maybeRenderHead()}<div class="bg-transparent rounded-lg border border-black/10 dark:border-white/10 overflow-hidden hover:shadow-lg transition-all duration-300 group" data-astro-cid-fimizifw> <!-- 项目图片 --> ${showImage && project.image && renderTemplate`<div${addAttribute(`overflow-hidden ${size === "large" ? "aspect-video" : "aspect-[4/3]"}`, "class")} data-astro-cid-fimizifw> <img${addAttribute(project.image, "src")}${addAttribute(project.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" data-astro-cid-fimizifw> </div>`} <!-- 项目内容 --> <div${addAttribute(sizeClasses.container, "class")} data-astro-cid-fimizifw> <!-- 标题和状态 --> <div class="flex items-start justify-between mb-3" data-astro-cid-fimizifw> <h3${addAttribute(`font-semibold text-black/90 dark:text-white/90 ${sizeClasses.title} ${size === "small" ? "line-clamp-1" : ""}`, "class")} data-astro-cid-fimizifw> ${project.title} </h3> <span${addAttribute(`px-2 py-1 text-xs rounded-full shrink-0 ml-2 ${getStatusStyle(project.status)}`, "class")} data-astro-cid-fimizifw> ${getStatusText(project.status)} </span> </div> <!-- 分类标签 --> ${project.category && renderTemplate`<div class="mb-2" data-astro-cid-fimizifw> <span class="px-2 py-1 text-xs bg-blue-600/20 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 rounded" data-astro-cid-fimizifw> ${project.category} </span> </div>`} <!-- 项目描述 --> <p${addAttribute(`text-black/60 dark:text-white/60 mb-4 ${sizeClasses.description}`, "class")} data-astro-cid-fimizifw> ${project.description} </p> <!-- 技术栈 --> ${project.techStack && project.techStack.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1 mb-4" data-astro-cid-fimizifw> ${project.techStack.slice(0, maxTechStack).map((tech) => renderTemplate`<span${addAttribute(`px-2 py-1 bg-gray-600/20 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded ${sizeClasses.tech}`, "class")} data-astro-cid-fimizifw> ${tech} </span>`)} ${project.techStack.length > maxTechStack && renderTemplate`<span${addAttribute(`px-2 py-1 bg-gray-600/20 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400 rounded ${sizeClasses.tech}`, "class")} data-astro-cid-fimizifw>
+${project.techStack.length - maxTechStack} </span>`} </div>`} <!-- 标签 --> ${project.tags && project.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1 mb-4" data-astro-cid-fimizifw> ${project.tags.map((tag) => renderTemplate`<span${addAttribute(`px-2 py-1 bg-purple-600/20 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 rounded ${sizeClasses.tech}`, "class")} data-astro-cid-fimizifw>
#${tag} </span>`)} </div>`} <!-- 链接 --> <div class="flex gap-3" data-astro-cid-fimizifw> ${project.demoUrl && renderTemplate`<a${addAttribute(project.demoUrl, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors ${sizeClasses.links}`, "class")} data-astro-cid-fimizifw> ${i18n(I18nKey.projectsDemo)} </a>`} ${project.sourceUrl && renderTemplate`<a${addAttribute(project.sourceUrl, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`text-gray-600 dark:text-gray-400 hover:underline font-medium transition-colors ${sizeClasses.links}`, "class")} data-astro-cid-fimizifw> ${i18n(I18nKey.projectsSource)} </a>`} </div> <!-- 特色项目标识 --> ${project.featured && renderTemplate`<div class="absolute top-3 left-3" data-astro-cid-fimizifw> <span class="px-2 py-1 text-xs bg-yellow-600/20 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full flex items-center gap-1" data-astro-cid-fimizifw>
⭐ ${i18n(I18nKey.projectsFeatured)} </span> </div>`} </div> </div> `;
}, "D:/lyf/blog/my_blog/src/components/widget/ProjectCard.astro", void 0);

export { $$ProjectCard as default };
