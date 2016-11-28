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


});
