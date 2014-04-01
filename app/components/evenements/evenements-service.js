'use strict';

angular.module('interpreteurBudgetaireApp')
  .factory('evenementsService', ['$http', function ($http) {
    // Service logic

    // Public API here
    return {
      loadEvenements: function () {
        return $http.get('http://127.0.0.1:9000/app-interpreteurdata/evenements/evenements-list.json');
      },
    };
  }]);
