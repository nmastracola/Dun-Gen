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
