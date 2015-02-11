var app = angular.module('textSupportApp').controller('SupportCtrl', function($scope, $firebase) {
	// $scope.test = 'support ctrl is working'
	$scope.numbers = $firebase(new Firebase('https://textsupport11.firebaseio.com/numbers')).$asArray();
	$scope.numbers.$loaded().then(function() {
		console.log($scope.numbers)
	})

	// $scope.messages = $

});




