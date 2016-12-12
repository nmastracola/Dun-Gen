angular.module('scribe')
.directive('playerSkillsHud', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/playerSkillsHud.html',
  link: function( scope, element, attributes ) {},
  controller: function($scope, characterService, $rootScope) {
    $rootScope.$watch('selectedSkill', function(){
      $scope.selectedSkill = $rootScope.selectedSkill;
      console.log($scope.selectedSkill);
    })
  }
};

});
