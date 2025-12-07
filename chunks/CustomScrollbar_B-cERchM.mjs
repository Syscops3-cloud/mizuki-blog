import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderScript, d as renderTemplate } from './astro/server_CFIJpBV_.mjs';
import './_page_.12145de2_ClrpWW0d.mjs';

const $$Astro = createAstro();
const $$CustomScrollbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CustomScrollbar;
  const {
    children,
    orientation = "horizontal",
    class: customClass = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`custom-scrollbar ${orientation === "horizontal" ? "horizontal-scrollbar" : "vertical-scrollbar"} ${customClass}`, "class")}${addAttribute(orientation, "data-orientation")} data-astro-cid-7lkoqdys> ${children} </div>  ${renderScript($$result, "D:/lyf/blog/my_blog/src/components/CustomScrollbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/lyf/blog/my_blog/src/components/CustomScrollbar.astro", void 0);

export { $$CustomScrollbar as default };
