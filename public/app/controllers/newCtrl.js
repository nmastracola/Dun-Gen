angular.module('scribe').controller('newCtrl', function($scope, sService){

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
$scope.attributeSummedPlaceholder = 0;
$scope.tempAttribute = 0;
$scope.attributes = [0,0,0,0,0,0];
$scope.addNums = function(total, currentVal){
  return total + currentVal;
};

$scope.attributeSummed = function (attArrs) {
  $scope.attributeSummedPlaceholder = attArrs.reduce($scope.addNums);
};

$scope.rollStats = function (numberOfDieToRoll) {
  var tempArr = [];
  $scope.standardRolls = [0,0,0,0,0,0];
  $scope.attributes = [0,0,0,0,0,0];
      for(let i = 0; i <= 5; i++){
      for(let j = 0; j <= numberOfDieToRoll-1; j++){
        tempArr.push(Math.floor((Math.random() * 6) + 0));
      }
      if (numberOfDieToRoll === 4) {
        tempArr.sort().splice(1,0);
      };
      var attribVal = tempArr.reduce($scope.addNums);
      $scope.standardRolls[i] = attribVal;
      tempArr = [];
  };
  $scope.attributeSummed($scope.standardRolls)
}
  $scope.moveStat = function (number) {
    $scope.tempAttribute = $scope.standardRolls[number];
    $scope.standardRolls[number] = 0;
  };
  $scope.dropStat = function (number) {
    $scope.attributes[number] = $scope.tempAttribute;
  };

});
