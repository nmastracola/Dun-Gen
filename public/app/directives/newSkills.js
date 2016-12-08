angular.module('scribe')
.directive('skills', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/newSkills.html',
  controller: function ($scope, characterService) {
    $scope.charGenSkills = characterService.characterCreationObject.skills
    $scope.characterSkillsArrs=[]
    $scope.coolSkillClassToggler = function (skill) {
      var charClass = characterService.characterCreationObject.static.classes[0].class
      for (var i = 0; i < $scope.skills.length; i++) {
        if ($scope.skills[i].skill === skill.name) {
          for (var props in $scope.skills[i]) {
            console.log($scope.skills[i][props], "props");
            console.log($scope.skills[i], "skill at i");
            // console.log(charClass);
            if (props === charClass) {
              // console.log(skill[props]);

              return $scope.skills[i][props];
            }
          }
        }
      }
    }

    // $scope.logger = function () {
    //   console.log($scope.charGenskills);
    // }

    // works
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

    $scope.setSkillTotal = function (skill) {
      skill.total = $scope.abilityMod + skill.ranks + skill.miscellaneousModifier
      return skill.total
    }

    // works
    $scope.skillAbilityMod = function (skill) {
      $scope.setAttributeModifier()
      $scope.abilityMod = 0;
      switch (skill.primaryAttribute) {
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
    skills: "=",
    attributes:"=",
    attributeModifier:"="

  },
  link: function( scope, element, attributes ) {}
};

});
