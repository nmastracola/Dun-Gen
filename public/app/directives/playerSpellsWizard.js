angular.module('scribe')
.directive('wizardSpells', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/playerSpellsWizard.html',
  link: function( scope, element, attributes ) {}
};

});
