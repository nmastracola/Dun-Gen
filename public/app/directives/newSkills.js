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
            if (props === charClass) {

              return $scope.skills[i][props];
            }
          }
        }
      }
    }


    // $scope.logger = function () {
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
    $scope.skillCancel=function () {
      for (var i = 0; i < $scope.charGenSkills.length; i++) {
        $scope.charGenSkills[i] = 0
      }
      for (var i = 0; i < $scope.chosenFeats.length; i++) {
        for (var j = 0; j < characterService.characterCreationObject.feats.length; j++) {
          if (characterService.characterCreationObject.feats[j].name === $scope.chosenFeats[i].name) {
            characterService.characterCreationObject.feats.splice(j,1)
          }
        }
      };
      for (var i = 0; i < $scope.chosenFeats.length; i++) {
        for (var j = 0; j < characterService.characterCreationObject.qualifications.length; j++) {
          if (characterService.characterCreationObject.qualifications[j].value[1] === $scope.chosenFeats[i].name) {
            characterService.characterCreationObject.qualifications[j].splice(j,1)
          }
        }
      };
      $scope.skillsShower=!$scope.skillsShower
      $scope.abilitiesShower=!$scope.abilitiesShower
    }
  },
  scope: {
    skills: "=",
    attributes:"=",
    attributeModifier:"=",
    classHasSpellsChecker: "&",
    classes: "=",
    remainingSkills: "=",
    skillsShower: "=",
    abilitiesShower:"=",
    chosenFeats:"="


  },
  link: function( scope, element, attributes ) {}
};

});
