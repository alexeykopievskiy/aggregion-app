angular
  .module('agreggion')
  .directive('checkImage', CheckImage);

  function CheckImage($q){

    var directive = {
        restrict: 'A',
        link: linkFunc
    };

    return directive;

    function linkFunc(scope, element, attrs, ctrl) {
      attrs.$observe('ngSrc', function(ngSrc) {

        this.isImage = function(src){

          var deferred = $q.defer();
          var image = new Image();

          image.onerror = function() {
              deferred.resolve(false);
          };
          image.onload = function() {
              deferred.resolve(true);
          };

          image.src = src;

          return deferred.promise;
        }

        isImage(ngSrc).then(function(result){

          if(!result)
            element.attr('src', 'https://storage.aggregion.com/api/files/12ce171be47031a58f6d12ddefca93d52bda709b1b720d50cf48747d6cd44cb6/shared/data');

        })

      });
    }
  }
