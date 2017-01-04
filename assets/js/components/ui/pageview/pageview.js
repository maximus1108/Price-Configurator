define(["knockout", "text!./pageview.html"],
	function (ko, html) {

		function PageViewModel(params) {

			var self = this;
			var app = params.app;

			self.components = app.mastervm.pagevm.components;

			app.gotoPage(app.currentPageIndex);

		}

		return {
			viewModel : PageViewModel,
			template : html
		};
})
