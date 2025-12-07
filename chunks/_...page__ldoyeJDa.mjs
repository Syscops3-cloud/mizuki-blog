/* empty css                          */
import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate } from './astro/server_CFIJpBV_.mjs';
import $$Pagination from './Pagination_shouc_Yk.mjs';
import $$PostPage from './PostPage_X1ajAcjw.mjs';
import { $ as $$MainGridLayout, P as PAGE_SIZE } from './MainGridLayout_CN5EEUhk.mjs';
import { c as getSortedPosts } from './sakura-manager_BcW8Ox11.mjs';

const $$Astro = createAstro();
const getStaticPaths = (async ({ paginate }) => {
  const allBlogPosts = await getSortedPosts();
  return paginate(allBlogPosts, { pageSize: PAGE_SIZE });
});
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const len = page.data.length;
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PostPage", $$PostPage, { "page": page })} ${renderComponent($$result2, "Pagination", $$Pagination, { "class": "mx-auto onload-animation", "page": page, "style": `animation-delay: calc(var(--content-delay) + ${len * 50}ms)` })} ` })}`;
}, "D:/lyf/blog/my_blog/src/pages/[...page].astro", void 0);

const $$file = "D:/lyf/blog/my_blog/src/pages/[...page].astro";
const $$url = "/mizuki-blog/[...page]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
