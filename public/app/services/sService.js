angular.module('scribe').service('sService', function($http){

  this.races = function(id) {
    var query = "";
    if (id) query = '?_id=' + id;
    return $http({
      method: 'GET',
      url: '/api/races' + query
    }).then(function(response) {
      if (response.data.length < 2) return response.data[0];
      return response.data;
    });
  };

  this.feats = function(id) {
    var query = "";
    if (id) query = '?_id=' + id;
    return $http({
      method: 'GET',
      url: '/api/feats' + query
    }).then(function(response) {
      // console.log(response);
      return response.data;
    });
  };

});
