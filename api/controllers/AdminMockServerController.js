/**
 * AdminMockServerController
 *
 * @description :: Server-side logic for managing Mockservers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

function _handleResponse(err, res, result) {
  if (err) {
    return res.serverError(err);
  } else {
    if (result) {
      return res.ok(result);
    } else {
      return res.ok();
    }
  }
}

module.exports = {

  update: function (req, res) {
    console.log('Start AdminMockServerController.update');

    var mockResponse = req.body;
    if (mockResponse.id) {
      MockResponse.update({id: mockResponse.id}, mockResponse).exec(function(err, result){
        return _handleResponse(err, res, result)
      });
    } else {
      MockResponse.create(mockResponse).exec(function(err, result){
        return _handleResponse(err, res, result)
      });
    }
  },

  getAll: function (req, res) {
    console.log('Start AdminMockServerController.getAll');

    MockResponse.find().exec(function(err, result){
      return _handleResponse(err, res, result)
    });
  },

  get: function (req, res) {
    console.log('Start AdminMockServerController.getAll');

    var id = req.param("id");
    MockResponse.findOne({id : id}).exec(function(err, result){
      return _handleResponse(err, res, result)
    });
  },

  destroy: function (req, res) {
    console.log('Start AdminMockServerController.delete');

    var id = req.param("id");
    MockResponse.destroy({id : id}).exec(function(err, result){
      return _handleResponse(err, null, result)
    });
  }
};

