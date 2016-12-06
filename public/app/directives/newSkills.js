angular.module('scribe')
.directive('skills', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/newSkills.html',
  controller: function ($scope, characterService) {

    console.log($scope.skills);

    $scope.coolSkillClassToggler = function (skill) {
      var charClass = characterService.characterCreationObject.static.classes[0].class
      console.log(skill);
      for (var props in skill) {
        // console.log(props);
        // console.log(charClass);
        if (props === charClass) {
          // console.log(skill[props]);
          return skill[props];
        }
      }
    }

    $scope.setAttributeModifier = function() {
        for (var i = 0; i < $scope.attributes.length; i++) {
          var attribute = $scope.attributes[i];
          var modifier = (attribute - 10) / 2;
          if (modifier >= 0) {
              modifier = Math.floor(modifier)
          } else {
              modifier = Math.ceil(modifier)
          }
          $scope.attributeModifier[i] = modifier
        }
    }

    $scope.skillAbilityMod = function (skill) {
      $scope.setAttributeModifier()
      $scope.abilityMod = 0;
      switch (skill.Ability) {
    case "Str":
        $scope.abilityMod = $scope.attributeModifier[0];
        break;
    case "Dex":
        $scope.abilityMod = $scope.attributeModifier[1];
        break;
    case "Con":
        $scope.abilityMod = $scope.attributeModifier[2];
        break;
    case "Int":
        $scope.abilityMod = $scope.attributeModifier[3];
        break;
    case "Wis":
        $scope.abilityMod = $scope.attributeModifier[4];
        break;
    case "Cha":
        $scope.abilityMod = $scope.attributeModifier[5];

      }
      return $scope.abilityMod
    }
  },
  scope: {
    skills:"=",
    attributes:"=",
    attributeModifier:"="

  },
  link: function( scope, element, attributes ) {}
};

});
