// INITILIZE CONTROLLER
// ============================================================
angular.module("scribe").controller("charSelectCtrl", function($scope, characterService, $state) {
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
  
  $scope.displayChar = function(charId){
  
    characterService.getCharObject(charId)
    .then(function(response){
      console.log(response);
      $state.go('player', {userId: response.data[0].static.userId, charId: response.data[0]._id})
    })
    .catch(function(err){
      alert("There was an error, please log in and try again.")
      $state.go('home')
    })
}
});