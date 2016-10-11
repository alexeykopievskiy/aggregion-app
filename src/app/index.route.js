(function() {
  'use strict';

  angular
    .module('agreggion')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('index', {
        url: '/',
        controller: redirectController,
        controllerAs: 'vm'
      })
      .state('public', {
        abstract: true,
        url: '/public',
        template: '<ui-view/>'
      })
      .state('public.catalog', {
        url: '/catalog',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        resolve: {
          catalogPrepService: catalogPrepService
        }
      })
      .state('public.detail', {
        url: '/catalog/:itemId',
        templateUrl: 'app/item/item.html',
        controller: 'ItemController',
        controllerAs: 'vm',
        resolve: {
          bookPrepService: bookPrepService
        }
    })
    .state('404', {
      url: '/404',
      templateUrl: 'app/static/404.html'
    })
    .state('400', {
      url: '/400',
      templateUrl: 'app/static/400.html'
    })
    .state('500', {
      url: '/500',
      templateUrl: 'app/static/500.html'
    });
    $urlRouterProvider.otherwise('404');
    $locationProvider.html5Mode(true);

  }



  function catalogPrepService(CatalogService) {
    return CatalogService.getCatalog();
  }

  function bookPrepService($stateParams, BookService) {
    return BookService.getBook($stateParams.itemId);
  }

  function redirectController($state){
    return $state.go('public.catalog')
  }


})();
