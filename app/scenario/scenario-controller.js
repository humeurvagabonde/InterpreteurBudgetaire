'use strict';

angular.module('interpreteurBudgetaireApp.scenario')
  .controller('ScenarioCtrl', function ($scope, Message, MessageService, typesEvenement, lignesBudgetaires, typesNature) {

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
 		var tailleHistorique = 10;
 		$scope.referentielSelectionne = '';
		$scope.message = new Message();
		$scope.currentLigne = $scope.message.lignes[0];
		$scope.alerts = [];
  	$scope.typesEvenement = [
  		{id: '1', code: 'saisir', libelle: 'Saisir budget'},
  		{id: '2', code: 'voter', libelle: 'Voter budget'},
  		{id: '3', code: 'ventiler', libelle: 'Ventiler'},
  		{id: '4', code: 'engager', libelle: 'Engager'},
  		{id: '5', code: 'payer', libelle: 'Payer'},
  	];
  	$scope.historique = [];

  	/*---- HISTORIQUE --- */
  	function historiser(item) {
  		var taille = $scope.historique.unshift(item);
  		//$scope.historique.splice();
  	}

		/*--- REFERENTIEL --- */
		/* DEPRECATED
		$scope.selectionnerTypeNature = function(typeNature) {
			$scope.typeNatureSelectionne = typeNature.code;
			$scope.currentLigne.imputations['nature'] = typeNature;
			historiser(typeNature);
		};
		*/

		$scope.selectionnerImputation = function(type, imputation) {
			$scope.currentLigne.imputations[type] = imputation;
			$scope.currentLigne.imputer(type, imputation);
			historiser(imputation);
		};

		$scope.isImputationActive = function(referentiel) {
			return angular.equals($scope.referentielSelectionne, referentiel);
		};

		$scope.selectionnerTypeEvenement = function(typeEvnt) {
			$scope.message.typeEvenement = typeEvnt;
		}

		$scope.isTypeEvenementActif = function(typeEvnt) {
			return angular.equals($scope.message.typeEvenement, typeEvnt);
		}

		/*--- MESSAGE --- */
		/* Utilisez $scope.message dans le futur plutot qu'un argument ? */
		$scope.creerMessage = function(message) {
			MessageService.creer(message).then(function() {
				$scope.alerts.push({type: 'success', msg: 'Yay!'});
    		console.log("Object saved OK");
		  }, function() {
		  	$scope.alerts.push({type: 'danger', msg: 'There was an error saving!'});
		    console.log("There was an error saving");
		  });
		};

		$scope.ajouterNouvelleLigne = function(message) {
			message.creerNouvelleLigne();
		};

		$scope.dupliquerLigne = function(message, ligne) {
			message.ajouter(ligne.dupliquer());
		};

		$scope.supprimerLigne = function(message, ligne) {
			message.supprimer(ligne);
		};

		$scope.selectionnerLigne = function(message, ligne) {
			$scope.currentLigne = ligne;
		};

		/* Helpers --> a remplacer par des appels a l'objet metier */
		$scope.closeAlert = function(index) {
	    $scope.alerts.splice(index, 1);
	  };
		$scope.estSelectionnee = function(ligne) {
			return angular.equals($scope.currentLigne, ligne);
		};

		$scope.estSupprimable = function(message, ligne) {
			return message.nbLignes() > 1;
		};

		/* TESTS */
		$scope.msgsRest = MessageService.loadMessages();
	});