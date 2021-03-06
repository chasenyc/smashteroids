(function () {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = function () {};

  Util.inherits = function(ChildClass, ParentClass) {
    var Surrogate = function () {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };

  Util.randomVel = function(max, min) {
    var velX = ((Math.random() * (max)) + min) * (Math.random() < 0.5 ? -1 : 1);
    var velY = ((Math.random() * (max)) + min) * (Math.random() < 0.5 ? -1 : 1);
    return [velX, velY];
  };

})();
