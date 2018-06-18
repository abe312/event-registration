'use strict';

/**
 * @ngdoc directive
 * @name testingApp.directive:myFooter
 * @description
 * # myFooter
 */
angular.module('testingApp')
  .directive('myFooter', function () {
    return {
        templateUrl: "./views/my-footer.html",
        restrict: 'E',
        replace: true,
        transclude: true,
        controller: 'MainCtrl'
    };
  });
