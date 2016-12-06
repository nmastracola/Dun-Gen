$scope.classSelected = function() {
var class = characterService.characterCreationObject.static.classes[0].class;
var feats = characterService.characterCreationObject.static.feats;


	for (var i = 0; i < $scope.classes; i++) {
		if ($scope.classes[i].class === class) {
	    charHitPoints = $scope.classes[i].hitDie + 1

      for (var i = 0; i < feats.length; i++) {
        if (feats[i].value === "Toughness") {
          charHitPoints = charHitPoints + 3
        }
      }

    }
	}
$scope.charHitPoints = 0;
