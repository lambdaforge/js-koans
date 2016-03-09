css: style.css

style.css: style/style.scss style/_typography.scss style/_entities.scss style/_components.scss
	scss style/style.scss > style.css

watch:
	@echo Watching for changes ...
	@fswatch "./style/" | xargs -n1 -I{} make css
