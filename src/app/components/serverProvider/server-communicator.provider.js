(function() {
  'use strict';

  angular
    .module('agreggion')
    .provider('ServerCommunicator', ServerCommunicator);

  /** @ngInject */
  function ServerCommunicator(API_URL) {

    this.$get = function($resource) {

       return {

         makeRequest: function makeRequest() {

           return this.request.apply(this, arguments);

         },

         request: function request(args) {

           var url = API_URL,
               path = args.path || '',
               params = args.params || '',
               param = '';

          var rest = $resource(url + path);

          if(params){
            param = 'id'
            rest = $resource(url + path + ':' + param, {}, {query: {
              method: 'GET',
              isArray: false
            }});
          }

          return rest.query({id: params}).$promise

         }

       }

     }

  }
})();
