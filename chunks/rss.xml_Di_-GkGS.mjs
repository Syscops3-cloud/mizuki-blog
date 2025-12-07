import { g as getImage } from './_astro_assets_CT7LrGpm.mjs';
import rss from '@astrojs/rss';
import MarkdownIt from 'markdown-it';
import { parse } from 'node-html-parser';
import sanitizeHtml from 'sanitize-html';
import { a as siteConfig } from './_astro_content_nJCuh7Be.mjs';
import { c as getSortedPosts, d as getPostUrl } from './sakura-manager_BcW8Ox11.mjs';

const markdownParser = new MarkdownIt();
const imagesGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/guide/cover.png": () => import('./cover_Cn-RWpfm.mjs')


});
async function GET(context) {
  if (!context.site) {
    throw Error("site not set");
  }
  const posts = (await getSortedPosts()).filter((post) => !post.data.encrypted);
  const feed = [];
  for (const post of posts) {
    const body = markdownParser.render(String(post.body ?? ""));
    const html = parse.parse(body);
    const images = html.querySelectorAll("img");
    for (const img of images) {
      const src = img.getAttribute("src");
      if (!src) continue;
      if (src.startsWith("./") || src.startsWith("../") || !src.startsWith("http") && !src.startsWith("/")) {
        let importPath = null;
        if (src.startsWith("./")) {
          const prefixRemoved = src.slice(2);
          const postPath = post.id;
          const postDir = postPath.includes("/") ? postPath.split("/")[0] : "";
          if (postDir) {
            importPath = `/src/content/posts/${postDir}/${prefixRemoved}`;
          } else {
            importPath = `/src/content/posts/${prefixRemoved}`;
          }
        } else if (src.startsWith("../")) {
          const cleaned = src.replace(/^\.\.\//, "");
          importPath = `/src/content/${cleaned}`;
        } else {
          const postPath = post.id;
          const postDir = postPath.includes("/") ? postPath.split("/")[0] : "";
          if (postDir) {
            importPath = `/src/content/posts/${postDir}/${src}`;
          } else {
            importPath = `/src/content/posts/${src}`;
          }
        }
        const imageMod = await imagesGlob[importPath]?.()?.then(
          (res) => res.default
        );
        if (imageMod) {
          const optimizedImg = await getImage({ src: imageMod });
          img.setAttribute("src", new URL(optimizedImg.src, context.site).href);
        } else {
          console.log(
            `Failed to load image: ${importPath} for post: ${post.id}`
          );
        }
      } else if (src.startsWith("/")) {
        img.setAttribute("src", new URL(src, context.site).href);
      }
    }
    feed.push({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.published,
      link: getPostUrl(post),
      // sanitize the new html string with corrected image paths
      content: sanitizeHtml(html.toString(), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"])
      })
    });
  }
  return rss({
    title: siteConfig.title,
    description: siteConfig.subtitle,
    site: context.site,
    items: feed,
    customData: `<language>${siteConfig.lang}</language>`
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
