angular.module('scribe').controller('playerCtrl', function($scope, sService){

$scope.test = sService.test;

$scope.maxHP = 42;
$scope.HP = 37;

$scope.playerHP = function(x){
  if (($scope.HP < $scope.maxHP) && ($scope.HP > (-10))){
    $scope.HP += x;
  }else if($scope.HP == (-10) && x === 1){
    $scope.HP += x;
  }else if($scope.HP == $scope.maxHP && x === -1){
    $scope.HP += x;
  }
}

});
