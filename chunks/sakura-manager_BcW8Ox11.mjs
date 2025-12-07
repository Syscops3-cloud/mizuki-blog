import { q as ja, z as zh_TW, t as zh_CN, v as en, a as siteConfig, I as I18nKey, w as getCollection } from './_astro_content_nJCuh7Be.mjs';

const defaultTranslation = en;
const map = {
  en,
  en_us: en,
  en_gb: en,
  en_au: en,
  zh_cn: zh_CN,
  zh_tw: zh_TW,
  ja,
  ja_jp: ja
};
function getTranslation(lang) {
  return map[lang.toLowerCase()] || defaultTranslation;
}
function i18n(key) {
  const lang = siteConfig.lang;
  return getTranslation(lang)[key];
}

const translation = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	getTranslation,
	i18n
}, Symbol.toStringTag, { value: 'Module' }));

function removeFileExtension(id) {
  return id.replace(/\.(md|mdx|markdown)$/i, "");
}
function pathsEqual(path1, path2) {
  const normalizedPath1 = path1.replace(/^\/|\/$/g, "").toLowerCase();
  const normalizedPath2 = path2.replace(/^\/|\/$/g, "").toLowerCase();
  return normalizedPath1 === normalizedPath2;
}
function joinUrl(...parts) {
  const joined = parts.join("/");
  return joined.replace(/\/+/g, "/");
}
function getPostUrlBySlug(slug) {
  const slugWithoutExt = removeFileExtension(slug);
  return url(`/posts/${slugWithoutExt}/`);
}
function getPostUrlByPermalink(permalink) {
  const cleanPermalink = permalink.replace(/^\/+/, "");
  return url(`/posts/${cleanPermalink}/`);
}
function getPostUrl(post) {
  if (post.data.permalink) {
    return getPostUrlByPermalink(post.data.permalink);
  }
  return getPostUrlBySlug(post.id);
}
function getTagUrl(tag) {
  if (!tag) return url("/archive/");
  return url(`/archive/?tag=${encodeURIComponent(tag.trim())}`);
}
function getCategoryUrl(category) {
  if (!category || category.trim() === "" || category.trim().toLowerCase() === i18n(I18nKey.uncategorized).toLowerCase())
    return url("/archive/?uncategorized=true");
  return url(`/archive/?category=${encodeURIComponent(category.trim())}`);
}
function getFileDirFromPath(filePath) {
  return filePath.replace(/^src\//, "").replace(/\/[^/]+$/, "");
}
function url(path) {
  return joinUrl("", "/mizuki-blog/", path);
}

const urlUtils = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	getCategoryUrl,
	getFileDirFromPath,
	getPostUrl,
	getPostUrlByPermalink,
	getPostUrlBySlug,
	getTagUrl,
	pathsEqual,
	removeFileExtension,
	url
}, Symbol.toStringTag, { value: 'Module' }));

async function getRawSortedPosts() {
  const allBlogPosts = await getCollection("posts", ({ data }) => {
    return data.draft !== true ;
  });
  const sorted = allBlogPosts.sort((a, b) => {
    if (a.data.pinned && !b.data.pinned) return -1;
    if (!a.data.pinned && b.data.pinned) return 1;
    const dateA = new Date(a.data.published);
    const dateB = new Date(b.data.published);
    return dateA > dateB ? -1 : 1;
  });
  return sorted;
}
async function getSortedPosts() {
  const sorted = await getRawSortedPosts();
  for (let i = 1; i < sorted.length; i++) {
    sorted[i].data.nextSlug = sorted[i - 1].id;
    sorted[i].data.nextTitle = sorted[i - 1].data.title;
  }
  for (let i = 0; i < sorted.length - 1; i++) {
    sorted[i].data.prevSlug = sorted[i + 1].id;
    sorted[i].data.prevTitle = sorted[i + 1].data.title;
  }
  return sorted;
}
async function getSortedPostsList() {
  const sortedFullPosts = await getRawSortedPosts();
  const sortedPostsList = sortedFullPosts.map((post) => ({
    id: post.id,
    data: post.data
  }));
  return sortedPostsList;
}
async function getTagList() {
  const allBlogPosts = await getCollection("posts", ({ data }) => {
    return data.draft !== true ;
  });
  const countMap = {};
  allBlogPosts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      if (!countMap[tag]) countMap[tag] = 0;
      countMap[tag]++;
    });
  });
  const keys = Object.keys(countMap).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  return keys.map((key) => ({ name: key, count: countMap[key] }));
}
async function getCategoryList() {
  const allBlogPosts = await getCollection("posts", ({ data }) => {
    return data.draft !== true ;
  });
  const count = {};
  allBlogPosts.forEach((post) => {
    if (!post.data.category) {
      const ucKey = i18n(I18nKey.uncategorized);
      count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1;
      return;
    }
    const categoryName = typeof post.data.category === "string" ? post.data.category.trim() : String(post.data.category).trim();
    count[categoryName] = count[categoryName] ? count[categoryName] + 1 : 1;
  });
  const lst = Object.keys(count).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  const ret = [];
  for (const c of lst) {
    ret.push({
      name: c,
      count: count[c],
      url: getCategoryUrl(c)
    });
  }
  return ret;
}

const contentUtils = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	getCategoryList,
	getSortedPosts,
	getSortedPostsList,
	getTagList
}, Symbol.toStringTag, { value: 'Module' }));

const navigationUtils = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const env_d = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const global_d = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

/// <reference types="mdast" />

const rehypeComponentAdmonition = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

/// <reference types="mdast" />

const rehypeComponentGithubCard = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const rehypeMermaid = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const remarkDirectiveRehype = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

// biome-ignore lint/suspicious/noShadowRestrictedNames: <toString from mdast-util-to-string>

const remarkExcerpt = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const remarkMermaid = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const album = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const cryptoJs_d = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const iconLoader = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const languageUtils = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const sakuraManager = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

export { album as A, cryptoJs_d as B, iconLoader as C, languageUtils as D, sakuraManager as E, getPostUrlBySlug as a, getSortedPostsList as b, getSortedPosts as c, getPostUrl as d, getFileDirFromPath as e, getCategoryUrl as f, getPostUrlByPermalink as g, getTagUrl as h, i18n as i, getCategoryList as j, getTagList as k, urlUtils as l, contentUtils as m, navigationUtils as n, env_d as o, pathsEqual as p, global_d as q, removeFileExtension as r, rehypeComponentAdmonition as s, translation as t, url as u, rehypeComponentGithubCard as v, rehypeMermaid as w, remarkDirectiveRehype as x, remarkExcerpt as y, remarkMermaid as z };
