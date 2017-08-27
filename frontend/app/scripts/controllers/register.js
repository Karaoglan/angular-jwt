'use strict';

angular.module('psJwtApp')
	.controller('RegisterCtrl', function ($scope, $http, $rootScope, alert, auth) {
		$scope.submit = function () {

			var url = 'http://localhost:3000/register';
			var user = {
				email: $scope.email,
				password: $scope.password
			};

			$http.post(url, user)
				.then(function successCallback(response) {
					
					alert('success', 'OK!', 'You are now registered');
					auth.setToken(res.token);
				}, function errorCallback(response) {
					
					alert('warning', 'Oops!', 'Could not register');
				});

		}
	});
