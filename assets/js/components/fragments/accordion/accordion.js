define(["knockout", "text!./accordion.html", "css!./accordion.css"],
	function(ko, html, css){
		
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
