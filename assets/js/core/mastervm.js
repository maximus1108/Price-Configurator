define(["knockout", "pagevm"],
	function (ko, pagevm) {

		var Component = function (nodes) {
			this.htmlNodes = ko.observable(nodes);
		}

		function MasterViewModel(app) {

			var self = this;
			self.app = app;
			
			self.uicomponents = ko.observableArray();
			
			self.allCosts = ko.observableArray();

			var uicomps = app.components.ui;

			for (var comp in uicomps) {

				self.uicomponents.push({
					component : {
						name : uicomps[comp].name,
						params : {
							app : app					
						}						
					},
					className: uicomps[comp].name
				})
			}
			
			self.pagevm = new pagevm();

		}

		return MasterViewModel;

})
