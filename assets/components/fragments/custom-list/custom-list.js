define(["knockout", "text!./custom-list.html", "css!./custom-list.css"],
	function(ko, html, css){

		function CustomListViewModel(params){
			
			var self = this;

			self.items = ko.observableArray();
			
			if(params && params.items){
				
				var items = params.items, item;

				for(var i = 0; i < items.length; i++){

					item = items[i];
					
					self.items.push({text: item, symbol: params.symbol});
				
				}

			}

		}

		return{
			viewModel: CustomListViewModel,
			template: html
		}

	}
)