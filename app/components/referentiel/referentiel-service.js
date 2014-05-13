'use strict';

angular.module('interpreteurBudgetaireApp.referentiel')
  .factory('referentielService', ['$http', 'Restangular', function ($http, Restangular) {
    // Service logic
    var typesEvenement = Restangular.all('referentiel/types-evenement');
    var lignesBudgetaires = Restangular.all('referentiel/lignes-budgetaires');
    var axes = Restangular.all('referentiel/axes');
    var operations = Restangular.all('referentiel/operations');
    var typesNature = Restangular.all('referentiel/types-nature');

    // Public API here
    return {
      loadTypesEvenement: function () {
        return typesEvenement.getList();
      },
      loadLignesBudgetaires: function () {
        return lignesBudgetaires.getList();
      },
      loadAxes: function () {
        return axes.getList();
      },
      loadOperations: function () {
        return operations.getList();
      },
      loadTypesNature: function () {
        return typesNature.getList();
      }
    };
}]);
