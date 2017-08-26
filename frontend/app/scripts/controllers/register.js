'use strict';

angular.module('psJwtApp')
	.controller('RegisterCtrl', function ($scope, $http, $rootScope, alert) {
		$scope.submit = function () {

			var url = 'http://localhost:3000/register';
			var user = {
				name: 'Alex'
			};

			$http.post(url, user)
				.then(function successCallback(response) {
					// this callback will be called asynchronously
					// when the response is available
					alert('success', 'OK!', 'You are now registered');
				}, function errorCallback(response) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
					alert('warning', 'Oops!', 'Could not register');
				});

		}
	});
