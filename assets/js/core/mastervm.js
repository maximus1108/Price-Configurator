define(["knockout", "pagevm"],
	function (ko, pagevm) {

		var Component = function (nodes) {
			this.htmlNodes = ko.observable(nodes);
		}

		function MasterViewModel(app) {

			var self = this;
			self.app = app;

			self.uicomponents = ko.observableArray();

			var uicomps = app.components.ui;

			for (var comp in uicomps) {

				self.uicomponents.push({
					component : {
						name : uicomps[comp].name,
						params : {
							app : app,
							props : {}
						}
					}
				})
			}
			
			self.pagevm = new pagevm();

		}

		return MasterViewModel;

})
