import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, d as renderTemplate } from './astro/server_CFIJpBV_.mjs';

const html = () => "";

				const frontmatter = {"minutes":1,"words":0,"excerpt":""};
				const file = "D:/lyf/blog/my_blog/src/content/spec/friends.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, Content as default, file, frontmatter, url };
