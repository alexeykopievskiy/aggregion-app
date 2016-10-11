(function() {
  'use strict';

  angular
    .module('agreggion')
    .controller('MainController', MainController);

  MainController.$inject = ['catalogPrepService'];
  function MainController(catalogPrepService) {

    var vm = this;

    vm.catalog = catalogPrepService.catalog;

    console.log(vm.catalog);

  }
})();
