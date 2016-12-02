angular.module('scribe')
.directive('playerSpells', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/playerSpells.html',
  link: function( scope, element, attributes ) {}
};

});
