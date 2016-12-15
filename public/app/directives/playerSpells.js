angular.module('scribe').directive('playerSpells', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/playerSpells.html',
  link: function( scope, element, attributes ) {
    scope.hideSpells = true;
    scope.hasSpells = function() {
      for (var i = 0; i < scope.classes.length; i++) {
        for (var i = 0; i < scope.character.static.classes.length; i++) {
          if (scope.classes[i].class === scope.character.static.classes[i].class) {
            if (scope.classes[i].hasSpells) {
              scope.hideSpells = false;
            }
          }
        }
      }
    }
  }
};

});
