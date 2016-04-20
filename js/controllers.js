var simpleApp = angular.module('simpleApp', ['ngMessages']);

simpleApp.controller('simpleCtrl', function($scope) {

	//model
	$scope.formdata = {};
	$scope.hellomsg = "";

	$scope.hello = function(){
		if($scope.formdata.name){
			$scope.hellomsg = "Hello " + $scope.formdata.name;
		}
		else{
			$scope.hellomsg = "";
		}
	};

});
