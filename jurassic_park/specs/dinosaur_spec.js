var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function() {

  var dino1;

  beforeEach('before each', function() {
    dino1 = new Dinosaur('Tyrannosaurus',1);
  })

  it('should have a type', function(){
    assert.strictEqual('Tyrannosaurus', dino1.type);
  })

  it('Should define number of offspring per year', function() {
    assert.strictEqual(1, dino1.offspringPerYear);
  })
})