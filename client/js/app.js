'use strict';


var quotesReaderApp = angular.module('quotesReaderApp', [
	'ngRoute',
	'ngResource',
	'quotesReaderControllers',
	'quotesReaderServices'
	]
);

quotesReaderApp.config(function($routeProvider, $httpProvider) {
	//Enable cross domain calls
	$httpProvider.defaults.useXDomain = true;

	//Remove the header used to identify ajax call  that would prevent CORS from working
	delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$routeProvider.
		when('/posts', {
			controller: 'QuotesReaderCtrl',
			templateUrl: 'partials/posts.html'
		}).
		otherwise({
			redirectTo: '/'
		});
});

// function QuotesReaderCtrl ($scope) {
// 	console.log('inside controller');
// 	$scope.posts = Posts.query();
// };