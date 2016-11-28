angular.module('scribe', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './app/views/home.html',
        controller: 'homeCtrl'
        // resolve: {
        //   characters: function (sService) {
        //     return sService.characters().then(function(response) {
        //       // console.log(response);
        //       return response.data;
        //     });
        //   },
        //   races: function (sService) {
        //     return sService.races().then(function(response) {
        //       // console.log(response);
        //       return response.data;
        //     });
        //   }
        // }

      })
      .state('new', {
        url: '/new',
        templateUrl: './app/views/new.html',
        controller: 'newCtrl'
      })
      .state('player', {
        url: '/player',
        templateUrl: './app/views/player.html',
        controller: 'playerCtrl'
      })
})