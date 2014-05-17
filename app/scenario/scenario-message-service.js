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
    var simpleLignesCounter = 0;
    function nextLigneId() {
        simpleLignesCounter = simpleLignesCounter + 1;
        return simpleLignesCounter;
    }


    function Message(msgData) {
        if (msgData) {
            this.setData(msgData);
        }

        // Some other initializations related to book
        if (angular.isUndefined(this.lignes)) {
            this.lignes = [];
            this.creerNouvelleLigne();
        }
    };

    Message.prototype = {
        setData: function(msgData) {
            angular.extend(this, msgData);
        },

        initNouvelleLigne: function() {
            return {
                id: nextLigneId()
            }
        },

        creerNouvelleLigne: function() {
            this.lignes.push(this.initNouvelleLigne());
        },

        dupliquer: function(ligne) {
            var clone = angular.copy(ligne);
            clone.id =  nextLigneId();
            this.lignes.push(clone);
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