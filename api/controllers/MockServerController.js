/**
 * MockServerController
 *
 * @description :: Server-side logic for managing Mockservers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

function _handleResponse(res, request, result) {
  if (result && result.length == 1) {
    var mockResponse = result[0];
    if (mockResponse.delay) {
      return _buildDelayedResponse(res, mockResponse);
    } else {
      return _buildResponse(res, mockResponse);
    }
  } else if (result && result.length > 1) {
    console.log("Multiple mocks encountered");
    return res.ok();
  } else {
    console.log("The request \"" + request.originalUrl + " " + request.method + "\" is not yet mocked!");
    return res.badRequest("Response not yet mocked");
  }
}

function _buildDelayedResponse(res, mockresponse) {
  setTimeout(function () {
    return _buildResponse(res, mockresponse);
  }, mockresponse.delay);
}

function _buildResponse (res, mockresponse) {
  switch (mockresponse.responseCode) {
    case 400:
      return res.badRequest(mockresponse.response);
      break;
    case 403:
      return res.forbidden(mockresponse.response);
      break;
    case 404:
      return res.notFound(mockresponse.response);
      break;
    case 500:
      return res.serverError(mockresponse.response);
      break;
    default:
      return res.ok(mockresponse.response);
  }
}

function _getRequest (req) {
  var request = {};
  request.originalUrl = req.url;
  request.method = req.method;
  request.urlToken  = req.url.split("?");
  request.baseUrl = request.urlToken[0];
  if (request.urlToken.length > 1) {
    request.query = request.urlToken[1];
  }

  return request;
}

module.exports = {

  handleRequest: function (req, res) {
    console.log("URL: " + req.url + " ,Method: " + req.method);

    var request = _getRequest(req);
    MockResponse.find({url: request.baseUrl, method: req.method}).then(function (result) {
      _handleResponse(res, request, result);
    }).catch(function (err) {
      console.log("Error processing request " + request.originalUrl);
      return res.badRequest(err);
    });
  },

  /**
   * with the introduction of test case we can now create multiple mockresponse with
   *
   */
  handleTestCase: function (req, res) {
    var testCaseId = req.param("testCaseId");
    return res.ok();
  }
};

