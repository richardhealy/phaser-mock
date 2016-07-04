var noop = function() {};
var Phaser = {};
Phaser.Game = function(width, height) {
  this.width = width;
  this.height = height;
  this.state = new Phaser.StateManager();
  this.device = new Phaser.Device();
  this.add = new Phaser.GameObjectFactory();
  this.make = new Phaser.GameObjectCreator();
  this.time = new Phaser.Time();
  this.load = new Phaser.Loader();
  this.world = new Phaser.Group();
};
Phaser.GameObjectFactory = function() {
  this.audio = function() { return new Phaser.Sound(); };
  this.sprite = function() { return new Phaser.Sprite(); };
  this.group = function() { return new Phaser.Group(); };
};
Phaser.GameObjectCreator = Phaser.GameObjectFactory;
Phaser.Sound = function() {
  this.play = noop;
  this.stop = noop;
  this.fadeOut = noop;
  this.fadeIn = noop;
};
Phaser.StateManager = function() {
  this.add = noop;
};
Phaser.State = function() {
};
Phaser.Device = function() {
  this.whenReady = noop;
};
Phaser.Signal = function() {
  this.addOnce = noop;
  this.add = noop;
  this.dispatch = noop;
};
Phaser.Group = function() {
  this.children = [];
  this.add = function(child) { this.children.push(child); };
};
Phaser.Sprite = function() {
};
Phaser.Time = function() {
  this.events = new Phaser.Timer();
};
Phaser.Timer = function() {
  this.add = function(time, fn, ctx) {
    var args = [].slice.call(arguments, 3);
    setTimeout(function() {
      fn.apply(ctx, args);
    }, time);
  };
};
Phaser.Loader = function() {
  this.baseURL = '';
  this.image = noop;
  this.atlas = noop;
  this.audio = noop;
  this.onLoadComplete = new Phaser.Signal();
};

module.exports = Phaser;
