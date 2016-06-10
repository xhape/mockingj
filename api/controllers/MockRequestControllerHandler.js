/**
 * MockServerController
 *
 * @description :: Server-side logic for managing Mockservers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

function _handleResponse(res, request, result) {
  if (result && result.length == 1) {
    var mockResponse = result[0].response;
    if (mockResponse.delay) {
      return _buildDelayedResponse(res, mockResponse);
    } else {
      return _buildResponse(res, mockResponse);
    }
  } else if (result && result.length > 1) {
    console.log("Multiple mocks encountered");
    //TODO randomize returned result
    return _buildResponse(res, result[0].response);
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
    case 200:
      return res.ok(mockresponse.response);
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
      return res.badRequest("Response code that yet supported");
  }
}

function _extendRequest (req) {
  var request = req;
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
    console.log("Request: URL= " + req.url + " ,Method= " + req.method);

    var request = _extendRequest(req);
    MockRequest.find({url: request.baseUrl, method: req.method}).then(function (result) {
      _handleResponse(res, request, result);
    }).catch(function (err) {
      console.log("Error processing request " + request.originalUrl);
      return res.badRequest(err);
    });
  }

};

