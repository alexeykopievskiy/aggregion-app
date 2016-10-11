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

          console.log('oo');
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
            console.log(rest);
          }



          return rest.query({id: params}).$promise

          /*return rest.query({id: params}).$promise.then(function(response){
            console.log(response, 'kjkjkkjk');
            if (!response.data.success && response.data.error) {
               return $q.reject(response);
             } else {
               return $q.reject(response);
             }
          }).catch(function(error){
            console.log(error, 'errrr');
          })*/

          //console.log(res, 'pppplll');

           /*return $http({
             method: method,
             url: url + path + params
           }).then(function(response) {

             if (!response.data.success && response.data.error) {
							return $q.reject(response);
						} else {
							return response;
						}
          }).catch(function(error) {
            return $q.reject(getError(error));
          });*/

          /*return $resource({
            method: method,
            url: url + path
          }).then(function(response) {
            if (!response.data.success && response.data.error) {
             return $q.reject(response);
           } else {
             return response;
           }
         }).catch(function(error) {
           return $q.reject(getError(error));
         });*/

         }

       }

     }

  }
})();
