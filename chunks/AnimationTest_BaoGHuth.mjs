import { c as createComponent, d as renderTemplate, m as maybeRenderHead } from './astro/server_CFIJpBV_.mjs';
import './_page_.12145de2_ClrpWW0d.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$AnimationTest = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div class="animation-test-container" data-astro-cid-m7s2uckm> <div class="test-content transition-slide-in" id="test-content" data-astro-cid-m7s2uckm> <h3 data-astro-cid-m7s2uckm>\u52A8\u753B\u6D4B\u8BD5\u533A\u57DF</h3> <p data-astro-cid-m7s2uckm>\u8FD9\u4E2A\u533A\u57DF\u5C55\u793A\u4E86\u53C2\u8003yukina\u4E3B\u9898\u5B9E\u73B0\u7684\u6ED1\u5165\u6ED1\u51FA\u52A8\u753B\u6548\u679C</p> <div class="test-buttons" data-astro-cid-m7s2uckm> <button class="test-btn" onclick="testSlideIn()" data-astro-cid-m7s2uckm>\u6ED1\u5165\u52A8\u753B</button> <button class="test-btn" onclick="testSlideOut()" data-astro-cid-m7s2uckm>\u6ED1\u51FA\u52A8\u753B</button> <button class="test-btn" onclick="resetAnimation()" data-astro-cid-m7s2uckm>\u91CD\u7F6E</button> </div> </div> </div>  <script>
  // \u52A8\u753B\u6D4B\u8BD5\u51FD\u6570
  function testSlideIn() {
    const content = document.getElementById('test-content');
    if (!content) return;
    
    content.className = 'test-content transition-slide-in';
    content.offsetHeight; // \u5F3A\u5236\u91CD\u6392
    
    setTimeout(() => {
      content.classList.add('is-active');
    }, 50);
  }

  function testSlideOut() {
    const content = document.getElementById('test-content');
    if (!content) return;
    
    content.className = 'test-content transition-slide-out is-active';
    
    setTimeout(() => {
      content.classList.add('is-leaving');
    }, 50);
  }

  function resetAnimation() {
    const content = document.getElementById('test-content');
    if (!content) return;
    
    content.className = 'test-content transition-slide-in is-active';
  }
  
  // \u66B4\u9732\u51FD\u6570\u7ED9\u5168\u5C40\u4F5C\u7528\u57DF\u4EE5\u4FBFHTML\u4E2D\u7684onclick\u53EF\u4EE5\u8C03\u7528
  window.testSlideIn = testSlideIn;
  window.testSlideOut = testSlideOut;
  window.resetAnimation = resetAnimation;

  // \u9875\u9762\u52A0\u8F7D\u65F6\u81EA\u52A8\u89E6\u53D1\u6ED1\u5165\u52A8\u753B
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(testSlideIn, 300);
  });
<\/script>`])), maybeRenderHead());
}, "D:/lyf/blog/my_blog/src/components/misc/AnimationTest.astro", void 0);

export { $$AnimationTest as default };
