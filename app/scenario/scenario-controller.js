'use strict';

angular.module('interpreteurBudgetaireApp.scenario')
  .controller('ScenarioCtrl', function ($scope, typesEvenement, lignesBudgetaires) {

		$scope.typeEvenementSelectionne = '';
		$scope.typesEvenementDispos = typesEvenement.data;

		$scope.ligneBudgetaireSelectionne = '';
		$scope.lignesBudgetairesDispos = lignesBudgetaires.data;

		$scope.axeSelectionne = '';
		$scope.axesDispos = [];

		$scope.ecrituresGenerees = [];
	});