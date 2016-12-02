angular.module('scribe')
    .directive('race', function() {
        return {
            restrict: 'E',
            templateUrl: './app/directives/newRace.html',
            controller: function($scope, $state, characterService) {
                $scope.staticRace = false;
                $scope.raceList = ['Dwarves', 'Elves', 'Gnomes', 'Half-Elves', 'Half-Orcs', 'Halflings', 'Humans'];
                $scope.racePicker = function(x) {
                    $scope.chosenRace = $scope.raceList[x];
                    $scope.info();

                };
                $scope.confirmRace = function () {
                  if ($scope.races[$scope.raceCounter].mod.bon) {
                    $scope.attributes[$scope.raceCounter]+= 2
                  }
                  if ($scope.races[$scope.raceCounter].mod.cha) {
                    $scope.attributes[5]+= $scope.races[$scope.raceCounter].mod.cha
                  }
                  if ($scope.races[$scope.raceCounter].mod.con) {
                    $scope.attributes[2]+= $scope.races[$scope.raceCounter].mod.con
                  }
                  if ($scope.races[$scope.raceCounter].mod.dex) {
                    $scope.attributes[1]+= $scope.races[$scope.raceCounter].mod.dex
                  }
                  if ($scope.races[$scope.raceCounter].mod.int) {
                    $scope.attributes[3]+= $scope.races[$scope.raceCounter].mod.int
                  }
                  if ($scope.races[$scope.raceCounter].mod.str) {
                    $scope.attributes[0]+= $scope.races[$scope.raceCounter].mod.str
                  }
                  if ($scope.races[$scope.raceCounter].mod.wis) {
                    $scope.attributes[4]+= $scope.races[$scope.raceCounter].mod.wis
                  }
                  var charCre = characterService.characterCreationObject.core
                  characterService.characterCreationObject.static = $scope.chosenRace
                  charCre.strength = $scope.attributes[0]
                  charCre.dexterity = $scope.attributes[1]
                  charCre.constitution = $scope.attributes[2]
                  charCre.intelligence = $scope.attributes[3]
                  charCre.wisdom = $scope.attributes[4]
                  charCre.charisma = $scope.attributes[5]
                }
                $scope.info = function() {
                    for (var i = 0; i < $scope.races.length; i++) {
                        if ($scope.races[i].name === $scope.chosenRace) {
                            $scope.raceInfo = $scope.races[i].traits;
                            $scope.modText = $scope.races[i].modText;
                            console.log($scope.races);
                            $scope.raceCounter = i;
                        };
                    };
                    if (!$scope.races[$scope.raceCounter].mod.bon) {
                        $scope.staticRace = true;
                        for (var i = 0; i < $scope.abilityToggler.length; i++) {
                          $scope.abilityToggler[i] = false;
                          $scope.raceCounter = null;

                        }
                        console.log($scope.races[$scope.raceCounter].mod.bon);
                    }else {
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
                chosenRace:"=",
                attributes:"="
            },
            link: function(scope, element, attributes) {}
        };

    });
