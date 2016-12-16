(function(){
    'use strict';
    angular.module('myFirstApp', [])
    .controller('MyFirstController', function($scope){
        $scope.name = "Mauri";
        $scope.sayHello = function(){
            return "Hello coursera!";
        }
    });
})();