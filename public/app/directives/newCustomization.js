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
      console.log("CharObj", $scope.charObj);
    }
    $scope.submitNewChar = function() {
      characterService.createCharacter();
    }
  },
  scope: {
    classes: '='
  },
  link: function( scope, element, attributes ) {}
};

});
