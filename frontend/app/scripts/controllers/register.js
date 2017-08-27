'use strict';

angular.module('psJwtApp')
	.controller('RegisterCtrl', function ($scope, $http, $rootScope, alert, authToken) {
		$scope.submit = function () {

			var url = 'http://localhost:3000/register';
			var user = {
				email: $scope.email,
				password: $scope.password
			};

			$http.post(url, user)
				.then(function successCallback(response) {
					
					alert('success', 'OK!', 'You are now registered');
					authToken.setToken(response.token);
				}, function errorCallback(response) {
					
					alert('warning', 'Oops!', 'Could not register');
				});

		}
	});
