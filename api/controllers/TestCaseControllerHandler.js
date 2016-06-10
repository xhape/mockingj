/**
 * TestCaseController
 *
 * @description :: Server-side logic for managing Testcases
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * with the introduction of test case we can now create multiple mockresponse with
   *
   */
  handleTestCase: function (req, res) {
    var testCaseId = req.param("testCaseId");
    return res.ok();
  }
};

