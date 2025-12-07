import { c as bind_props } from './_@astro-renderers_CUQVmPyH.mjs';
import { f as fallback } from './utils_DmF-9_lv.mjs';
import { s as sidebarLayoutConfig } from './_astro_content_nJCuh7Be.mjs';
import './_page_.12145de2_ClrpWW0d.mjs';

function LayoutSwitchButton($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let currentLayout = fallback($$props['currentLayout'], "list");
		sidebarLayoutConfig.position === "both";

		{
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]-->`);
		bind_props($$props, { currentLayout });
	});
}

export { LayoutSwitchButton as default };
