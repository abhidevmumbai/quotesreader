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
		// delete $http.defaults.headers.common['X-Requested-With'];
		return $http.jsonp('http://api.tumblr.com/v2/blog/allanimemangaquotes.tumblr.com/posts',
			{
				params: {
			        callback: 'JSON_CALLBACK',
			        format:'json',			        
			        api_key: 'pjKvJTdwNgCVEB0zX1q0ilC0x2PiFGSd7koSVoUFMbCwetlUPf'
			    }
			}).
		        success(function(data) {
		        	console.log(data);
		            console.log('Succesfully fetched the Posts');
		        });
	}
]);

