angular.module('scribe', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './app/views/home.html',
        controller: 'homeCtrl'
        // resolve: {
        //   characters: function (sService) {
        //     return sService.characters().then(function(response) {
        //       return response.data;
        //     });
        //   },
        // }
      })
      .state('charSelect', {
        url: '/charselect',
        templateUrl: './app/views/charSelect.html',
        controller: 'charSelectCtrl'
      })
      .state('new', {
          url: '/new',
          templateUrl: './app/views/new.html',
          controller: 'newCtrl',
          resolve: {
              races: function(sService) {
                  return sService.races();
              },
              feats: function(sService) {
                  return sService.feats();
              },
              classes: function(sService) {
                  return sService.class();
              },
              skills: function(sService) {
                  return sService.skill();
              }
          }
      })
      .state('player', {
        url: '/player',
        templateUrl: './app/views/player.html',
        controller: 'playerCtrl'
      })
})
