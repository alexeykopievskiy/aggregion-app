(function() {
  'use strict';

  angular
    .module('agreggion')
    .provider('ServerCommunicator', ServerCommunicator);

  /** @ngInject */
  function ServerCommunicator(API_URL) {

    this.$get = function($http, $q, $resource) {

      function ServerError(message, code, apiCode) {
				this.name = 'ServerError';
				this.code = code || 500;
        this.apiCode = apiCode;
				this.message = message || this.code;
  		}

       function getError(error) {
  				var message = void 0;
          var code = error.status;
  				var apiCode = error.data && error.data.code ? error.data.code : undefined;
  				if (error.data && error.data.error)
            message = error.data.error;

  				return new ServerError(message, code, apiCode);
  		 }

       return {

         makeRequest: function makeRequest() {

           return this.request.apply(this, arguments);

         },

         request: function request(args) {


           var url = API_URL,
               method = args.method || 'GET',
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
