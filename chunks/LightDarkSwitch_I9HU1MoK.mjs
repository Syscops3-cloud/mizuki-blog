import { b as attr, d as attr_class } from './_@astro-renderers_CUQVmPyH.mjs';
import { I as Icon, L as LIGHT_MODE, D as DARK_MODE } from './MainGridLayout_CN5EEUhk.mjs';
import { getStoredTheme } from './setting-utils_W3H8u40l.mjs';
import './_page_.12145de2_ClrpWW0d.mjs';

function LightDarkSwitch($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let mode = getStoredTheme();

		if (typeof window !== "undefined") {
			const handleContentReplace = () => {
				requestAnimationFrame(() => {
					const newMode = getStoredTheme();

					if (mode !== newMode) {
						mode = newMode;
					}
				});
			};

			if (window.swup && window.swup.hooks) {
				window.swup.hooks.on("content:replace", handleContentReplace);
			} else {
				document.addEventListener("swup:enable", () => {
					if (window.swup && window.swup.hooks) {
						window.swup.hooks.on("content:replace", handleContentReplace);
					}
				});
			}

			document.addEventListener("DOMContentLoaded", () => {
				requestAnimationFrame(() => {
					const newMode = getStoredTheme();

					if (mode !== newMode) {
						mode = newMode;
					}
				});
			});
		}

		$$renderer.push(`<div class="relative z-50"><button aria-label="Light/Dark Mode" class="relative btn-plain scale-animation rounded-lg h-11 w-11 active:scale-90 theme-switch-btn svelte-f18gzs" id="scheme-switch"${attr('data-mode', mode)}><div${attr_class('absolute transition-all duration-300 ease-in-out', void 0, {
			'opacity-0': mode !== LIGHT_MODE,
			'rotate-180': mode !== LIGHT_MODE
		})}>`);

		Icon($$renderer, {
			icon: 'material-symbols:wb-sunny-outline-rounded',
			class: 'text-[1.25rem]'
		});

		$$renderer.push(`<!----></div> <div${attr_class('absolute transition-all duration-300 ease-in-out', void 0, {
			'opacity-0': mode !== DARK_MODE,
			'rotate-180': mode !== DARK_MODE
		})}>`);

		Icon($$renderer, {
			icon: 'material-symbols:dark-mode-outline-rounded',
			class: 'text-[1.25rem]'
		});

		$$renderer.push(`<!----></div></button></div>`);
	});
}

export { LightDarkSwitch as default };
