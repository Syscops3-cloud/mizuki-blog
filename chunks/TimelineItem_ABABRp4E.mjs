import { c as createComponent, a as createAstro, r as renderScript, m as maybeRenderHead, b as addAttribute, e as renderComponent, d as renderTemplate, F as Fragment } from './astro/server_CFIJpBV_.mjs';
import { I as I18nKey } from './_astro_content_nJCuh7Be.mjs';
import { i as i18n } from './sakura-manager_BcW8Ox11.mjs';
import $$Icon from './Icon_BgTtGbvk.mjs';

const $$Astro = createAstro();
const $$TimelineItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TimelineItem;
  const {
    item,
    showTimeline = true,
    size = "medium",
    layout = "timeline"
  } = Astro2.props;
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
  const getTypeColor = (type) => {
    switch (type) {
      case "education":
        return "bg-blue-600/20 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case "work":
        return "bg-green-600/20 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "project":
        return "bg-purple-600/20 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
      case "achievement":
        return "bg-orange-600/20 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
      default:
        return "bg-gray-600/20 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };
  const getTypeText = (type) => {
    switch (type) {
      case "education":
        return i18n(I18nKey.timelineEducation);
      case "work":
        return i18n(I18nKey.timelineWork);
      case "project":
        return i18n(I18nKey.timelineProject);
      case "achievement":
        return i18n(I18nKey.timelineAchievement);
      default:
        return type;
    }
  };
  const getLinkIcon = (type) => {
    switch (type) {
      case "certificate":
        return "\u{1F3C6}";
      case "project":
        return "\u{1F517}";
      case "website":
        return "\u{1F310}";
      default:
        return "\u{1F4C4}";
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
  const getSizeClasses = (size2) => {
    switch (size2) {
      case "small":
        return {
          container: "p-4",
          node: "w-8 h-8",
          nodeIcon: "text-lg",
          title: "text-lg",
          meta: "text-xs",
          description: "text-sm",
          badge: "text-xs"
        };
      case "large":
        return {
          container: "p-8",
          node: "w-16 h-16",
          nodeIcon: "text-2xl",
          title: "text-2xl",
          meta: "text-base",
          description: "text-base",
          badge: "text-sm"
        };
      default:
        return {
          container: "p-6",
          node: "w-12 h-12",
          nodeIcon: "text-xl",
          title: "text-xl",
          meta: "text-sm",
          description: "text-sm",
          badge: "text-xs"
        };
    }
  };
  const sizeClasses = getSizeClasses(size);
  const itemColor = item.color || "#3B82F6";
  return renderTemplate`${layout === "timeline" ? renderTemplate`<!-- 时间线布局 -->
  ${maybeRenderHead()}<div class="relative flex items-start gap-6"><!-- 时间线节点 -->${showTimeline && renderTemplate`<div${addAttribute(`relative z-10 rounded-full flex items-center justify-center shrink-0 ${sizeClasses.node}`, "class")}${addAttribute(`background-color: ${itemColor}`, "style")}>${renderComponent($$result, "Icon", $$Icon, { "icon": item.icon || getTypeIcon(item.type), "class": `text-white ${sizeClasses.nodeIcon}`, "color": "white", "fallback": item.title.charAt(0), "loading": "eager" })}</div>`}<!-- 内容卡片 --><div class="flex-1 bg-transparent rounded-lg border border-black/10 dark:border-white/10 hover:shadow-lg transition-shadow duration-300"><div${addAttribute(sizeClasses.container, "class")}><!-- 标题和类型 --><div class="flex items-start justify-between mb-3"><div><h3${addAttribute(`font-semibold text-black/90 dark:text-white/90 mb-1 ${sizeClasses.title}`, "class")}>${item.title}${item.featured && renderTemplate`<span class="ml-2 text-yellow-500">⭐</span>`}</h3>${item.organization && renderTemplate`<div${addAttribute(`text-black/70 dark:text-white/70 ${sizeClasses.meta}`, "class")}>${item.organization}${item.position && `\u2022 ${item.position}`}</div>`}</div><span${addAttribute(`px-2 py-1 rounded-full shrink-0 ml-4 ${sizeClasses.badge} ${getTypeColor(item.type)}`, "class")}>${getTypeText(item.type)}</span></div><!-- 时间和地点信息 --><div${addAttribute(`flex items-center gap-4 mb-3 text-black/60 dark:text-white/60 ${sizeClasses.meta}`, "class")}><div>${formatDate(item.startDate)} - ${item.endDate ? formatDate(item.endDate) : i18n(I18nKey.timelinePresent)}</div><div>•</div><div>${getDuration(item.startDate, item.endDate)}</div>${item.location && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<div>•</div><div>📍 ${item.location}</div>` })}`}</div><!-- 描述 --><p${addAttribute(`text-black/70 dark:text-white/70 mb-4 ${sizeClasses.description}`, "class")}>${item.description}</p><!-- 成就 -->${item.achievements && item.achievements.length > 0 && renderTemplate`<div class="mb-4"><h4${addAttribute(`font-semibold text-black/80 dark:text-white/80 mb-2 ${sizeClasses.meta}`, "class")}>${i18n(I18nKey.timelineAchievements)}</h4><ul class="space-y-1">${item.achievements.map((achievement) => renderTemplate`<li${addAttribute(`text-black/70 dark:text-white/70 flex items-start gap-2 ${sizeClasses.description}`, "class")}><span class="text-green-500 mt-1">•</span><span>${achievement}</span></li>`)}</ul></div>`}<!-- 技能 -->${item.skills && item.skills.length > 0 && renderTemplate`<div class="mb-4"><div class="flex flex-wrap gap-1">${item.skills.map((skill) => renderTemplate`<span${addAttribute(`px-2 py-1 bg-gray-600/20 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded ${sizeClasses.badge}`, "class")}>${skill}</span>`)}</div></div>`}<!-- 链接 -->${item.links && item.links.length > 0 && renderTemplate`<div class="flex gap-4">${item.links.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center gap-1 transition-colors ${sizeClasses.meta}`, "class")}>${getLinkIcon(link.type)}${link.name}</a>`)}</div>`}</div></div></div>` : renderTemplate`<!-- 卡片布局 -->
  <div class="bg-transparent rounded-lg border border-black/10 dark:border-white/10 hover:shadow-lg transition-shadow duration-300"><div${addAttribute(sizeClasses.container, "class")}><!-- 图标和标题 --><div class="flex items-start gap-4 mb-3"><div${addAttribute(`rounded-lg flex items-center justify-center shrink-0 ${sizeClasses.node}`, "class")}${addAttribute(`background-color: ${itemColor}20`, "style")}>${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": item.icon || getTypeIcon(item.type), "class": sizeClasses.nodeIcon, "style": `color: ${itemColor}` })}</div><div class="flex-1"><div class="flex items-start justify-between mb-2"><h3${addAttribute(`font-semibold text-black/90 dark:text-white/90 ${sizeClasses.title}`, "class")}>${item.title}${item.featured && renderTemplate`<span class="ml-2 text-yellow-500">⭐</span>`}</h3><span${addAttribute(`px-2 py-1 rounded-full shrink-0 ml-2 ${sizeClasses.badge} ${getTypeColor(item.type)}`, "class")}>${getTypeText(item.type)}</span></div>${item.organization && renderTemplate`<div${addAttribute(`text-black/70 dark:text-white/70 mb-1 ${sizeClasses.meta}`, "class")}>${item.organization}${item.position && `\u2022 ${item.position}`}</div>`}${item.location && renderTemplate`<div${addAttribute(`text-black/60 dark:text-white/60 mb-2 ${sizeClasses.meta}`, "class")}>
📍 ${item.location}</div>`}</div></div><!-- 时间信息 --><div${addAttribute(`text-black/70 dark:text-white/70 mb-3 ${sizeClasses.meta}`, "class")}>${formatDate(item.startDate)} - ${item.endDate ? formatDate(item.endDate) : i18n(I18nKey.timelinePresent)} (${getDuration(item.startDate, item.endDate)})
</div><!-- 描述 --><p${addAttribute(`text-black/60 dark:text-white/60 mb-4 ${sizeClasses.description}`, "class")}>${item.description}</p><!-- 成就 -->${item.achievements && item.achievements.length > 0 && renderTemplate`<div class="mb-4"><h4${addAttribute(`font-semibold text-black/80 dark:text-white/80 mb-2 ${sizeClasses.meta}`, "class")}>${i18n(I18nKey.timelineAchievements)}</h4><ul class="space-y-1">${item.achievements.slice(0, 3).map((achievement) => renderTemplate`<li${addAttribute(`text-black/70 dark:text-white/70 flex items-start gap-2 ${sizeClasses.description}`, "class")}><span class="text-green-500 mt-1">•</span><span>${achievement}</span></li>`)}${item.achievements.length > 3 && renderTemplate`<li${addAttribute(`text-black/60 dark:text-white/60 ${sizeClasses.description}`, "class")}>
... 还有 ${item.achievements.length - 3} 项成就
</li>`}</ul></div>`}<!-- 技能和链接 --><div class="flex items-center justify-between">${item.skills && item.skills.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1">${item.skills.slice(0, 3).map((skill) => renderTemplate`<span${addAttribute(`px-2 py-1 bg-gray-600/20 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded ${sizeClasses.badge}`, "class")}>${skill}</span>`)}${item.skills.length > 3 && renderTemplate`<span${addAttribute(`px-2 py-1 bg-gray-600/20 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400 rounded ${sizeClasses.badge}`, "class")}>
+${item.skills.length - 3}</span>`}</div>`}${item.links && item.links.length > 0 && renderTemplate`<div class="flex gap-3">${item.links.slice(0, 2).map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors ${sizeClasses.meta}`, "class")}>${getLinkIcon(link.type)}${link.name}</a>`)}</div>`}</div></div></div>`}${renderScript($$result, "D:/lyf/blog/my_blog/src/components/widget/TimelineItem.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/lyf/blog/my_blog/src/components/widget/TimelineItem.astro", void 0);

export { $$TimelineItem as default };
