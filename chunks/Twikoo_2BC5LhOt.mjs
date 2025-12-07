import { c as createComponent, a as createAstro, d as renderTemplate, g as defineScriptVars, m as maybeRenderHead } from './astro/server_CFIJpBV_.mjs';
import { c as commentConfig } from './_astro_content_nJCuh7Be.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Twikoo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Twikoo;
  const config = {
    ...commentConfig.twikoo,
    el: "#tcomment",
    path: Astro2.props.path
  };
  return renderTemplate(_a || (_a = __template(["", '<div id="tcomment"></div> <script src="/scroll-protection.js"><\/script> <script src="/assets/js/twikoo.all.min.js"><\/script> <script>(function(){', "\n  // \u83B7\u53D6\u5F53\u524D\u9875\u9762\u8DEF\u5F84\n  function getCurrentPath() {\n    const pathname = window.location.pathname;\n    return pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;\n  }\n  \n  // \u52A8\u6001\u521B\u5EFA\u914D\u7F6E\u5BF9\u8C61\n  function createTwikooConfig() {\n    return {\n      ...config,\n      path: getCurrentPath(),\n      el: '#tcomment'\n    };\n  }\n  \n  // \u521D\u59CB\u5316 Twikoo\n  function initTwikoo() {\n    if (typeof twikoo !== 'undefined') {\n      const commentEl = document.getElementById('tcomment');\n      if (commentEl) {\n        commentEl.innerHTML = '';\n        \n        const dynamicConfig = createTwikooConfig();\n        console.log('[Twikoo] \u521D\u59CB\u5316\u914D\u7F6E:', dynamicConfig);\n        \n        twikoo.init(dynamicConfig).then(() => {\n          console.log('[Twikoo] \u521D\u59CB\u5316\u5B8C\u6210');\n        }).catch((error) => {\n          console.error('[Twikoo] \u521D\u59CB\u5316\u5931\u8D25:', error);\n        });\n      }\n    } else {\n      // \u5982\u679C Twikoo \u672A\u52A0\u8F7D\uFF0C\u7A0D\u540E\u91CD\u8BD5\n      setTimeout(initTwikoo, 500);\n    }\n  }\n  \n  // \u9875\u9762\u52A0\u8F7D\u65F6\u521D\u59CB\u5316\n  document.addEventListener('DOMContentLoaded', initTwikoo);\n  \n  // Swup \u9875\u9762\u5207\u6362\u540E\u91CD\u65B0\u521D\u59CB\u5316\n  if (window.swup && window.swup.hooks) {\n    window.swup.hooks.on('content:replace', function() {\n      setTimeout(initTwikoo, 200);\n    });\n  } else {\n    document.addEventListener('swup:enable', function() {\n      if (window.swup && window.swup.hooks) {\n        window.swup.hooks.on('content:replace', function() {\n          setTimeout(initTwikoo, 200);\n        });\n      }\n    });\n  }\n  \n  // \u81EA\u5B9A\u4E49\u4E8B\u4EF6\u76D1\u542C\n  document.addEventListener('mizuki:page:loaded', function() {\n    const commentEl = document.getElementById('tcomment');\n    if (commentEl) {\n      console.log('[Twikoo] \u901A\u8FC7\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u91CD\u65B0\u521D\u59CB\u5316');\n      initTwikoo();\n    }\n  });\n})();<\/script>"])), maybeRenderHead(), defineScriptVars({ config }));
}, "D:/lyf/blog/my_blog/src/components/comment/Twikoo.astro", void 0);

export { $$Twikoo as default };
