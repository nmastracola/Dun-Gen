angular.module('scribe').controller('newCtrl', function($scope, sService, characterService, races, feats, classes) {

    $scope.test = sService.test;
    $scope.races = races;
    $scope.feats = feats;
    $scope.classes = classes;

    // ==============================   ROLLS VARIABLES  ==========================
    $scope.attributes = [0, 0, 0, 0, 0, 0];


    // ==============================   VIEW TOGGLERS  ==========================
    //section hiders
    $scope.rollShower = true;
    $scope.raceShower = false;
    $scope.classShower = false;
    $scope.abilitiesShower = false;
    $scope.spellsShower = false;

    $scope.spellsTab=false

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
    $scope.raceChoice = function () {
      for (var i = 0; i < $scope.races.length; i++) {
        // console.log($scope.races[i].name);
        if ($scope.races[i].name === characterService.characterCreationObject.static.race) {
          console.log($scope.races[i].name);
          console.log(characterService.characterCreationObject.static.race);
          $scope.chosenRaceTraits = $scope.races[i].traits;
          // console.log($scope.races[i]);
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



    $scope.featToggler = false;



    // ==============================   CONTENT PICKERS  ==========================
    //rolls



});
