import { d as attr_class, a as escape_html } from './_@astro-renderers_CUQVmPyH.mjs';
import { I as Icon, W as WALLPAPER_BANNER, e as WALLPAPER_FULLSCREEN, f as WALLPAPER_NONE } from './MainGridLayout_CN5EEUhk.mjs';
import { I as I18nKey } from './_astro_content_nJCuh7Be.mjs';
import { i as i18n } from './sakura-manager_BcW8Ox11.mjs';
import { getStoredWallpaperMode } from './setting-utils_W3H8u40l.mjs';
import './panel-manager_CXhJi7eZ.mjs';
import './_page_.12145de2_ClrpWW0d.mjs';

function WallpaperSwitch($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let mode = getStoredWallpaperMode();

		$$renderer.push(`<div class="relative z-50" role="menu" tabindex="-1"><button aria-label="Wallpaper Mode" role="menuitem" class="relative btn-plain scale-animation rounded-lg h-11 w-11 active:scale-90 theme-switch-btn" id="wallpaper-mode-switch"><div${attr_class('absolute', void 0, { 'opacity-0': mode !== WALLPAPER_BANNER })}>`);

		Icon($$renderer, {
			icon: 'material-symbols:image-outline',
			class: 'text-[1.25rem]'
		});

		$$renderer.push(`<!----></div> <div${attr_class('absolute', void 0, { 'opacity-0': mode !== WALLPAPER_FULLSCREEN })}>`);
		Icon($$renderer, { icon: 'material-symbols:wallpaper', class: 'text-[1.25rem]' });
		$$renderer.push(`<!----></div> <div${attr_class('absolute', void 0, { 'opacity-0': mode !== WALLPAPER_NONE })}>`);

		Icon($$renderer, {
			icon: 'material-symbols:hide-image-outline',
			class: 'text-[1.25rem]'
		});

		$$renderer.push(`<!----></div></button> <div id="wallpaper-mode-panel" class="absolute transition float-panel-closed top-11 -right-2 pt-5"><div class="card-base float-panel p-2"><button${attr_class('flex transition whitespace-nowrap items-center !justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5 theme-switch-btn svelte-6gqkie', void 0, { 'current-theme-btn': mode === WALLPAPER_BANNER })}>`);

		Icon($$renderer, {
			icon: 'material-symbols:image-outline',
			class: 'text-[1.25rem] mr-3'
		});

		$$renderer.push(`<!----> ${escape_html(i18n(I18nKey.wallpaperBanner))}</button> <button${attr_class('flex transition whitespace-nowrap items-center !justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5 theme-switch-btn svelte-6gqkie', void 0, { 'current-theme-btn': mode === WALLPAPER_FULLSCREEN })}>`);

		Icon($$renderer, {
			icon: 'material-symbols:wallpaper',
			class: 'text-[1.25rem] mr-3'
		});

		$$renderer.push(`<!----> ${escape_html(i18n(I18nKey.wallpaperFullscreen))}</button> <button${attr_class('flex transition whitespace-nowrap items-center !justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 theme-switch-btn svelte-6gqkie', void 0, { 'current-theme-btn': mode === WALLPAPER_NONE })}>`);

		Icon($$renderer, {
			icon: 'material-symbols:hide-image-outline',
			class: 'text-[1.25rem] mr-3'
		});

		$$renderer.push(`<!----> ${escape_html(i18n(I18nKey.wallpaperNone))}</button></div></div></div>`);
	});
}

export { WallpaperSwitch as default };
