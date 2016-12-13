angular.module('scribe').controller('playerCtrl', function($scope, sService, character){



$scope.test = sService.test;
$scope.character = character[0];
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

$scope.calcCurrentLevel = function(){
  $scope.currentTotalLevel = 0
  for (i = 0; i < $scope.character.static.classes.length; i++){
    $scope.currentTotalLevel += $scope.character.static.classes[i].level * 1
  }
}

$scope.calcCurrentLevel();

$scope.aggregateClasses = function(){
  $scope.classHolderArr = []
  $scope.classLevelHolderArr = []
  for (i = 0; i < $scope.character.static.classes.length; i++){
    $scope.classHolderArr.push($scope.character.static.classes[i].class)
    $scope.classLevelHolderArr.push($scope.character.static.classes[i].level)
  }
}

$scope.aggregateClasses();

$scope.playerName = $scope.character.static.characterName;
$scope.playerAlignment = $scope.character.static.alignment;
$scope.playerRace = $scope.character.static.race;
$scope.playerLevel = $scope.currentTotalLevel;
$scope.playerClass = $scope.classHolderArr;
$scope.playerClassLevel = $scope.classLevelHolderArr;
$scope.playerMaxHP = $scope.character.core.maxHitPoints;
$scope.playerHP = $scope.character.core.currentHitPoints;
//PLAYER AC IS IN AC SECTION OF CORE
$scope.playerXP = $scope.character.static.experience;
//PLAYER INITIATIVE IS LOCATED IN AC SECTION OF CORE




// ===================================   CORE DIRECTIVE ===================================


//attributes
$scope.playerAtt={
  'STR': $scope.character.core.strength,
  'DEX': $scope.character.core.dexterity,
  'CON': $scope.character.core.constitution,
  'WIS': $scope.character.core.wisdom,
  'INT': $scope.character.core.intelligence,
  'CHA': $scope.character.core.charisma
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
  'tmINT': Math.floor((($scope.playerAtt.INT + $scope.playerAttTmpAdj.taINT)-10)/2),
  'tmWIS': Math.floor((($scope.playerAtt.WIS + $scope.playerAttTmpAdj.taWIS)-10)/2),
  'tmCHA': Math.floor((($scope.playerAtt.CHA + $scope.playerAttTmpAdj.taCHA)-10)/2)
};

//ARMOR CLASS

$scope.playerArmorBonus = 99;
$scope.playerShieldBonus = 99;
//DEX MOD IS $scope.playerAttTmpMod.tmDEX
$scope.playerSizeBonus = 99;
$scope.playerNaturalArmor = 99;
$scope.playerDeflectionBonus = 99;
$scope.playerMiscArmorMod = 99;

$scope.playerACCalc = function(){
  $scope.playerAC = ((10) + ($scope.playerArmorBonus * 1 ) + ($scope.playerShieldBonus * 1) 
  + ($scope.playerSizeBonus * 1) + ($scope.playerNaturalArmor * 1) + ($scope.playerDeflectionBonus * 1) + ($scope.playerMiscArmorMod * 1) + ($scope.playerAttTmpMod.tmDEX * 1));  
  
  return $scope.playerAC
}

$scope.playerACCalc();

$scope.playerTouchAC = (10 + ($scope.playerAttTmpMod.tmDEX * 1) + ($scope.playerDeflectionBonus * 1) + ($scope.playerSizeBonus * 1) + ($scope.playerMiscArmorMod * 1))


//INITIATIVE

$scope.playerInitiativeMiscMod = 0;

$scope.playerInitiativeCalc = function(){
  $scope.playerInitiative = ($scope.playerAttTmpMod.tmDEX) + ($scope.playerInitiativeMiscMod);
  
  return $scope.playerInitiative
}

$scope.playerInitiativeCalc();

//SPEED

$scope.playerSpeed = $scope.character.core.speeds.baseSpeed;

$scope.playerSpeedWiArmor = 99;

//=======================  SAVES  =======================

$scope.playerSavesBase={
  "FORTITUDE": $scope.character.core.fortitudeBaseSave  || 0,
  "REFLEX": $scope.character.reflexBaseSave  || 0,
  "WILL": $scope.character.core.willBaseSave  || 0
}

$scope.playerSavesAbilityMod={
  "FORTITUDE": $scope.playerAttTmpMod.tmCON  || 0,
  "REFLEX": $scope.playerAttTmpMod.tmDEX || 0,
  "WILL": $scope.playerAttTmpMod.tmWIS || 0
}

$scope.playerFortAbilityModCalc = function(){
  $scope.playerSavesAbilityMod.FORTITUDE = $scope.playerAttTmpMod.tmCON * 1

  return $scope.playerSavesAbilityMod.FORTITUDE
}

$scope.playerRefAbilityModCalc = function(){
  $scope.playerSavesAbilityMod.REFLEX = $scope.playerAttTmpMod.tmDEX * 1

  return $scope.playerSavesAbilityMod.REFLEX
}

$scope.playerWillAbilityModCalc = function(){
  $scope.playerSavesAbilityMod.WILL = $scope.playerAttTmpMod.tmWIS * 1

  return $scope.playerSavesAbilityMod.WILL
}

$scope.playerFortAbilityModCalc();
$scope.playerRefAbilityModCalc();
$scope.playerWillAbilityModCalc();

$scope.playerSavesMagicMod={
  "FORTITUDE": $scope.character.core.fortitudeMagicModifier || 0,
  "REFLEX": $scope.character.core.reflexMagicModifier || 0,
  "WILL": $scope.character.core.willMagicModifier || 0
}

$scope.playerSavesMiscMod={
  "FORTITUDE": $scope.character.core.fortitudeMiscellaneousModifier || 0,
  "REFLEX": $scope.character.core.reflexMiscellaneousModifier || 0,
  "WILL": $scope.character.core.willMiscellaneousModifier || 0
}

$scope.playerSavesTempMod={
  "FORTITUDE": 0,
  "REFLEX": 0,
  "WILL": 0
}

$scope.playerSaves={
  "FORTITUDE": ($scope.playerSavesBase.FORTITUDE * 1) + ($scope.playerSavesAbilityMod.FORTITUDE * 1) + ($scope.playerSavesMagicMod.FORTITUDE * 1) + ($scope.playerSavesMiscMod.FORTITUDE * 1) + ($scope.playerSavesTempMod.FORTITUDE * 1),
  "REFLEX": ($scope.playerSavesBase.REFLEX * 1) + ($scope.playerSavesAbilityMod.REFLEX * 1) + ($scope.playerSavesMagicMod.REFLEX * 1) + ($scope.playerSavesMiscMod.REFLEX * 1) + ($scope.playerSavesTempMod.REFLEX * 1),
  "WILL": ($scope.playerSavesBase.WILL * 1) + ($scope.playerSavesAbilityMod.WILL * 1) + ($scope.playerSavesMagicMod.WILL * 1) + ($scope.playerSavesMiscMod.WILL * 1) + ($scope.playerSavesTempMod.WILL * 1)
}

$scope.playerFortSaveCalc = function(){
  $scope.playerSaves.FORTITUDE = ($scope.playerSavesBase.FORTITUDE * 1) + ($scope.playerSavesAbilityMod.FORTITUDE * 1) + ($scope.playerSavesMagicMod.FORTITUDE * 1) + ($scope.playerSavesMiscMod.FORTITUDE * 1) + ($scope.playerSavesTempMod.FORTITUDE * 1)

  return $scope.playerSaves.FORTITUDE
}

$scope.playerRefSaveCalc = function(){
  $scope.playerSaves.REFLEX = ($scope.playerSavesBase.REFLEX * 1) + ($scope.playerSavesAbilityMod.REFLEX * 1) + ($scope.playerSavesMagicMod.REFLEX * 1) + ($scope.playerSavesMiscMod.REFLEX * 1) + ($scope.playerSavesTempMod.REFLEX * 1)

  return $scope.playerSaves.REFLEX
}

$scope.playerWillSaveCalc = function(){
  $scope.playerSaves.WILL = ($scope.playerSavesBase.WILL * 1) + ($scope.playerSavesAbilityMod.WILL * 1) + ($scope.playerSavesMagicMod.WILL * 1) + ($scope.playerSavesMiscMod.WILL * 1) + ($scope.playerSavesTempMod.WILL * 1)

  return $scope.playerSaves.WILL
}

$scope.playerFortSaveCalc();
$scope.playerRefSaveCalc();
$scope.playerWillSaveCalc();

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
