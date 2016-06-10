/**
* MockResponse.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    request: {
      model : 'request',
      required: true
    },
    response: {
      model : 'response',
      required: true
    }
  }

};

