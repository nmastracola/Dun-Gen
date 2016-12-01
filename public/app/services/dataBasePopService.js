// INITILIZE SERVICE
// ============================================================
angular.module("scribe").service("characterService", function($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.getCharacter = function(id) {
    var query = "";
    if (id) query = '?_id=' + id;
    return $http({
      method: 'GET',
      url: '/character' + query
    }).then(function(response) {
      if (response.data.length < 2) return response.data[0];
      return response.data;
    });
  };
  // OTHER FUNCTIONS
  // ============================================================
});
