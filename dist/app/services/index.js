'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factories = require('./factories');

Object.keys(_factories).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _factories[key];
    }
  });
});

var _mail = require('./mail');

Object.keys(_mail).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mail[key];
    }
  });
});

var _signUpCodes = require('./sign-up-codes');

Object.keys(_signUpCodes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _signUpCodes[key];
    }
  });
});

var _token = require('./token');

Object.keys(_token).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _token[key];
    }
  });
});

var _users = require('./users');

Object.keys(_users).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _users[key];
    }
  });
});