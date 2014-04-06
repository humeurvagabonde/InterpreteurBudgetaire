'use strict';

angular.module('interpreteurBudgetaireApp.ecritures', ['ui.router'])
	.config(function ($stateProvider) {
    $stateProvider
	    .state('ecritures', {
	      url: '/ecritures',
	      abstract: true,
	      controller: 'EcrituresCtrl',
	      templateUrl: "ecritures/ecritures.html"
	    })
	    .state('ecritures.list', {
	      url: '',
	      templateUrl: "ecritures/list/ecritures-list.html",
	    })
  });