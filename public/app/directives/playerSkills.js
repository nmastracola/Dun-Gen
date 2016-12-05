angular.module('scribe')
.directive('playerSkills', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/playerSkills.html',
  link: function( scope, element, attributes ) {
    
    scope.customSkillToggler = true;
    scope.skillClassToggler = true;
    
  }
};

});
