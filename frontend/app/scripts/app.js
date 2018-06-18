'use strict';

/**
 * @ngdoc overview
 * @name testingApp
 * @description
 * # testingApp
 *
 * Main module of the application.
 */
angular
  .module('testingApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngAnimate',
    'angularBootstrapMaterial',
    'ui.bootstrap',
    'angular-click-outside',
    'ngToast',
    'ngtimeago',
    'angular-loading-bar',
    // 'angular.filter'
    // 'ui.scroll',
    'autocomplete'
    // ,    'ngInfiniteScroll'
    // ,
    // 'ngdexie',
    // 'ngdexie.ui'

  ])



  .config(['ngToastProvider', function(ngToast) {
      ngToast.configure({
        verticalPosition: 'bottom',
        horizontalPosition: 'left',
        maxNumber: 3
      });
    }])


  .config(function ($routeProvider, $locationProvider, cfpLoadingBarProvider) {

    $locationProvider.html5Mode(true);

    cfpLoadingBarProvider.includeSpinner = false;











    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })


      .otherwise({
        redirectTo: '/'
      });
  });
