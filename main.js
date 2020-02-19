let m = []
let y = 0
//генератор появления по горизонтали
let ranWidth = randomInteger(1, 620)
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

//геныч скорости
let ranForSpeed = selfRandom(0.1, 2)
animate()
function selfRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

//генератор цвета
let color = random_rgba()
function random_rgba() {
  let o = Math.round,
    r = Math.random,
    s = 255
  return "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")"
}

function Rect() {
  this.x = ranWidth
  this.y = y
  this.x1 = 20
  this.y1 = 20
  this.color = random_rgba()
  this.sp = ranForSpeed
  this.draw = function(ctx) {
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.fillRect(this.x, this.y, this.x1, this.y1)
    ctx.stroke()
  }
}

function animate() {
  let canvas = document.getElementById("canvas")
  let ctx = canvas.getContext("2d")
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (let i of m) {
    i.draw(ctx)
    i.y += i.sp
  }
  requestAnimationFrame(animate)
}

setInterval(() => {
  m.push(new Rect())
}, 1000)
////////////////////////////
