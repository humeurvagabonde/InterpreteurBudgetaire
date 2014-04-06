'use strict';

angular.module('interpreteurBudgetaireApp.evenements')
  .factory('evenementsService', ['$http', function ($http) {
    // Service logic

    // Public API here
    return {
      loadEvenements: function () {
        return $http.get('/app-interpreteurdata/evenements/evenements-list.json');
      }
    };
}]);
