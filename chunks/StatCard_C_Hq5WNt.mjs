import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderScript, e as renderComponent, d as renderTemplate } from './astro/server_CFIJpBV_.mjs';
import './_page_.12145de2_ClrpWW0d.mjs';

const $$Astro = createAstro();
const $$StatCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StatCard;
  const {
    title,
    value,
    subtitle,
    icon,
    color = "#3B82F6",
    gradient,
    size = "medium",
    trend,
    link
  } = Astro2.props;
  const getSizeClasses = (size2) => {
    switch (size2) {
      case "small":
        return {
          container: "p-3",
          value: "text-xl",
          title: "text-xs",
          subtitle: "text-xs",
          icon: "text-lg",
          iconContainer: "w-8 h-8"
        };
      case "large":
        return {
          container: "p-6",
          value: "text-4xl",
          title: "text-base",
          subtitle: "text-sm",
          icon: "text-2xl",
          iconContainer: "w-12 h-12"
        };
      default:
        return {
          container: "p-4",
          value: "text-2xl",
          title: "text-sm",
          subtitle: "text-xs",
          icon: "text-xl",
          iconContainer: "w-10 h-10"
        };
    }
  };
  const sizeClasses = getSizeClasses(size);
  const getBackgroundStyle = () => {
    if (gradient) {
      return `background: linear-gradient(135deg, ${gradient.from}, ${gradient.to})`;
    }
    return `background: linear-gradient(135deg, ${color}15, ${color}25)`;
  };
  const getIconStyle = () => {
    return `background-color: ${color}20; color: ${color}`;
  };
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg border border-black/10 dark:border-white/10 hover:shadow-lg transition-all duration-300 group cursor-pointer"${addAttribute(getBackgroundStyle(), "style")} data-astro-cid-asphmpkf> <div${addAttribute(sizeClasses.container, "class")} data-astro-cid-asphmpkf> <!-- 顶部：图标和趋势 --> <div class="flex items-start justify-between mb-3" data-astro-cid-asphmpkf> <!-- 图标 --> ${icon && renderTemplate`<div${addAttribute(`rounded-lg flex items-center justify-center ${sizeClasses.iconContainer}`, "class")}${addAttribute(getIconStyle(), "style")} data-astro-cid-asphmpkf> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": icon, "class": sizeClasses.icon, "data-astro-cid-asphmpkf": true })} </div>`} <!-- 趋势指示器 --> ${trend && renderTemplate`<div${addAttribute(`flex items-center gap-1 ${trend.isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`, "class")} data-astro-cid-asphmpkf> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": trend.isPositive ? "material-symbols:trending-up" : "material-symbols:trending-down", "class": "text-sm", "data-astro-cid-asphmpkf": true })} <span class="text-xs font-medium" data-astro-cid-asphmpkf> ${trend.isPositive ? "+" : ""}${trend.value}%
</span> </div>`} </div> <!-- 主要数值 --> <div${addAttribute(`font-bold mb-1 ${sizeClasses.value}`, "class")}${addAttribute(`color: ${color}`, "style")} data-astro-cid-asphmpkf> ${value} </div> <!-- 标题 --> <div${addAttribute(`font-medium text-black/70 dark:text-white/70 mb-1 ${sizeClasses.title}`, "class")} data-astro-cid-asphmpkf> ${title} </div> <!-- 副标题 --> ${subtitle && renderTemplate`<div${addAttribute(`text-black/60 dark:text-white/60 ${sizeClasses.subtitle}`, "class")} data-astro-cid-asphmpkf> ${subtitle} </div>`} <!-- 趋势标签 --> ${trend && trend.label && renderTemplate`<div${addAttribute(`text-black/50 dark:text-white/50 mt-1 ${sizeClasses.subtitle}`, "class")} data-astro-cid-asphmpkf> ${trend.label} </div>`} <!-- 链接 --> ${link && renderTemplate`<div class="mt-3" data-astro-cid-asphmpkf> <a${addAttribute(link.url, "href")}${addAttribute(`text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors ${sizeClasses.subtitle}`, "class")} data-astro-cid-asphmpkf> ${link.text} →
</a> </div>`} </div> <!-- 悬停效果 --> <div class="absolute inset-0 bg-white/5 dark:bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" data-astro-cid-asphmpkf></div> </div> ${renderScript($$result, "D:/lyf/blog/my_blog/src/components/widget/StatCard.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/lyf/blog/my_blog/src/components/widget/StatCard.astro", void 0);

export { $$StatCard as default };
