define(["knockout", "text!./footer.html", "css!./footer.css"],
function(ko, html, css){
	
	function FooterViewModel(params){
		var self = this;
		
		self.totalPrice = ko.observable();
		
		self.price = ko.computed(function(){
			
			var costs = params.app.mastervm.allCosts(),
				item,
				total = 5000;
			
			for(var i = 0; i < costs.length; i++){
				
				item = costs[i];

				total += item();
			}
			
			return "£" + total;
		})
		
		//self.className = ko.observable(params.className);
	}
	
	return{
		viewModel: FooterViewModel,
		template: html
	}
	
})