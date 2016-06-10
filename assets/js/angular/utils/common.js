angular.module('utils.common', ['lodash']).service('common', function (lodash, config) {
  "use strict";

  return {
    prepareUrl: function (uriSegments) {
      var apiUrl;
      if (lodash.isNull(config.apiUrl)) {
        apiUrl = 'http://localhost:1338';
      } else {
        apiUrl = config.apiUrl;
      }

      return apiUrl + "/" + uriSegments;
    }
  };

});