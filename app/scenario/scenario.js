'use strict';

angular.module('interpreteurBudgetaireApp.scenario', ['ui.router', 'interpreteurBudgetaireApp.referentiel', 'interpreteurBudgetaireApp.scenario'])
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
          },
          typesNature: function(referentielService) {
            return referentielService.loadTypesNature();
          }
        },
        url: '/scenario',
        templateUrl: 'scenario/scenario.html',
        controller: 'ScenarioCtrl'
    })
    .state('scenario.creer', {
      url: '/creer',
      views: {
        'referentiels-liste@scenario': {
          templateUrl: 'scenario/scenario-referentiels-liste.html'
        },
        'referentiels-details@scenario': {
          templateUrl: 'scenario/scenario-referentiels-details.html'
        },
        'message-composition@scenario': {
          templateUrl: 'scenario/scenario-message-composition.html'
        }
      }
    })
    .state('scenario.creer.nature', {
      url: '/creer/nature',
      views: {
        'referentiels-details@scenario': {
          templateUrl: 'scenario/scenario-referentiels-details-nature.html'
        }
      }
    })
  }
);
