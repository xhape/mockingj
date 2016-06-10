angular.module('lodash', []).factory('lodash', function () {
  "use strict";

  return window._; // assumes lodash has already been loaded on the page
});