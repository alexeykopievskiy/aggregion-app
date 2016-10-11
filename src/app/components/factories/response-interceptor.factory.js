(function() {
  'use strict';

  angular
    .module('agreggion')
    .factory('httpErrorResponseInterceptor', httpErrorResponseInterceptor);

  httpErrorResponseInterceptor.$inject = ['$q', '$window', '$injector'];
  function httpErrorResponseInterceptor($q, $window, $injector) {

    return {
      response: function(responseData) {

        return responseData;
      },
      responseError: function error(response) {

        switch (response.status) {
          case 400:
            $injector.get('RedirectService').redirect('400');
            break;
          case 404:
            $injector.get('RedirectService').redirect('404');
            break;
          case 500:
            $injector.get('RedirectService').redirect('500');
            break;
          default:
            $injector.get('RedirectService').redirect('404');
        }

        return $q.reject(response);
      }
    };

  }
})();
