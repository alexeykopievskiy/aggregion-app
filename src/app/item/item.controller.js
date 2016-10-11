(function() {
  'use strict';

  angular
    .module('agreggion')
    .controller('ItemController', ItemController);

  /** @ngInject */
  ItemController.$inject = ['bookPrepService'];
  function ItemController(bookPrepService) {

    var vm = this;

    vm.title = 'hell';
    vm.item = bookPrepService.book;

  }
})();
