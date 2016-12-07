angular.module('scribe')
.directive('playerEquipment', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/playerEquipment.html',
  link: function( scope, element, attributes ) {},
  controller: function($scope, characterService) {

    $scope.charEquipment = characterService.getCharObject().then(function(response){
      $scope.equipment = response
      console.log(response);
    })
    //most of the code is written for pulling char equipment to the front
  }
};

});
