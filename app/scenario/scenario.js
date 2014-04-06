'use strict';

angular.module('interpreteurBudgetaireApp.scenario', ['ui.router', 'interpreteurBudgetaireApp.referentiel'])
	.config(function ($stateProvider) {
    $stateProvider
	    .state('scenario', {
	    	resolve: {
	    		typesEvenement: function(referentielService) {
	    			return referentielService.loadTypesEvenement();
	    		},
	    		lignesBudgetaires: function(referentielService) {
	    			return referentielService.loadLignesBudgetaires();
	    		}
	    	},
	    	url: '/scenario',
	    	templateUrl: 'scenario/scenario.html',
      	controller: 'ScenarioCtrl'
    })
  }
);
