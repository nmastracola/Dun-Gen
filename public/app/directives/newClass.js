angular.module('scribe')
    .directive('class', function() {
        return {
            restrict: 'E',
            templateUrl: './app/directives/newClass.html',
            controller: function($scope, $state, characterService) {

                //CLASS PICKERS
                $scope.classList = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Wizard']
                $scope.alignments = ['Lawful Good', 'Lawful Neutral', 'Lawful Evil', "Neutral Good", "True Neutral", "Neutral Evil", "Chaotic Good", "Chaotic Neutral", "Chaotic Evil"]

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
                            $scope.alignmentToggler[$scope.alignmentCounter] = false;
                        } else {
                            $scope.classToggler[i] = false;
                        }
                    }
                };
                //DISPLAY CLASS
                $scope.displayClass = function() {
                    for (var i = 0; i < $scope.classes.length; i++) {
                        if ($scope.classes[i].class === $scope.chosenClass) {
                            $scope.classObject = $scope.classes[i];
                            $scope.classFeatures = $scope.classObject.classFeaturesDump
                        }
                    }
                }
                $scope.displayClass();
                $scope.setClass = function() {
                    characterService.characterCreationObject.static.classes.push({
                        "class": $scope.classObject.class,
                        "level": 1
                    })
                    characterService.characterCreationObject.qualifications.push({
                        "type": "bab",
                        "value": $scope.classObject.genericLevelGain[0].baseAttackBonus
                    })
                    characterService.characterCreationObject.alignment = $scope.alignments[$scope.alignmentCounter]
                    console.log(characterService.characterCreationObject.alignment);
                    $scope.classShower= !$scope.classShower
                    $scope.abilitiesShower= !$scope.abilitiesShower
                    if ($scope.classObject.hasSpells) {
                      $scope.spellsTab = true
                    }
                    $scope.raceChoice()
                }
                
                $scope.alignmentToggler = [false, false, false, false, false, false, false, false, false];
                $scope.alignmentSwitcher = function(x) {
  
                    for (var i = 0; i < $scope.alignmentToggler.length; i++) {
                        if (i == x) {
                          $scope.alignmentCounter = i;
                          $scope.alignmentToggler[i] = true;
                        } else {
                            $scope.alignmentToggler[i] = false;
                        }
                    }
                };
                
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
