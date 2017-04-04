var Park = function(name) {
  this.name = name;
  this.numberDinosaurs = 0;
  this.dinos = [];
}

Park.prototype.addDino = function(dinosaur) {
  this.dinos.push(dinosaur);
  this.numberDinosaurs = this.dinos.length;
};

module.exports = Park;