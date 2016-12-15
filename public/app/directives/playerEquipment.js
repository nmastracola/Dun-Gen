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
    scope.equippedArmors=[]
    scope.equippedShields=[]
    scope.equipArmor = function (armor) {
      for (var i = 0; i < scope.equippedArmors.length; i++) {
        if (scope.equippedArmors[i] === armor) {
          scope.equippedArmors.splice(i,1)
          console.log(scope.equippedArmors);
          scope.acSetter()
          return
        }
      }
      if (armor.type !== "Shield") {
        scope.equippedArmors.push(armor)
        console.log(scope.equippedArmors);
        scope.acSetter()
        return
      }
      for (var i = 0; i < scope.equippedShields.length; i++) {
        if (scope.equippedShields[i] === armor) {
          scope.equippedShields.splice(i,1)
          console.log(scope.equippedShields);
          scope.acSetter()
          return
        }
      }
      if (armor.type === "Shield") {
        scope.equippedShields.push(armor)
        console.log(scope.equippedShields);
        scope.acSetter()
        return
      }


    }

    scope.acSetter = function () {
      scope.armorBonusSetter()
      scope.shieldBonusSetter()
    }

    scope.armorBonusSetter=function () {
      if (scope.equippedArmors[0]) {
        scope.playerArmorBonus = scope.equippedArmors[0].ArmorShieldBonus
      }
      else {
        scope.playerArmorBonus = 0
      }
    }
    scope.armorBonusSetter()

    scope.shieldBonusSetter=function () {
      if (scope.equippedShields[0]) {
        scope.playerShieldBonus = scope.equippedShields[0].ArmorShieldBonus
      }
      else {
        scope.playerShieldBonus = 0
      }
    }
    scope.shieldBonusSetter()



  }
};

});
