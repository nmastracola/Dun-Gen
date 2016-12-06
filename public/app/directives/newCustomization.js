angular.module('scribe')
.directive('customization', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/newCustomization.html',
  controller: function($scope, characterService) {
  console.log("class", $scope.classes);

    $scope.customization = {}

    $scope.charObj = characterService.characterCreationObject.customization

    $scope.customizationFields = function() {
      $scope.charObj.name = $scope.customization.name
      $scope.charObj.homeland = $scope.customization.honmeland
      $scope.charObj.diety = $scope.customization.diety
      $scope.charObj.age = $scope.customization.age
      $scope.charObj.height = $scope.customization.height
      $scope.charObj.weight = $scope.customization.weight
      $scope.charObj.hair = $scope.customization.hair
      $scope.charObj.eyes = $scope.customization.eyes
      $scope.charObj.misc = $scope.customization.misc
      $scope.charObj.characterDescription = $scope.customization.characterDescription
      $scope.charObj.biography = $scope.customization.biography

      $scope.currentlySelectedCharacterHitPointCalculatorBasedOnConstitutionModifierHitDieFavoredClassAndIfTheCharacterHasSelectedTheToughnessFeat()
    }
    $scope.submitNewChar = function() {
      characterService.createCharacter();
    }
    $scope.currentlySelectedCharacterHitPointCalculatorBasedOnConstitutionModifierHitDieFavoredClassAndIfTheCharacterHasSelectedTheToughnessFeat = function() {
    var currentClass = characterService.characterCreationObject.static.classes[0].class;

    var feats = characterService.characterCreationObject.static.feats;

    $scope.charHitPoints = 0;

    	for (var i = 0; i < $scope.classes; i++) {
    		if ($scope.classes[i].class === currentClass) {
    	    $scope.charHitPoints = $scope.classes[i].hitDie + 1 + $scope.attributeModifier[1]
          console.log("HitPoints before total ",$scope.charHitPoints);

          for (var i = 0; i < feats.length; i++) {
            if (feats[i].value === "Toughness") {
              $scope.charHitPoints = $scope.charHitPoints + 3
              console.log("HitPoints total ", $scope.charHitPoints);
            }
          }
        }
    	}
    }
  },
  scope: {
    classes: '=',
    attributeModifier: '='
  },
  link: function( scope, element, attributes ) {}
};

});
