angular.module('scribe')
.directive('clericSpells', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/playerSpellsCleric.html',
  link: function( scope, element, attributes ) {}
};

});
