angular.module('utils.title', []).factory('titleUtils', function ($document) {
  "use strict";

  var suffix, title;
  suffix = title = " - QueueMPower";

  return {
    setSuffix: function (s) {
      suffix = s;
      return suffix;
    },

    getSuffix: function () {
      return suffix;
    },

    setTitle: function (t) {
      if (suffix !== "") {
        title = t + suffix;
      } else {
        title = t;
      }
      return $document.prop('title', title);
    },

    getTitle: function () {
      return $document.prop('title');
    }
  };
});