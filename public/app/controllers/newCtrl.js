angular.module('scribe').controller('newCtrl', function($scope, sService, characterService, races, feats, classes) {

    $scope.test = sService.test;
    $scope.races = races;
    $scope.feats = feats;
    $scope.classes = classes;
    console.log(feats);



    // ==============================   VIEW TOGGLERS  ==========================
    //section hiders
    $scope.rollShower = true;
    $scope.raceShower = false;
    $scope.classShower = false;
    $scope.abilitiesShower = false;
    $scope.spellsShower = false;
    $scope.classHasSpellsChecker = function() {
        console.log(characterService.characterCreationObject.static);

        var pickedClass = characterService.characterCreationObject.static.classes[0].class
        console.log(pickedClass);
        for (var i = 0; i < classes.length; i++) {
            if (classes[i].class === pickedClass) {
                if (!classes[i].hasSpells) {
                    $scope.spellsShower = !$scope.spellsShower;
                    alert("Your class does not have spells, I am moving you on to customization.")
                    $scope.customizationShower = !$scope.customizationShower;
                    console.log(classes[i]);

                }
            }

        }
    }
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

    $scope.featToggler = false;



    // ==============================   CONTENT PICKERS  ==========================
    //rolls
    $scope.standardRoll = 4;
    $scope.diceType = function(x) {
        $scope.standardRoll = x;
    }




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
                  console.log(i);
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
