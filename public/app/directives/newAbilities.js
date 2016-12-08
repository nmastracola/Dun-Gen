angular.module('scribe')
  .directive('abilities', function() {
    return {
      restrict: 'E',
      templateUrl: './app/directives/newAbilities.html',
      controller: function($scope, characterService) {
        $scope.chosenFeats = [];
        $scope.remainingFeats = 3

        $scope.charQual = characterService.characterCreationObject.qualifications
        $scope.qualArrs = [];
        $scope.qualArrsChecker = function() {

          for (var i = 0; i < $scope.qualArrs.length; i++) {
            // if it finds false in arr then return false. once all true there is no return
            if (!$scope.qualArrs[i]) {
              return false;
            }
          }
          return true
        }
        $scope.verifyMatch = function(qualificationObj, prerequisiteObj, index) {
          if (qualificationObj.type === prerequisiteObj.type) {
            if (prerequisiteObj.value[1]) {
              if (qualificationObj.value[0] == prerequisiteObj.value[0]) {
                if ((qualificationObj.value[1]) * 1 >= (prerequisiteObj.value[1]) * 1) {
                  $scope.qualArrs[index] = true
                }
              }
            } else if (qualificationObj.value == prerequisiteObj.value[0]) {
              $scope.qualArrs[index] = true
            } else if (qualificationObj.value >= (prerequisiteObj.value[0]) * 1) {
              $scope.qualArrs[index] = true
            }
          }
          return $scope.qualArrs[index]
        }
        $scope.selectedFeat = function(feat) {
          if ($scope.remainingFeats === 0) {
            alert("You have no remaining feats.")
            return
          }
          for (var i = 0; i < $scope.chosenFeats.length; i++) {
            if ($scope.chosenFeats[i] === feat) {
              $scope.chosenFeats.splice(i, 1);
              $scope.remainingFeats++
                $scope.qualArrs = [];
              return
            }
          }
          if (feat.prerequisites) {
            for (var i = 0; i < feat.prerequisites.length; i++) {
              $scope.qualArrs.push(false)
            }
            for (var i = 0; i < feat.prerequisites.length; i++) {
              for (var j = 0; j < $scope.charQual.length; j++) {
                if ($scope.verifyMatch($scope.charQual[j], feat.prerequisites[i], i)) {
                  if ($scope.qualArrsChecker()) {
                    $scope.chosenFeats.push(feat);
                    $scope.remainingFeats--
                      $scope.qualArrs = [];
                    return
                  }
                } else if (i === feat.prerequisites.length - 1 && j === $scope.charQual.length - 1) {
                  alert("You do not have the needed prerequisites for this feat. Please select another.")
                  $scope.qualArrs = [];
                  return
                }
              }
            }

          } else {
            $scope.chosenFeats.push(feat);
            $scope.remainingFeats--
              $scope.qualArrs = [];
          }
        }
        $scope.characterSkillsArrs = []
        $scope.setSkills = function() {
          var charClass = characterService.characterCreationObject.static.classes[0].class
          for (var i = 0; i < $scope.skills.length; i++) {
            characterService.characterCreationObject.skills.push({
              "name": $scope.skills[i].Skill,
              "ranks": 0,
              "primaryAttribute": $scope.skills[i].Ability,
              "miscellaneousModifier": 0,
              "total": 0,
              "useUntrained": $scope.skills[i].Untrained,
              "armorCheck": $scope.skills[i].ArmorCheck,
              "Description": $scope.skills[i].Description
            })
            for (var props in $scope.skills[i]) {
              if (props === charClass) {
                characterService.characterCreationObject.skills[i].classSkill = $scope.skills[i][props];
              }
            }
          }
        }

        $scope.newCharFeats = function() {
          for (var i = 0; i < $scope.chosenFeats.length; i++) {
            characterService.characterCreationObject.feats.push({
              name: $scope.chosenFeats[i].name,
              known: true
            })
          };
          for (var j = 0; j < $scope.chosenFeats.length; j++) {
            characterService.characterCreationObject.qualifications.push({
              "type": "feat",
              "value": $scope.chosenFeats[j].name
            })
          }
          $scope.abilitiesShower = !$scope.abilitiesShower
          $scope.skillsShower = !$scope.skillsShower
          $scope.setRemainingSkills()
          $scope.setSkills()
        }
        $scope.hideIneligableFeats = function() {
          // hideIneligableFeats
        }
      },
      scope: {
        races: '=',
        feats: '=',
        abilitiesShower: "=",
        spellsShower: "=",
        chosenRaceTraits: "=",
        featToggler: "=",
        skills: "=",
        skillsShower: "=",
        setRemainingSkills: "&"
      },
      link: function(scope, element, attributes) {}
    };

  });
