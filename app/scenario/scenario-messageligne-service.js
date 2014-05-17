angular.module('interpreteurBudgetaireApp.scenario')
    .factory('MessageLigne', function() {
    /*  Structure Ligne. Imputations controlées par le type d'evenement
        {
        id: message.lignes.length + 1,
        type: typeEvenement
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


    function MessageLigne(data) {
        if (!angular.isUndefined(data) {
            this.setData(msgData);
        } else {
            this.id = nextLigneId();
        }
    };

    MessageLigne.prototype = {
        setData: function(data) {
            angular.extend(this, data);
        }
    };

    return MessageLigne;
});