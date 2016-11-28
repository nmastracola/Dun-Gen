angular.module('scribe')
.directive('rolls', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/newRolls.html',
  link: function( scope, element, attributes ) {}
};

});
