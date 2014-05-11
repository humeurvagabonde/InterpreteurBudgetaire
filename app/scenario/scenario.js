'use strict';

angular.module('interpreteurBudgetaireApp.scenario', ['ui.router', 'interpreteurBudgetaireApp.referentiel'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('scenario', {
        abstract: true,
        resolve: {
          typesEvenement: function(referentielService) {
            return referentielService.loadTypesEvenement();
          },
          lignesBudgetaires: function(referentielService) {
            return referentielService.loadLignesBudgetaires();
          },
          axes: function(referentielService) {
            return referentielService.loadAxes();
          },
          operations: function(referentielService) {
            return referentielService.loadOperations();
          }
        },
        url: '/scenario',
        templateUrl: 'scenario/scenario.html',
          controller: 'ScenarioCtrl'
    })
    .state('scenario.creer', {
      url: '/creer',
      views: {
        'referentiels-liste': {
          templateUrl: 'scenario/scenario-referentiels-liste.html',
          controller: 'ScenarioCtrl'
        },
        'referentiels-details': {
          templateUrl: 'scenario/scenario-referentiels-details.html',
          controller: 'ScenarioCtrl'
        },
        'message-composition': {
          templateUrl: 'scenario/scenario-message-composition.html',
          controller: 'ScenarioCtrl'
        },
      }
    })
  }
);
