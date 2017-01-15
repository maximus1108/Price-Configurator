({
    baseUrl: "../assets",
    paths: {
        jquery: "js/libs/jquery",
		knockout: "js/libs/knockout",
		text: "js/libs/require/text",
		css: 'js/libs/require/css',
		"css-builder": 'js/libs/require/css-builder',
		normalize: "js/libs/require/normalize",
		application: "js/core/application",
		mastervm: "js/core/mastervm",
		pagevm: "js/core/pagevm",
		requireLib: "js/libs/require/require",
		style: "css/style"		
    },
	include: [
		"components/fragments/accordion/accordion",
		"components/fragments/checkbox/checkbox",
		"components/fragments/custom-list/custom-list",
		"components/fragments/feature-section/feature-section",
		"components/fragments/form/form",
		"components/fragments/radio-button/radio-button",
		"components/fragments/slider/slider",
		"components/fragments/textbox/textbox",
		"components/fragments/dropdown/dropdown",
		"components/ui/footer/footer",
		"components/ui/pageview/pageview",
		"requireLib"
	],
    name: "js/main",
    out: "main-built.js"
})