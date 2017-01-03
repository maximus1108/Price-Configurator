define(["knockout", "pagevm"],
    function(ko, pagevm) {

        var Component = function(nodes) {
            this.htmlNodes = ko.observable(nodes);
        }

        function MasterViewModel(app) {

            var self = this;
            self.app = app;

            self.uicomponents = ko.observableArray();

            var uicomps = app.components.ui;

            for (var comp in uicomps) {

              self.uicomponents.push({
                    component: {
                        name: uicomps[comp].name,
                        params: {
                            app: app,
                            props: {
                                name: "hI"
                            }
                        }
                    }
                })
            }

            self.pagevm = new pagevm();
            ko.applyBindings(self.pagevm);
        //    ko.dataFor(document.querySelector(".pageview"))
            //self.currentPage = new pagevm();

            /*
			self.components = ko.observableArray([new Component({
    			name: "accordion-component",
    			params: { heading: "detailed-list" }
				})
			]);*/

        }

        return MasterViewModel;

    }
)
