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
		$scope.selectionnerTypeNature = function(typeNature) {
			$scope.typeNatureSelectionne = typeNature.code;
		};

		/* Definition du modele -- a sortir dans un servcie je pense*/
		function nouvelleLigne(message) {
			return {
				id: message.lignes.length + 1,
				organ: null,
				nature: null,
				destination: null,
				operation: null,
				montant: null
			};
		}

		function nouveauMessage() {
			var message = {
				montant: null,
				typeEvenement: null,
				lignes: []
			};
			message.lignes.push(nouvelleLigne(message));

			return message;
		}

		$scope.message = new Message();

		/* Modele dans l'ihm */
		$scope.currentLigne = $scope.message.lignes[0];

		/* Actions. */
		$scope.ajouterNouvelleLigne = function(message) {
			message.lignes.push(nouvelleLigne(message));
		}

		/* Helpers */
		$scope.isLigneEnCours = function(ligne) {
			return angular.equals($scope.currentLigne, ligne);
		}


	});