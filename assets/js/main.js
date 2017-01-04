requirejs.config({
	baseUrl: "assets",
	paths:{
		jquery: "js/libs/jquery",
		knockout: "js/libs/knockout",
		text: "js/libs/require/text",
		css: 'js/libs/require/css',
		normalize: "js/libs/require/normalize",
		application: "js/core/application",
		mastervm: "js/core/mastervm",
		pagevm: "js/core/pagevm"
	},
});

requirejs(
	["knockout", "application"],
	function(ko, Application){

		var app = new Application("assets/content/content.json");
		app.load();

		console.log(app)
});
