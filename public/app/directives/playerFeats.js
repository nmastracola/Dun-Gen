angular.module('scribe')
.directive('playerFeats', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/playerFeats.html',
  link: function( scope, element, attributes ) {}
};

});
