'use strict';

/**
 *  auth token
 */
angular.module('psJwtApp')
  .factory('auth', function ($window) {
    var storage = $windows.localStorage;
    var cachedToken;
    return {
      setToken: function (token) {
        cachedToken = token;
        storage.setItem('usertoken', token);
      },
      getToken: function() {
        if (!cachedToken)
          cachedToken = storage.getItem('userToken');

        return cachedToken;
      },
      isAuthenticated: function() {
        return !!this.getToken();
      }
    }
  });
