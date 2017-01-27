angular.module('routerApp', ['ui.router', 'templates']).
    config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider){
            $stateProvider
                .state('projects', {
                    url: '/projects',
                    views: {
                        '': {templateUrl: 'projects/project_base.html'},
                        'nav@projects': { templateUrl: 'partials/navbar.html'  },
                        'body@projects': {
				templateUrl: 'projects/projects.html',
				controller: 'ProjectCtrl'	
			},
                    }
                })
                .state('home', {
                    url: '/home',
                    views: {
                        '': {templateUrl : 'home/home_base.html' },
                        'nav@home':{ templateUrl : 'partials/navbar.html'},
                        'body@home':{
                            templateUrl : 'home/home_content.html',
                            controller: 'HomeCtrl'
                        },
                        'about@home':{ templateUrl : 'about.html',
                                       controller: 'HomeCtrl'
                        },
                        'contact@home':{ templateUrl : 'contact.html'}
                    }
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'about.html',
                    controller: 'AboutCtrl'
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: 'contact.html',
                    controller: 'ContactCtrl'
                })
                .state('webgl', {
                    url: '/webgl',
                    templateUrl: 'webgl.html',
                    controller: 'WebglCtrl'
                });

            $urlRouterProvider.otherwise('home');

            $locationProvider.html5Mode({
                enabled:true,
                requireBase: false
            });
        }]);
