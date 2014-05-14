'use strict'
// var foo;
// function Posts($scope, $http) {
//     $http.get('http://api.tumblr.com/v2/blog/allanimemangaquotes.tumblr.com/posts?api_key=pjKvJTdwNgCVEB0zX1q0ilC0x2PiFGSd7koSVoUFMbCwetlUPf').
//         success(function(data) {
//             $scope.posts = data;
//             foo = data;
//         });
// }

var quotesReaderServices = angular.module('quotesReaderServices', ['ngResource']);

quotesReaderServices.factory('Posts', ['$resource', '$http',
	function($resource, $http){
		return $http.get('/api/posts', {'limit'}).
		        success(function(data) {
		            console.log('Succesfully fetched the Posts');
		        });
	}
]);

