// INITILIZE CONTROLLER
// ============================================================
angular.module("scribe").controller("charSelectCtrl", function($scope, characterService) {
  // VARIABLES
  // ============================================================
  
  
  // FUNCTIONS
  // ============================================================
  
  $scope.getUserCharacters = function(){
    characterService.getUserCharacters().then(function(response){
      $scope.userChars = response
    })
  }
  
  $scope.getUserCharacters();
});