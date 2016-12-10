angular.module('scribe')
.directive('rolls', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/newRolls.html',
  controller: function($scope, $state, characterService) {
    $scope.standardRoll = 4;
    $scope.diceType = function(x) {
        $scope.standardRoll = x;
    }
    // roll togglers
    $scope.roll1 = true;
    $scope.roll2 = false;
    $scope.roll3 = false;
    $scope.d3Picker = false;
    $scope.d4Picker = true;

    $scope.standardRolls = [0, 0, 0, 0, 0, 0];
    $scope.hybridRolls = [0, 0, 0, 0, 0, 0];
    $scope.pointBuyRolls = [0, 0, 0, 0, 0, 0];
    $scope.attributeSummedPlaceholder = 0;
    $scope.tempAttribute = 0;
    var numberPositionPlaceholder = 0;

    $scope.addNums = function(total, currentVal) {
        return total + currentVal;
    };

    $scope.attributeSummed = function(attArrs) {
        $scope.attributeSummedPlaceholder = attArrs.reduce($scope.addNums);
    };
    $scope.setAttributeModifier = function(number) {
        var attribute = $scope.attributes[number];
        var modifier = (attribute - 10) / 2;
            modifier = Math.floor(modifier)

        $scope.attributeModifier[number] = modifier
    };
    $scope.rollStats = function(numberOfDieToRoll) {
        var tempArr = [];
        $scope.standardRolls = [0, 0, 0, 0, 0, 0];
        $scope.attributes = [0, 0, 0, 0, 0, 0];
        $scope.attributeModifier = [-5, -5, -5, -5, -5, -5]
        numberPositionPlaceholder = null;
        $scope.tempAttribute = 0;


        for (let i = 0; i <= 5; i++) {
            for (let j = 0; j <= numberOfDieToRoll - 1; j++) {
                tempArr.push(Math.floor((Math.random() * 6) + 1));
            }
            if (numberOfDieToRoll === 4) {
                tempArr.sort().splice(0, 1);
            };
            var attribVal = tempArr.reduce($scope.addNums);
            $scope.standardRolls[i] = attribVal;
            tempArr = [];
        };
        $scope.attributeSummed($scope.standardRolls)
    }
    $scope.moveStat = function(number) {
        if (!$scope.standardRolls[number]) {
            return
        } else {
            $scope.tempAttribute = $scope.standardRolls[number];
            // $scope.standardRolls[number] = 0;
            numberPositionPlaceholder = number;
        }
    };
    $scope.dropStat = function(number) {
        if ($scope.attributes[number] > 0) {
            for (var i = 0; i < $scope.standardRolls.length; i++) {
                if (!$scope.standardRolls[i]) {
                  $scope.standardRolls[numberPositionPlaceholder] =0
                  $scope.standardRolls[i] = $scope.attributes[number];
                  $scope.attributes[number] = $scope.tempAttribute;
                  $scope.tempAttribute = $scope.standardRolls[i]
                  numberPositionPlaceholder = i;
                  break
                }
            }
            $scope.setAttributeModifier(number);
            return
        } else {
            $scope.attributes[number] = $scope.tempAttribute;
            $scope.tempAttribute = 0;
            $scope.setAttributeModifier(number);
            $scope.standardRolls[numberPositionPlaceholder] = 0;
        }
    };
    $scope.attributesDisplayersetter = 0
    $scope.attributesDisplayerHeaders = ["STRENGTH","DEXTERITY","CONSTITUTION","INTELLIGENCE","WISDOM","CHARISMA"]
    $scope.attributesDisplayerBODY = ["Strength measures muscle and physical power. This ability is important for those who engage in hand-to-hand (or 'melee') combat, such as fighters, monks, paladins, and some rangers. Strength also sets the maximum amount of weight your character can carry. A character with a Strength score of 0 is too weak to move in any way and is unconscious. Some creatures do not possess a Strength score and have no modifier at all to Strength-based skills or checks.","Dexterity measures agility, reflexes, and balance. This ability is the most important one for rogues, but it's also useful for characters who wear light or medium armor or no armor at all. This ability is vital for characters seeking to excel with ranged weapons, such as the bow or sling. A character with a Dexterity score of 0 is incapable of moving and is effectively immobile (but not unconscious).","Constitution represents your character's health and stamina. A Constitution bonus increases a character's hit points, so the ability is important for all classes. Some creatures, such as undead and constructs, do not have a Constitution score. Their modifier is +0 for any Constitution-based checks. A character with a Constitution score of 0 is dead.","Intelligence determines how well your character learns and reasons. This ability is important for wizards because it affects their spellcasting ability in many ways. Creatures of animal-level instinct have Intelligence scores of 1 or 2. Any creature capable of understanding speech has a score of at least 3. A character with an Intelligence score of 0 is comatose. Some creatures do not possess an Intelligence score. Their modifier is +0 for any Intelligence-based skills or checks.","Wisdom describes a character's willpower, common sense, awareness, and intuition. Wisdom is the most important ability for clerics and druids, and it is also important for paladins and rangers. If you want your character to have acute senses, put a high score in Wisdom. Every creature has a Wisdom score. A character with a Wisdom score of 0 is incapable of rational thought and is unconscious.","Charisma measures a character's personality, personal magnetism, ability to lead, and appearance. It is the most important ability for paladins, sorcerers, and bards. It is also important for clerics, since it affects their ability to channel energy. For undead creatures, Charisma is a measure of their unnatural 'lifeforce.' Every creature has a Charisma score. A character with a Charisma score of 0 is not able to exert himself in any way and is unconscious."]
    $scope.attributesDisplayer = function () {

    }

    $scope.setAttributes = function() {
      var charCreQual = characterService.characterCreationObject.qualifications
      var charCre = characterService.characterCreationObject.core

        charCre.strength = $scope.attributes[0]
        charCreQual.push({"type": "attribute", "value": ["str", $scope.attributes[0]]});
        charCre.dexterity = $scope.attributes[1]
        charCreQual.push({"type": "attribute", "value": ["dex", $scope.attributes[1]]});
        charCre.constitution = $scope.attributes[2]
        charCreQual.push({"type": "attribute", "value": ["con", $scope.attributes[2]]});
        charCre.intelligence = $scope.attributes[3]
        charCreQual.push({"type": "attribute", "value": ["int", $scope.attributes[3]]});
        charCre.wisdom = $scope.attributes[4]
        charCreQual.push({"type": "attribute", "value": ["wis", $scope.attributes[4]]});
        charCre.charisma = $scope.attributes[5]
        charCreQual.push({"type": "attribute", "value": ["cha", $scope.attributes[5]]});
        $scope.rollShower= !$scope.rollShower
        $scope.raceShower= !$scope.raceShower
    }
    
    $scope.backToSelect = function(){
      characterService.characterCreationObject.qualifications = []
      var charCre = characterService.characterCreationObject.core
      charCre.strength = null
      charCre.dexterity = null
      charCre.constitution = null
      charCre.intelligence = null
      charCre.wisdom = null
      charCre.charisma = null
      $state.go('home');
    }
  },
  scope:{
    raceShower: "=",
    rollShower: "=",
    attributes: "=",
    attributeModifier:"="
  },
  link: function( scope, element, attributes ) {}
};

});
