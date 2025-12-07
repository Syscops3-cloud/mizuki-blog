import { c as createComponent, a as createAstro, d as renderTemplate } from './astro/server_CFIJpBV_.mjs';
import { c as commentConfig } from './_astro_content_nJCuh7Be.mjs';
import { r as removeFileExtension } from './sakura-manager_BcW8Ox11.mjs';
import './Twikoo_2BC5LhOt.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { id, data: _data } = Astro2.props.post;
  removeFileExtension(id);
  return renderTemplate`${commentConfig?.enable}`;
}, "D:/lyf/blog/my_blog/src/components/comment/index.astro", void 0);

export { $$Index as default };
