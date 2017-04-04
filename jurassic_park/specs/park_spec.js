var assert = require('assert');
var Park = require('../park.js');

describe('Park', function() {

  var park1;

  beforeEach('before each', function() {
    park1 = new Park('We\'re all going to die',1);
  })

  it('should have a name', function(){
    assert.strictEqual('We\'re all going to die', park1.name);
  })

  it('Should start with no dinosaurs', function() {
    assert.strictEqual(0, park1.numberDinosaurs);
  })
})