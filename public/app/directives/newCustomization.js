angular.module('scribe')
.directive('customization', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/newCustomization.html',
  link: function( scope, element, attributes ) {}
};

});
