'use strict';

angular.module('psJwtApp')
	.controller('RegisterCtrl', function ($scope, $http) {
		$scope.submit = function () {
			$http.post(url, user)
				.success(function () {
					console.log("good")
				})
				.error(function () {
					console.log("bad")
				});
		}
	});
