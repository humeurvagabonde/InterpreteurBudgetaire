'use strict';

angular.module('interpreteurBudgetaireApp.scenario')
  .controller('ScenarioCtrl', function ($scope, typesEvenement, lignesBudgetaires, typesNature) {

		$scope.typeEvenementSelectionne = '';
		$scope.typesEvenementDispos = typesEvenement;

		$scope.ligneBudgetaireSelectionne = '';
		$scope.lignesBudgetairesDispos = lignesBudgetaires;

		$scope.axeSelectionne = '';
		$scope.axesDispos = [];

		$scope.operationSelectionee = '';

		$scope.ecrituresGenerees = [];

		$scope.typeNatureSelectionne = '';
 		$scope.typesNatureDispos = typesNature;
		$scope.selectionnerTypeNature = function(typeNature) {
			$scope.typeNatureSelectionne = typeNature.code;
		}
	});