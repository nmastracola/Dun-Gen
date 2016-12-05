// Needs Logic to define $scope.remainingFeats, characterObj needs to have a .qualifications array filled with objects with key value pairs that match the preReqs in feats.
//
// $scope.charQual = characterService.characterCreationObject.qualifications
// $scope.selectedFeat = function (feat) {
//   for (var i = 0; i < $scope.chosenFeats.length; i++) {
//     if ($scope.chosenFeats[i] === feat) {
//       $scope.chosenFeats.splice(i, 1);
//       $scope.remainingFeats++
//       return
//     }
//   }
//   if (feat.prerequisites) {
//     for (var j = 0; j < feat.prerequisites.length; j++) {
//       for (var k = 0; k < $scope.charQual.length; k++) {
//         if ($scope.charQual[k].type === feat.prerequisites[j].type) {
//           if (isNaN(feat.prerequisites[j].value[0])) {
//             if (feat.prerequisites[j].value[0] ===$scope.charQual[k].value[0]) {
//               if (feat.prerequisites[j].value[1] ==< $scope.charQual[k].value[1]) {
//                 }
//                   $scope.chosenFeats.push(feat);
//                   $scope.remainingFeats--
//                   console.log($scope.chosenFeats);
//               }
//             }
//           }
//           else if (!isNaN(feat.prerequisites[j].value[0])) {
//             if (feat.prerequisites[j].value[0] ==< $scope.charQual[k].value[0]) {
//                 $scope.chosenFeats.push(feat);
//                 $scope.remainingFeats--
//                 console.log($scope.chosenFeats);
//             }
//           }
//         }else {
//           alert("You do not have the needed pre Requisits for this feat. Please select another.")
//           return
//         }
//       }
//     }
//   }
//   for (var i = 0; i < $scope.chosenFeats.length; i++) {}
//     $scope.chosenFeats.push(feat);
//     $scope.remainingFeats--
//     console.log($scope.chosenFeats);
// }






// Or





// $scope.charGenObj = characterService.characterCreationObject;
// $scope.charGenQual = characterService.characterCreationObject.qualifications;
//
// $scope.selectedFeat = function (feat) {
//   for (var i = 0; i < $scope.chosenFeats.length; i++) {
//     if ($scope.chosenFeats[i] === feat) {
//       $scope.chosenFeats.splice(i, 1);
//       return
//     }
//   }
//   for (var j = 0; j < feat.prerequisits.length; j++) {
//     if (feat.prerequisits[j]) {
//       for (var k = 0; k < charGenQual.length; k++) {
//         if (charGenQual[k].type === feat.prerequisits[j].type) {
//           if (isNaN(feat.prerequisits[j].value[0]) && feat.prerequisits[j].value[0] === charGenQual[k].value[0]) {
//             if (feat.prerequisits[j].value[1] ==< charGenQual[k].value[1]) {
//               $scope.chosenFeats.push(feat);
//               console.log($scope.chosenFeats);
//             }
//           }
//           else if (!isNaN(feat.prerequisits[j].value[0]) && feat.prerequisits[j].value[0] ==< charGenQual[k].value[0]) {
//             $scope.chosenFeats.push(feat);
//             console.log($scope.chosenFeats);
//           }
//         }
//       } else {
//         alert("You do not have the required prerequisits for this feat. Please select another.")
//         return
//       }
//     }
//   } else {
//       $scope.chosenFeats.push(feat);
//       console.log($scope.chosenFeats);
//   }
// }
