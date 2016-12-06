angular.module('scribe').controller('homeCtrl', function($scope, authService, sService, $state){

$scope.tester = sService.test;


//=====================  modal  =====================

$scope.toggler = false;

$scope.login = function(user) {
  authService.login(user).then(function(response) {
    if (!response.data) {
      alert('User does not exist');
      $scope.user.password = '';
    } else {
      $state.go('charSelect');
    }
  }).catch(function(err) {
    alert('Unable to login');
  });
};

$scope.register = function(user) {
  if(user.password === user.passConfirm){
    authService.registerUser(user).then(function(response) {
      if (!response.data) {
        alert('Unable to create user');
      } else {
        alert('User Created');
        $scope.newUser = {};
        $state.go('charSelect')
      }
    }).catch(function(err) {

      alert('Unable to create user');
    });
  }
  else{
    alert('Passwords do not match. Please re-enter your password.')
  }
};

});
