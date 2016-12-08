angular.module('scribe')
    .directive('class', function() {
        return {
            restrict: 'E',
            templateUrl: './app/directives/newClass.html',
            controller: function($scope, $state, characterService) {

                //CLASS PICKERS
                $scope.classList = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Wizard']

                $scope.chosenClass = "Monk";
                $scope.classObject = {}

                $scope.classPicker = function(x) {
                    $scope.chosenClass = $scope.classList[x];
                    $scope.displayClass()
                };
                //class togglers
                $scope.classToggler = [false, false, false, false, false, true, false, false, false, false, false];

                $scope.classSwitcher = function(x) {
                    for (var i = 0; i < $scope.classToggler.length; i++) {
                        if (i == x) {
                            $scope.classToggler[i] = true;
                        } else {
                            $scope.classToggler[i] = false;
                        }
                    }
                };
                //DISPLAY CLASS
                $scope.displayClass = function() {
                    for (var i = 0; i < $scope.classes.length; i++) {
                      // think things break here
                        if ($scope.classes[i].class === $scope.chosenClass) {
                            $scope.classObject = $scope.classes[i];
                            $scope.classFeatures = $scope.classObject.classFeaturesDump
                        }
                    }
                }
                $scope.setClass = function() {
                    characterService.characterCreationObject.static.classes.push({
                        "class": $scope.classObject.class,
                        "level": 1
                    })
                    characterService.characterCreationObject.qualifications.push({
                        "type": "bab",
                        "value": $scope.classObject.genericLevelGain[0].baseAttackBonus
                    })
                    $scope.classShower= !$scope.classShower
                    $scope.abilitiesShower= !$scope.abilitiesShower
                    if ($scope.classObject.hasSpells) {
                      $scope.spellsTab = true
                    }
                    $scope.raceChoice()
                }
                
            },
            scope: {
                classes: "=",
                raceChoice: "&",
                abilitiesShower: "=",
                classShower: "=",
                spellsTab: "="
            },
            link: function(scope, element, attributes) {}
        };

    });
