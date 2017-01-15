define(["knockout", "text!./pageview.html", "css!./pageview.css"],
	function (ko, html, css) {

		function PageViewModel(params) {
			
			var self = this;

			var app = params.app;

			self.components = app.mastervm.pagevm.components;
			
			self.className = ko.observable(params.className);					

		}

		return {
			viewModel : PageViewModel,
			template : html
		};
})
