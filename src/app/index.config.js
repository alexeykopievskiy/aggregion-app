(function() {
  'use strict';

  angular
    .module('agreggion')
    .config(config);

  function config($logProvider, $httpProvider, $resourceProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    $httpProvider.interceptors.push('httpErrorResponseInterceptor');
    $resourceProvider.defaults.stripTrailingSlashes = false;

  }

})();
