angular
  .module('simpleApp')                                // Module Getter because only 1 parameter
  .controller("SimpleController", SimpleController);  // Using Function Declaration per JPASG

function SimpleController() {
  var vm = this;
  vm.person = {
    firstName: "",
    lastName: "",
    display: function() { return "Hi, I'm " + this.firstName + " " + this.lastName; }
  };
  vm.saveClick = saveClick;

  function saveClick() {
    vm.message = vm.person.display();
  }
}
