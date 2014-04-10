'use strict';

angular.module('interpreteurBudgetaireApp.evenements')
  .factory('evenementsService', ['$http', 'restangular', function ($http, restangular) {
    // Service logic
    var evenements = Restangular.all('evenements');

    // Public API here
    return {
    	loadEvenements: function() {
    		return evenements.getList();
    	},
      loadEvenementsB: function () {
        return $http.get('/app-interpreteurdata/evenements/evenements-list.json');
      }
    };
}]);
