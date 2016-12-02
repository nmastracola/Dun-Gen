angular.module('scribe').controller('playerCtrl', function($scope, sService){

$scope.test = sService.test;
// ===================================   TOGGLERS  ===================================

$scope.playerMenuToggler = [true, false, false, false, false, false, false, false, false]

$scope.togglePlayerDirectives = function(x){
  for (var i = 0; i < $scope.playerMenuToggler.length; i++) {
    if(i === x){
      $scope.playerMenuToggler[i] = true;
    }else{
      $scope.playerMenuToggler[i] = false;
    }
  }
}

// ===================================   PLAYER ATTRIBUTES FPO  ===================================

// CORE TAB
$scope.playerName = "Sir Roland Smackhammer";
$scope.playerAlignment = "Lawful Good";
$scope.playerRace = "HUMAN";
$scope.playerLevel = "1";
$scope.playerClass = ["Paladin"];
$scope.playerClassLevel = [1];
$scope.playerMaxHP = 42;
$scope.playerHP = 37;
$scope.playerAC = 18;
$scope.playerXP = 18000;
$scope.playerINIT = 3;
// CORE DIRECTIVE

//attributes
$scope.playerAtt={
  'STR': 16,
  'DEX': 15,
  'CON': 14,
  'WIS': 13,
  'INT': 12,
  'CHA': 11
};

$scope.playerAttMod={
  'mSTR': Math.floor((($scope.playerAtt.STR)-10)/2),
  'mDEX': Math.floor((($scope.playerAtt.DEX)-10)/2),
  'mCON': Math.floor((($scope.playerAtt.CON)-10)/2),
  'mWIS': Math.floor((($scope.playerAtt.WIS)-10)/2),
  'mINT': Math.floor((($scope.playerAtt.INT)-10)/2),
  'mCHA': Math.floor((($scope.playerAtt.CHA)-10)/2)
};

$scope.playerAttTmpAdj={
  'taSTR': 0,
  'taDEX': 0,
  'taCON': 0,
  'taWIS': 0,
  'taINT': 0,
  'taCHA': 0
};

$scope.playerAttTmpMod={
  'tmSTR': Math.floor((($scope.playerAtt.STR + $scope.playerAttTmpAdj.taSTR)-10)/2),
  'tmDEX': Math.floor((($scope.playerAtt.DEX + $scope.playerAttTmpAdj.taDEX)-10)/2),
  'tmCON': Math.floor((($scope.playerAtt.CON + $scope.playerAttTmpAdj.taCON)-10)/2),
  'tmWIS': Math.floor((($scope.playerAtt.WIS + $scope.playerAttTmpAdj.taWIS)-10)/2),
  'tmINT': Math.floor((($scope.playerAtt.INT + $scope.playerAttTmpAdj.taINT)-10)/2),
  'tmCHA': Math.floor((($scope.playerAtt.CHA + $scope.playerAttTmpAdj.taCHA)-10)/2)
};




// ===================================   PLAYER CORE CONTENT LOGIC   ===================================


// ===========   HIT POINTS  =============

$scope.playerChangeHP = function(x){
  if (($scope.playerHP < $scope.playerMaxHP) && ($scope.playerHP > (-$scope.playerAtt.CON))){
    $scope.playerHP += x;
  }else if($scope.playerHP == (-$scope.playerAtt.CON) && x === 1){
    $scope.playerHP += x;
  }else if($scope.playerHP == $scope.playerMaxHP && x === -1){
    $scope.playerHP += x;
  }
}

// ===========   STR MODIFIER =============

$scope.playerChangeATT = function(x, att){
  let attAdder = "ta"+att;
  let modAdder = "tm"+att;
  $scope.playerAttTmpAdj[attAdder] += x;
  $scope.playerAttTmpMod[modAdder] = Math.floor((($scope.playerAtt[att] + $scope.playerAttTmpAdj[attAdder])-10)/2);
  }
  



});
