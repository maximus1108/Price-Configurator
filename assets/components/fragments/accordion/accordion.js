define(["knockout", "text!./accordion.html", "css!./accordion.css"],
	function(ko, html, css){

		function Accordion(params){
			var self = this;

			console.log(params)

			self.heading = ko.observable(params && params.heading || "");

			self.isActive = ko.observable(false);

			self.components = ko.observableArray();

			if(params && params.children){

				var children = params.children, comp;
				for(var i = 0; i < children.length; i++){
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
