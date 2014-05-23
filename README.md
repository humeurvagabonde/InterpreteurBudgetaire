InterpreteurBudgetaire
======================

Pré-requis
----------

- installer git
- installer npm (disponible avec node)
- le proxy pour npm se configure via le fichier ~/.npmrc

	`proxy = http://localhost:3128/
	http-proxy = http://localhost:3128/
	https-proxy = https://localhost:3128/
	HTTP_PROXY = http://localhost:3128/
	HTTPS_PROXY = https://localhost:3128/
	strict-ssl = false
	registry = http://registry.npmjs.org/`

- le proxy pour bower se configure dans le fichier .bowerrc du projet concerné

	`{
		"proxy" : "http://localhost:3128",
    "https-proxy" : "http://localhost:3128",
    "directory": "app/bower_components",
		"strict-ssl": "false"
	}`

- installer bower : `sudo npm install -g bower`
- installer grunt : `sudo npm install -g grunt-cli`

Installation
-------------

- cloner le repo en local via git
- installer les outils nécessaires (bower / grunt / ...) en utilisant npm : 'npm install'
- installer les dépendances nécessaires (équivalent du gradle) en utilisant bower : 'bower install'
- l'application se lance en exécutant grâce à grunt : grunt serve

Bibliothèques tierces
---------------------

Ce projet exploire des API tierces. La liste complète est disponible dans le bower.json.
Ici on ne listera que les principales :

- angular-bootstrap pour l'intégration des composants Bootstrap au sein d'Angular
- angular-ui-router pour disposer d'un système de routage plus performant que celui fourni apr le module angular-route officiel
- restangular qui s'appuie sur le service $http d'angular et offre un système de communication REST qui me semble plus évolué que $ressource (fourni par angular).

Fonctionnalités
---------------

1. Scénario
	- Créer un événement sous la forme d'un message
	- Visualiser le résultat de l'événement
	- Lister l'historique des messages
2. Ecritures
	- Lister les ecritures
