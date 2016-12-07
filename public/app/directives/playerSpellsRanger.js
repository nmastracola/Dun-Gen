angular.module('scribe')
.directive('rangerSpells', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/playerSpellsRanger.html',
  link: function( scope, element, attributes ) {}
};

});
