(function() {
  'use strict';

  angular
    .module('agreggion')
    .controller('ItemController', ItemController);

  /** @ngInject */
  ItemController.$inject = ['bookPrepService'];
  function ItemController(bookPrepService) {


    console.log(bookPrepService.book);

    var vm = this;

    vm.title = 'hell';
    vm.item = bookPrepService.book;

    console.log(vm.item);


  }
})();
