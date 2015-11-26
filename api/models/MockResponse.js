/**
* MockResponse.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    url: 'string',
    originalUrl: 'string',
    method: 'string',
    response: 'json',
    responseCode: 'integer',
    request: 'json'
  }

};

