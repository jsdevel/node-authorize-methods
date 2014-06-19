# authorize-methods [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]
> Connect middleware to authorize HTTP methods.

### Example

describe('authorize-methods', function(){
  var request = require('supertest');
  var app = require('express')();
  var authorizedMethods = require('authorize-methods')(['get']);

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

##LICENSE
``````
The MIT License (MIT)

Copyright (c) 2014 Joseph Spencer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
``````

[downloads-image]: http://img.shields.io/npm/dm/authorize-methods.svg
[npm-url]: https://npmjs.org/package/authorize-methods
[npm-image]: http://img.shields.io/npm/v/authorize-methods.svg

[travis-url]: https://travis-ci.org/jsdevel/node-authorize-methods
[travis-image]: http://img.shields.io/travis/jsdevel/node-authorize-methods.svg

[coveralls-url]: https://coveralls.io/r/jsdevel/node-authorize-methods
[coveralls-image]: http://img.shields.io/coveralls/jsdevel/node-authorize-methods/master.svg
