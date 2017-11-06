angular.module('starter', ['ionic'])

.controller('loginController', function($scope) {
    $scope.data = {};
 
    $scope.login = function() {
        console.log("LOGIN user: " + $scope.user + " - PW: " + $scope.password);
    }
})