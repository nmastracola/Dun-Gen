angular.module('scribe')
.directive('spells', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/newSpells.html',
  link: function( scope, element, attributes ) {}
};

});
