angular.module('scribe').controller('playerCtrl', function($scope, characterService, sService, character, feats, skills, weapons, gear, armor, classes, races){


$scope.gear = gear
$scope.races = races
$scope.armor = armor
$scope.classes = classes
$scope.weapons = weapons
$scope.skills = skills
$scope.feats = feats
$scope.test = sService.test;
$scope.character = character[0];
$scope.savedCharacter = $scope.character;
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
$scope.playerBaseMaxHP = $scope.playerMaxHP;
$scope.playerBaseHP = $scope.character.core.currentHitPoints;
$scope.playerHP = $scope.playerBaseHP;
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
  'taSTR': $scope.character.core.tempStrength || 0,
  'taDEX': $scope.character.core.tempDexterity || 0,
  'taCON': $scope.character.core.tempConstitution || 0,
  'taWIS': $scope.character.core.tempWisdom || 0,
  'taINT': $scope.character.core.tempIntelligence || 0,
  'taCHA': $scope.character.core.tempCharisma || 0
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
$scope.setPlayerNaturalArmor = function () {
  if (this.character.core.naturalArmorClass) {
    $scope.playerNaturalArmor = this.character.core.naturalArmorClass
  }else {
    $scope.playerNaturalArmor = 0
  }
  this.character.core.naturalArmorClass = $scope.playerNaturalArmor
  return $scope.playerNaturalArmor
}
$scope.setPlayerNaturalArmor()

$scope.setPlayerSizeBonus = function () {
  for (var i = 0; i < this.races.length; i++) {
    if (this.character.static.race === this.races[i] && this.races[i].size === "Small") {
      $scope.playerSizeBonus = 1
      return $scope.playerSizeBonus
    }
  }
  $scope.playerSizeBonus = 0
  return $scope.playerSizeBonus
}
$scope.setPlayerSizeBonus()


$scope.playerArmorBonus = 0;
$scope.playerShieldBonus = 0;
//DEX MOD IS $scope.playerAttTmpMod.tmDEX
$scope.playerSizeBonus = 99;
$scope.playerNaturalArmor = 99;
$scope.playerDeflectionBonus = 0;
$scope.playerMiscArmorMod = $scope.character.core.miscArmorClass || 0;

$scope.calcMaxHP = function(){
  $scope.playerMaxHP = $scope.playerBaseMaxHP + ($scope.playerAttTmpMod.tmCON - $scope.playerAttMod.mCON)
  return $scope.playerMaxHP
}

$scope.calcMaxHP();

$scope.playerACCalc = function(){
  $scope.playerAC = ((10) + ($scope.playerArmorBonus * 1 ) + ($scope.playerShieldBonus * 1)
  + ($scope.playerSizeBonus * 1) + ($scope.playerNaturalArmor * 1) + ($scope.playerDeflectionBonus * 1) + ($scope.playerMiscArmorMod * 1) + ($scope.playerAttTmpMod.tmDEX * 1));

  return $scope.playerAC
}

$scope.playerACCalc();

$scope.playerTouchAC = function () {
var touchAc =  (10 + ($scope.playerAttTmpMod.tmDEX * 1) + ($scope.playerDeflectionBonus * 1) + ($scope.playerSizeBonus * 1) + ($scope.playerMiscArmorMod * 1))
  return touchAc
}


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
  "FORTITUDE": $scope.character.core.fortitudeTempModifier || 0,
  "REFLEX": $scope.character.core.reflexTempModifier || 0,
  "WILL": $scope.character.core.willTempModifier || 0
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
  $scope.calcMaxHP();
  if (($scope.playerHP < $scope.playerMaxHP) && ($scope.playerHP > (-$scope.playerAttTmpMod.tmCON))){
    $scope.playerHP += x;
  }else if($scope.playerHP == (-$scope.playerAttTmpMod.tmCON) && x === 1){
    $scope.playerHP += x;
  }else if($scope.playerHP == $scope.playerMaxHP && x === -1){
    $scope.playerHP += x;
  }
}

$scope.playerModHP = function(x){
  // if (($scope.playerHP < $scope.playerMaxHP) && ($scope.playerHP > (-$scope.playerAtt.CON))){
  //   $scope.playerHP += x;
  // }else if($scope.playerHP == (-$scope.playerAtt.CON) && x === 1){
  //   $scope.playerHP += x;
  // }else if($scope.playerHP == $scope.playerMaxHP && x === -1){
  //   $scope.playerHP += x;
  // }
}

$scope.logger=function () {
console.log(weapons);
}
$scope.logger()


// ===========   STR MODIFIER =============

$scope.playerChangeATT = function(x, att){
  let attAdder = "ta"+att;
  let modAdder = "tm"+att;
  $scope.playerAttTmpAdj[attAdder] += x;
  $scope.playerAttTmpMod[modAdder] = Math.floor((($scope.playerAtt[att] + $scope.playerAttTmpAdj[attAdder])-10)/2);
  }

  // ===================================   DICE ROLLER STUFF  ===================================




  // ===================================   WEAPONS AND EQUIPMENT  ===================================
  $scope.equiptmentWealth = {
    platinum: 0,
    gold: 0,
    silver: 0,
    copper: 0
  }
$scope.moneyConverter = function () {
  var newMoney = this.character.equipment[0].wealth.toString().split("").reverse()
  $scope.equiptmentWealth.copper=((newMoney[0] *1) || 0)
  newMoney.splice(0,1)
  $scope.equiptmentWealth.silver=((newMoney[0] *1) ||0)
  newMoney.splice(0,1)
  $scope.equiptmentWealth.gold=((newMoney[0] *1) ||0)
  newMoney.splice(0,1)
  var platMoney = ""
  for (var i = newMoney.length -1; i >= 0; i--) {

    platMoney += newMoney[i]
  }
  $scope.equiptmentWealth.platinum=((platMoney *1) ||0)
}
$scope.moneyConverter();

$scope.portraitArrayMale = ["./images/charM1.jpg", "./images/charM2.jpg", "./images/charM3.jpg", "./images/charM4.jpg", "./images/charM5.jpg", "./images/charM6.jpg"]
$scope.portraitArrayFemale = ["./images/charF1.jpg", "./images/charF2.jpg", "./images/charF3.jpg", "./images/charF4.jpg", "./images/charF5.jpg", "./images/charF6.jpg"]

$scope.portraitArray = $scope.portraitArrayMale

$scope.playerPortraitIsMale = true;
$scope.playerPortraitIsFemale = false;

$scope.playerPortraitGenderSetter = function(){
  if($scope.character.static.gender == "Male"){
    $scope.playerPortraitIsMale = true;
    $scope.playerPortraitIsFemale = false;
    $scope.portraitArray = $scope.portraitArrayMale
  }
  else if($scope.character.static.gender == "Female"){
    $scope.playerPortraitIsMale = false;
    $scope.playerPortraitIsFemale = true;
    $scope.portraitArray = $scope.portraitArrayFemale
  }
}


$scope.playerPortraitGenderSetter();

$scope.portraitCounter = 0
$scope.portraitCounter1 = 0
$scope.portraitCounter2 = 1
$scope.portraitCounter3 = 2







$scope.displayedPortraitArray = [$scope.portraitArray[0], $scope.portraitArray[1], $scope.portraitArray[2]]

$scope.portraitGenderSelector = function(gender){
  if(gender == 'Male'){
    $scope.playerPortraitIsMale = true;
    $scope.playerPortraitIsFemale = false;
    $scope.portraitArray = $scope.portraitArrayMale;
    // $scope.displayedPortraitArray = [$scope.portraitArray[0], $scope.portraitArray[1], $scope.portraitArray[2]]
  }
  else if(gender == 'Female'){
    $scope.playerPortraitIsMale = false;
    $scope.playerPortraitIsFemale = true;
    $scope.portraitArray = $scope.portraitArrayFemale;
    // $scope.displayedPortraitArray = [$scope.portraitArray[0], $scope.portraitArray[1], $scope.portraitArray[2]]
  }
}


$scope.portraitShifter = function(x){
  if ((x == -1) && ($scope.portraitCounter == 0)){
    $scope.portraitCounter = $scope.portraitArray.length - 1
    $scope.portraitCounter1 = $scope.portraitCounter
    $scope.portraitCounter2 = 0
    $scope.portraitCounter3 = 1
  }
  else if ((x == -1) && ($scope.portraitCounter == ($scope.portraitArray.length - 1))){
    $scope.portraitCounter = $scope.portraitArray.length - 2
    $scope.portraitCounter1 = $scope.portraitCounter
    $scope.portraitCounter2 = $scope.portraitArray.length - 1
    $scope.portraitCounter3 = 0
  }
  else if ((x == -1) && ($scope.portraitCounter == ($scope.portraitArray.length - 2))){
    $scope.portraitCounter = $scope.portraitArray.length - 3
    $scope.portraitCounter1 = $scope.portraitCounter
    $scope.portraitCounter2 = $scope.portraitCounter + 1
    $scope.portraitCounter3 = $scope.portraitCounter + 2
  }
  else if ((x == 1) && ($scope.portraitCounter == ($scope.portraitArray.length - 3))){
    $scope.portraitCounter = $scope.portraitArray.length - 2
    $scope.portraitCounter1 = $scope.portraitCounter
    $scope.portraitCounter2 = $scope.portraitArray.length - 1
    $scope.portraitCounter3 = 0
  }
  else if ((x == 1) && ($scope.portraitCounter == ($scope.portraitArray.length - 2))){
    $scope.portraitCounter = $scope.portraitArray.length - 1
    $scope.portraitCounter1 = $scope.portraitCounter
    $scope.portraitCounter2 = 0
    $scope.portraitCounter3 = 1
  }
  else if ((x == 1) && ($scope.portraitCounter == ($scope.portraitArray.length - 1))){
    $scope.portraitCounter = 0
    $scope.portraitCounter1 = $scope.portraitCounter
    $scope.portraitCounter2 = 1
    $scope.portraitCounter3 = 2
  }
  else if(x == 1){
    $scope.portraitCounter += 1
    $scope.portraitCounter1 = $scope.portraitCounter
    $scope.portraitCounter2 = $scope.portraitCounter + 1
    $scope.portraitCounter3 = $scope.portraitCounter + 2
  }
  else if(x == -1){
    $scope.portraitCounter -= 1
    $scope.portraitCounter1 = $scope.portraitCounter
    $scope.portraitCounter2 = $scope.portraitCounter + 1
    $scope.portraitCounter3 = $scope.portraitCounter + 2
  }
}

$scope.savePlayerCharacter = function(){
  $scope.savedCharacter = $scope.character;
  $scope.savedCharacter.static.experience = $scope.playerXP;
  $scope.savedCharacter.core.tempStrength = $scope.playerAttTmpAdj.taSTR;
  $scope.savedCharacter.core.tempDexterity = $scope.playerAttTmpAdj.taDEX;
  $scope.savedCharacter.core.tempConstitution = $scope.playerAttTmpAdj.taCON;
  $scope.savedCharacter.core.tempIntelligence = $scope.playerAttTmpAdj.taINT;
  $scope.savedCharacter.core.tempWisdom = $scope.playerAttTmpAdj.taWIS;
  $scope.savedCharacter.core.tempCharisma = $scope.playerAttTmpAdj.taCHR;
  $scope.savedCharacter.core.fortitudeTempModifier = $scope.playerSavesTempMod.FORTITUDE;
  $scope.savedCharacter.core.reflexTempModifier = $scope.playerSavesTempMod.REFLEX;
  $scope.savedCharacter.core.willTempModifier = $scope.playerSavesTempMod.WILL;
  $scope.savedCharacter.core.miscArmorClass = $scope.playerMiscArmorMod;
  $scope.savedCharacter.core.miscInitiative = $scope.playerInitiativeMiscMod;
  $scope.savedCharacter.core.currentHitPoints = $scope.playerHP;

  characterService.editCharacter($scope.savedCharacter._id, $scope.savedCharacter);
  console.log($scope.savedCharacter);
}


});
