'use strict';

angular.module('interpreteurBudgetaireApp.scenario')
  .controller('ScenarioCtrl', function ($scope, typesEvenement, lignesBudgetaires) {

		$scope.typeEvenementSelectionne = '';
		$scope.typesEvenementDispos = typesEvenement;

		$scope.ligneBudgetaireSelectionne = '';
		$scope.lignesBudgetairesDispos = lignesBudgetaires;

		$scope.axeSelectionne = '';
		$scope.axesDispos = [];

		$scope.operationSelectionee = '';

		$scope.ecrituresGenerees = [];
	});