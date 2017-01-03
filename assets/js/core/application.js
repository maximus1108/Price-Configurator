define(
  ["jquery", "knockout", "mastervm"],
  function($, ko, mastervm){

    function Application(path){
      var self = this;
      self.dataPath = path;
      self.pages = [];
      self.components = {};
      self.currentPageIndex = 0;
    }


    Application.prototype.load = function(){
      var self = this;
      $.getJSON(self.dataPath).done(function(data){

		self.organiseData(data[0]);

        }).fail(function(jqxhr, textStatus, error){
          console.log("Error loading json content:", textStatus, error);
        })

    }

    Application.prototype.organiseData = function(data){
	  var self = this;

	  self.pages = data.pages;

	  var components = data.components, currentGroup, component;

	  for(var prop in components){

		  currentGroup = components[prop]

		  self.components[prop] = {};


		  for(var i = 0; i < currentGroup.length; i++){
			component = currentGroup[i]

			self.components[prop][component] = {
				name: component + "-component",
				path: "components/" + prop + "/" + component + "/" + component
			};

			ko.components.register(component + "-component",
			  {require: "components/" + prop + "/" + component + "/" + component}
			)

		  }
	  }

	 self.createMastervm();

	}

	Application.prototype.createMastervm = function(){
    var self = this;

		self.mastervm = new mastervm(this);

		//ko.applyBindings(self.mastervm);
	}

    Application.prototype.nextPage = function(){
      console.log("next page");
    }

    Application.prototype.backPage = function(){
      console.log("back page");
    }

    Application.prototype.gotoPage = function(index){
      var self = this;
      self.currentPageIndex = index;

      var components = [], pageComponent, pageBody = self.pages[index].body, fragments = self.components.fragments;

      for(var i = 0; i < pageBody.length; i++){
        pageComponent = pageBody[i];
        var component = {component: fragments[pageComponent.type].name}
        components.push(component)
      }
      console.log(components)
      console.log(self.mastervm.pagevm)

      self.mastervm.pagevm.components.push(components);
    }

    Application.prototype.setupComponents = function (){

    }

    return Application;
  }
);
