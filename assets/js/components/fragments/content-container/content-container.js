define(["knockout", "text!./content-container.html"],
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
