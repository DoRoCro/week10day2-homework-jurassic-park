var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function() {

  var dino1;

  beforeEach('before each', function() {
    dino1 = new Dinosaur('Tyrannosaurus');
  })

  it('should have a type', function(){
    assert.strictEqual('Tyrannosaurus', dino1.type);
  })
})