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
            var att = character.core.strength - 10
            return att / 2
          } else if (skill.primaryAttribute = "Dex") {
            var att = character.core.dexterity - 10
            return att / 2
          } else if (skill.primaryAttribute = "Con") {
            var att = character.core.constitution - 10
            return att / 2
          } else if (skill.primaryAttribute = "Int") {
            var att = character.core.intelligence - 10
            return att / 2
          } else if (skill.primaryAttribute = "Wis") {
            var att = character.core.wisdom - 10
            return att / 2
          } else if (skill.primaryAttribute = "Cha") {
            var att = character.core.charisma - 10
            return att / 2
          }
        }
      }
    };
  });
