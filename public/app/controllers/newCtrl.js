angular.module('scribe').controller('newCtrl', function($scope, sService, characterService, races, feats, classes, skills) {

  $scope.chosenFeats = [];

  $scope.test = sService.test;
  $scope.races = races;
  $scope.feats = feats;
  $scope.classes = classes;
  $scope.skills = skills;

  // ==============================   ROLLS VARIABLES  ==========================
  $scope.attributes = [0, 0, 0, 0, 0, 0];
  $scope.attributeModifier = [-5, -5, -5, -5, -5, -5]


  // ==============================   VIEW TOGGLERS  ==========================
  //section hiders
  $scope.rollShower = true;
  $scope.raceShower = false;
  $scope.classShower = false;
  $scope.abilitiesShower = false;
  $scope.skillsShower = false;
  $scope.spellsShower = false;
  $scope.customizationShower = false;

  $scope.spellsTab = false

  $scope.classHasSpellsChecker = function() {
    var pickedClass = characterService.characterCreationObject.static.classes[0].class
    for (var i = 0; i < classes.length; i++) {
      if (classes[i].class === pickedClass) {
        if (!classes[i].hasSpells) {
          $scope.customizationShower = !$scope.customizationShower;
          $scope.skillsShower = !$scope.skillsShower;
        }
        if (classes[i].hasSpells) {
          $scope.spellsShower = !$scope.spellsShower;
          $scope.skillsShower = !$scope.skillsShower;
        }
      }
    }
  }

  $scope.remainingFeats = 1
  $scope.setRemainingFeats = function () {
    $scope.remainingFeats = 1
    if (characterService.characterCreationObject.static.race === 'Human') {
      $scope.remainingFeats += 1
    }
  }

  $scope.raceChoice = function() {
    for (var i = 0; i < $scope.races.length; i++) {
      if ($scope.races[i].name === characterService.characterCreationObject.static.race) {
        $scope.chosenRaceTraits = $scope.races[i].traits;
      }
    }
  }

  $scope.remainingSkills = 0;
  $scope.setRemainingSkills= function () {
    for (var i = 0; i < $scope.classes.length; i++) {
      if ($scope.classes[i].class == characterService.characterCreationObject.static.classes[0].class) {
        $scope.remainingSkills += ($scope.classes[i].skillsPerLevel *1) + $scope.attributeModifier[3] +1
        return
      }
    }
  }

  // confirmation button togglers
  $scope.rollBtn = false;
  $scope.raceBtn = false;
  $scope.classBtn = false;
  $scope.abilitiesBtn = false;
  $scope.customizationBtn = false;
  $scope.spellsBtn = false;
  $scope.finalSubmitBtn = false;

  $scope.featToggler = false;

});
