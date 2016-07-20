function ContactController() {
    this.name = 'Bill Gates';
    this.email = 'william@microsoft.com'
    this.phone = "415.555.5555"


  var vm = this;


  this.changeName = function () {
    vm.name = 'Something else!'
    vm.email = 'Something else!'
    vm.phone = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);