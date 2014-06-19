'use strict';

describe('authorize-methods', function(){
  var request = require('supertest');
  var app = require('express')();
  var authorizedMethods = require('./index.js')(['get']);

  app.post('/foo', authorizedMethods, function(req, res, next){
    res.send(200, !!req.authorized);
  });

  app.get('/foo', authorizedMethods, function(req, res, next){
    res.send(200, !!req.authorized);
  });

  it('should not authorize methods not provided', function(done){
    request(app)
    .post('/foo')
    .expect(200, 'false', done);
  });

  it('should authorize methods provided', function(done){
    request(app)
    .get('/foo')
    .expect(200, 'true', done);
  });
});
