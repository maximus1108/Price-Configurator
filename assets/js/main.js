requirejs.config({
	baseUrl: "assets/js",
	paths:{
		jquery: 'libs/jquery',
		knockout: "libs/knockout",
		text: "libs/require/text",
		css: 'libs/require/css',
		normalize: "libs/require/normalize",
		application: "core/application",
		mastervm: "core/mastervm"
	},
});

requirejs(
	["knockout", "application"],
	function(ko, Application){

		var app = new Application("assets/content/content.json");
		app.load();

		console.log(app)
});
