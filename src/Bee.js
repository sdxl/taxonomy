var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};
  Bee.prototype = Object.create(Grub.prototype)
  Bee.prototype.constructor = Bee;



// Bee.prototype = new Grub;

//var bee1 = Bee()
//bee1.prototype.constructor
