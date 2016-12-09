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
            // console.($scope.skills[i][props], "props");
            // console.log($scope.skills[i], "skill at i");
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
    $scope.hitDice = 0

    $scope.hitDiceSetter = function () {
      var tempHD = 0
      for (var i = 0; i < characterService.characterCreationObject.static.classes.length; i++) {
        tempHD += characterService.characterCreationObject.static.classes[i].level
      }
      $scope.hitDice = tempHD
    }

    $scope.ranks = 0;
    $scope.skillRanksSetter = function (skill, numToAdd) {
      $scope.hitDiceSetter();
      for (var i = 0; i < $scope.charGenSkills.length; i++) {
        if ($scope.charGenSkills[i] === skill) {
          if (numToAdd !== 0) {
            if (numToAdd > 0 && $scope.remainingSkills > 0 && $scope.charGenSkills[i].ranks < $scope.hitDice) {
              $scope.charGenSkills[i].ranks += numToAdd
              $scope.remainingSkills -= numToAdd
              return $scope.charGenSkills[i].ranks
            }
            if (numToAdd < 0 && $scope.charGenSkills[i].ranks > 0) {
              $scope.charGenSkills[i].ranks += numToAdd
              $scope.remainingSkills -= numToAdd
              return $scope.charGenSkills[i].ranks
            }
          }
        }
      }
    }

    $scope.skillmiscellaneousMod = function (skill) {
      if (skill.classSkill) {
        for (var i = 0; i < $scope.charGenSkills.length; i++) {
          if ($scope.charGenSkills[i].name === skill.name) {
            if ($scope.charGenSkills[i].ranks > 0) {
              $scope.charGenSkills[i].miscellaneousModifier = 3
              return $scope.charGenSkills[i].miscellaneousModifier
            }
            else if ($scope.charGenSkills[i].ranks === 0) {
              $scope.charGenSkills[i].miscellaneousModifier = 0
              return $scope.charGenSkills[i].miscellaneousModifier
            }
          }
        }
      }else{
        return skill.miscellaneousModifier
      }
    }

    $scope.setSkillTotal = function (skill) {
      for (var i = 0; i < $scope.charGenSkills.length; i++) {
        if ($scope.charGenSkills[i] === skill) {
        $scope.charGenSkills[i].total = $scope.abilityMod + $scope.charGenSkills[i].ranks + $scope.charGenSkills[i].miscellaneousModifier
        return $scope.charGenSkills[i].total
        }
      }
    }


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
    attributeModifier:"=",
    classHasSpellsChecker: "&",
    classes: "=",
    remainingSkills: "="


  },
  link: function( scope, element, attributes ) {}
};

});
