/* empty css                          */
import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, g as defineScriptVars, b as addAttribute, m as maybeRenderHead } from './astro/server_CFIJpBV_.mjs';
import { $ as $$MainGridLayout, b as $$ImageWrapper } from './MainGridLayout_CN5EEUhk.mjs';
import { s as sidebarLayoutConfig, I as I18nKey, a as siteConfig } from './_astro_content_nJCuh7Be.mjs';
import localAnimeList from './anime_BoOAVINi.mjs';
import { i as i18n } from './sakura-manager_BcW8Ox11.mjs';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Anime = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Anime;
  const isBothSidebarMode = sidebarLayoutConfig.position === "both";
  const ANIME_MODE = siteConfig.anime?.mode;
  let animeList = [];
  {
    animeList = localAnimeList;
  }
  function getStatusInfo(status) {
    switch (status) {
      case "watching":
        return {
          text: i18n(I18nKey.animeStatusWatching),
          class: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
          icon: "\u25B6"
        };
      case "completed":
        return {
          text: i18n(I18nKey.animeStatusCompleted),
          class: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
          icon: "\u2713"
        };
      case "planned":
        return {
          text: i18n(I18nKey.animeStatusPlanned),
          class: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
          icon: "\u23F0"
        };
      case "onhold":
        return {
          text: i18n(I18nKey.animeStatusOnHold),
          class: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
          icon: "\u23F8"
        };
      case "dropped":
        return {
          text: i18n(I18nKey.animeStatusDropped),
          class: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
          icon: "\u2717"
        };
      default:
        return {
          text: status,
          class: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
          icon: "?"
        };
    }
  }
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.anime), "description": i18n(I18nKey.animeSubtitle), "data-astro-cid-fepk5tcl": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative min-h-32" data-astro-cid-fepk5tcl> <div class="card-base z-10 px-9 py-6 relative w-full" data-astro-cid-fepk5tcl> <!-- \u9875\u9762\u6807\u9898 --> <div class="relative w-full mb-8" data-astro-cid-fepk5tcl> <div class="mb-6" data-astro-cid-fepk5tcl> <h1 class="text-4xl font-bold text-black/90 dark:text-white/90 mb-2 relative\n                    before:w-1 before:h-8 before:rounded-md before:bg-[var(--primary)]\n                    before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-4" data-astro-cid-fepk5tcl> ', ' </h1> <p class="text-black/75 dark:text-white/75" data-astro-cid-fepk5tcl>', '</p> </div> <!-- \u8FC7\u6EE4\u6309\u94AE - \u53C2\u8003Firefly\u8BBE\u8BA1 --> <div class="mb-6" data-astro-cid-fepk5tcl> <div class="filter-container flex flex-wrap gap-2" data-astro-cid-fepk5tcl> <button class="filter-tag active" data-status="all" data-astro-cid-fepk5tcl>', '</button> <button class="filter-tag" data-status="watching" data-astro-cid-fepk5tcl>', '</button> <button class="filter-tag" data-status="planned" data-astro-cid-fepk5tcl>', '</button> <button class="filter-tag" data-status="completed" data-astro-cid-fepk5tcl>', "</button> ", ' </div> </div> </div> <!-- \u52A8\u6F2B\u5217\u8868 --> <div class="mb-8" data-astro-cid-fepk5tcl> ', " </div> </div> </div> <script>(function(){", `
  // \u52A8\u753B\u5217\u8868\u5E03\u5C40\u5207\u6362\u811A\u672C
  (function() {
    // \u4F7F\u7528\u66F4\u53EF\u9760\u7684\u521D\u59CB\u5316\u68C0\u67E5\u673A\u5236
    function initAnimeLayout() {
      const animeListContainer = document.getElementById("anime-list-container");
      if (!animeListContainer) {
        return false; // \u5BB9\u5668\u672A\u627E\u5230\uFF0C\u7EE7\u7EED\u91CD\u8BD5
      }

      // \u83B7\u53D6\u5F53\u524D\u5E03\u5C40\u8BBE\u7F6E
      const currentLayout = localStorage.getItem("postListLayout") || "list";
      
      // \u521D\u59CB\u5316\u5E03\u5C40\uFF08\u4E0D\u4F9D\u8D56 window.layoutManager\uFF09
      updateAnimeListLayout(currentLayout);
      
      return true; // \u521D\u59CB\u5316\u6210\u529F
    }

    // \u5C1D\u8BD5\u521D\u59CB\u5316\uFF0C\u5E26\u6709\u6307\u6570\u9000\u907F\u7684\u91CD\u8BD5\u673A\u5236
    let retryCount = 0;
    const maxRetries = 10;
    
    function tryInit() {
      if (initAnimeLayout()) return;
      
      if (retryCount < maxRetries) {
        retryCount++;
        const delay = Math.min(100 * Math.pow(1.5, retryCount), 1000);
        setTimeout(tryInit, delay);
      } else {
        console.warn("Failed to initialize anime layout after multiple attempts");
        // \u6700\u540E\u5C1D\u8BD5\u4E00\u6B21\u5F3A\u5236\u521D\u59CB\u5316
        setTimeout(() => {
            const animeListContainer = document.getElementById("anime-list-container");
            if (animeListContainer) {
                const currentLayout = localStorage.getItem("postListLayout") || "list";
                updateAnimeListLayout(currentLayout);
            }
        }, 2000);
      }
    }
    
    // \u7ACB\u5373\u5C1D\u8BD5\u7B2C\u4E00\u6B21
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', tryInit);
    } else {
        tryInit();
    }

    function updateAnimeListLayout(layout) {
      const animeListContainer = document.getElementById("anime-list-container");
      if (!animeListContainer) return;

      // \u907F\u514D\u91CD\u590D\u6267\u884C
      if (animeListContainer.dataset.currentLayout === layout) return;
      animeListContainer.dataset.currentLayout = layout;

      // FLIP \u52A8\u753B\u6280\u672F\u5B9E\u73B0\u5E03\u5C40\u5207\u6362\u52A8\u753B
      // First: \u8BB0\u5F55\u6240\u6709\u5361\u7247\u7684\u521D\u59CB\u4F4D\u7F6E
      const animeItems = Array.from(document.querySelectorAll('[data-anime-status]'));
      const firstPositions = new Map();
      
      animeItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
            firstPositions.set(item, {
                left: rect.left,
                top: rect.top,
                width: rect.width,
                height: rect.height
            });
        }
      });
      
      // \u6682\u65F6\u7981\u7528\u8FC7\u6E21
      const style = document.createElement('style');
      style.innerHTML = \`
        .anime-item, .anime-item * {
            transition: none !important;
        }
      \`;
      document.head.appendChild(style);
      
      // \u7ACB\u5373\u5E94\u7528\u5E03\u5C40\u66F4\u6539
      animeListContainer.classList.remove("list-mode", "grid-mode");
      
      if (layout === "grid") {
        animeListContainer.classList.add("grid-mode");
        animeListContainer.classList.add("grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3");
        animeListContainer.classList.remove("flex", "flex-col");
        
        const rightSidebar = document.querySelector('.right-sidebar-container');
        if (rightSidebar) {
          rightSidebar.style.display = 'none';
          rightSidebar.classList.add('hidden-in-grid-mode');
        }
        
        const mainGrid = document.getElementById('main-grid');
        if (mainGrid) {
          mainGrid.style.gridTemplateColumns = '17.5rem 1fr';
          mainGrid.classList.add('two-column-layout');
          mainGrid.setAttribute('data-layout-mode', 'grid');
        }
      } else {
        animeListContainer.classList.add("list-mode");
        animeListContainer.classList.add("flex", "flex-col");
        animeListContainer.classList.remove("grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3");
        
        const rightSidebar = document.querySelector('.right-sidebar-container');
        if (rightSidebar) {
          rightSidebar.style.display = '';
          rightSidebar.classList.remove('hidden-in-grid-mode');
        }
        
        const mainGrid = document.getElementById('main-grid');
        if (mainGrid) {
          mainGrid.style.gridTemplateColumns = '';
          mainGrid.classList.remove('two-column-layout');
          mainGrid.setAttribute('data-layout-mode', 'list');
        }
      }

      // \u5F3A\u5236\u91CD\u6392
      void animeListContainer.offsetHeight;

      // \u5728\u4E0B\u4E00\u5E27\u6267\u884C Invert & Play
      requestAnimationFrame(() => {
          // \u79FB\u9664\u7981\u7528\u8FC7\u6E21\u7684\u6837\u5F0F
          if (style.parentNode) {
              style.parentNode.removeChild(style);
          }

          animeItems.forEach(item => {
            const first = firstPositions.get(item);
            if (!first) return;
            
            const last = item.getBoundingClientRect();
            
            const deltaX = first.left - last.left;
            const deltaY = first.top - last.top;
            const deltaW = first.width / last.width;
            const deltaH = first.height / last.height;
            
            if (Math.abs(deltaX) < 1 && Math.abs(deltaY) < 1 && Math.abs(deltaW - 1) < 0.01 && Math.abs(deltaH - 1) < 0.01) {
                return;
            }

            // Invert: \u7ACB\u5373\u5E94\u7528\u53CD\u5411\u53D8\u6362\uFF08\u6B64\u65F6\u6CA1\u6709\u8FC7\u6E21\uFF0C\u56E0\u4E3A\u4E0A\u9762\u867D\u7136\u79FB\u9664\u4E86style\uFF0C\u4F46\u65B0\u6837\u5F0F\u751F\u6548\u9700\u8981\u65F6\u95F4\uFF0C\u6216\u8005\u6211\u4EEC\u53EF\u4EE5\u663E\u5F0F\u8BBE\u7F6E transition: none\uFF09
            item.style.transition = 'none';
            item.style.transformOrigin = 'top left';
            item.style.transform = \`translate(\${deltaX}px, \${deltaY}px) scale(\${deltaW}, \${deltaH})\`;
          });
          
          // \u5F3A\u5236\u91CD\u6392
          void animeListContainer.offsetHeight;
          
          // Play: \u542F\u7528\u8FC7\u6E21\u5E76\u79FB\u9664\u53D8\u6362
          requestAnimationFrame(() => {
              animeItems.forEach(item => {
                  if (!firstPositions.has(item)) return;
                  
                  item.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
                  item.style.transform = '';
              });
              
              // \u52A8\u753B\u7ED3\u675F\u540E\u6E05\u7406
              setTimeout(() => {
                  animeItems.forEach(item => {
                      item.style.transition = '';
                      item.style.transformOrigin = '';
                      item.style.transform = '';
                  });
              }, 500);
          });
      });
    }

    // \u76D1\u542C\u5E03\u5C40\u53D8\u5316\u4E8B\u4EF6
    window.addEventListener("layoutChange", (event) => {
      updateAnimeListLayout(event.detail.layout);
    });
  })();
})();<\/script>    <script>
    // \u4E8B\u4EF6\u76D1\u542C\u5668\u5B58\u50A8\uFF0C\u7528\u4E8E\u9632\u6B62\u91CD\u590D\u7ED1\u5B9A
    if (typeof window.animeFilterEventListeners === 'undefined') {
      window.animeFilterEventListeners = [];
    }
    
    // \u521D\u59CB\u5316\u8FC7\u6EE4\u529F\u80FD
    function initFilterButtons() {
      const filterTags = document.querySelectorAll('.filter-tag');
      
      // \u79FB\u9664\u4E4B\u524D\u7684\u4E8B\u4EF6\u76D1\u542C\u5668
      window.animeFilterEventListeners.forEach(listener => {
        const [element, type, handler] = listener;
        element.removeEventListener(type, handler);
      });
      window.animeFilterEventListeners = [];
      
      // \u8FC7\u6EE4\u529F\u80FD - \u4F7F\u7528 FLIP \u6280\u672F\u5B9E\u73B0\u6D17\u724C\u52A8\u753B
      filterTags.forEach(tag => {
        const clickHandler = function() {
          // \u9632\u6B62\u91CD\u590D\u70B9\u51FB
          if (this.classList.contains('active')) return;
          
          // \u79FB\u9664\u6240\u6709active\u7C7B
          filterTags.forEach(t => t.classList.remove('active'));
          // \u6DFB\u52A0active\u7C7B\u5230\u5F53\u524D\u70B9\u51FB\u7684\u6807\u7B7E
          this.classList.add('active');
          
          const status = this.getAttribute('data-status');
          const animeItems = Array.from(document.querySelectorAll('[data-anime-status]'));
          
          // FLIP \u52A8\u753B\u6280\u672F
          // First: \u8BB0\u5F55\u6240\u6709\u5361\u7247\u7684\u521D\u59CB\u4F4D\u7F6E
          const firstPositions = new Map();
          animeItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            firstPositions.set(item, {
              left: rect.left,
              top: rect.top,
              width: rect.width,
              height: rect.height
            });
          });
          
          // \u5206\u7C7B\u5361\u7247
          const itemsToHide = [];
          const itemsToShow = [];
          const itemsToKeep = [];
          
          animeItems.forEach(item => {
            const itemStatus = item.getAttribute('data-anime-status');
            const shouldShow = status === 'all' || itemStatus === status;
            const isCurrentlyVisible = !item.classList.contains('anime-hidden');
            
            if (shouldShow) {
              if (isCurrentlyVisible) {
                itemsToKeep.push(item);
              } else {
                itemsToShow.push(item);
              }
            } else {
              if (isCurrentlyVisible) {
                itemsToHide.push(item);
              }
            }
          });
          
          // \u4E3A\u8981\u9690\u85CF\u7684\u5361\u7247\u6DFB\u52A0\u6DE1\u51FA\u6548\u679C
          itemsToHide.forEach(item => {
            item.classList.add('anime-fade-out');
          });
          
          // \u7B49\u5F85\u6DE1\u51FA\u5B8C\u6210
          setTimeout(() => {
            // Last: \u5B8C\u5168\u9690\u85CF\u8981\u79FB\u9664\u7684\u5361\u7247
            itemsToHide.forEach(item => {
              item.classList.add('anime-hidden');
              item.classList.remove('anime-fade-out');
            });
            
            // \u663E\u793A\u65B0\u5361\u7247\u4F46\u5148\u8BBE\u4E3A\u900F\u660E\u548C\u7F29\u5C0F\uFF08\u5728\u5B83\u4EEC\u7684\u6700\u7EC8\u4F4D\u7F6E\uFF09
            itemsToShow.forEach(item => {
              item.classList.remove('anime-hidden');
              item.classList.add('anime-fade-in');
              item.style.opacity = '0';
              item.style.transform = 'scale(0.8)';
              item.style.transition = 'none';
            });
            
            // \u7B49\u5F85\u5E03\u5C40\u66F4\u65B0
            requestAnimationFrame(() => {
              // \u8BB0\u5F55\u6240\u6709\u5361\u7247\u7684\u6700\u7EC8\u4F4D\u7F6E\uFF08\u5305\u62EC\u65B0\u663E\u793A\u7684\u5361\u7247\uFF09
              const lastPositions = new Map();
              [...itemsToKeep, ...itemsToShow].forEach(item => {
                const rect = item.getBoundingClientRect();
                lastPositions.set(item, {
                  left: rect.left,
                  top: rect.top
                });
              });
              
              // Invert: \u53EA\u5BF9\u4FDD\u6301\u663E\u793A\u7684\u5361\u7247\u5E94\u7528\u53CD\u5411\u53D8\u6362
              itemsToKeep.forEach(item => {
                const first = firstPositions.get(item);
                const last = lastPositions.get(item);
                
                if (first && last) {
                  const deltaX = first.left - last.left;
                  const deltaY = first.top - last.top;
                  
                  // \u7ACB\u5373\u5E94\u7528\u53CD\u5411\u53D8\u6362\uFF08\u4E0D\u4F7F\u7528\u8FC7\u6E21\uFF09
                  item.style.transition = 'none';
                  item.style.transform = \`translate(\${deltaX}px, \${deltaY}px)\`;
                }
              });
              
              // Play: \u89E6\u53D1\u52A8\u753B
              requestAnimationFrame(() => {
                const allItems = [...itemsToKeep, ...itemsToShow];
                
                allItems.forEach((item, index) => {
                  // \u9519\u5F00\u52A8\u753B\u5F00\u59CB\u65F6\u95F4\uFF0C\u521B\u5EFA\u6CE2\u6D6A\u6548\u679C
                  setTimeout(() => {
                    item.classList.add('anime-animating');
                    
                    // \u4FDD\u6301\u663E\u793A\u7684\u5361\u7247\uFF1A\u79FB\u52A8\u5230\u6700\u7EC8\u4F4D\u7F6E
                    if (itemsToKeep.includes(item)) {
                      item.style.transition = '';
                      item.style.transform = '';
                    }
                    
                    // \u65B0\u663E\u793A\u7684\u5361\u7247\uFF1A\u5728\u5F53\u524D\u4F4D\u7F6E\u6DE1\u5165\u5E76\u653E\u5927
                    if (itemsToShow.includes(item)) {
                      item.classList.remove('anime-fade-in');
                      item.classList.add('anime-fade-in-active');
                      item.style.transition = '';
                      item.style.opacity = '1';
                      item.style.transform = 'scale(1)';
                    }
                  }, index * 20); // \u6BCF\u4E2A\u5361\u7247\u5EF6\u8FDF20ms
                });
                
                // \u52A8\u753B\u5B8C\u6210\u540E\u6E05\u7406
                setTimeout(() => {
                  allItems.forEach(item => {
                    item.classList.remove('anime-animating', 'anime-fade-in-active');
                    item.style.transition = '';
                    item.style.transform = '';
                    item.style.opacity = '';
                  });
                }, 500 + allItems.length * 20); // \u7B49\u5F85\u6240\u6709\u52A8\u753B\u5B8C\u6210
              });
            });
          }, 300); // \u7B49\u5F85\u6DE1\u51FA\u52A8\u753B\u5B8C\u6210
        };
        
        tag.addEventListener('click', clickHandler);
        window.animeFilterEventListeners.push([tag, 'click', clickHandler]);
      });
      
      console.log('Filter buttons initialized with', filterTags.length, 'buttons');
    }
    
    // \u9875\u9762\u52A0\u8F7D\u65F6\u521D\u59CB\u5316
    document.addEventListener('DOMContentLoaded', initFilterButtons);
    
    // Swup\u9875\u9762\u5207\u6362\u540E\u91CD\u65B0\u521D\u59CB\u5316
    function setupSwupListeners() {
      if (window.swup) {
        // \u4F7F\u7528Swup hooks\u76D1\u542C\u9875\u9762\u5207\u6362\u4E8B\u4EF6
        window.swup.hooks.on('content:replace', function() {
          console.log('Swup content replaced - reinitializing filter buttons');
          setTimeout(initFilterButtons, 150);
        });
        
        window.swup.hooks.on('page:view', function() {
          console.log('Swup page view - reinitializing filter buttons');
          setTimeout(initFilterButtons, 150);
        });
        
        window.swup.hooks.on('animation:in:end', function() {
          console.log('Swup animation ended - reinitializing filter buttons');
          setTimeout(initFilterButtons, 200);
        });
      }
    }
    
    // \u521D\u59CB\u5316Swup\u76D1\u542C\u5668
    if (typeof window !== 'undefined') {
      if (window.swup) {
        setupSwupListeners();
      } else {
        // \u5982\u679CSwup\u5C1A\u672A\u521D\u59CB\u5316\uFF0C\u76D1\u542C\u542F\u7528\u4E8B\u4EF6
        document.addEventListener('swup:enable', function() {
          console.log('Swup enabled - setting up listeners');
          setupSwupListeners();
        });
      }
    }
  <\/script> `], [" ", '<div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative min-h-32" data-astro-cid-fepk5tcl> <div class="card-base z-10 px-9 py-6 relative w-full" data-astro-cid-fepk5tcl> <!-- \u9875\u9762\u6807\u9898 --> <div class="relative w-full mb-8" data-astro-cid-fepk5tcl> <div class="mb-6" data-astro-cid-fepk5tcl> <h1 class="text-4xl font-bold text-black/90 dark:text-white/90 mb-2 relative\n                    before:w-1 before:h-8 before:rounded-md before:bg-[var(--primary)]\n                    before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-4" data-astro-cid-fepk5tcl> ', ' </h1> <p class="text-black/75 dark:text-white/75" data-astro-cid-fepk5tcl>', '</p> </div> <!-- \u8FC7\u6EE4\u6309\u94AE - \u53C2\u8003Firefly\u8BBE\u8BA1 --> <div class="mb-6" data-astro-cid-fepk5tcl> <div class="filter-container flex flex-wrap gap-2" data-astro-cid-fepk5tcl> <button class="filter-tag active" data-status="all" data-astro-cid-fepk5tcl>', '</button> <button class="filter-tag" data-status="watching" data-astro-cid-fepk5tcl>', '</button> <button class="filter-tag" data-status="planned" data-astro-cid-fepk5tcl>', '</button> <button class="filter-tag" data-status="completed" data-astro-cid-fepk5tcl>', "</button> ", ' </div> </div> </div> <!-- \u52A8\u6F2B\u5217\u8868 --> <div class="mb-8" data-astro-cid-fepk5tcl> ', " </div> </div> </div> <script>(function(){", `
  // \u52A8\u753B\u5217\u8868\u5E03\u5C40\u5207\u6362\u811A\u672C
  (function() {
    // \u4F7F\u7528\u66F4\u53EF\u9760\u7684\u521D\u59CB\u5316\u68C0\u67E5\u673A\u5236
    function initAnimeLayout() {
      const animeListContainer = document.getElementById("anime-list-container");
      if (!animeListContainer) {
        return false; // \u5BB9\u5668\u672A\u627E\u5230\uFF0C\u7EE7\u7EED\u91CD\u8BD5
      }

      // \u83B7\u53D6\u5F53\u524D\u5E03\u5C40\u8BBE\u7F6E
      const currentLayout = localStorage.getItem("postListLayout") || "list";
      
      // \u521D\u59CB\u5316\u5E03\u5C40\uFF08\u4E0D\u4F9D\u8D56 window.layoutManager\uFF09
      updateAnimeListLayout(currentLayout);
      
      return true; // \u521D\u59CB\u5316\u6210\u529F
    }

    // \u5C1D\u8BD5\u521D\u59CB\u5316\uFF0C\u5E26\u6709\u6307\u6570\u9000\u907F\u7684\u91CD\u8BD5\u673A\u5236
    let retryCount = 0;
    const maxRetries = 10;
    
    function tryInit() {
      if (initAnimeLayout()) return;
      
      if (retryCount < maxRetries) {
        retryCount++;
        const delay = Math.min(100 * Math.pow(1.5, retryCount), 1000);
        setTimeout(tryInit, delay);
      } else {
        console.warn("Failed to initialize anime layout after multiple attempts");
        // \u6700\u540E\u5C1D\u8BD5\u4E00\u6B21\u5F3A\u5236\u521D\u59CB\u5316
        setTimeout(() => {
            const animeListContainer = document.getElementById("anime-list-container");
            if (animeListContainer) {
                const currentLayout = localStorage.getItem("postListLayout") || "list";
                updateAnimeListLayout(currentLayout);
            }
        }, 2000);
      }
    }
    
    // \u7ACB\u5373\u5C1D\u8BD5\u7B2C\u4E00\u6B21
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', tryInit);
    } else {
        tryInit();
    }

    function updateAnimeListLayout(layout) {
      const animeListContainer = document.getElementById("anime-list-container");
      if (!animeListContainer) return;

      // \u907F\u514D\u91CD\u590D\u6267\u884C
      if (animeListContainer.dataset.currentLayout === layout) return;
      animeListContainer.dataset.currentLayout = layout;

      // FLIP \u52A8\u753B\u6280\u672F\u5B9E\u73B0\u5E03\u5C40\u5207\u6362\u52A8\u753B
      // First: \u8BB0\u5F55\u6240\u6709\u5361\u7247\u7684\u521D\u59CB\u4F4D\u7F6E
      const animeItems = Array.from(document.querySelectorAll('[data-anime-status]'));
      const firstPositions = new Map();
      
      animeItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
            firstPositions.set(item, {
                left: rect.left,
                top: rect.top,
                width: rect.width,
                height: rect.height
            });
        }
      });
      
      // \u6682\u65F6\u7981\u7528\u8FC7\u6E21
      const style = document.createElement('style');
      style.innerHTML = \\\`
        .anime-item, .anime-item * {
            transition: none !important;
        }
      \\\`;
      document.head.appendChild(style);
      
      // \u7ACB\u5373\u5E94\u7528\u5E03\u5C40\u66F4\u6539
      animeListContainer.classList.remove("list-mode", "grid-mode");
      
      if (layout === "grid") {
        animeListContainer.classList.add("grid-mode");
        animeListContainer.classList.add("grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3");
        animeListContainer.classList.remove("flex", "flex-col");
        
        const rightSidebar = document.querySelector('.right-sidebar-container');
        if (rightSidebar) {
          rightSidebar.style.display = 'none';
          rightSidebar.classList.add('hidden-in-grid-mode');
        }
        
        const mainGrid = document.getElementById('main-grid');
        if (mainGrid) {
          mainGrid.style.gridTemplateColumns = '17.5rem 1fr';
          mainGrid.classList.add('two-column-layout');
          mainGrid.setAttribute('data-layout-mode', 'grid');
        }
      } else {
        animeListContainer.classList.add("list-mode");
        animeListContainer.classList.add("flex", "flex-col");
        animeListContainer.classList.remove("grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3");
        
        const rightSidebar = document.querySelector('.right-sidebar-container');
        if (rightSidebar) {
          rightSidebar.style.display = '';
          rightSidebar.classList.remove('hidden-in-grid-mode');
        }
        
        const mainGrid = document.getElementById('main-grid');
        if (mainGrid) {
          mainGrid.style.gridTemplateColumns = '';
          mainGrid.classList.remove('two-column-layout');
          mainGrid.setAttribute('data-layout-mode', 'list');
        }
      }

      // \u5F3A\u5236\u91CD\u6392
      void animeListContainer.offsetHeight;

      // \u5728\u4E0B\u4E00\u5E27\u6267\u884C Invert & Play
      requestAnimationFrame(() => {
          // \u79FB\u9664\u7981\u7528\u8FC7\u6E21\u7684\u6837\u5F0F
          if (style.parentNode) {
              style.parentNode.removeChild(style);
          }

          animeItems.forEach(item => {
            const first = firstPositions.get(item);
            if (!first) return;
            
            const last = item.getBoundingClientRect();
            
            const deltaX = first.left - last.left;
            const deltaY = first.top - last.top;
            const deltaW = first.width / last.width;
            const deltaH = first.height / last.height;
            
            if (Math.abs(deltaX) < 1 && Math.abs(deltaY) < 1 && Math.abs(deltaW - 1) < 0.01 && Math.abs(deltaH - 1) < 0.01) {
                return;
            }

            // Invert: \u7ACB\u5373\u5E94\u7528\u53CD\u5411\u53D8\u6362\uFF08\u6B64\u65F6\u6CA1\u6709\u8FC7\u6E21\uFF0C\u56E0\u4E3A\u4E0A\u9762\u867D\u7136\u79FB\u9664\u4E86style\uFF0C\u4F46\u65B0\u6837\u5F0F\u751F\u6548\u9700\u8981\u65F6\u95F4\uFF0C\u6216\u8005\u6211\u4EEC\u53EF\u4EE5\u663E\u5F0F\u8BBE\u7F6E transition: none\uFF09
            item.style.transition = 'none';
            item.style.transformOrigin = 'top left';
            item.style.transform = \\\`translate(\\\${deltaX}px, \\\${deltaY}px) scale(\\\${deltaW}, \\\${deltaH})\\\`;
          });
          
          // \u5F3A\u5236\u91CD\u6392
          void animeListContainer.offsetHeight;
          
          // Play: \u542F\u7528\u8FC7\u6E21\u5E76\u79FB\u9664\u53D8\u6362
          requestAnimationFrame(() => {
              animeItems.forEach(item => {
                  if (!firstPositions.has(item)) return;
                  
                  item.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
                  item.style.transform = '';
              });
              
              // \u52A8\u753B\u7ED3\u675F\u540E\u6E05\u7406
              setTimeout(() => {
                  animeItems.forEach(item => {
                      item.style.transition = '';
                      item.style.transformOrigin = '';
                      item.style.transform = '';
                  });
              }, 500);
          });
      });
    }

    // \u76D1\u542C\u5E03\u5C40\u53D8\u5316\u4E8B\u4EF6
    window.addEventListener("layoutChange", (event) => {
      updateAnimeListLayout(event.detail.layout);
    });
  })();
})();<\/script>    <script>
    // \u4E8B\u4EF6\u76D1\u542C\u5668\u5B58\u50A8\uFF0C\u7528\u4E8E\u9632\u6B62\u91CD\u590D\u7ED1\u5B9A
    if (typeof window.animeFilterEventListeners === 'undefined') {
      window.animeFilterEventListeners = [];
    }
    
    // \u521D\u59CB\u5316\u8FC7\u6EE4\u529F\u80FD
    function initFilterButtons() {
      const filterTags = document.querySelectorAll('.filter-tag');
      
      // \u79FB\u9664\u4E4B\u524D\u7684\u4E8B\u4EF6\u76D1\u542C\u5668
      window.animeFilterEventListeners.forEach(listener => {
        const [element, type, handler] = listener;
        element.removeEventListener(type, handler);
      });
      window.animeFilterEventListeners = [];
      
      // \u8FC7\u6EE4\u529F\u80FD - \u4F7F\u7528 FLIP \u6280\u672F\u5B9E\u73B0\u6D17\u724C\u52A8\u753B
      filterTags.forEach(tag => {
        const clickHandler = function() {
          // \u9632\u6B62\u91CD\u590D\u70B9\u51FB
          if (this.classList.contains('active')) return;
          
          // \u79FB\u9664\u6240\u6709active\u7C7B
          filterTags.forEach(t => t.classList.remove('active'));
          // \u6DFB\u52A0active\u7C7B\u5230\u5F53\u524D\u70B9\u51FB\u7684\u6807\u7B7E
          this.classList.add('active');
          
          const status = this.getAttribute('data-status');
          const animeItems = Array.from(document.querySelectorAll('[data-anime-status]'));
          
          // FLIP \u52A8\u753B\u6280\u672F
          // First: \u8BB0\u5F55\u6240\u6709\u5361\u7247\u7684\u521D\u59CB\u4F4D\u7F6E
          const firstPositions = new Map();
          animeItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            firstPositions.set(item, {
              left: rect.left,
              top: rect.top,
              width: rect.width,
              height: rect.height
            });
          });
          
          // \u5206\u7C7B\u5361\u7247
          const itemsToHide = [];
          const itemsToShow = [];
          const itemsToKeep = [];
          
          animeItems.forEach(item => {
            const itemStatus = item.getAttribute('data-anime-status');
            const shouldShow = status === 'all' || itemStatus === status;
            const isCurrentlyVisible = !item.classList.contains('anime-hidden');
            
            if (shouldShow) {
              if (isCurrentlyVisible) {
                itemsToKeep.push(item);
              } else {
                itemsToShow.push(item);
              }
            } else {
              if (isCurrentlyVisible) {
                itemsToHide.push(item);
              }
            }
          });
          
          // \u4E3A\u8981\u9690\u85CF\u7684\u5361\u7247\u6DFB\u52A0\u6DE1\u51FA\u6548\u679C
          itemsToHide.forEach(item => {
            item.classList.add('anime-fade-out');
          });
          
          // \u7B49\u5F85\u6DE1\u51FA\u5B8C\u6210
          setTimeout(() => {
            // Last: \u5B8C\u5168\u9690\u85CF\u8981\u79FB\u9664\u7684\u5361\u7247
            itemsToHide.forEach(item => {
              item.classList.add('anime-hidden');
              item.classList.remove('anime-fade-out');
            });
            
            // \u663E\u793A\u65B0\u5361\u7247\u4F46\u5148\u8BBE\u4E3A\u900F\u660E\u548C\u7F29\u5C0F\uFF08\u5728\u5B83\u4EEC\u7684\u6700\u7EC8\u4F4D\u7F6E\uFF09
            itemsToShow.forEach(item => {
              item.classList.remove('anime-hidden');
              item.classList.add('anime-fade-in');
              item.style.opacity = '0';
              item.style.transform = 'scale(0.8)';
              item.style.transition = 'none';
            });
            
            // \u7B49\u5F85\u5E03\u5C40\u66F4\u65B0
            requestAnimationFrame(() => {
              // \u8BB0\u5F55\u6240\u6709\u5361\u7247\u7684\u6700\u7EC8\u4F4D\u7F6E\uFF08\u5305\u62EC\u65B0\u663E\u793A\u7684\u5361\u7247\uFF09
              const lastPositions = new Map();
              [...itemsToKeep, ...itemsToShow].forEach(item => {
                const rect = item.getBoundingClientRect();
                lastPositions.set(item, {
                  left: rect.left,
                  top: rect.top
                });
              });
              
              // Invert: \u53EA\u5BF9\u4FDD\u6301\u663E\u793A\u7684\u5361\u7247\u5E94\u7528\u53CD\u5411\u53D8\u6362
              itemsToKeep.forEach(item => {
                const first = firstPositions.get(item);
                const last = lastPositions.get(item);
                
                if (first && last) {
                  const deltaX = first.left - last.left;
                  const deltaY = first.top - last.top;
                  
                  // \u7ACB\u5373\u5E94\u7528\u53CD\u5411\u53D8\u6362\uFF08\u4E0D\u4F7F\u7528\u8FC7\u6E21\uFF09
                  item.style.transition = 'none';
                  item.style.transform = \\\`translate(\\\${deltaX}px, \\\${deltaY}px)\\\`;
                }
              });
              
              // Play: \u89E6\u53D1\u52A8\u753B
              requestAnimationFrame(() => {
                const allItems = [...itemsToKeep, ...itemsToShow];
                
                allItems.forEach((item, index) => {
                  // \u9519\u5F00\u52A8\u753B\u5F00\u59CB\u65F6\u95F4\uFF0C\u521B\u5EFA\u6CE2\u6D6A\u6548\u679C
                  setTimeout(() => {
                    item.classList.add('anime-animating');
                    
                    // \u4FDD\u6301\u663E\u793A\u7684\u5361\u7247\uFF1A\u79FB\u52A8\u5230\u6700\u7EC8\u4F4D\u7F6E
                    if (itemsToKeep.includes(item)) {
                      item.style.transition = '';
                      item.style.transform = '';
                    }
                    
                    // \u65B0\u663E\u793A\u7684\u5361\u7247\uFF1A\u5728\u5F53\u524D\u4F4D\u7F6E\u6DE1\u5165\u5E76\u653E\u5927
                    if (itemsToShow.includes(item)) {
                      item.classList.remove('anime-fade-in');
                      item.classList.add('anime-fade-in-active');
                      item.style.transition = '';
                      item.style.opacity = '1';
                      item.style.transform = 'scale(1)';
                    }
                  }, index * 20); // \u6BCF\u4E2A\u5361\u7247\u5EF6\u8FDF20ms
                });
                
                // \u52A8\u753B\u5B8C\u6210\u540E\u6E05\u7406
                setTimeout(() => {
                  allItems.forEach(item => {
                    item.classList.remove('anime-animating', 'anime-fade-in-active');
                    item.style.transition = '';
                    item.style.transform = '';
                    item.style.opacity = '';
                  });
                }, 500 + allItems.length * 20); // \u7B49\u5F85\u6240\u6709\u52A8\u753B\u5B8C\u6210
              });
            });
          }, 300); // \u7B49\u5F85\u6DE1\u51FA\u52A8\u753B\u5B8C\u6210
        };
        
        tag.addEventListener('click', clickHandler);
        window.animeFilterEventListeners.push([tag, 'click', clickHandler]);
      });
      
      console.log('Filter buttons initialized with', filterTags.length, 'buttons');
    }
    
    // \u9875\u9762\u52A0\u8F7D\u65F6\u521D\u59CB\u5316
    document.addEventListener('DOMContentLoaded', initFilterButtons);
    
    // Swup\u9875\u9762\u5207\u6362\u540E\u91CD\u65B0\u521D\u59CB\u5316
    function setupSwupListeners() {
      if (window.swup) {
        // \u4F7F\u7528Swup hooks\u76D1\u542C\u9875\u9762\u5207\u6362\u4E8B\u4EF6
        window.swup.hooks.on('content:replace', function() {
          console.log('Swup content replaced - reinitializing filter buttons');
          setTimeout(initFilterButtons, 150);
        });
        
        window.swup.hooks.on('page:view', function() {
          console.log('Swup page view - reinitializing filter buttons');
          setTimeout(initFilterButtons, 150);
        });
        
        window.swup.hooks.on('animation:in:end', function() {
          console.log('Swup animation ended - reinitializing filter buttons');
          setTimeout(initFilterButtons, 200);
        });
      }
    }
    
    // \u521D\u59CB\u5316Swup\u76D1\u542C\u5668
    if (typeof window !== 'undefined') {
      if (window.swup) {
        setupSwupListeners();
      } else {
        // \u5982\u679CSwup\u5C1A\u672A\u521D\u59CB\u5316\uFF0C\u76D1\u542C\u542F\u7528\u4E8B\u4EF6
        document.addEventListener('swup:enable', function() {
          console.log('Swup enabled - setting up listeners');
          setupSwupListeners();
        });
      }
    }
  <\/script> `])), maybeRenderHead(), i18n(I18nKey.animeTitle), i18n(I18nKey.animeSubtitle), i18n(I18nKey.animeFilterAll), i18n(I18nKey.animeStatusWatching), i18n(I18nKey.animeStatusPlanned), i18n(I18nKey.animeStatusCompleted), ANIME_MODE === "bangumi", animeList.length > 0 ? renderTemplate`<div id="anime-list-container"${addAttribute(`anime-grid-container grid gap-4 md:gap-6 list-mode ${isBothSidebarMode ? "both-sidebar" : "single-sidebar"}`, "class")} data-astro-cid-fepk5tcl> ${animeList.map((anime) => {
    const statusInfo = getStatusInfo(anime.status);
    const progressPercent = anime.totalEpisodes > 0 ? anime.progress / anime.totalEpisodes * 100 : 0;
    return renderTemplate`<div class="group relative bg-[var(--card-bg)] border border-[var(--line-divider)] rounded-[var(--radius-large)] overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"${addAttribute(anime.status, "data-anime-status")} data-astro-cid-fepk5tcl> <!-- 封面区域 - 竖屏比例 --> <div class="relative aspect-[2/3] overflow-hidden" data-astro-cid-fepk5tcl> <a${addAttribute(anime.link, "href")} target="_blank" rel="noopener noreferrer" class="block w-full h-full" data-astro-cid-fepk5tcl> ${renderComponent($$result2, "ImageWrapper", $$ImageWrapper, { "src": anime.cover, "alt": anime.title, "class": "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110", "data-astro-cid-fepk5tcl": true })} <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-fepk5tcl> <div class="absolute inset-0 flex items-center justify-center" data-astro-cid-fepk5tcl> <div class="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center" data-astro-cid-fepk5tcl> <svg class="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-fepk5tcl> <path d="M8 5v14l11-7z" data-astro-cid-fepk5tcl></path> </svg> </div> </div> </div> </a> <!-- 状态标签 --> <div${addAttribute(`absolute top-2 left-2 px-2 py-1 rounded-md text-xs font-medium ${statusInfo.class}`, "class")} data-astro-cid-fepk5tcl> <span class="mr-1" data-astro-cid-fepk5tcl>${statusInfo.icon}</span> <span data-astro-cid-fepk5tcl>${statusInfo.text}</span> </div> <!-- 评分 --> <div class="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1" data-astro-cid-fepk5tcl> <svg class="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-fepk5tcl> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-fepk5tcl></path> </svg> <span data-astro-cid-fepk5tcl>${anime.rating}</span> </div> <!-- 进度条 - 在封面底部 --> ${anime.status === "watching" && renderTemplate`<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2" data-astro-cid-fepk5tcl> <div class="w-full bg-white/20 rounded-full h-1.5 mb-1" data-astro-cid-fepk5tcl> <div class="bg-gradient-to-r from-emerald-400 to-teal-400 h-1.5 rounded-full transition-all duration-300"${addAttribute(`width: ${progressPercent}%`, "style")} data-astro-cid-fepk5tcl></div> </div> <div class="text-white text-xs font-medium" data-astro-cid-fepk5tcl> ${anime.progress}/${anime.totalEpisodes} (${Math.round(progressPercent)}%)
</div> </div>`} </div> <!-- 内容区域 - 紧凑设计 --> <div class="p-3" data-astro-cid-fepk5tcl> <h3 class="text-sm font-bold text-black/90 dark:text-white/90 mb-1 line-clamp-2 leading-tight" data-astro-cid-fepk5tcl>${anime.title}</h3> <p class="text-black/60 dark:text-white/60 text-xs mb-2 line-clamp-2" data-astro-cid-fepk5tcl>${anime.description}</p> <!-- 详细信息 - 更紧凑 --> <div class="space-y-1 text-xs" data-astro-cid-fepk5tcl> <div class="flex justify-between" data-astro-cid-fepk5tcl> <span class="text-black/50 dark:text-white/50" data-astro-cid-fepk5tcl>${i18n(I18nKey.animeYear)}</span> <span class="text-black/70 dark:text-white/70" data-astro-cid-fepk5tcl>${anime.year}</span> </div> <div class="flex justify-between" data-astro-cid-fepk5tcl> <span class="text-black/50 dark:text-white/50" data-astro-cid-fepk5tcl>${i18n(I18nKey.animeStudio)}</span> <span class="text-black/70 dark:text-white/70 truncate ml-2" data-astro-cid-fepk5tcl>${anime.studio}</span> </div> <div class="flex flex-wrap gap-1 mt-2" data-astro-cid-fepk5tcl> ${anime.genre.map((g) => renderTemplate`<span class="px-1.5 py-0.5 bg-[var(--btn-regular-bg)] text-black/70 dark:text-white/70 rounded text-xs" data-astro-cid-fepk5tcl>${g}</span>`)} </div> </div> </div> </div>`;
  })} </div>` : renderTemplate`<div class="text-center py-12" data-astro-cid-fepk5tcl> <div class="text-5xl mb-4" data-astro-cid-fepk5tcl>😢</div> <h3 class="text-xl font-medium text-black/80 dark:text-white/80 mb-2" data-astro-cid-fepk5tcl> ${i18n(I18nKey.animeEmpty)} </h3> <p class="text-black/60 dark:text-white/60" data-astro-cid-fepk5tcl> ${i18n(I18nKey.animeEmptyLocal) } </p> </div>`, defineScriptVars({ isBothSidebarMode })) })}`;
}, "D:/lyf/blog/my_blog/src/pages/anime.astro", void 0);

const $$file = "D:/lyf/blog/my_blog/src/pages/anime.astro";
const $$url = "/mizuki-blog/anime/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Anime,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
