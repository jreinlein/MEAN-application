// public/js/controllers/MainCtrl.js

angular.module('MainCtrl', []).controller('MainController', ['$scope', function($scope) {

	$scope.tagline = 'Search a certain #hashtag on Instagram!';

	$scope.searchedTerm = {};

	$scope.update = function(givenTerm) {
		$scope.searchedTerm = angular.copy(givenTerm);
	};
}]);