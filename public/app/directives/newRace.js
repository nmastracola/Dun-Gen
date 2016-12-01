angular.module('scribe')
    .directive('race', function() {
        return {
            restrict: 'E',
            templateUrl: './app/directives/newRace.html',
            controller: function($scope, $state) {
                $scope.staticRace = false;
                $scope.raceList = ['Dwarves', 'Elves', 'Gnomes', 'Half-Elves', 'Half-Orcs', 'Halflings', 'Humans'];
                $scope.chosenRace = "Half-Elves";
                $scope.racePicker = function(x) {
                    $scope.chosenRace = $scope.raceList[x];
                    $scope.info();

                };
                $scope.confirmRace = function () {

                }
                $scope.info = function() {
                    for (var i = 0; i < $scope.races.length; i++) {
                        if ($scope.races[i].name === $scope.chosenRace) {
                            $scope.raceInfo = $scope.races[i].traits;
                            $scope.modText = $scope.races[i].modText;
                            console.log($scope.races);
                            var raceCounter = i;
                        };
                    };
                    if (!$scope.races[raceCounter].mod.bon) {
                        $scope.staticRace = true;
                        for (var i = 0; i < $scope.abilityToggler.length; i++) {
                          $scope.abilityToggler[i] = false;
                        }
                        console.log($scope.races[raceCounter].mod.bon);
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
                attributes: "="

            },
            link: function(scope, element, attributes) {}
        };

    });
