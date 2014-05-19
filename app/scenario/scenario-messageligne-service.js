angular.module('interpreteurBudgetaireApp.scenario')
    .factory('MessageLigne', function() {
    /*  Structure Ligne. Imputations controlées par le type d'evenement
        {
        id: message.lignes.length + 1,
        type: typeEvenement
        imputations: {
            organ: null,
            nature: null,
            destination: null,
            operation: null
        },
        montant: null
        }
    */
    var simpleLignesCounter = 0;
    function nextLigneId() {
        simpleLignesCounter = simpleLignesCounter + 1;
        return simpleLignesCounter;
    };


    function MessageLigne(data) {
        if (!angular.isUndefined(data)) {
            this.setData(msgData);
        } else {
            this.id = nextLigneId();
            this.imputations = {}; /* un array est mieux ? */
        }
    };

    MessageLigne.prototype = {
        setData: function(data) {
            angular.extend(this, data);
        },
        /* Helpers : imputationDefini() = currying ?*/
        organDefinie: function() {
            return !angular.isUndefined(this.imputations.organ);
        },
        natureDefinie: function() {
            return !angular.isUndefined(this.imputations.nature);
        },
        destinationDefinie: function() {
            return !angular.isUndefined(this.imputations.destination);
        },
        compteDefini: function() {
            return !angular.isUndefined(this.imputations.compte);
        },
        imputationsDefinies: function() {
            return this.imputations;
        },

        /* Actions */
        dupliquer: function() {
            var clone = angular.copy(this);
            clone.id =  nextLigneId();
            return clone;
        }
    };

    return MessageLigne;
});