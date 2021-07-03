tf.setBackend("cpu");

let canvas
let dino
let dinos = []
let alives = []
let obstacles = []
let frame = 0
let points = 0
let maxPoints = 0
let threshHold = 60
let cloestObstacle = null

let generation = 1
let generationSpan
let population = 30

function setup() {
  canvas = createCanvas(400, 400);
  background(255)

  generationSpan = select("#generation")
  generationSpan.html(generation)
  // dino = new Dino()
  for (let i = 0; i < population; i++) {
    let tmpDino = new Dino()
    dinos.push(tmpDino)
    alives.push(tmpDino)
  }
}

function createObstacle() {
  let obstacle = new Obstacle()
  obstacles.push(obstacle)
}

// function keyPressed() {
//   if (keyCode == 32) {
//     dino.jump()
//   }
// }

function draw() {
  background(255)
  // dino.show()
  // dino.update()
  // draw obstacle


  for (let i = 0; i < alives.length; i++) {
    alives[i].update()
    alives[i].show()
  }

  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].update()
    obstacles[i].show()

    if (obstacles[i].offscreen()) {
      obstacles.splice(i, 1)
    }

    for (let j = 0; j < alives.length; j++) {
      let dino = alives[j]
      dino.getAction(obstacles)

      if (alives[j].collide(obstacles[i])) {
        alives.splice(j, 1)
      }

    }
  }

  if (alives.length <= 0) {
    generation++
    generationSpan.html(generation)
    createNextGeneration()
  }

  if (random(1) <= 0.0075) {
    createObstacle()
  }

  if (frame % 50 === 0) {
    createObstacle()
  }
  frame++
  
  push()
  textSize(16)
  fill(51)
  textAlign(CENTER)
  points++
  if (points >= maxPoints) {
    maxPoints = points
  }
  text(`max: ${Math.floor(maxPoints / 10)}`, width / 2 + 50 , 50)
  text(`point: ${Math.floor(points / 10)}`, width / 4, 50)
  pop()

}