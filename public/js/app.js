var app = angular.module('textSupportApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/main.html',
			controller: 'MainCtrl'
		})
		.when('/support', {
			templateUrl: 'templates/support.html',
			controller: 'SupportCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
})
