function StaffController() {
      this.name = 'Bill Gates';
      this.email = 'william@microsoft.com'
      this.phone = "415.555.5555"
}

angular
  .module('app')
  .controller('StaffController', StaffController);