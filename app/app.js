'use strict';

angular
  .module('interpreteurBudgetaireApp', [
    'interpreteurBudgetaireApp.referentiel',
    'interpreteurBudgetaireApp.evenements',
    'interpreteurBudgetaireApp.ecritures',
    'interpreteurBudgetaireApp.scenario',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'ui.router',
    'restangular',
    'angular-lodash'
  ])
  
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {

      // It's very handy to add references to $state and $stateParams to the $rootScope
      // so that you can access them from any scope within your applications.For example,
      // <li ui-sref-active="active }"> will set the <li> // to active whenever
      // 'contacts.list' or one of its decendents is active.
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      }
    ]
  )
  
  .config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/scenario/creer");

    // restangular
    RestangularProvider.setBaseUrl('/app-interpreteurdata/api/v1');

  })
  
  .factory('_', function() {
    return window._; // assumes underscore has already been loaded on the page
  });
