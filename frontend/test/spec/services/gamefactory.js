'use strict';

describe('Service: gameFactory', function () {

  // load the service's module
  beforeEach(module('testingApp'));

  // instantiate service
  var gameFactory;
  beforeEach(inject(function (_gameFactory_) {
    gameFactory = _gameFactory_;
  }));

  it('should do something', function () {
    expect(!!gameFactory).toBe(true);
  });

});
