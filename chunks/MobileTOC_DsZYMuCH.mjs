import { a as escape_html, e as ensure_array_like, d as attr_class, s as stringify } from './_@astro-renderers_CUQVmPyH.mjs';
import { I as Icon } from './MainGridLayout_CN5EEUhk.mjs';
import { I as I18nKey } from './_astro_content_nJCuh7Be.mjs';
import { i as i18n } from './sakura-manager_BcW8Ox11.mjs';
import './panel-manager_CXhJi7eZ.mjs';
import './_page_.12145de2_ClrpWW0d.mjs';

function MobileTOC($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let tocItems = [];
		let postItems = [];
		let activeId = "";
		let observer;
		let isHomePage = false;
		let swupReady = false;
		let useJapaneseBadge = false;
		let tocDepth = 3;

		const generateTOC = () => {
			useJapaneseBadge = window.siteConfig?.toc?.useJapaneseBadge || false;
			tocDepth = window.siteConfig?.toc?.depth || 3;

			const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
			const items = [];

			const japaneseHiragana = [
				"\u30A2",
				"\u30A4",
				"\u30A6",
				"\u30A8",
				"\u30AA",
				"\u30AB",
				"\u30AD",
				"\u30AF",
				"\u30B1",
				"\u30B3",
				"\u30B5",
				"\u30B7",
				"\u30B9",
				"\u30BB",
				"\u30BD",
				"\u30BF",
				"\u30C1",
				"\u30C4",
				"\u30C6",
				"\u30C8"
			];

			let h1Count = 0;

			headings.forEach((heading) => {
				if (heading.id) {
					const level = Number.parseInt(heading.tagName.charAt(1), 10);

					if (level > tocDepth) {
						return;
					}

					const text = (heading.textContent || "").replace(/#+\s*$/, "");
					let badge = "";

					if (level === 1) {
						h1Count++;

						if (useJapaneseBadge && h1Count - 1 < japaneseHiragana.length) {
							badge = japaneseHiragana[h1Count - 1];
						} else {
							badge = h1Count.toString();
						}
					}

					items.push({ id: heading.id, text, level, badge });
				}
			});

			tocItems = items;
		};

		const generatePostList = () => {
			const postCards = document.querySelectorAll(".card-base");
			const items = [];

			postCards.forEach((card) => {
				const titleLink = card.querySelector('a[href*="/posts/"].transition.group');
				const categoryLink = card.querySelector('a[href*="/categories/"].link-lg');
				const pinnedIcon = titleLink?.querySelector('svg[data-icon="mdi:pin"]');

				if (titleLink) {
					const href = titleLink.getAttribute("href");
					const title = titleLink.textContent?.replace(/\s+/g, " ").trim() || "";
					const category = categoryLink?.textContent?.trim() || "";
					const pinned = !!pinnedIcon;

					if (href && title) {
						items.push({ title, url: href, category, pinned });
					}
				}
			});

			postItems = items;
		};

		const checkIsHomePage = () => {
			const pathname = window.location.pathname;

			isHomePage = pathname === "/" || pathname === "" || (/^\/\d+\/?$/).test(pathname);
		};

		const updateActiveHeading = () => {
			const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
			const scrollTop = window.scrollY;
			const offset = 100;
			let currentActiveId = "";

			headings.forEach((heading) => {
				if (heading.id) {
					const elementTop = heading.offsetTop - offset;

					if (scrollTop >= elementTop) {
						currentActiveId = heading.id;
					}
				}
			});

			activeId = currentActiveId;
		};

		const setupIntersectionObserver = () => {
			const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

			if (observer) {
				observer.disconnect();
			}

			observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							activeId = entry.target.id;
						}
					});
				},
				{ rootMargin: "-80px 0px -80% 0px", threshold: 0 }
			);

			headings.forEach((heading) => {
				if (heading.id) {
					observer.observe(heading);
				}
			});
		};

		let swupListenersRegistered = false;

		const setupSwupListeners = () => {
			if (typeof window !== "undefined" && window.swup && !swupListenersRegistered) {
				const swup = window.swup;

				swup.hooks.on("page:view", () => {
					setTimeout(
						() => {
							init();
						},
						200
					);
				});

				swupListenersRegistered = true;
				console.log("MobileTOC Swup listener registered");
			} else if (!swupListenersRegistered) {
				window.addEventListener("popstate", () => {
					setTimeout(init, 200);
				});

				swupListenersRegistered = true;
				console.log("MobileTOC fallback listener registered");
			}
		};

		const checkSwupAvailability = () => {
			if (typeof window !== "undefined") {
				swupReady = !!window.swup;

				if (!swupReady) {
					const checkSwup = () => {
						if (window.swup) {
							swupReady = true;
							document.removeEventListener("swup:enable", checkSwup);
							setupSwupListeners();
						}
					};

					document.addEventListener("swup:enable", checkSwup);

					setTimeout(
						() => {
							if (window.swup) {
								swupReady = true;
								document.removeEventListener("swup:enable", checkSwup);
								setupSwupListeners();
							}
						},
						1e3
					);
				} else {
					setupSwupListeners();
				}
			}
		};

		const init = () => {
			checkIsHomePage();
			checkSwupAvailability();

			if (isHomePage) {
				generatePostList();
			} else {
				generateTOC();
				setupIntersectionObserver();
				updateActiveHeading();
			}
		};

		if (typeof window !== "undefined") {
			window.mobileTOCInit = init;
		}

		$$renderer.push(`<button aria-label="Table of Contents" id="mobile-toc-switch" class="btn-plain scale-animation rounded-lg h-11 w-11 active:scale-90 lg:!hidden theme-switch-btn">`);

		Icon($$renderer, {
			icon: 'material-symbols:format-list-bulleted',
			class: 'text-[1.25rem]'
		});

		$$renderer.push(`<!----></button> <div id="mobile-toc-panel" class="float-panel float-panel-closed mobile-toc-panel absolute md:w-[20rem] w-[calc(100vw-2rem)] top-20 left-4 md:left-[unset] right-4 shadow-2xl rounded-2xl p-4 svelte-cz3h3s"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-bold text-[var(--primary)]">${escape_html(isHomePage
			? i18n(I18nKey.postList)
			: i18n(I18nKey.tableOfContents))}</h3> <button aria-label="Close TOC" class="btn-plain rounded-lg h-8 w-8 active:scale-90 theme-switch-btn">`);

		Icon($$renderer, { icon: 'material-symbols:close', class: 'text-[1rem]' });
		$$renderer.push(`<!----></button></div> `);

		if (isHomePage) {
			$$renderer.push('<!--[-->');

			if (postItems.length === 0) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<div class="text-center py-8 text-black/50 dark:text-white/50">`);

				Icon($$renderer, {
					icon: 'material-symbols:article-outline',
					class: 'text-2xl mb-2'
				});

				$$renderer.push(`<!----> <p>暂无文章</p></div>`);
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push(`<div class="post-content svelte-cz3h3s"><!--[-->`);

				const each_array = ensure_array_like(postItems);

				for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
					let post = each_array[$$index];

					$$renderer.push(`<button class="post-item svelte-cz3h3s"><div class="post-title svelte-cz3h3s">`);

					if (post.pinned) {
						$$renderer.push('<!--[-->');
						Icon($$renderer, { icon: 'mdi:pin', class: 'pinned-icon' });
					} else {
						$$renderer.push('<!--[!-->');
					}

					$$renderer.push(`<!--]--> ${escape_html(post.title)}</div> `);

					if (post.category) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<div class="post-category svelte-cz3h3s">${escape_html(post.category)}</div>`);
					} else {
						$$renderer.push('<!--[!-->');
					}

					$$renderer.push(`<!--]--></button>`);
				}

				$$renderer.push(`<!--]--></div>`);
			}

			$$renderer.push(`<!--]-->`);
		} else {
			$$renderer.push('<!--[!-->');

			if (tocItems.length === 0) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<div class="text-center py-8 text-black/50 dark:text-white/50"><p>当前页面没有目录</p></div>`);
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push(`<div class="toc-content svelte-cz3h3s"><!--[-->`);

				const each_array_1 = ensure_array_like(tocItems);

				for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
					let item = each_array_1[$$index_1];

					$$renderer.push(`<button${attr_class(`toc-item level-${stringify(item.level)} ${stringify(activeId === item.id ? 'active' : '')}`, 'svelte-cz3h3s', { 'active': activeId === item.id })}>`);

					if (item.level === 1) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<span class="badge svelte-cz3h3s">${escape_html(item.badge)}</span>`);
					} else {
						$$renderer.push('<!--[!-->');

						if (item.level === 2) {
							$$renderer.push('<!--[-->');
							$$renderer.push(`<span class="dot-square svelte-cz3h3s"></span>`);
						} else {
							$$renderer.push('<!--[!-->');
							$$renderer.push(`<span class="dot-small svelte-cz3h3s"></span>`);
						}

						$$renderer.push(`<!--]-->`);
					}

					$$renderer.push(`<!--]--> <span class="toc-text svelte-cz3h3s">${escape_html(item.text)}</span></button>`);
				}

				$$renderer.push(`<!--]--></div>`);
			}

			$$renderer.push(`<!--]-->`);
		}

		$$renderer.push(`<!--]--></div>`);
	});
}

export { MobileTOC as default };
