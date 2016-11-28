angular.module('scribe')
.directive('class', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/newClass.html',
  link: function( scope, element, attributes ) {}
};

});
