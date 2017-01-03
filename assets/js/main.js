requirejs.config({
	baseUrl: "assets/js",
	paths:{
		jquery: 'libs/jquery',
		knockout: "libs/knockout",
		text: "libs/text",
		content: "core/content",
		mastervm: "core/mastervm"
	},
});

requirejs(
	["jquery", "knockout", "content"],
	function($, ko, Content){

		var app = new Content("assets/content/content.json");
		app.load();

		console.log(app)

	/*	var Compontent = function(nodes){
			this.htmlNodes = ko.observable(nodes);
		}


		function MasterViewModel(){

			var self = this;

			self.components = ko.observableArray([new Compontent('accordion-component')]);

		}

		ko.applyBindings(new MasterViewModel());
	}*/
});
