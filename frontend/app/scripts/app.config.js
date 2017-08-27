angular
	.module('psJwtApp').config(function ($urlRouterProvider, $locationProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);
		$stateProvider.state('register', {
			url: '/register',
			templateUrl: 'views/register.html',
			controller: 'RegisterCtrl'
		});
		$stateProvider.state('main', {
			url: '/',
			templateUrl: 'views/main.html'
		});
		$stateProvider.state('logout', {
			url: '/logout',
			controller: 'LogoutCtrl'
		});

	});
