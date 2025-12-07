/* empty css                          */
import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, g as defineScriptVars, b as addAttribute, m as maybeRenderHead, r as renderScript } from './astro/server_CFIJpBV_.mjs';
import { $ as $$MainGridLayout, a as $$Icon } from './MainGridLayout_CN5EEUhk.mjs';
import { I as I18nKey } from './_astro_content_nJCuh7Be.mjs';
import { devicesData } from './devices_CJUZCtKV.mjs';
import { i as i18n } from './sakura-manager_BcW8Ox11.mjs';
/* empty css                           */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = true;
const $$Devices = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Devices;
  const devices = devicesData;
  const brands = Object.keys(devices);
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.devices), "data-astro-cid-komnyuwm": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", " ", '<div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative min-h-32" data-astro-cid-komnyuwm> <div class="card-base z-10 px-9 py-6 relative w-full" data-astro-cid-komnyuwm> <!-- \u9875\u9762\u6807\u9898 --> <div class="flex flex-col items-start justify-center mb-8" data-astro-cid-komnyuwm> <h1 class="text-4xl font-bold text-black/90 dark:text-white/90 mb-2 relative\n                  before:w-1 before:h-8 before:rounded-md before:bg-[var(--primary)]\n                  before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-4" data-astro-cid-komnyuwm> ', ' </h1> <p class="text-lg text-black/60 dark:text-white/60" data-astro-cid-komnyuwm> ', ' </p> </div> <!-- \u8FC7\u6EE4\u6309\u94AE --> <div class="mb-6" data-astro-cid-komnyuwm> <div class="filter-container flex flex-wrap gap-2" data-astro-cid-komnyuwm> ', ' </div> </div> <!-- \u8BBE\u5907\u5217\u8868 --> <div id="devices-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-komnyuwm> ', " </div> </div> </div> <script>(function(){", `
    const brandTabs = document.querySelectorAll('.filter-tag');
    const devicesContainer = document.getElementById('devices-container');

    brandTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const brand = tab.dataset.brand;
        
        // \u79FB\u9664\u6240\u6709\u6FC0\u6D3B\u72B6\u6001
        brandTabs.forEach(t => {
          t.classList.remove('active');
        });
        // \u6FC0\u6D3B\u5F53\u524D\u70B9\u51FB\u7684\u6807\u7B7E
        tab.classList.add('active');

        const brandDevices = devices[brand] || [];
        devicesContainer.innerHTML = brandDevices.map((device, index) => \`
          <a 
            href="\${device.link}"
            target="_blank"
            rel="noopener noreferrer"
            class="device-card group relative overflow-hidden rounded-xl border border-[var(--line-divider)] bg-[var(--card-bg)] transition-all duration-300 hover:border-[var(--primary)]/50 hover:shadow-md hover:shadow-black/5 dark:hover:shadow-white/5 hover:scale-[1.02] hover:-translate-y-0.5 block cursor-pointer"
            style="animation-delay: \${index * 100}ms; animation: fadeInUp 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards; opacity: 0;"
          >
            <!-- \u8BBE\u5907\u56FE\u7247\u533A\u57DF -->
            <div class="relative p-6 pb-0">
              <div class="flex justify-center items-center h-48 bg-gradient-to-br from-[var(--card-bg)] to-[var(--btn-regular-bg)] rounded-lg overflow-hidden relative">
                <div class="absolute inset-0 bg-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="\${device.image}" 
                  alt="\${device.name}"
                  class="w-auto h-full max-h-full object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-md relative z-10"
                />
              </div>
            </div>
            
            <!-- \u8BBE\u5907\u4FE1\u606F\u533A\u57DF -->
            <div class="p-6 pt-4 relative z-10">
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-lg font-bold text-black/90 dark:text-white/90 group-hover:text-[var(--primary)] transition-colors duration-300">
                  \${device.name}
                </h3>
                <div class="p-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
              
              <div class="mb-4">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--btn-regular-bg)] text-black/70 dark:text-white/70 text-sm mb-3">
                  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="font-medium">\${device.specs}</span>
                </div>
                
                <p class="text-sm text-black/60 dark:text-white/60 leading-relaxed line-clamp-2">
                  \${device.description}
                </p>
              </div>
              
              <!-- \u67E5\u770B\u8BE6\u60C5\u6309\u94AE -->
              <div class="flex items-center justify-between pt-3 border-t border-[var(--line-divider)] border-dashed opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span class="text-sm font-medium text-[var(--primary)]">\u67E5\u770B\u8BE6\u60C5</span>
                <svg class="w-5 h-5 text-[var(--primary)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
            

          </a>
        \`).join('');
      });
    });
  })();<\/script>  `], ["  ", " ", '<div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative min-h-32" data-astro-cid-komnyuwm> <div class="card-base z-10 px-9 py-6 relative w-full" data-astro-cid-komnyuwm> <!-- \u9875\u9762\u6807\u9898 --> <div class="flex flex-col items-start justify-center mb-8" data-astro-cid-komnyuwm> <h1 class="text-4xl font-bold text-black/90 dark:text-white/90 mb-2 relative\n                  before:w-1 before:h-8 before:rounded-md before:bg-[var(--primary)]\n                  before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-4" data-astro-cid-komnyuwm> ', ' </h1> <p class="text-lg text-black/60 dark:text-white/60" data-astro-cid-komnyuwm> ', ' </p> </div> <!-- \u8FC7\u6EE4\u6309\u94AE --> <div class="mb-6" data-astro-cid-komnyuwm> <div class="filter-container flex flex-wrap gap-2" data-astro-cid-komnyuwm> ', ' </div> </div> <!-- \u8BBE\u5907\u5217\u8868 --> <div id="devices-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-komnyuwm> ', " </div> </div> </div> <script>(function(){", `
    const brandTabs = document.querySelectorAll('.filter-tag');
    const devicesContainer = document.getElementById('devices-container');

    brandTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const brand = tab.dataset.brand;
        
        // \u79FB\u9664\u6240\u6709\u6FC0\u6D3B\u72B6\u6001
        brandTabs.forEach(t => {
          t.classList.remove('active');
        });
        // \u6FC0\u6D3B\u5F53\u524D\u70B9\u51FB\u7684\u6807\u7B7E
        tab.classList.add('active');

        const brandDevices = devices[brand] || [];
        devicesContainer.innerHTML = brandDevices.map((device, index) => \\\`
          <a 
            href="\\\${device.link}"
            target="_blank"
            rel="noopener noreferrer"
            class="device-card group relative overflow-hidden rounded-xl border border-[var(--line-divider)] bg-[var(--card-bg)] transition-all duration-300 hover:border-[var(--primary)]/50 hover:shadow-md hover:shadow-black/5 dark:hover:shadow-white/5 hover:scale-[1.02] hover:-translate-y-0.5 block cursor-pointer"
            style="animation-delay: \\\${index * 100}ms; animation: fadeInUp 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards; opacity: 0;"
          >
            <!-- \u8BBE\u5907\u56FE\u7247\u533A\u57DF -->
            <div class="relative p-6 pb-0">
              <div class="flex justify-center items-center h-48 bg-gradient-to-br from-[var(--card-bg)] to-[var(--btn-regular-bg)] rounded-lg overflow-hidden relative">
                <div class="absolute inset-0 bg-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="\\\${device.image}" 
                  alt="\\\${device.name}"
                  class="w-auto h-full max-h-full object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-md relative z-10"
                />
              </div>
            </div>
            
            <!-- \u8BBE\u5907\u4FE1\u606F\u533A\u57DF -->
            <div class="p-6 pt-4 relative z-10">
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-lg font-bold text-black/90 dark:text-white/90 group-hover:text-[var(--primary)] transition-colors duration-300">
                  \\\${device.name}
                </h3>
                <div class="p-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
              
              <div class="mb-4">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--btn-regular-bg)] text-black/70 dark:text-white/70 text-sm mb-3">
                  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="font-medium">\\\${device.specs}</span>
                </div>
                
                <p class="text-sm text-black/60 dark:text-white/60 leading-relaxed line-clamp-2">
                  \\\${device.description}
                </p>
              </div>
              
              <!-- \u67E5\u770B\u8BE6\u60C5\u6309\u94AE -->
              <div class="flex items-center justify-between pt-3 border-t border-[var(--line-divider)] border-dashed opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span class="text-sm font-medium text-[var(--primary)]">\u67E5\u770B\u8BE6\u60C5</span>
                <svg class="w-5 h-5 text-[var(--primary)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
            

          </a>
        \\\`).join('');
      });
    });
  })();<\/script>  `])), renderScript($$result2, "D:/lyf/blog/my_blog/src/pages/devices.astro?astro&type=script&index=0&lang.ts"), maybeRenderHead(), i18n(I18nKey.devices), i18n(I18nKey.devicesSubtitle), brands.map((brand, index) => renderTemplate`<button${addAttribute(brand, "data-brand")}${addAttribute(`filter-tag px-6 py-2.5 rounded-lg font-medium transition-all ${index === 0 ? "active" : ""}`, "class")} data-astro-cid-komnyuwm> ${brand} </button>`), devices[brands[0]].map((device, index) => renderTemplate`<a${addAttribute(device.link, "href")} target="_blank" rel="noopener noreferrer" class="device-card group relative overflow-hidden rounded-xl border border-[var(--line-divider)] bg-[var(--card-bg)] transition-all duration-300 hover:border-[var(--primary)]/50 hover:shadow-md hover:shadow-black/5 dark:hover:shadow-white/5 hover:scale-[1.02] hover:-translate-y-0.5 block cursor-pointer"${addAttribute(`animation-delay: ${index * 100}ms`, "style")} data-astro-cid-komnyuwm> <!-- 设备图片区域 --> <div class="relative p-6 pb-0" data-astro-cid-komnyuwm> <div class="flex justify-center items-center h-48 bg-gradient-to-br from-[var(--card-bg)] to-[var(--btn-regular-bg)] rounded-lg overflow-hidden relative" data-astro-cid-komnyuwm> <div class="absolute inset-0 bg-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-komnyuwm></div> <img${addAttribute(device.image, "src")}${addAttribute(device.name, "alt")} class="w-auto h-full max-h-full object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-md relative z-10" data-astro-cid-komnyuwm> </div> </div> <!-- 设备信息区域 --> <div class="p-6 pt-4 relative z-10" data-astro-cid-komnyuwm> <div class="flex items-start justify-between mb-3" data-astro-cid-komnyuwm> <h3 class="text-lg font-bold text-black/90 dark:text-white/90 group-hover:text-[var(--primary)] transition-colors duration-300" data-astro-cid-komnyuwm> ${device.name} </h3> <div class="p-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-komnyuwm> ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:open-in-new", "class": "text-lg", "data-astro-cid-komnyuwm": true })} </div> </div> <div class="mb-4" data-astro-cid-komnyuwm> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--btn-regular-bg)] text-black/70 dark:text-white/70 text-sm mb-3" data-astro-cid-komnyuwm> ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:settings-suggest-outline", "class": "text-sm", "data-astro-cid-komnyuwm": true })} <span class="font-medium" data-astro-cid-komnyuwm>${device.specs}</span> </div> <p class="text-sm text-black/60 dark:text-white/60 leading-relaxed line-clamp-2" data-astro-cid-komnyuwm> ${device.description} </p> </div> <!-- 查看详情按钮 --> <div class="flex items-center justify-between pt-3 border-t border-[var(--line-divider)] border-dashed opacity-0 group-hover:opacity-100 transition-all duration-300" data-astro-cid-komnyuwm> <span class="text-sm font-medium text-[var(--primary)]" data-astro-cid-komnyuwm>查看详情</span> ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:arrow-forward-rounded", "class": "text-lg text-[var(--primary)]", "data-astro-cid-komnyuwm": true })} </div> </div> </a>`), defineScriptVars({ devices })) })}`;
}, "D:/lyf/blog/my_blog/src/pages/devices.astro", void 0);

const $$file = "D:/lyf/blog/my_blog/src/pages/devices.astro";
const $$url = "/mizuki-blog/devices/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Devices,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
