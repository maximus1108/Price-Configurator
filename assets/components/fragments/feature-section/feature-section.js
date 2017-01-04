define(["knockout", "text!./feature-section.html", "css!./feature-section.css"],
	function(ko, html, css){

		function container(params){
			var self = this;
			self.heading = ko.observable(params && params.heading || "");
		}

		return {
			viewModel: container,
			template: html
		}
	}
)
