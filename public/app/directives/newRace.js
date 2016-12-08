angular.module('scribe')
    .directive('race', function() {
        return {
            restrict: 'E',
            templateUrl: './app/directives/newRace.html',
            controller: function($scope, $state, characterService) {
              $scope.chosenRace = "Half-Elves"
              $scope.staticRace = false
              $scope.raceList = ['Dwarves', 'Elves', 'Gnomes', 'Half-Elves', 'Half-Orcs', 'Halflings', 'Humans']
              $scope.raceCounter = 3;

              $scope.racePicker = function(x) {
                  $scope.chosenRace = $scope.raceList[x]
                  $scope.raceCounter = x
                  $scope.info();
              };

              $scope.confirmRace = function() {
                var charCre = characterService.characterCreationObject.core
                characterService.characterCreationObject.static.race = $scope.chosenRace
                  if ($scope.races[$scope.raceCounter].mod.bon) {
                    $scope.attributes[$scope.abilityCounter] += 2
                  }
                  if ($scope.races[$scope.raceCounter].mod.cha) {
                      $scope.attributes[5] += $scope.races[$scope.raceCounter].mod.cha
                  }
                  if ($scope.races[$scope.raceCounter].mod.con) {
                      $scope.attributes[2] += $scope.races[$scope.raceCounter].mod.con
                  }
                  if ($scope.races[$scope.raceCounter].mod.dex) {
                      $scope.attributes[1] += $scope.races[$scope.raceCounter].mod.dex
                  }
                  if ($scope.races[$scope.raceCounter].mod.int) {
                      $scope.attributes[3] += $scope.races[$scope.raceCounter].mod.int
                  }
                  if ($scope.races[$scope.raceCounter].mod.str) {
                      $scope.attributes[0] += $scope.races[$scope.raceCounter].mod.str
                  }
                  if ($scope.races[$scope.raceCounter].mod.wis) {
                      $scope.attributes[4] += $scope.races[$scope.raceCounter].mod.wis
                  }
                  $scope.charCreQual = characterService.characterCreationObject.qualifications
                  charCre.strength = $scope.attributes[0]
                  for (var i = 0; i < $scope.charCreQual.length; i++) {
                    if ($scope.charCreQual[i].value[0]==="str") {
                      $scope.charCreQual[i].value[1]=$scope.attributes[0]
                    }
                  }
                  charCre.dexterity = $scope.attributes[1]
                  for (var i = 0; i < $scope.charCreQual.length; i++) {
                    if ($scope.charCreQual[i].value[1]==="dex") {
                      $scope.charCreQual[i].value[1]=$scope.attributes[1]
                    }
                  }
                  charCre.constitution = $scope.attributes[2]
                  for (var i = 0; i < $scope.charCreQual.length; i++) {
                    if ($scope.charCreQual[i].value[2]==="con") {
                      $scope.charCreQual[i].value[1]=$scope.attributes[2]
                    }
                  }
                  charCre.intelligence = $scope.attributes[3]
                  for (var i = 0; i < $scope.charCreQual.length; i++) {
                    if ($scope.charCreQual[i].value[3]==="int") {
                      $scope.charCreQual[i].value[1]=$scope.attributes[3]
                    }
                  }
                  charCre.wisdom = $scope.attributes[4]
                  for (var i = 0; i < $scope.charCreQual.length; i++) {
                    if ($scope.charCreQual[i].value[4]==="wis") {
                      $scope.charCreQual[i].value[1]=$scope.attributes[4]
                    }
                  }
                  charCre.charisma = $scope.attributes[5]
                  for (var i = 0; i < $scope.charCreQual.length; i++) {
                    if ($scope.charCreQual[i].value[5]==="cha") {
                      $scope.charCreQual[i].value[1]=$scope.attributes[5]
                    }
                  }
                  $scope.raceShower = !$scope.raceShower;
                  $scope.classShower = !$scope.classShower;
                  $scope.displayClass();
                  console.log(characterService.characterCreationObject.static.race);
                  return
                }
                $scope.info = function() {
                    for (var i = 0; i < $scope.races.length; i++) {
                        if ($scope.races[i].name === $scope.chosenRace) {
                            $scope.raceInfo = $scope.races[i].traits;
                            $scope.modText = $scope.races[i].modText;
                            $scope.raceCounter = i;
                        };
                    };

                    if (!$scope.races[$scope.raceCounter].mod.bon) {
                        $scope.staticRace = true;
                        for (var i = 0; i < $scope.abilityToggler.length; i++) {
                          $scope.abilityToggler[i] = false;
                          $scope.raceCounter = null;

                        }
                    }else {
                      $scope.staticRace = false;

                    }
                };
                $scope.info();

                //race togglers
                $scope.raceToggler = [false, false, false, true, false, false, false];
                $scope.raceSwitcher = function(x) {


              }


              $scope.info = function() {
                  for (var i = 0; i < $scope.races.length; i++) {
                      if ($scope.races[i].name === $scope.chosenRace) {
                          $scope.raceInfo = $scope.races[i].traits;
                          $scope.modText = $scope.races[i].modText;
                          $scope.raceCounter = i;
                      };
                  };
                  if (!$scope.races[$scope.raceCounter].mod.bon) {
                      $scope.staticRace = true;
                      for (var i = 0; i < $scope.abilityToggler.length; i++) {
                          $scope.abilityToggler[i] = false;
                          // $scope.raceCounter = null; oddly needed to be removed. Not sure why it was there.

                      }
                  } else {
                      $scope.staticRace = false;
                  }
              };
              $scope.info();
              //race togglers
              $scope.raceToggler = [false, false, false, true, false, false, false];
              $scope.raceSwitcher = function(x) {

                  for (var i = 0; i < $scope.raceToggler.length; i++) {
                      if (i == x) {
                          $scope.raceToggler[i] = true;
                      } else {
                          $scope.raceToggler[i] = false;
                      }
                  }

              };
              //gender togglers
              $scope.male = false;
              $scope.female = false;

              // SELECTED ABILITY TOGGLER

              $scope.abilityToggler = [false, false, false, false, false, false];
              $scope.abilitySwitcher = function(x) {

                  for (var i = 0; i < $scope.abilityToggler.length; i++) {
                      if (i == x) {
                        $scope.abilityCounter = i
                          $scope.abilityToggler[i] = true;
                      } else {
                          $scope.abilityToggler[i] = false;
                      }
                  }
              };
          },
          scope: {
              races: "=",
              attributes: "=",
              raceShower: "=",
              classShower: "=",
              displayClass: "&",
              chosenClass: "=",
              classes: "=",
              classFeatures: "=",
              classObject: "="
          },
          link: function(scope, element, attributes) {}
      };

  });
