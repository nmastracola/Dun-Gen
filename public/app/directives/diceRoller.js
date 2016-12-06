angular.module('scribe')
.directive('diceRoller', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/diceRoller.html',
  link: function( scope, element, attributes ) {

    scope.dieRoll = function(x){
      var clicks = $(x).data('clicks');
      if (clicks) {
         // odd clicks
            $(x).css({
             "-webkit-transform":" rotateZ(-360deg)",
             "-ms-transform": "rotateZ(-360deg)",
             "transform": "rotateZ(-360deg)",
             "-webkit-transition": ".5s",
             "-moz-transition":".5s",
             "-o-transition":" .5s",
             "transition": ".5s"
           });
      } else {
             $(x).css({
               "-webkit-transform":" rotateZ(360deg)",
               "-ms-transform": "rotateZ(360deg)",
               "transform": "rotateZ(360deg)",
               "-webkit-transition": ".5s",
               "-moz-transition":".5s",
               "-o-transition":" .5s",
               "transition": ".5s"
             });
      }
      $(x).data("clicks", !clicks);

    };




    scope.dBiterator = 1;
    scope.dieResult = 20;

    scope.dbPercentage = (100 * scope.dBiterator);
    scope.dbD4 = (4 * scope.dBiterator);
    scope.dbD6 = (6 * scope.dBiterator);
    scope.dbD8 = (8 * scope.dBiterator);
    scope.dbD10 = (10 * scope.dBiterator);
    scope.dbD12 = (12 * scope.dBiterator);
    scope.dbD20 = (20 * scope.dBiterator);

    scope.dieReturn = function(x){
      scope.dieResult = x;
    }

    scope.dbIncrementer = function(x){
      if (scope.dBiterator > 1){
        scope.dBiterator += x;
      }else if(scope.dBiterator == 1  && x > 0){
        scope.dBiterator += x;
      }

    }

    }
  };

});
