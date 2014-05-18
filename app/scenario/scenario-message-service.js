angular.module('interpreteurBudgetaireApp.scenario')
    .factory('Message', function(MessageLigne) {


    /* Structure Message
        var message = {
        montant: null,
        typeEvenement: null,
        lignes: []
        };

        Structure Ligne
        {
        id: message.lignes.length + 1,
        imputations: [
            {organ: null},
            {nature: null},
            {destination: null},
            {operation: null}
        ],
        montant: null
        }
    */
    function Message(data) {
        if (!angular.isUndefined(data)) {
            this.setData(data);
        }

        // Some other initializations related to book
        if (angular.isUndefined(this.lignes)) {
            this.lignes = [];
            this.creerNouvelleLigne();
        }
    };

    Message.prototype = {
        setData: function(data) {
            angular.extend(this, data);
        },

        creerNouvelleLigne: function() {
            this.lignes.push(new MessageLigne());
        },

        ajouter: function(ligne) {
            this.lignes.push(ligne);
        },

        supprimer: function(ligne) {
            var meslignes = this.lignes || [];
            var idx = meslignes.indexOf(ligne);
            if(idx != -1) {
                meslignes.splice(idx, 1);
            }
        },

        nbLignes: function() {
            return this.lignes.length;
        }

    };

    return Message;
});