'use strict';

angular.module('interpreteurBudgetaireApp.referentiel')
  .factory('referentielService', ['$http', function ($http) {
    // Service logic

    // Public API here
    return {
      loadTypesEvenement: function () {
        return $http.get('/app-interpreteurdata/referentiel/types-evenement.json');
      },
      loadLignesBudgetaires: function () {
        return $http.get('/app-interpreteurdata/referentiel/lignes-budgetaires.json');
      }
    };
}]);
