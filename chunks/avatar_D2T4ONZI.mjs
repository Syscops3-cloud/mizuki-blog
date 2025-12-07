const avatar = new Proxy({"src":"/mizuki-blog/_astro/avatar.R2AjA_4H.webp","width":1000,"height":1000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/lyf/blog/my_blog/src/assets/images/avatar.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/lyf/blog/my_blog/src/assets/images/avatar.webp");
							return target[name];
						}
					});

export { avatar as default };
