angular.module('scribe')
.directive('playerCombat', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/playerCombat.html',
  link: function( scope, element, attributes ) {
    
    
    ///togglers
    
    
    scope.pmsStore = false;
    
    
    //store functions
    
    
    scope.openPmsStore = function(){
      scope.pmsStore = !scope.pmsStore;

    } 
  
  
  // end link
   }
};

});
