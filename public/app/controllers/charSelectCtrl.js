// INITILIZE CONTROLLER
// ============================================================
angular.module("scribe").controller("charSelectCtrl", function($scope, characterService, $state, userChars) {
  // VARIABLES
  // ============================================================
  
  
  // FUNCTIONS
  // ============================================================
  
  $scope.userChars = userChars;
  $scope.displayChar = function(charId){
    characterService.getCharObject(charId)
    .then(function(response){
      $state.go('player', {charId: response[0]._id})
    })
    .catch(function(err){
      alert("There was an error, please log in and try again.")
      $state.go('home')
    })
}
});