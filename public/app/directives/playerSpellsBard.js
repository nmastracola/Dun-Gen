angular.module('scribe')
.directive('bardSpells', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/playerSpellsBard.html',
  link: function( scope, element, attributes ) {}
};

});
