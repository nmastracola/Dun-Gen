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
        url: '/charselect/:userId',
        templateUrl: './app/views/charSelect.html',
        controller: 'charSelectCtrl',
        resolve: {
          userChars: function($stateParams, characterService){
            return characterService.getUserCharacters($stateParams.userId);
          }
        }
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
        url: '/player/:charId',
        templateUrl: './app/views/player.html',
        controller: 'playerCtrl',
        resolve: {
          races: function(sService) {
              return sService.races();
          },
          feats: function(sService) {
              return sService.feats();
          },
          character: function($stateParams, characterService){
            return characterService.getCharObject($stateParams.charId);
          },
          classes: function(sService) {
              return sService.class();
          },
          skills: function(sService) {
              return sService.skill();
          },
          weapons: function(sService) {
              return sService.weapon();
          },
          gear: function(sService) {
              return sService.gear();
          },
          armor: function(sService) {
              return sService.armor();
          }
        }
      })
})
