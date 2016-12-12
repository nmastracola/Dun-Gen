angular.module('scribe')
.directive('playerSkillsHud', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/playerSkillsHud.html',
  link: function( scope, element, attributes ) {},
  controller: function($scope, characterService, $rootScope) {
    $rootScope.$watch('selectedSkill', function(){
      $scope.selectedSkill = $rootScope.selectedSkill;
      if ($scope.selectedSkill) {
        for (var i = 0; i < $scope.skills.length; i++) {
          if ($scope.skills[i].Skill === $scope.selectedSkill.name) {
            $scope.selectedSkill.Description = $scope.skills[i].Description
          }
        }
      }
    })
  }
};

});
