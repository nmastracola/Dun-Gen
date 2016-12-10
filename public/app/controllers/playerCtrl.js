angular.module('scribe').controller('playerCtrl', function($scope, sService, character){



$scope.test = sService.test;
$scope.character = character[0];
console.log($scope.character);
console.log($scope.character[0]);
// ===================================   MENU TOGGLERS  ===================================

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
$scope.playerSubMenuToggler = [false, false, false, false, false, false, true];

$scope.togglePlayerSpellDirectives = function(x){
  for (var i = 0; i < $scope.playerSubMenuToggler.length; i++) {
    if(i === x){
      $scope.playerSubMenuToggler[i] = true;
    }else{
      $scope.playerSubMenuToggler[i] = false;
    }
  }
}
// ===================================   PLAYER ATTRIBUTES FPO  ===================================

// ===================================   CORE TAB  ===================================
$scope.playerName = "Sir Roland Smackhammer";
$scope.playerAlignment = "Lawful Good";
$scope.playerRace = "HUMAN";
$scope.playerLevel = "1";
$scope.playerClass = ["Paladin"];
$scope.playerClassLevel = [1];
$scope.playerMaxHP = 42;
$scope.playerHP = 37;
//PLAYER AC IS IN AC SECTION OF CORE
$scope.playerXP = 18000;
//PLAYER INITIATIVE IS LOCATED IN AC SECTION OF CORE


// ===================================   CORE DIRECTIVE ===================================


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

//ARMOR CLASS

$scope.playerArmorBonus = 4;
$scope.playerShieldBonus = 1;
//DEX MOD IS $scope.playerAttTmpMod.tmDEX
$scope.playerSizeBonus = 0;
$scope.playerNaturalArmor = 0;
$scope.playerDeflectionBonus = 0;
$scope.playerMiscArmorMod = 0;


$scope.playerAC = ((10) + ($scope.playerArmorBonus * 1 ) + ($scope.playerShieldBonus * 1)
+ ($scope.playerSizeBonus * 1)+($scope.playerNaturalArmor * 1) + ($scope.playerDeflectionBonus * 1)
+ ($scope.playerMiscArmorMod * 1) + ($scope.playerAttTmpMod.tmDEX * 1));


$scope.playerTouchAC = (10 + ($scope.playerAttTmpMod.tmDEX * 1) + ($scope.playerDeflectionBonus * 1) + ($scope.playerSizeBonus * 1) + ($scope.playerMiscArmorMod * 1))


//INITIATIVE

$scope.playerInitiativeMiscMod = 0;
$scope.playerInitiative = ($scope.playerAttTmpMod.tmDEX) + ($scope.playerInitiativeMiscMod);

//SPEED

$scope.playerSpeed = 30;
$scope.playerSpeedWiArmor = 20;

//SAVES

$scope.playerSaves={
  "FORTITUDE": 4,
  "REFLEX": 2,
  "WILL": 2
}

$scope.playerSavesBase={
  "FORTITUDE": 0,
  "REFLEX": 0,
  "WILL": 0
}

$scope.playerSavesAbilityMod={
  "FORTITUDE": 0,
  "REFLEX": 0,
  "WILL": 0
}

$scope.playerSavesMagicMod={
  "FORTITUDE": 0,
  "REFLEX": 0,
  "WILL": 0
}

$scope.playerSavesMiscMod={
  "FORTITUDE": 0,
  "REFLEX": 0,
  "WILL": 0
}

$scope.playerSavesTempMod={
  "FORTITUDE": 0,
  "REFLEX": 0,
  "WILL": 0
}
// ===================================   SKILLS DIRECTIVE ===================================







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

  // ===================================   DICE ROLLER STUFF  ===================================



});
