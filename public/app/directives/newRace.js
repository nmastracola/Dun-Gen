angular.module('scribe')
    .directive('race', function() {
        return {
            restrict: 'E',
            templateUrl: './app/directives/newRace.html',
            controller: function($scope, $state) {
                $scope.raceList = ['Dwarves', 'Elves', 'Gnomes', 'Half-Elves', 'Half-Orcs', 'Halflings', 'Humans'];
                $scope.chosenRace = "Half-Elves";
                $scope.racePicker = function(x) {
                    $scope.chosenRace = $scope.raceList[x];
                    $scope.info();
                };
                $scope.attributeBonuses = function() {

                };

                $scope.info = function() {
                    for (var i = 0; i < $scope.races.length; i++) {
                        if ($scope.races[i].name === $scope.chosenRace) {
                            $scope.raceInfo = $scope.races[i].traits;
                        };
                    };
                    // console.log($scope.races);
                    // console.log($scope.raceInfo);
                };
                $scope.info();
                // console.log($scope.races);

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
            },
            scope: {
                races: "="
            },
            link: function(scope, element, attributes) {}
        };

    });
