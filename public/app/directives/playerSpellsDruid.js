angular.module('scribe')
.directive('druidSpells', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/playerSpellsDruid.html',
  link: function( scope, element, attributes ) {}
};

});
