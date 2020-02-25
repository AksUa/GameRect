let m = []
let y = 0
//генератор появления по горизонтали
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

//геныч скорости
function selfRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

//генератор цвета
function random_rgba() {
  let o = Math.round,
    r = Math.random,
    s = 255
  return "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")"
}
//////////////
function Rect() {
  this.x = randomInteger(1, 620)
  this.y = y
  this.x1 = 20
  this.y1 = 20
  this.color = random_rgba()
  this.sp = selfRandom(0.1, 2)
  this.draw = function(ctx) {
    ctx.beginPath()
    ctx.fillStyle = this.color
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

let startik = () => {
  a = setInterval(() => {
    m.push(new Rect())
  }, 1000)
  start.removeEventListener("click", startik)
}
const start = document.querySelector(".start")
start.addEventListener("click", startik)

function stopik() {
  clearInterval(a)
  m.splice(0, m.length)
  count = 0
  start.addEventListener("click", startik)
}

const stop = document.querySelector(".stop")
stop.addEventListener("click", stopik)
let score = document.getElementById("score")
let count = 0
catchSquare = (event) => {
  for (key of m) {
    if (
      event.clientX >= key.x + 30 &&
      event.clientX <= key.x + 120 &&
      event.clientY >= key.y + 138 &&
      event.clientY <= key.y + 158
    ) {
      m.splice(m.indexOf(key), 1)
      count += 1
      score.innerHTML = `${count}`
    }
  }
}
canvas.addEventListener("click", catchSquare, true)
document.body.onload = animate
