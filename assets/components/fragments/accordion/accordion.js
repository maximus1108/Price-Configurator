define(["knockout", "text!./accordion.html", "css!./accordion.css"],
	function(ko, html, css){

		function Accordion(params){
			var self = this;
			
			self.heading = ko.observable(params && params.heading || "");

			self.isActive = ko.observable(false);

			self.components = ko.observableArray();

			if(params && params.children){

				var children = params.children, comp;
				for(var i = 0; i < children.length; i++){
					
					children[i].props.app = params.app;
					
					comp = {
						component:{
							name: children[i].type + "-component",
							params: children[i].props
						}
					}
					
					self.components.push(comp);
				}
			}

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
