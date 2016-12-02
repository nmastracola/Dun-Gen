angular.module('scribe')
.directive('playerJournal', function(){
return{
  restrict: 'E',
  templateUrl: './app/directives/playerJournal.html',
  link: function( scope, element, attributes ) {}
};

});
