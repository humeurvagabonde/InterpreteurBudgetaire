'use strict';

angular.module('interpreteurBudgetaireApp')
  .controller('EcrituresCtrl', function ($scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.evenementsDispos = [
	  	{id:'1', type:'SaisieBudget', libelle:'EvtSB1'},
	  	{id:'2', type:'SaisieBudget', libelle:'EvtSB2'},
	  	{id:'3', type:'SaisieBudget', libelle:'EvtSB3'},
	  	{id:'4', type:'SaisieBudget', libelle:'EvtSB4'},
	  	{id:'5', type:'Vote', libelle:'EvtVote5'},
	  	{id:'6', type:'Ventilation', libelle:'EvtVentil1'},
	  	{id:'7', type:'EngagementJuridique', libelle:'EvtEJ1'},
	  	{id:'8', type:'PaiementFacture', libelle:'EvtPaiement1'}
	];

    $scope.evenementSelectionne = $scope.evenementsDispos[1];

    $scope.ecrituresDispos = [
		{id:'1', periode:'2015', dateCreation:'10/10/2014', sens:'C', montant:'1000',  organId:'1', organLib:'Etab', imputation:'100/606', ope:'Ope1', livreId:'1', livreLib:'SBudAENatDest', auditId:'1', auditLib:'EvtSB1'},
		{id:'2', periode:'2015', dateCreation:'15/10/2014', sens:'C', montant:'-1000', organId:'1', organLib:'Etab', imputation:'100/606', ope:'Ope1', livreId:'1', livreLib:'SBudAENatDest', auditId:'2', auditLib:'EvtSB2'},
		{id:'3', periode:'2015', dateCreation:'15/10/2014', sens:'C', montant:'600',   organId:'1', organLib:'Etab', imputation:'100/606', ope:'Ope1', livreId:'1', livreLib:'SBudAENatDest', auditId:'2', auditLib:'EvtSB2'},
		{id:'4', periode:'2015', dateCreation:'15/10/2014', sens:'C', montant:'15000', organId:'1', organLib:'Etab', imputation:'100/606', ope:'Ope2', livreId:'1', livreLib:'SBudAENatDest', auditId:'3', auditLib:'EvtSB3'},
		{id:'5', periode:'2015', dateCreation:'20/10/2014', sens:'C', montant:'2000',  organId:'2', organLib:'Etab/UB/CR1', imputation:'100/606', ope:'null', livreId:'1', livreLib:'SBudAENatDest', auditId:'4', auditLib:'EvtSB4'}
	];

	$scope.alerts = [
	    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
	    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
	  ];
});
