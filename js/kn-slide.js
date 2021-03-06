function Slide(_parent, _opt) {
  var opt = _opt || {};
  this.parent =_parent;
  this.effect = opt.effect || 'horizontal';
  this.speed = Number(opt.speed) || 500;
  this.autoPlay = opt.autoPlay === false ? false : true;
  this.autoPlaySpeed = Number(opt.autoPlaySpeed) || 3000;
  
  if(
    this.effect.toLowerCase !== 'horizontal' && 
    this.effect.toLowerCase !== 'verical' &&
    this.effect.toLowerCase !== 'fade') {
      this.effect = 'horizontal';
  }
  if(
    this.effect.toLowerCase !== 'horizontal' && 
    this.effect.toLowerCase !== 'verical' &&
    this.effect.toLowerCase !== 'fade') {
      this.effect = 'horizontal';
  }
  this.init();
}

Slide.prototype.init = function() {
  console.log(this);
}
/* 
{
  effect: 'horizontal', 'vertical', 'fade'
  speed: 500,
  autoPlay: true,
  autoPlaySpeed: 3000
} */