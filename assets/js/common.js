/**
 * Created by ajavonitalla on 9/29/2014.
 */
(function () {
  "use strict";

  //Handle issues in IE where console is undefined
  if (typeof console === "undefined") {
    window.console = {
      log: function () {
        return;
      },
      error : function () {
        return;
      }
    };
  }
}());