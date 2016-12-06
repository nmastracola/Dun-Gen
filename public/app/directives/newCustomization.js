angular.module('scribe')
.directive('customization', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/newCustomization.html',
  controller: function($scope, characterService) {
    $scope.customizationFields() {

    }
  },
  scope: {

  },
  link: function( scope, element, attributes ) {}
};

});
