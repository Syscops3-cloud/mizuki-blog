import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, e as renderComponent, d as renderTemplate, F as Fragment } from './astro/server_CFIJpBV_.mjs';
import { a as $$Icon } from './MainGridLayout_CN5EEUhk.mjs';
import { u as umamiConfig, I as I18nKey } from './_astro_content_nJCuh7Be.mjs';
import { i as i18n, f as getCategoryUrl, h as getTagUrl } from './sakura-manager_BcW8Ox11.mjs';
import { formatDateToYYYYMMDD } from './date-utils_B-gLlDu-.mjs';

const $$Astro = createAstro();
const $$PostMeta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostMeta;
  const umamiEnabled = false;
  umamiConfig.scripts.match(/data-website-id="([^"]+)"/)?.[1] || "";
  const {
    published,
    updated,
    category,
    tags,
    hideUpdateDate,
    hideTagsForMobile,
    isHome,
    className = "",
    id,
    showOnlyBasicMeta = false,
    // 默认为false，保持原有行为
    words,
    // minutes,
    showWordCount = false
    // 默认不显示字数统计
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex flex-wrap text-neutral-500 dark:text-neutral-400 items-center gap-4 gap-x-4 gap-y-2", className], "class:list")}> <!-- publish date --> <div class="flex items-center"> <div class="meta-icon"> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:calendar-today-outline-rounded", "class": "text-xl" })} </div> <span class="text-50 text-sm font-medium">${formatDateToYYYYMMDD(published)}</span> </div> <!-- update date --> ${!hideUpdateDate && updated && updated.getTime() !== published.getTime() && renderTemplate`<div class="flex items-center"> <div class="meta-icon"> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:edit-calendar-outline-rounded", "class": "text-xl" })} </div> <span class="text-50 text-sm font-medium">${formatDateToYYYYMMDD(updated)}</span> </div>`} <!-- categories --> <div class="flex items-center"> <div class="meta-icon"> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:book-2-outline-rounded", "class": "text-xl" })} </div> <div class="flex flex-row flex-nowrap items-center"> <a${addAttribute(getCategoryUrl(category || ""), "href")}${addAttribute(`View all posts in the ${category} category`, "aria-label")} class="link-lg transition text-50 text-sm font-medium
                            hover:text-[var(--primary)] dark:hover:text-[var(--primary)] whitespace-nowrap"> ${category || i18n(I18nKey.uncategorized)} </a> </div> </div> <!-- word count --> ${showWordCount && words && renderTemplate`<div class="flex items-center"> <div class="meta-icon"> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:article-outline-rounded", "class": "text-xl" })} </div> <span class="text-50 text-sm font-medium"> ${words} ${words > 1 ? i18n(I18nKey.wordsCount) : i18n(I18nKey.wordCount)} </span> </div>`} <!-- tags (只有在不显示基本元数据时才显示) --> ${!showOnlyBasicMeta && renderTemplate`<div${addAttribute(["items-center", { "flex": !hideTagsForMobile, "hidden md:flex": hideTagsForMobile }], "class:list")}> <div class="meta-icon"> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:tag-rounded", "class": "text-xl" })} </div> <div class="flex flex-row flex-nowrap items-center"> ${tags && tags.length > 0 && tags.map((tag, i) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <div${addAttribute([{ "hidden": i == 0 }, "mx-1.5 text-[var(--meta-divider)] text-sm"], "class:list")}>/</div> <a${addAttribute(getTagUrl(tag), "href")}${addAttribute(`View all posts with the ${tag.trim()} tag`, "aria-label")} class="link-lg transition text-50 text-sm font-medium
                                        hover:text-[var(--primary)] dark:hover:text-[var(--primary)] whitespace-nowrap"> ${tag.trim()} </a> ` })}`)} ${!(tags && tags.length > 0) && renderTemplate`<div class="transition text-50 text-sm font-medium">${i18n(I18nKey.noTags)}</div>`} </div> </div>`} <!-- 访问量（首页不显示，且umami.enabled为true时显示） --> ${!isHome && umamiEnabled} </div> <!-- 只有在非首页且启用umami且有slug时才加载脚本 --> ${!isHome && umamiEnabled}`;
}, "D:/lyf/blog/my_blog/src/components/PostMeta.astro", void 0);

export { $$PostMeta as default };
