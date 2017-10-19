angular.module('start', ['ionic'])

.controller('LoginController', ['$scope', function($scope){
	$scope.count = 0;

	$scope.login = function(){
		//$location.path('/ProyectoPage'); // working
		$scope.count++;
		alert($scope.count);
	}
	
}]);