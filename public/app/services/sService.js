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
      return response.data;
    });
  };

  this.class = function(id) {
    var query = "";
    if (id) query = '?_id=' + id;
    return $http({
      method: 'GET',
      url: '/api/class' + query
    }).then(function(response) {
      return response.data;
    });
  };

  this.skill = function(id) {
    var query = "";
    if (id) query = '?_id=' + id;
    return $http({
      method: 'GET',
      url: '/api/skills' + query
    }).then(function(response) {
      return response.data;
    });
  };

  this.weapon = function(id) {
    var query = "";
    if (id) query = '?_id=' + id;
    return $http({
      method: 'GET',
      url: '/api/weapons' + query
    }).then(function(response) {
      return response.data;
    });
  };

  this.gear = function(id) {
    var query = "";
    if (id) query = '?_id=' + id;
    return $http({
      method: 'GET',
      url: '/api/goodsAndServices' + query
    }).then(function(response) {
      return response.data;
    });
  };

  this.armor = function(id) {
    var query = "";
    if (id) query = '?_id=' + id;
    return $http({
      method: 'GET',
      url: '/api/armor' + query
    }).then(function(response) {
      return response.data;
    });
  };

});
