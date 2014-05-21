'use strict';

angular.module('interpreteurBudgetaireApp.scenario')
  .factory('MessageService', ['Restangular', 'Message', function (Restangular, Message) {
    // Service logic
    var messagesApiRest = Restangular.all('scenario/messages');

    // Public API here
    return {
      loadMessages: function () {
        var messages = [];
        messagesApiRest.getList().then(function(messagesData) {
          angular.forEach(messagesData, function(value, key){
             this.push(new Message(value));
           }, messages);
        });
        return messages;
      },

      creer: function(message) {
        return messagesApiRest.post(message);
      }
    };
}]);
