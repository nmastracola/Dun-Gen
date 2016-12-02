angular.module('scribe').controller('newCtrl', function($scope, sService, characterService, races, feats) {

    $scope.test = sService.test;
    $scope.races = races;
    $scope.feats = feats;



    // ==============================   VIEW TOGGLERS  ==========================
    //section hiders
    $scope.rollShower = true;
    $scope.raceShower = false;
    $scope.classShower = false;
    $scope.abilitiesShower = false;
    $scope.spellsShower = false;
    $scope.customizationShower = false;

    // confirmation button togglers
    $scope.rollBtn = false;
    $scope.raceBtn = false;
    $scope.classBtn = false;
    $scope.abilitiesBtn = false;
    $scope.customizationBtn = false;
    $scope.spellsBtn = false;
    $scope.finalSubmitBtn = false;

    // roll togglers
    $scope.roll1 = true;
    $scope.roll2 = false;
    $scope.roll3 = false;

    $scope.d3Picker = false;
    $scope.d4Picker = true;

    //class togglers
    $scope.classToggler = [false, false, false, false, false, true, false, false, false, false, false];

    $scope.classSwitcher = function(x) {
        for (var i = 0; i < $scope.classToggler.length; i++) {
            if (i == x) {
                $scope.classToggler[i] = true;
            } else {
                $scope.classToggler[i] = false;
            }
        }
    };

    // ==============================   CONTENT PICKERS  ==========================
    //rolls
    $scope.standardRoll = 4;
    scope.chosenRace = "Half-Elves";
    $scope.diceType = function(x) {
        $scope.standardRoll = x;
    }

    //CLASS
    $scope.classList = ['BARBARIAN', 'BARD', 'CLERIC', 'DRUID', 'FIGHTER', 'MONK', 'PALADIN', 'RANGER', 'ROGUE', 'SORCEROR', 'WIZARD']

    $scope.chosenClass = "MONK";

    $scope.classPicker = function(x) {
        $scope.chosenClass = $scope.classList[x];
    };


    // ==============================   ROLL LOGIC  ==========================
    $scope.standardRolls = [0, 0, 0, 0, 0, 0];
    $scope.hybridRolls = [0, 0, 0, 0, 0, 0];
    $scope.pointBuyRolls = [0, 0, 0, 0, 0, 0];
    $scope.attributeModifier = [-5, -5, -5, -5, -5, -5]
    $scope.attributeSummedPlaceholder = 0;
    $scope.tempAttribute = 0;
    $scope.attributes = [0, 0, 0, 0, 0, 0];
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
        if (modifier >= 0) {
            modifier = Math.floor(modifier)
        } else {
            modifier = Math.ceil(modifier)
        }
        $scope.attributeModifier[number] = modifier
    };
    $scope.rollStats = function(numberOfDieToRoll) {
        var tempArr = [];
        $scope.standardRolls = [0, 0, 0, 0, 0, 0];
        $scope.attributes = [0, 0, 0, 0, 0, 0];
        $scope.attributeModifier = [-5, -5, -5, -5, -5, -5]

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
        }
        $scope.tempAttribute = $scope.standardRolls[number];
        // $scope.standardRolls[number] = 0;
        numberPositionPlaceholder = number;
    };
    $scope.dropStat = function(number) {
        if ($scope.attributes[number]) {
            $scope.tempAttribute = $scope.attributes[number];
            for (var i = 0; i < $scope.standardRolls.length; i++) {
                if (!$scope.standardRolls[i]) {
                    $scope.standardRolls[i] = $scope.tempAttribute;
                    break
                }
            }
            $scope.attributes[number] = 0;
            $scope.setAttributeModifier(number);

            return
        }
        $scope.attributes[number] = $scope.tempAttribute;
        $scope.tempAttribute = 0;
        $scope.setAttributeModifier(number);
        $scope.standardRolls[numberPositionPlaceholder] = 0;
    };
    $scope.setAttributes= function() {
        var charCre = characterService.characterCreationObject.core
        charCre.strength = $scope.attributes[0]
        charCre.dexterity = $scope.attributes[1]
        charCre.constitution = $scope.attributes[2]
        charCre.intelligence = $scope.attributes[3]
        charCre.wisdom = $scope.attributes[4]
        charCre.charisma = $scope.attributes[5]
        // console.log(charCre);
    }


});
