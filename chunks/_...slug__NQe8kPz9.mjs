/* empty css                          */
import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, u as unescapeHTML, r as renderScript, m as maybeRenderHead, b as addAttribute, F as Fragment } from './astro/server_CFIJpBV_.mjs';
import { r as renderEntry, a as siteConfig, p as profileConfig, I as I18nKey } from './_astro_content_nJCuh7Be.mjs';
import $$Index from './index_WSBUAIQb.mjs';
import $$License from './License_4N5id3wI.mjs';
import $$Markdown from './Markdown_CVimKEuO.mjs';
import $$PasswordProtection from './PasswordProtection_t5314ore.mjs';
import { c as getSortedPosts, r as removeFileExtension, i as i18n, e as getFileDirFromPath, a as getPostUrlBySlug } from './sakura-manager_BcW8Ox11.mjs';
import { $ as $$MainGridLayout, a as $$Icon, b as $$ImageWrapper } from './MainGridLayout_CN5EEUhk.mjs';
import bcryptjs from 'bcryptjs';
import CryptoJS from 'crypto-js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import $$PostMeta from './PostMeta_CuBwQye-.mjs';
import { formatDateToYYYYMMDD } from './date-utils_B-gLlDu-.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro();
async function getStaticPaths() {
  const blogEntries = await getSortedPosts();
  const paths = [];
  for (const entry of blogEntries) {
    const slug = removeFileExtension(entry.id);
    paths.push({
      params: { slug },
      props: { entry }
    });
    if (entry.data.permalink) {
      let permalink = entry.data.permalink.replace(/^\/+/, "").replace(/\/+$/, "");
      if (permalink.startsWith("posts/")) {
        permalink = permalink.replace(/^posts\//, "");
      }
      paths.push({
        params: { slug: permalink },
        props: { entry }
      });
    }
  }
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content, headings } = await renderEntry(entry);
  const { remarkPluginFrontmatter } = await renderEntry(entry);
  let encryptedContent = "";
  let passwordHash = "";
  let isEncrypted = entry.data.encrypted && entry.data.password;
  if (isEncrypted) {
    const contentToEncrypt = entry.body;
    const saltRounds = Number.parseInt(
      "12",
      10
    );
    passwordHash = bcryptjs.hashSync(entry.data.password, saltRounds);
    const encryptionKey = passwordHash.substring(0, 32);
    encryptedContent = CryptoJS.AES.encrypt(
      contentToEncrypt,
      encryptionKey
    ).toString();
  }
  dayjs.extend(utc);
  const lastModified = dayjs(entry.data.updated || entry.data.published).utc().format("YYYY-MM-DDTHH:mm:ss");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: entry.data.title,
    description: entry.data.description || entry.data.title,
    keywords: entry.data.tags,
    author: {
      "@type": "Person",
      name: profileConfig.name,
      url: Astro2.site
    },
    datePublished: formatDateToYYYYMMDD(entry.data.published),
    inLanguage: entry.data.lang ? entry.data.lang.replace("_", "-") : siteConfig.lang.replace("_", "-")
    // TODO include cover image here
  };
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "banner": entry.data.image, "title": entry.data.title, "description": entry.data.description, "lang": entry.data.lang, "setOGTypeArticle": true, "postSlug": entry.id, "headings": headings }, { "default": async ($$result2) => renderTemplate`   ${renderScript($$result2, "D:/lyf/blog/my_blog/src/pages/posts/[...slug].astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative mb-4"> <div id="post-container"${addAttribute([
    "card-base z-10 px-6 md:px-9 pt-6 pb-4 relative w-full ",
    {}
  ], "class:list")}> <!-- word count and reading time --> <div class="flex flex-row text-black/30 dark:text-white/30 gap-5 mb-3 transition onload-animation"> <div class="flex flex-row items-center"> <div class="transition h-6 w-6 rounded-md bg-black/5 dark:bg-white/10 text-black/50 dark:text-white/50 flex items-center justify-center mr-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:notes-rounded" })} </div> <div class="text-sm"> ${remarkPluginFrontmatter.words} ${" " + i18n(I18nKey.wordsCount)} </div> </div> <div class="flex flex-row items-center"> <div class="transition h-6 w-6 rounded-md bg-black/5 dark:bg-white/10 text-black/50 dark:text-white/50 flex items-center justify-center mr-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:schedule-outline-rounded" })} </div> <div class="text-sm"> ${remarkPluginFrontmatter.minutes} ${" " + i18n(
    remarkPluginFrontmatter.minutes === 1 ? I18nKey.minuteCount : I18nKey.minutesCount
  )} </div> </div> </div> <!-- title --> <div class="relative onload-animation"> <div data-pagefind-body data-pagefind-weight="10" data-pagefind-meta="title" class="transition w-full block font-bold mb-3
                    text-3xl md:text-[2.25rem]/[2.75rem]
                    text-black/90 dark:text-white/90
                    md:before:w-1 before:h-5 before:rounded-md before:bg-[var(--primary)]
                    before:absolute before:top-[0.75rem] before:left-[-1.125rem]"> ${entry.data.title} </div> </div> <!-- metadata --> <div class="onload-animation"> ${renderComponent($$result2, "PostMetadata", $$PostMeta, { "className": "mb-5", "published": entry.data.published, "updated": entry.data.updated, "tags": entry.data.tags, "category": entry.data.category || void 0, "id": entry.id })} ${!entry.data.image && renderTemplate`<div class="mt-4 border-[var(--line-divider)] border-dashed border-b-[1px] mb-5"></div>`} </div> <!-- always show cover as long as it has one --> ${entry.data.image && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <div class="mt-4"></div> ${renderComponent($$result3, "ImageWrapper", $$ImageWrapper, { "id": "post-cover", "src": entry.data.image, "basePath": getFileDirFromPath(entry.filePath || ""), "class": "mb-8 rounded-xl banner-container onload-animation" })} ` })}`} ${isEncrypted ? renderTemplate`${renderComponent($$result2, "PasswordProtection", $$PasswordProtection, { "encryptedContent": encryptedContent, "passwordHash": passwordHash })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Markdown", $$Markdown, { "class": "mb-6 markdown-content onload-animation" }, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "Content", Content, {})} ` })} ${renderTemplate`${renderComponent($$result3, "License", $$License, { "title": entry.data.title, "id": entry.id, "pubDate": entry.data.published, "author": entry.data.author, "sourceLink": entry.data.sourceLink, "licenseName": entry.data.licenseName, "licenseUrl": entry.data.licenseUrl, "class": "mb-6 rounded-xl license-container onload-animation" })}`}` })}`} </div> </div>  ${renderComponent($$result2, "Comment", $$Index, { "post": entry })} ${renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate(_a || (_a = __template([' <div id="last-modified"', "", "", "", "", "", "", "", ' style="display: none;"></div> <div class="card-base p-6 mb-4"> <script>\n                    function runtime() {\n                        const lastModifiedElement = document.getElementById(\'last-modified\');\n                        const startDate = new Date(lastModifiedElement.dataset.lastModified);\n                        const currentDate = new Date();\n                        const diff = currentDate - startDate;\n\n                        const seconds = Math.floor(diff / 1000);\n                        const days = Math.floor(seconds / 86400);\n                        const hours = Math.floor((seconds % 86400) / 3600);\n                        const minutes = Math.floor((seconds % 3600) / 60);\n                        const secs = seconds % 60;\n\n                        const years = Math.floor(days / 365);\n                        const months = Math.floor((days % 365) / 30);\n                        const remainingDays = days % 30;\n\n                        const prefix = lastModifiedElement.dataset.prefix;\n                        const yearKey = lastModifiedElement.dataset.year;\n                        const monthKey = lastModifiedElement.dataset.month;\n                        const dayKey = lastModifiedElement.dataset.day;\n                        const hourKey = lastModifiedElement.dataset.hour;\n                        const minuteKey = lastModifiedElement.dataset.minute;\n                        const secondKey = lastModifiedElement.dataset.second;\n\n                        let runtimeString = prefix + \' \';\n                        \n                        if (years > 0) {\n                            runtimeString += `${years} ${yearKey} `;\n                        }\n                        if (months > 0) {\n                            runtimeString += `${months} ${monthKey} `;\n                        }\n                        if (remainingDays > 0) {\n                            runtimeString += `${remainingDays} ${dayKey} `;\n                        }\n                        runtimeString += `${hours} ${hourKey} `;\n                        if (minutes < 10) {\n                            runtimeString += `0${minutes} ${minuteKey} `;\n                        } else {\n                            runtimeString += `${minutes} ${minuteKey} `;\n                        }\n                        if (secs < 10) {\n                            runtimeString += `0${secs} ${secondKey}`;\n                        } else {\n                            runtimeString += `${secs} ${secondKey}`;\n                        }\n\n                        document.getElementById("modifiedtime").innerHTML = runtimeString;\n                    }\n                    setInterval(runtime, 1000);\n                </script> <div class="flex items-center gap-3"> <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-[var(--enter-btn-bg)]"> ', ' </div> <div class="flex flex-col gap-1"> <div id="modifiedtime" class="text-[1.0rem] leading-tight text-black/75 dark:text-white/75"></div> <p class="text-[0.8rem] leading-tight text-black/75 dark:text-white/75"> ', " </p> </div> </div> </div> "], [' <div id="last-modified"', "", "", "", "", "", "", "", ' style="display: none;"></div> <div class="card-base p-6 mb-4"> <script>\n                    function runtime() {\n                        const lastModifiedElement = document.getElementById(\'last-modified\');\n                        const startDate = new Date(lastModifiedElement.dataset.lastModified);\n                        const currentDate = new Date();\n                        const diff = currentDate - startDate;\n\n                        const seconds = Math.floor(diff / 1000);\n                        const days = Math.floor(seconds / 86400);\n                        const hours = Math.floor((seconds % 86400) / 3600);\n                        const minutes = Math.floor((seconds % 3600) / 60);\n                        const secs = seconds % 60;\n\n                        const years = Math.floor(days / 365);\n                        const months = Math.floor((days % 365) / 30);\n                        const remainingDays = days % 30;\n\n                        const prefix = lastModifiedElement.dataset.prefix;\n                        const yearKey = lastModifiedElement.dataset.year;\n                        const monthKey = lastModifiedElement.dataset.month;\n                        const dayKey = lastModifiedElement.dataset.day;\n                        const hourKey = lastModifiedElement.dataset.hour;\n                        const minuteKey = lastModifiedElement.dataset.minute;\n                        const secondKey = lastModifiedElement.dataset.second;\n\n                        let runtimeString = prefix + \' \';\n                        \n                        if (years > 0) {\n                            runtimeString += \\`\\${years} \\${yearKey} \\`;\n                        }\n                        if (months > 0) {\n                            runtimeString += \\`\\${months} \\${monthKey} \\`;\n                        }\n                        if (remainingDays > 0) {\n                            runtimeString += \\`\\${remainingDays} \\${dayKey} \\`;\n                        }\n                        runtimeString += \\`\\${hours} \\${hourKey} \\`;\n                        if (minutes < 10) {\n                            runtimeString += \\`0\\${minutes} \\${minuteKey} \\`;\n                        } else {\n                            runtimeString += \\`\\${minutes} \\${minuteKey} \\`;\n                        }\n                        if (secs < 10) {\n                            runtimeString += \\`0\\${secs} \\${secondKey}\\`;\n                        } else {\n                            runtimeString += \\`\\${secs} \\${secondKey}\\`;\n                        }\n\n                        document.getElementById("modifiedtime").innerHTML = runtimeString;\n                    }\n                    setInterval(runtime, 1000);\n                </script> <div class="flex items-center gap-3"> <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-[var(--enter-btn-bg)]"> ', ' </div> <div class="flex flex-col gap-1"> <div id="modifiedtime" class="text-[1.0rem] leading-tight text-black/75 dark:text-white/75"></div> <p class="text-[0.8rem] leading-tight text-black/75 dark:text-white/75"> ', " </p> </div> </div> </div> "])), addAttribute(lastModified, "data-last-modified"), addAttribute(i18n(I18nKey.lastModifiedPrefix), "data-prefix"), addAttribute(i18n(I18nKey.year), "data-year"), addAttribute(i18n(I18nKey.month), "data-month"), addAttribute(i18n(I18nKey.day), "data-day"), addAttribute(i18n(I18nKey.hour), "data-hour"), addAttribute(i18n(I18nKey.minute), "data-minute"), addAttribute(i18n(I18nKey.second), "data-second"), renderComponent($$result3, "Icon", $$Icon, { "name": "material-symbols:history-rounded", "class": "text-3xl text-[var(--primary)]" }), i18n(I18nKey.lastModifiedOutdated)) })}`}<div class="flex flex-col md:flex-row justify-between mb-4 gap-4 overflow-hidden w-full"> <a${addAttribute(entry.data.nextSlug ? getPostUrlBySlug(entry.data.nextSlug) : "#", "href")}${addAttribute([
    "w-full font-bold overflow-hidden active:scale-95",
    { "pointer-events-none": !entry.data.nextSlug }
  ], "class:list")}> ${entry.data.nextSlug && renderTemplate`<div class="btn-card rounded-2xl w-full h-[3.75rem] max-w-full px-4 flex items-center !justify-start gap-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:chevron-left-rounded", "class": "text-[2rem] text-[var(--primary)]" })} <div class="overflow-hidden transition overflow-ellipsis whitespace-nowrap max-w-[calc(100%_-_3rem)] text-black/75 dark:text-white/75"> ${entry.data.nextTitle} </div> </div>`} </a> <a${addAttribute(entry.data.prevSlug ? getPostUrlBySlug(entry.data.prevSlug) : "#", "href")}${addAttribute([
    "w-full font-bold overflow-hidden active:scale-95",
    { "pointer-events-none": !entry.data.prevSlug }
  ], "class:list")}> ${entry.data.prevSlug && renderTemplate`<div class="btn-card rounded-2xl w-full h-[3.75rem] max-w-full px-4 flex items-center !justify-end gap-4"> <div class="overflow-hidden transition overflow-ellipsis whitespace-nowrap max-w-[calc(100%_-_3rem)] text-black/75 dark:text-white/75"> ${entry.data.prevTitle} </div> ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:chevron-right-rounded", "class": "text-[2rem] text-[var(--primary)]" })} </div>`} </a> </div> `, "head": async ($$result2) => renderTemplate(_b || (_b = __template(['<script type="application/ld+json">', "</script>"])), unescapeHTML(JSON.stringify(jsonLd))) })}`;
}, "D:/lyf/blog/my_blog/src/pages/posts/[...slug].astro", void 0);
const $$file = "D:/lyf/blog/my_blog/src/pages/posts/[...slug].astro";
const $$url = "/mizuki-blog/posts/[...slug]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
