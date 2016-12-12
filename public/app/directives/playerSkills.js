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
            var att = scope.character.core.strength - 10
            return Math.floor(att / 2)
          } else if (skill.primaryAttribute = "Dex") {
            var att = scope.character.core.dexterity - 10
            return Math.floor(att / 2)
          } else if (skill.primaryAttribute = "Con") {
            var att = scope.character.core.constitution - 10
            return Math.floor(att / 2)
          } else if (skill.primaryAttribute = "Int") {
            var att = scope.character.core.intelligence - 10
            return Math.floor(att / 2)
          } else if (skill.primaryAttribute = "Wis") {
            var att = scope.character.core.wisdom - 10
            return Math.floor(att / 2)
          } else if (skill.primaryAttribute = "Cha") {
            var att = scope.character.core.charisma - 10
            return Math.floor(att / 2)
          }
          console.log(scope.character);
        }

        scope.ranks = 0;
        scope.skillModifierSetter = function (skill, numToAdd) {
          for (var i = 0; i < scope.character.skills.length; i++) {
            if (scope.character.skills[i] === skill) {
              if (numToAdd !== 0) {
                if (numToAdd > 0) {
                  scope.character.skills[i].ranks += numToAdd
                  return scope.character.skills[i].ranks
                }
                if (numToAdd < 0) {
                  scope.character.skills[i].ranks += numToAdd
                  return scope.character.skills[i].ranks
                }
              }
            }
          }
        }

        scope.skillClassTogglerFun = function (skill) {
          if (skill) {
            return skill.classSkill
          }
        }




      }
    };
  });
