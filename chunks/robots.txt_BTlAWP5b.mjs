const robotsTxt = `
User-agent: *
Disallow: /
Allow: /$
Allow: /posts/

Sitemap: ${new URL("sitemap-index.xml", void 0).href}
`.trim();
const GET = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
