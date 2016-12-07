angular.module('scribe')
.directive('paladinSpells', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/playerSpellsPaladin.html',
  link: function( scope, element, attributes ) {}
};

});
