const cover = new Proxy({"src":"/mizuki-blog/_astro/cover.B0ZkOonL.png","width":1920,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/lyf/blog/my_blog/src/content/posts/guide/cover.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/lyf/blog/my_blog/src/content/posts/guide/cover.png");
							return target[name];
						}
					});

export { cover as default };
