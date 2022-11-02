var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 150;
canvas.height = window.innerHeight - 200;

var img2 = new Image();
img2.src = "dinosaur.png";

var dino = {
  x: 100,
  y: 400,
  width: 120,
  height: 120,
  draw() {
    ctx.fillStyle = "green";
    //ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img2, this.x, this.y);
  },
};
var img1 = new Image();
img1.src = "cactus.png";

class Cactus {
  constructor() {
    this.x = 1500;
    this.y = 400;
    this.width = 100;
    this.height = 100;
  }
  draw() {
    ctx.fillStyle = "red";
    //ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img1, this.x, this.y);
  }
}

var timer = 0;
var cactuss = [];
var jump_timer = 0;
var animation;

function ani() {
  animation = requestAnimationFrame(ani);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 800 === 0) {
    var cactus = new Cactus();
    cactuss.push(cactus);
  }
  if (timer % 600 === 0) {
    var cactus = new Cactus();
    cactuss.push(cactus);
  }

  cactuss.forEach((a, i, o) => {
    //x좌표가 0미만 제거
    if (a.x < 0) {
      o.splice(i, 1);
    }
    a.x--;
    attack(dino, a);
    a.draw();
  });

  if (jump == true) {
    dino.y--;
    jump_timer++;
  }

  if (jump == false) {
    if (dino.y < 400) {
      dino.y++;
    }
  }

  if (jump_timer > 100) {
    jump = false;
    jump_timer = 0;
  }
  dino.draw();
}

ani();

//충돌확인
function attack(dino, cactus) {
  var dx = cactus.x - (dino.x + dino.width);
  var dy = cactus.y - (dino.y + dino.height);
  if (dx < 0 && dy < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
    alert("game over");
  }
}
var jump = false;
document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    jump = true;
  }
});
