define(["knockout", "text!./accordion.html", "css!./accordion.css"],
	function(ko, html, css){

		function Accordion(params){
			var self = this;
			
			self.heading = ko.observable(params && params.heading || "");
			
			self.isActive = ko.observable(false);
			
			self.showContent = function(element, event){
				self.isActive(!self.isActive());
			}
		}

		return {
			viewModel: Accordion,
			template: html
		}
	}
)
