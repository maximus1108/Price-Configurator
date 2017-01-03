define(["knockout", "text!./pageview.html"],
 function(ko, html){

	function PageViewModel(params){

		var self = this;
    var app = params.app;
//		self.propy = ko.observable("hi");

    console.log(app.mastervm.pagevm.components)
    self.components = app.mastervm.pagevm.components;
    console.log(self.components)

    app.gotoPage(app.currentPageIndex);

    self.clicktest = function(){
      console.log("hi")
    }
  //  self.components.push({component:{name:"accordion-component"}})
    //params.props.name

	//	self.pageIndex = page;

		//self.components = ko.observableArray();

	}

	return {
		viewModel: PageViewModel,
		template: html
	};
})
