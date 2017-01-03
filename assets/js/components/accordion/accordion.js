define(["jquery", "knockout", "text!./accordion.html"],
	function($, ko, html){

		function Accordion(params){
			var self = this;
			self.heading = ko.observable(params && params.heading || "");
		}

		return {
			view: Accordion,
			template: html
		}
	}
)
