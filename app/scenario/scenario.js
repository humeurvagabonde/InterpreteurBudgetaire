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
			views:
		})
  }
);
