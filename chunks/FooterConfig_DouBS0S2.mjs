function render({ slots: ___SLOTS___ }) {
		return `这里是HTML注入示例，你可以在这个文件中添加自定义的HTML内容`
	}
render["astro:html"] = true;

export { render as default };
