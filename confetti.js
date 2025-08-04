// Confetti animation (simple)
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let W, H;
let confetti = [];

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function Confetto() {
  this.x = Math.random() * W;
  this.y = Math.random() * H - H;
  this.radius = randomRange(5, 10);
  this.color = `hsl(${randomRange(0, 360)}, 70%, 60%)`;
  this.speed = randomRange(1, 3);
  this.wind = randomRange(-0.5, 0.5);
  this.tilt = randomRange(-15, 15);
  this.tiltSpeed = randomRange(0.1, 0.3);
}

Confetto.prototype.update = function() {
  this.y += this.speed;
  this.x += this.wind;
  this.tilt += this.tiltSpeed;

  if (this.y > H) {
    this.y = -this.radius;
    this.x = Math.random() * W;
  }
};

Confetto.prototype.draw = function() {
  ctx.beginPath();
  ctx.ellipse(this.x + this.tilt, this.y, this.radius, this.radius / 2, this.tilt * Math.PI/180, 0, 2 * Math.PI);
  ctx.fillStyle = this.color;
  ctx.fill();
};

function setup() {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
  confetti = [];
  for (let i = 0; i < 150; i++) {
    confetti.push(new Confetto());
  }
}

function draw() {
  ctx.clearRect(0, 0, W, H);
  confetti.forEach(c => {
    c.update();
    c.draw();
  });
  requestAnimationFrame(draw);
}

window.addEventListener('resize', setup);

setup();
draw();