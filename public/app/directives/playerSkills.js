angular.module('scribe')
  .directive('playerSkills', function() {
    return {
      restrict: 'E',
      templateUrl: './app/directives/playerSkills.html',
      link: function(scope, element, attributes) {
        scope.customSkillToggler = true;
        scope.skillClassToggler = true;
        scope.skillModFun = function(skill) {
          if (skill.primaryAttribute = "Str") {
            return scope.playerAttTmpMod.tmSTR
          } else if (skill.primaryAttribute = "Dex") {
            return scope.playerAttTmpMod.tmDEX
          } else if (skill.primaryAttribute = "Con") {
            return scope.playerAttTmpMod.tmCON
          } else if (skill.primaryAttribute = "Int") {
            return scope.playerAttTmpMod.tmINT
          } else if (skill.primaryAttribute = "Wis") {
            return scope.playerAttTmpMod.tmWIS
          } else if (skill.primaryAttribute = "Cha") {
            return scope.playerAttTmpMod.tmCHA
          }
        }

        scope.rollForSkill = function (skill) {
         return skill.total
        }

        scope.skillTotalCalc = function (skill) {
          var skillAbility = 0
          if (skill.primaryAttribute = "Str") {
            skillAbility = scope.playerAttTmpMod.tmSTR
          } else if (skill.primaryAttribute = "Dex") {
            skillAbility = scope.playerAttTmpMod.tmDEX
          } else if (skill.primaryAttribute = "Con") {
            skillAbility = scope.playerAttTmpMod.tmCON
          } else if (skill.primaryAttribute = "Int") {
            skillAbility = scope.playerAttTmpMod.tmINT
          } else if (skill.primaryAttribute = "Wis") {
            skillAbility = scope.playerAttTmpMod.tmWIS
          } else if (skill.primaryAttribute = "Cha") {
            skillAbility = scope.playerAttTmpMod.tmCHA
          }
          for (var i = 0; i < scope.character.skills.length; i++) {
            if (scope.character.skills[i] === skill) {
            scope.character.skills[i].total = skillAbility + scope.character.skills[i].ranks + scope.character.skills[i].miscellaneousModifier
            return scope.character.skills[i].total
            }
          }
          return skill.total
        }
        scope.skillModifierSetter = function (skill, numToAdd) {
          for (var i = 0; i < scope.character.skills.length; i++) {
            if (scope.character.skills[i] === skill) {
              if (numToAdd > 0) {
                scope.character.skills[i].miscellaneousModifier += numToAdd
                return scope.character.skills[i].miscellaneousModifier
              }
              if (numToAdd < 0) {
                scope.character.skills[i].miscellaneousModifier += numToAdd
                return scope.character.skills[i].miscellaneousModifier
              }
            }
          }
          scope.skillTotalCalc(skill)
        }

        scope.skillClassTogglerFun = function (skill) {
            return skill.classSkill
        }




      }
    };
  });
