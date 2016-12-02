angular.module('scribe')
.directive('abilities', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/newAbilities.html',
  controller: function($scope, characterService) {
    // console.log("races", $scope.races);
    // console.log("feats", $scope.feats);
    // for (var i = 0; i < $scope.feats.length; i++) {
    //   // console.log($scope.feats[i].name);
    // }
    //compare race chosen to races available
    //charcterService.characterCreationObject
    function raceChoice () {
      for (var i = 0; i < $scope.races.length; i++) {
        // console.log($scope.races[i].name);
        if ($scope.races[i].name === characterService.characterCreationObject.static.race) {
          $scope.chosenRaceTraits = $scope.races[i].traits;
          // console.log($scope.races[i]);
        }
      }
    }
    raceChoice();

    $scope.chosenFeats = [];
    // console.log($scope.feats);
    $scope.selectedFeat = function (feat) {
        $scope.chosenFeats.push(feat);
        // console.log(feat);
    }

    //temp field
    


  },
  scope: {
    races: '=',
    feats: '='
  },
  link: function( scope, element, attributes ) {}
};

});
