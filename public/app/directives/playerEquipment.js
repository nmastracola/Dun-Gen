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
    scope.takeArmor = function (item) {
      scope.character.equipment[0].armorClassItems.push(item)
    }
    scope.purchaseArmor = function (item) {
      scope.character.equipment[0].armorClassItems.push(item)
      scope.character.equipment[0].wealth -= item.Cost
      scope.moneyConverter()
    }
    scope.takeGear = function (item) {
      scope.character.equipment[0].gear.push(item)
    }
    scope.purchaseGear = function (item) {
      scope.character.equipment[0].gear.push(item)
      scope.character.equipment[0].wealth -= item.Cost
      scope.moneyConverter()
    }
  }
};

});
