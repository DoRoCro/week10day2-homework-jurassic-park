var Park = function(name) {
  this.name = name;
  this.numberDinosaurs = 0;
  this.dinos = [];
}

Park.prototype.addDino = function(dinosaur) {
  this.dinos.push(dinosaur);
  this.numberDinosaurs = this.dinos.length;
};
Park.prototype.numberOf = function(dinoType) {
  var count = 0;
  for(var dino of this.dinos){
    if(dino.type === dinoType) count ++;
  }
  return count;
}
Park.prototype.eject = function(dinoType) {
  var ejected = 0;
  for (var i = this.dinos.length - 1; i >= 0; i--) {
    if (this.dinos[i].type === dinoType) {
      this.dinos.splice(i, 1)
      ejected ++;
    }
  }
  return ejected;
};
Park.prototype.fecundityAbove = function(threshold) {
  var selectedDinosArray = [];
  for(dino of this.dinos){
    if(dino.offspringPerYear > threshold){
      selectedDinosArray.push(dino);
    }
  }
  return selectedDinosArray;
};

module.exports = Park;