define(
  ["jquery", "knockout", "mastervm"],
  function($, ko, mastervm){

    function Content(path){
      var self = this;
      self.dataPath = path;
      self.pages = [];
      self.uicomponents = {};
    }

    var assignData = function(data){
      var self = this, components = data.uicomponents, component;

      self.pages = data.pages;

      for(var i = 0; i < components.length; i++){
        component = components[i]

        self.uicomponents[component] = {};

        ko.components.register(component + "-component",
          {require: "components/" + component + "/" + component}
        )

      }

      var MasterViewModel = new mastervm;

      ko.applyBindings(MasterViewModel);

    }

    Content.prototype.load = function(){
      var self = this;
      var temp = {};
      $.getJSON(self.dataPath).done(function(data){

          assignData.call(self, data[0]);

        }).fail(function(jqxhr, textStatus, error){
          console.log("Error loading json content:", textStatus, error);
        })


    }

    Content.prototype.getNextPage = function(){
      console.log("next page");
    }

    Content.prototype.getBackPage = function(){
      console.log("back page");
    }

    Content.prototype.setupComponents = function (){

    }

    return Content;
  }
);
