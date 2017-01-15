define(["knockout", "text!./form.html", "css!./form.css"],
	function(ko, html, css){

		function FormViewModel(params){

			var self = this;

			self.inputs = ko.observableArray();

			var obserableElements = [];

			if(params && params.inputs){

				var inputs = params.inputs, input, inputObj, observableProp;

				for(var i = 0; i < inputs.length; i++){

					inputObj = {}

					input = inputs[i];

					inputObj.type = input.type;

					if(!!input.label) inputObj.label = input.label;
					else inputObj.label = false;

					if(input.resizeable !== undefined) inputObj.resizeable = input.resizeable;

					observableProp = input.type + "-input" + i;

					if(input.type == "select") {

						self[observableProp] = {};

						self[observableProp].list = ko.observableArray();

						self[observableProp].value = ko.observable();

						self[observableProp].options = ko.observableArray(input.options);

						inputObj.addToList = function(){

							var value = self[observableProp].value();

							if(value != undefined){

								self[observableProp].list.push({item: value});

								self[observableProp].options.remove(value);
							}

						}

						inputObj.removeFromList = function(){

							self[observableProp].list.remove(this);

							self[observableProp].options.push(this.item);

							self[observableProp].options.sort();

						}
					}
					else if(input.type == "range"){

						self[observableProp] = ko.observable(input.min);

						inputObj.observable = self[observableProp];

						inputObj.max = input.max;

						inputObj.min = input.min;

						inputObj.step = input.step;

						input.label.width && (inputObj.label.width = input.label.width + "px")

						input.title ? inputObj.title = input.title : inputObj.title = "";

						inputObj.label.text = ko.computed(function(){

							var value = this.observable();

							if(this.step.indexOf(".") > -1) value += (/\.5/.test(value)) ? "" : ".0";

							input.label.unit && (value += input.label.unit);

							return value;

						}.bind(inputObj));
					}
					else if (input.type == "checkbox"){

						self[observableProp] = ko.observable(input.checked == "true");

					} else if(input.type == "radio"){

						console.log(input)

						self[observableProp] = ko.observable(input.default);

						inputObj.name = input.name;

						inputObj.buttons = input.buttons;

					}

					inputObj.observable = self[observableProp];

					obserableElements.push({
						prop: self[observableProp],
						type: input.type,
						cost: input.cost
					});

					self.inputs.push(inputObj);

				}

			}

			self.costs = ko.computed(function(){

				var elements = obserableElements, element, total = 0;

				for(var i = 0; i < elements.length; i++){

					element = elements[i];

					if(element.type == "select"){
						total += element.prop.list().length * parseFloat(element.cost);
					}
					else if (element.type == "checkbox"){
						if(element.prop()){
							total += parseFloat(element.cost);
						}
					}
					else if(element.type == "range"){
						total += parseFloat(element.prop() * element.cost);
					}

				}


				return total;

			})

			params.app.mastervm.allCosts.push(self.costs);


		}

		return {
			viewModel: FormViewModel,
			template: html
		}

	}
)
