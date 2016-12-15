angular.module('scribe')
.directive('playerCombat', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/playerCombat.html',
  link: function( scope, element, attributes ) {

    scope.takeWeapon = function (item) {
      scope.character.equipment[0].weapons.push(item)
    }
    scope.purchaseWeapon = function (item) {
      scope.character.equipment[0].weapons.push(item)
      scope.character.equipment[0].wealth -= item.cost
      scope.moneyConverter()
    }

    ///togglers

    scope.pmsStore = false;
    scope.weaponDescription = false;

    //store functions

    scope.openPmsStore = function(){
      scope.pmsStore = !scope.pmsStore;

    }


  // end link
   }
};

});
