(function() {
  'use strict';

  angular
    .module('agreggion')
    .service('CatalogService', CatalogService);

  /** @ngInject */
  function CatalogService(ServerCommunicator) {

    this.getCatalog = function(){

      return ServerCommunicator.makeRequest({
        'path' : '/public/catalog/'
      }).then(function(response){
        return {
          catalog: response
        }
      })

    }

  }
})();
