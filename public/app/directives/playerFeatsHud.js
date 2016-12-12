angular.module('scribe')
  .directive('playerFeatsHud', function() {
    return {
      restrict: 'E',
      templateUrl: './app/directives/playerFeatsHud.html',
      link: function(scope, element, attributes) {
        scope.abilityToShow = 0
        scope.abilityToShowArrs =[{name: "Feats", description: "Some abilities are not tied to your race, class, or skill—things like particularly quick reflexes that allow you to react to danger more swiftly, the ability to craft magic items, the training to deliver powerful strikes with melee weapons, or the knack for deflecting arrows fired at you. These abilities are represented as feats. While some feats are more useful to certain types of characters than others, and many of them have special prerequisites that must be met before they are selected, as a general rule feats represent abilities outside of the normal scope of your character's race and class. Many of them alter or enhance class abilities or soften class restrictions, while others might apply bonuses to your statistics or grant you the ability to take actions otherwise prohibited to you. By selecting feats, you can customize and adapt your character to be uniquely yours."}]

        scope.showFeatsInHud = function () {
          scope.abilityToShowArrs =[]
          scope.abilityToShow = 0
          for (var i = 0; i < scope.feats.length; i++) {
            for (var j = 0; j < scope.playerFeats.length; j++) {
              if (scope.feats[i].name === scope.playerFeats[j].name) {
                scope.abilityToShowArrs.push(scope.feats[i])
              }
            }
          }
          if (scope.abilityToShowArrs.length === 0) {
            scope.abilityToShowArrs.push({name: "Feats", description: "Some abilities are not tied to your race, class, or skill—things like particularly quick reflexes that allow you to react to danger more swiftly, the ability to craft magic items, the training to deliver powerful strikes with melee weapons, or the knack for deflecting arrows fired at you. These abilities are represented as feats. While some feats are more useful to certain types of characters than others, and many of them have special prerequisites that must be met before they are selected, as a general rule feats represent abilities outside of the normal scope of your character's race and class. Many of them alter or enhance class abilities or soften class restrictions, while others might apply bonuses to your statistics or grant you the ability to take actions otherwise prohibited to you. By selecting feats, you can customize and adapt your character to be uniquely yours."})
          }
        }
        scope.showAbilitiesInHud = function () {
          scope.abilityToShowArrs =[]
          scope.abilityToShow = 0
          if (scope.abilityToShowArrs.length === 0) {
            scope.abilityToShowArrs.push({name: "Feats", description: "Some abilities are not tied to your race, class, or skill—things like particularly quick reflexes that allow you to react to danger more swiftly, the ability to craft magic items, the training to deliver powerful strikes with melee weapons, or the knack for deflecting arrows fired at you. These abilities are represented as feats. While some feats are more useful to certain types of characters than others, and many of them have special prerequisites that must be met before they are selected, as a general rule feats represent abilities outside of the normal scope of your character's race and class. Many of them alter or enhance class abilities or soften class restrictions, while others might apply bonuses to your statistics or grant you the ability to take actions otherwise prohibited to you. By selecting feats, you can customize and adapt your character to be uniquely yours."})
          }
        }

        scope.showNextFeat = function(numToAdd) {
          if (numToAdd > 0 && scope.abilityToShow < scope.playerFeats.length) {
            scope.abilityToShow++
          } else if (numToAdd < 0 && scope.abilityToShow > 0) {
            scope.abilityToShow--
          }
        }
      }
    };

  });
