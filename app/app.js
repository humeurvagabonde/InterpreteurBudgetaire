'use strict';

angular
  .module('interpreteurBudgetaireApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'ecritures/list/ecritures-list.html',
        controller: 'EcrituresCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
