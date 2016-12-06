$scope.charQual = characterService.characterCreationObject.qualifications
$scope.qualArrs = [];
$scope.qualArrsChecker = function () {
  for (var i = 0; i < $scope.qualArrs.length; i++) {
    // if it finds false in arr then return false. once all true there is no return
    if (!$scope.qualArrs[i]) {
      return false;
    }
  }
  return true
}
$scope.verifyMatch = function (qualificationObj, prerequisiteObj, index) {
  if (qualificationObj.type === prerequisiteObj.type) {
    if (prerequisiteObj.value[1]) {
      if (qualificationObj.value[0] === prerequisiteObj.value[0]) {
        if (qualificationObj.value[1] === prerequisiteObj.value[1]) {
          $scope.qualArrs[index] = true
        }
      }
    }
    else if (qualificationObj.value[0] === prerequisiteObj.value[0]) {
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
        return
    }
  }
  if (feat.prerequisites) {
    for (var i = 0; i < feat.prerequisites.length; i++) {
      $scope.qualArrs.push(false)
    }
    for (var i = 0; i < feat.prerequisites.length; i++) {
      for (var j = 0; j < $scope.charQual.length; j++) {
        if ($scope.verifyMatch(feat.prerequisites[i], $scope.charQual[j], i)) {
          if ($scope.qualArrsChecker()) {
            $scope.chosenFeats.push(feat);
            $scope.remainingFeats--
          }
        }
        else if (i === feat.prerequisites.length && j === $scope.charQual.length) {
          alert("You do not have the needed prerequisites for this feat. Please select another.")
          return
        }
      }
    }

  } else {
    $scope.chosenFeats.push(feat);
    $scope.remainingFeats--
  }
}
