angular.module('scribe').controller('newCtrl', function($scope, sService, characterService, races, feats, classes, skills) {

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
  $scope.spellsShower = false;
  $scope.skillsShower = false;
  $scope.customizationShower = false;

  $scope.spellsTab = false

  $scope.classHasSpellsChecker = function() {
    var pickedClass = characterService.characterCreationObject.static.classes[0].class
    for (var i = 0; i < classes.length; i++) {
      if (classes[i].class === pickedClass) {
        if (!classes[i].hasSpells) {
          $scope.spellsShower = !$scope.spellsShower;
          alert("Your class does not have spells, I am moving you on to skills.")
          $scope.skillsShower = !$scope.skillsShower
          

        }
      }
    }
  }

  $scope.raceChoice = function() {
    for (var i = 0; i < $scope.races.length; i++) {
      if ($scope.races[i].name === characterService.characterCreationObject.static.race) {
        $scope.chosenRaceTraits = $scope.races[i].traits;
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
