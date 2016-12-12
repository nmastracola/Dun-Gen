angular.module('scribe')
  .directive('playerFeats', function() {
    return {
      restrict: 'E',
      templateUrl: './app/directives/playerFeats.html',
      link: function(scope, element, attributes) {
        scope.playerFeats = []

        scope.addPlayerFeats = function() {
            for (var i = 0; i < scope.feats.length; i++) {
              for (var j = 0; j < scope.character.feats.length; j++) {
                if (scope.character.feats[j].name === scope.feats[i].name) {
                  scope.playerFeats.push(scope.feats[i])
                }
              }
            }
          }
          // LEAVE THIS***********
        scope.addPlayerFeats()
          // LEAVE THIS***********


      }
    };

  });
