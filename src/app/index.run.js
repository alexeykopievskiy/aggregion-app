(function() {
  'use strict';

  angular
    .module('agreggion')
    .run(runBlock);

  /** @ngInject */
  function runBlock($location) {

    initApp()

    function initApp(){
      $location.path('public/catalog')
    }


  }

})();
