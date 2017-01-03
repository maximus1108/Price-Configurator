define(["knockout"],
	function(ko){

		var Component = function(nodes){
			this.htmlNodes = ko.observable(nodes);
		}


		function MasterViewModel(){

			var self = this;

			self.components = ko.observableArray([new Component({
    			name: "accordion-component",
    			params: { heading: "detailed-list" }
				})
			]);

		}

		return MasterViewModel;

	}
)
