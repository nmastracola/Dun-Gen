angular.module('scribe')
.directive('playerEquipment', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/playerEquipment.html',
  link: function( scope, element, attributes ) {
    
    ///togglers
    
    
    scope.armorStore = false;
    scope.generalStore = false;
    
    //store functions
    
    
    scope.openArmorStore = function(){
      scope.armorStore = !scope.armorStore;

    } 
    scope.openGeneralStore = function(){
      scope.generalStore = !scope.generalStore;

    } 
    
    
  },
  controller: function($scope, characterService) {



    $scope.charEquipment = characterService.getCharObject().then(function(response){
      $scope.equipment = response
    })
    //most of the code is written for pulling char equipment to the front
  }
};

});
