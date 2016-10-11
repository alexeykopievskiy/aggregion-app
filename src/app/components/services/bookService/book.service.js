(function() {
  'use strict';

  angular
    .module('agreggion')
    .service('BookService', BookService);

  /** @ngInject */
  function BookService(ServerCommunicator) {

    this.getBook = function(bookId){

      return ServerCommunicator.makeRequest({
        'path' : '/public/catalog/',
        'params' : bookId
      }).then(function(response){
        return {
          book: response
        }
      })
    }

  }
})();
