angular.module('scribe')
.directive('customization', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/newCustomization.html',
  controller: function($scope, characterService, $state) {

    $scope.customization = {}

    $scope.charObjDesc = characterService.characterCreationObject.customization
    $scope.charObj = characterService.characterCreationObject
    
    $scope.HPCalc = function() {
    var currentClass = characterService.characterCreationObject.static.classes[0].class;
    var feats = characterService.characterCreationObject.feats;

    $scope.charHitPoints = 0;
    for (let i = 0; i < $scope.classes.length; i++) {
      if ($scope.classes[i].class === currentClass) {
        $scope.charHitPoints = $scope.classes[i].hitDie + $scope.attributeModifier[2]

          for (let i = 0; i < feats.length; i++) {
            if (feats[i].name === "Toughness") {
              $scope.charHitPoints += 3
            }
          }
        }
    	}
      $scope.charObj.core.maxHitPoints = $scope.charHitPoints
      $scope.charObj.core.currentHitPoints = $scope.charObj.core.maxHitPoints
    }


    $scope.customizationFields = function() {
      $scope.charObjDesc.name = $scope.customization.name
      $scope.charObj.static.characterName = $scope.customization.name
      $scope.charObjDesc.homeland = $scope.customization.homeland
      $scope.charObjDesc.deity = $scope.customization.deity
      $scope.charObjDesc.age = $scope.customization.age
      $scope.charObjDesc.height = $scope.customization.height
      $scope.charObjDesc.weight = $scope.customization.weight
      $scope.charObjDesc.hair = $scope.customization.hair
      $scope.charObjDesc.eyes = $scope.customization.eyes
      $scope.charObjDesc.misc = $scope.customization.misc
      $scope.charObjDesc.characterDescription = $scope.customization.characterDescription
      $scope.charObjDesc.biography = $scope.customization.biography
      $scope.HPCalc()
    }
    
    $scope.submitNewChar = function() {
      characterService.createCharacter()
      .then(function(response){
        $state.go('player', {userId: response.static.userId, charId: response._id})
      })
      .catch(function(err){
        alert("There was an error, please log in and try again.")
        $state.go('home')
      })
    }
    
  },
  scope: {
    classes: '=',
    attributeModifier: '='
  },
  link: function( scope, element, attributes ) {}
};

});
