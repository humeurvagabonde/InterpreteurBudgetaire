'use strict';

angular.module('interpreteurBudgetaireApp.scenario')
  .controller('ScenarioCtrl', function ($scope, Message, typesEvenement, lignesBudgetaires, typesNature) {

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


 		/* --- INIT --- */
		$scope.message = new Message();
		$scope.currentLigne = $scope.message.lignes[0];

		/*--- REFERENTIEL --- */
		$scope.selectionnerTypeNature = function(typeNature) {
			$scope.typeNatureSelectionne = typeNature.code;
			//$scope.currentLigne.imputations
		};

		/*--- MESSAGE --- */
		$scope.ajouterNouvelleLigne = function(message) {
			message.creerNouvelleLigne();
		}

		$scope.dupliquerLigne = function(message, ligne) {
			message.dupliquer(ligne);
		}

		$scope.supprimerLigne = function(message, ligne) {
			message.supprimer(ligne);
		}

		$scope.selectionnerLigne = function(message, ligne) {
			$scope.currentLigne = ligne;
		}

		/* Helpers --> a remplacer par des appels a l'objet metier */
		$scope.estSelectionnee = function(ligne) {
			return angular.equals($scope.currentLigne, ligne);
		}

		$scope.estSupprimable = function(message, ligne) {
			return message.nbLignes() > 1;
		}
	});