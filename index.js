'use strict';

module.exports = function authorizeMethods(methods){
  methods = methods.map(function(method){return method.toUpperCase();});
  return function(req, res, next){
    if(~methods.indexOf(req.method.toUpperCase()))req.authorized = true;
    next();
  };
};
