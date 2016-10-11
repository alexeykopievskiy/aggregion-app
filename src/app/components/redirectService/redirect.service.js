(function() {
  'use strict';

  angular
    .module('agreggion')
    .service('RedirectService', RedirectService);

  /** @ngInject */
  function RedirectService($state) {

    this.redirect = function(status){

      return $state.go(status)

    }

  }
})();
