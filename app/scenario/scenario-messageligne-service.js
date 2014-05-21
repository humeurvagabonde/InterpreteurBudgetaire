angular.module('interpreteurBudgetaireApp.scenario')
    .factory('MessageLigne', function(_) {
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
        }
        /* utiliser un tableau */
        this.imputations = this.imputations || [];
    };

    MessageLigne.prototype = {
        setData: function(data) {
            angular.extend(this, data);
        },
        /* Helpers : imputationDefini() = currying ?*/
        organDefinie: function() {
            var imputationsResult = _.where(this.imputations, {'type': 'organ'});
            return imputationsResult.length > 0;
            /*return !angular.isUndefined(this.imputations.organ);*/
        },
        natureDefinie: function() {
            return _.where(this.imputations, {'type': 'nature'}).length > 0;
            /*return !angular.isUndefined(this.imputations.nature);*/
        },
        destinationDefinie: function() {
            return _.where(this.imputations, {'type': 'destination'}).length > 0;
            /*return !angular.isUndefined(this.imputations.destination);*/
        },
        compteDefini: function() {
            return _.where(this.imputations, {'type': 'compte'}).length > 0;
        },
        imputationDefinie: function() {
            return this.natureDefinie() || this.destinationDefinie() || this.compteDefini();
        },
        operationDefinie: function() {
            return !angular.isUndefined(this.imputations.operation);
        },
        imputationsDefinies: function() {
            /*return _.values(this.imputations).length > 0;*/
            return this.imputations.length > 0;
        },

        /* Actions */
        dupliquer: function() {
            var clone = angular.copy(this);
            clone.id =  nextLigneId();
            return clone;
        },

        imputer: function(type, imputation) {
            var imputationResult = _.find(this.imputations, {'type': type});
            if (!angular.isUndefined(imputationResult)) {
                imputationResult.valeur = imputation;
                imputationResult.toto='krkr';
            } else {
                this.imputations.push({'type': type, 'valeur': imputation});
            }
        }
    };

    return MessageLigne;
});