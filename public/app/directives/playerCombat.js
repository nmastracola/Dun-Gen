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

    scope.rollDam = function (weapon) {
      var rollToHit = Math.floor((Math.random() * weapon.damage.die[0]) + weapon.damage.number[0]);
      return rollToHit;
    }

    scope.rollWep = function (weapon) {
      var rollToHit = Math.floor((Math.random() * 20) + 1);
      return rollToHit;
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
