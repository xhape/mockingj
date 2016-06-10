/**
 * Created by ajavonitalla on 1/5/2015.
 */
angular.module('utils.sails', ['utils', 'ngSails']).factory('SailsClient', function ($q, $sails, common, lodash) {
  "use strict";

  var BaseService = function (modelName) {
    this.modelName = modelName;
  };

  /**
   *
   * @param {Object} || {string} options,
   *        {Object}
   *          options.path (optional) will be used if specified
   *          options.modelId (optional) will be used together with this.path
   *        {String}
   *          assume that its a modelId
   * @returns {Deferred.promise|*}
   */
  BaseService.prototype.get = function (options) {
    var deferred = $q.defer(), url = common.prepareUrl(this.modelName);
    if (options) {
      if (lodash.isPlainObject(options)) {
        if (options.path) {
          url = options.path;
        } else if (options.modelId) {
          url += '/' + options.modelId;
        }
      } else {
        //passed argument is the model id
        url += '/' + options;
      }
    }

    $sails.get(url).success(function (model) {
      return deferred.resolve(model);
    }).error(function (data) {
      deferred.reject(data);
    });

    return deferred.promise;
  };

  /**
   * @param modelToCreateOrUpdate
   * @param path (optional)
   * @returns {Deferred.promise|*}
   */
  BaseService.prototype.post = function (modelToCreateOrUpdate, path) {
    var deferred = $q.defer(), url = path || common.prepareUrl(this.modelName);
    $sails.post(url, modelToCreateOrUpdate).success(function (model) {
      return deferred.resolve(model);
    }).error(function (data) {
      deferred.reject(data);
    });

    return deferred.promise;
  };

  /**
   * @param modelToUpdate
   * @param path (optional)
   * @returns {Deferred.promise|*}
   */
  BaseService.prototype.put = function (modelToUpdate, path) {
    var deferred = $q.defer(), url = path || common.prepareUrl(this.modelName) + "/" + modelToUpdate.id;
    $sails.put(url, modelToUpdate).success(function (model) {
      return deferred.resolve(model);
    }).error(function (data) {
      deferred.reject(data);
    });

    return deferred.promise;
  };

  BaseService.prototype.delete = function (modelId) {
    var deferred = $q.defer(), url = common.prepareUrl(this.modelName) + '/' + modelId;
    $sails.delete(url).success(function (model) {
      return deferred.resolve(model);
    }).error(function (data) {
      deferred.reject(data);
    });

    return deferred.promise;
  };

  BaseService.prototype.bindEvent = function (callback) {
    $sails.on(this.modelName, callback);
  };

  return BaseService;
});