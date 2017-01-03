define(["knockout", "text!./pageview.html"],
 function(ko, html){
	function PageViewModel(params){
		
		alert("Hi")

		
		var self = this;
		
		self.propy = ko.observable("hi");
		//params.props.name
		
		console.log(params);
		
		self.pageIndex = page;	
		
		//self.components = ko.observableArray();
				
	}
	
	return {
		view: PageViewModel,
		template: html
	};
})