var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js');

describe('Park', function() {

  var park1;
  var dino1

  beforeEach('before each', function() {
    park1 = new Park('We\'re all going to die',1);
    dino1 = new Dinosaur('Stegosaurus', 2)
  })

  it('should have a name', function(){
    assert.strictEqual('We\'re all going to die', park1.name);
  })

  it('Should start with no dinosaurs', function() {
    assert.strictEqual(0, park1.numberDinosaurs);
  })

  it('can add a dinosaur', function(){
    park1.addDino(dino1);
    assert.strictEqual(1, park1.numberDinosaurs)
  })

  it('can remove all dinosaurs of a type', function(){
    park1.addDino(dino1);
    park1.addDino(dino1);
    park1.addDino(dino1);
    park1.addDino(dino1);
    park1.addDino(new Dinosaur('Tyrannosaurus'));
    assert.strictEqual(5, park1.numberDinosaurs);
    assert.strictEqual(4, park1.numberOf('Stegosaurus'))
    assert.strictEqual(1, park1.numberOf('Tyrannosaurus'))
    park1.eject('Stegosaurus');
    assert.strictEqual(0, park1.numberOf('Stegosaurus'))
    assert.strictEqual(1, park1.numberOf('Tyrannosaurus'))

  })
})