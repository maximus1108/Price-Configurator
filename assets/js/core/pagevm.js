define(["knockout"],
  function(ko){

    function PageViewModel(){

      var self = this;

      self.components = ko.observableArray();

    }

    return PageViewModel;

  }
)
