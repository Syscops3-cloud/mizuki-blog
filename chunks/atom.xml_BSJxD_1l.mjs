import { g as getImage } from './_astro_assets_CT7LrGpm.mjs';
import MarkdownIt from 'markdown-it';
import { parse } from 'node-html-parser';
import sanitizeHtml from 'sanitize-html';
import { a as siteConfig, p as profileConfig } from './_astro_content_nJCuh7Be.mjs';
import { c as getSortedPosts, d as getPostUrl } from './sakura-manager_BcW8Ox11.mjs';

const markdownParser = new MarkdownIt();
const imagesGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/guide/cover.png": () => import('./cover_Cn-RWpfm.mjs')


});
async function GET(context) {
  if (!context.site) {
    throw Error("site not set");
  }
  const posts = (await getSortedPosts()).filter(
    (post) => !post.data.encrypted && post.data.draft !== true
  );
  let atomFeed = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${siteConfig.title}</title>
  <subtitle>${siteConfig.subtitle}</subtitle>
  <link href="${context.site}" rel="alternate" type="text/html"/>
  <link href="${new URL("atom.xml", context.site)}" rel="self" type="application/atom+xml"/>
  <id>${context.site}</id>
  <updated>${(/* @__PURE__ */ new Date()).toISOString()}</updated>
  <language>${siteConfig.lang}</language>`;
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
    const postUrl = new URL(getPostUrl(post), context.site).href;
    const content = sanitizeHtml(html.toString(), {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"])
    });
    atomFeed += `
  <entry>
    <title>${post.data.title}</title>
    <link href="${postUrl}" rel="alternate" type="text/html"/>
    <id>${postUrl}</id>
    <published>${post.data.published.toISOString()}</published>
    <updated>${post.data.updated?.toISOString() || post.data.published.toISOString()}</updated>
    <summary>${post.data.description || ""}</summary>
    <content type="html"><![CDATA[${content}]]></content>
    <author>
      <name>${profileConfig.name}</name>
    </author>`;
    if (post.data.category) {
      atomFeed += `
    <category term="${post.data.category}"></category>`;
    }
    atomFeed += `
  </entry>`;
  }
  atomFeed += `
</feed>`;
  return new Response(atomFeed, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
