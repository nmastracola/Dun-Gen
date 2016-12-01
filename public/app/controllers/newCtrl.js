angular.module('scribe').controller('newCtrl', function($scope, sService, characterService){

$scope.test = sService.test;


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

//race togglers
$scope.raceToggler = [false, false, false, true, false, false, false];
$scope.raceSwitcher = function(x){
  for (var i = 0; i < $scope.raceToggler.length; i++) {
    if(i == x){
      $scope.raceToggler[i] = true;
    }else{
      $scope.raceToggler[i] = false;
    }
  }
};

//gender togglers
$scope.male = false;
$scope.female = false;

//class togglers
$scope.classToggler = [false, false, false, false, false, true, false, false, false, false, false];



$scope.classSwitcher = function(x){
  for (var i = 0; i < $scope.classToggler.length; i++) {
    if(i == x){
      $scope.classToggler[i] = true;
    }else{
      $scope.classToggler[i] = false;
    }
  }
};

// ==============================   CONTENT PICKERS  ==========================
//rolls
$scope.standardRoll = 4;

$scope.diceType = function(x){
  $scope.standardRoll = x;
}


//RACE
$scope.raceList = ['DWARF','ELF','GNOME','HALF-ELF','HALF-ORC','HALFLING','HUMAN']

$scope.chosenRace= "HALF-ELF";

$scope.classPicker = function(x){
$scope.chosenRace = $scope.raceList[x];
  };


//CLASS
$scope.classList = ['BARBARIAN','BARD','CLERIC','DRUID','FIGHTER','MONK','PALADIN','RANGER','ROGUE','SORCEROR','WIZARD']

$scope.chosenClass= "MONK";

$scope.classPicker = function(x){
$scope.chosenClass = $scope.classList[x];
  };


// ==============================   CHARSCTER GENERATOR LOGIC  ==========================
$scope.standardRolls = [0,0,0,0,0,0];
$scope.hybridRolls = [0,0,0,0,0,0];
$scope.pointBuyRolls = [0,0,0,0,0,0];
$scope.attributeModifier=[-5,-5,-5,-5,-5,-5]
$scope.attributeSummedPlaceholder = 0;
$scope.tempAttribute = 0;
$scope.attributes = [0,0,0,0,0,0];
var numberPositionPlaceholder = 0;

$scope.addNums = function(total, currentVal){
  return total + currentVal;
};

$scope.attributeSummed = function (attArrs) {
  $scope.attributeSummedPlaceholder = attArrs.reduce($scope.addNums);
};
$scope.setAttributeModifier = function (number) {
  console.log(number, "number");
  var attribute = $scope.attributes[number];
  console.log(attribute, "attr");
  var modifier = (attribute - 10) / 2;
  console.log(modifier, "mod");
  if (modifier >= 0) {
    modifier = Math.floor(modifier)
  } else {
    modifier = Math.ceil(modifier)
  }
  $scope.attributeModifier[number] = modifier
};
$scope.rollStats = function (numberOfDieToRoll) {
  var tempArr = [];
  $scope.standardRolls = [0,0,0,0,0,0];
  $scope.attributes = [0,0,0,0,0,0];
  $scope.attributeModifier=[-5,-5,-5,-5,-5,-5]

      for(let i = 0; i <= 5; i++){
      for(let j = 0; j <= numberOfDieToRoll-1; j++){
        tempArr.push(Math.floor((Math.random() * 6) + 1));
      }
      if (numberOfDieToRoll === 4) {
        tempArr.sort().splice(0,1);
      };
      var attribVal = tempArr.reduce($scope.addNums);
      $scope.standardRolls[i] = attribVal;
      tempArr = [];
  };
  $scope.attributeSummed($scope.standardRolls)
}
  $scope.moveStat = function (number) {
    if (!$scope.standardRolls[number]) {
      return
    }
    $scope.tempAttribute = $scope.standardRolls[number];
    // $scope.standardRolls[number] = 0;
    numberPositionPlaceholder = number;
  };
  $scope.dropStat = function (number) {
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
    $scope.setAttributes(){
      var charCre = characterService.characterCreationObject.core
      charCre.strength = $scope.attributes[0]
      charCre.dexterity = $scope.attributes[1]
      charCre.constitution = $scope.attributes[2]
      charCre.intelligence = $scope.attributes[3]
      charCre.wisdom = $scope.attributes[4]
      charCre.charisma = $scope.attributes[5]
      charCre.strengthModifier = $scope.attribureModifier[0]
      charCre.dexterityModifier = $scope.attribureModifier[1]
      charCre.constitutionModifier = $scope.attribureModifier[2]
      charCre.intelligenceModifier = $scope.attribureModifier[3]
      charCre.wisdomModifier = $scope.attribureModifier[4]
      charCre.charismaModifier = $scope.attribureModifier[5]
    }


});
