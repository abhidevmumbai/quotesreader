'use strict';


var quotesReaderApp = angular.module('quotesReaderApp', [
	'ngRoute',
	'ngResource',
	'quotesReaderControllers',
	'quotesReaderServices'
	]
);

quotesReaderApp.config(function($routeProvider, $httpProvider) {
	
	$routeProvider.
		when('/posts', {
			controller: 'QuotesReaderCtrl',
			templateUrl: 'partials/posts.html'
		}).
		otherwise({
			redirectTo: '/'
		});
});