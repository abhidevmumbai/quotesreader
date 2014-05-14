'use strict'

var quotesReaderControllers = angular.module('quotesReaderControllers', []);
var foo = '';
quotesReaderControllers.controller('QuotesReaderCtrl', ['$scope', 'Posts',
	function($scope, Posts) {
	$scope.posts = null;
	Posts.then(function (response) {
		$scope.posts = response.data.response.posts;
	});
}]);