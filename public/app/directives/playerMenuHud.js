angular.module('scribe')
.directive('playerMenuHud', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/playerMenuHud.html',
  link: function( scope, element, attributes ) {
    
    ///togglers
    
    
    scope.portraitChooser = false;

    
    //store functions
    
    
    scope.openPortraitChooser = function(){
      scope.portraitChooser = !scope.portraitChooser;

    } 

    
    
  }
};

});
