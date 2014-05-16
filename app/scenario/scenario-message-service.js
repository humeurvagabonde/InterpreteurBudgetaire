angular.module('interpreteurBudgetaireApp.scenario')
    .factory('Message', function() {
    /* Structure Message
        var message = {
        montant: null,
        typeEvenement: null,
        lignes: []
        };

        Structure Ligne
        {
        id: message.lignes.length + 1,
        organ: null,
        nature: null,
        destination: null,
        operation: null,
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
            ;
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
            this.lignes.push(initNouvelleLigne());
        }
    };

    return Message;
});