window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

var c = document.getElementById('canv');
c.width = window.innerWidth;
c.height = window.innerHeight;

var $ = c.getContext('2d');
var i = 0;

var tri = {
  obj: {
    num: 36,
    //step: Math.PI / random(Math.abs(-410),Math.sqrt(2350)),
    step: Math.PI / 350,
    rad: 200

  },

  draw_: function($) {

    var rot = Math.atan2(Math.sqrt(20),Math.floor(-3.2)) * Math.abs(3) * Math.PI;
    $.globalCompositeOperation = 'source-over';
    for (var n = 0; n <5; ++n) {
      $.scale(1.43, 1.78);
      $.beginPath();
      $.fillStyle = 'hsla(' + i * 30 + ', 80%, 100%,.51)';
      $.fillRect(1.5, 6.5, .015, .075);
      $.fill();
      
  $.globalCompositeOperation = 'color-dodge';
      $.beginPath();
      $.fillStyle = 'hsla(' + i * 360 + ', 80%, 50%,1)';
      $.arc(Math.floor(random(50,72)), Math.floor(random(30,62)), Math.round(1.099), random(-0.08,.8), Math.PI * 9, false);
      $.fill();
    }
    $.rotate(rot);
    $.beginPath();
    $.globalCompositeOperation = 'color-dodge'
    $.filStyle = 'hsla(' + i * 250 + ',100%, 90%,.061)';
    $.arc(Math.floor(random(10,20)), random(1.3,3), Math.sqrt(4), .02, random(8,Math.sqrt(8.77))* Math.PI, false);
    $.fill();
  }
};

function Obj(mid, off_, step, rt) {
  this.mid = mid;
  this.off_ = off_;
  this.step = step;

}

function random(min, max) {
  return Math.random() * (max - min) + min;
}


Obj.prototype.draw = function($) {
  this.step += tri.obj.step;
  $.save();
  $.translate(this.mid.x+10, this.mid.y-10);
  $.rotate(this.step + this.off_);
  tri.draw_($);

  $.restore();

};

var arr = [];
for (var i = 0; i < tri.obj.num/random(.7,.98); i++) {

  var t = i * Math.PI * 200 / tri.obj.num;
  arr.push(new Obj({
    x: c.width / 2 + tri.obj.rad * Math.cos(t * 5),
    y: c.height / 2 + tri.obj.rad * Math.sin(t * -5)
  }, t, Math.PI * i / .2));
   $.globalCompositeOperation = 'difference';
}

var go = function() {
  $.save();
  $.fillStyle = 'hsla(78,100%,20%,.01)';
  $.fillRect(0, 0, c.width, c.height);
 $.globalCompositeOperation = 'exclusion';
  for (var i in arr) {
    arr[i].draw($);
  }
  $.restore();
}

var run = function() {
  window.requestAnimFrame(run);
  go();
  i -= Math.pow(.33,random(0.5,0.7));

}

window.addEventListener('resize', function() {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
}, false);

run();