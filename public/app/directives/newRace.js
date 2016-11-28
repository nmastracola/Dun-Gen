angular.module('scribe')
.directive('race', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/newRace.html',
  link: function( scope, element, attributes ) {}
};

});
