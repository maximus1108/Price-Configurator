define(["knockout", "text!./feature-section.html", "css!./feature-section.css"],
	function(ko, html, css){

		function FeatureSectionViewModel(params){

			var self = this;
			self.heading = ko.observable(params && params.heading || "");

			self.components = ko.observableArray();

			if(params && params.children){

				var children = params.children, comp, child;

				for(var i = 0; i < children.length; i++){

					child = children[i];

					child.props.app = params.app;

					comp = {
						component:{
							name: child.type + "-component",
							params: child.props
						}
					}

					self.components.push(comp);
				}


			}
		}

		return {
			viewModel: FeatureSectionViewModel,
			template: html
		}

	}
)
