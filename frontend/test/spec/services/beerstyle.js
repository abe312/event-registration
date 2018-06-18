'use strict';

describe('Service: beerStyle', function () {

  // load the service's module
  beforeEach(module('testingApp'));

  // instantiate service
  var beerStyle;
  beforeEach(inject(function (_beerStyle_) {
    beerStyle = _beerStyle_;
  }));

  it('should do something', function () {
    expect(!!beerStyle).toBe(true);
  });

});
