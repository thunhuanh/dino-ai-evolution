class Dino {
    constructor(brain) {
      this.w = 20
      this.h = 50
      this.x = 30
      this.y = height - this.h
      
      this.velocity = 0
      this.gravity = 0.9

      this.score = 0
      this.fitness = 0

      this.maxVelocity = 14

      this.red = floor(random(255))
      this.green = floor(random(255))
      this.blue = floor(random(255))
      this.alpha = floor(random(100))

      this.canDoubleJump = false
      this.hasDoubleJump = false

      this.jumpCounter = 0

      if (brain instanceof NeuralNetwork) {
        this.brain = brain.copy();
        this.brain.mutate(0.1);
      } else {
        // Parameters are number of inputs, number of units in hidden Layer, number of outputs
        this.brain = new NeuralNetwork(3, 5, 2);
      }
    }
    
    copy() {
      return new Dino(this.brain)
    }

    jump(){
      if (this.jumpCounter < 2) {
        this.velocity = -this.maxVelocity
        this.jumpCounter++
      }
    }

    fall(){
      if (this.y < (height - this.h)) {
        this.velocity = this.maxVelocity
      }
    }


    collide(obstacle) {
      return collideRectRect(this.x, this.y, this.w, this.h, obstacle.x, obstacle.y, obstacle.w, obstacle.h)
    }

    getClosestObstacle(obstacles = []) {
      let min = Infinity
      let closest = null

      for (let o of obstacles) {
        let dist = o.x - this.x
        if (dist >= 0 && dist <= min) {
          min = dist
          closest = o
        }
      }

      return closest
    }

    getAction(obstacles) {
      let closest = this.getClosestObstacle(obstacles)

      if (closest) {
        let inputs = []

        inputs[0] = map(closest.x, this.x, width, 0, 1)

        inputs[1] = map(this.y, 0, height, 0, 1)
        
        inputs[2] = map(this.velocity, -this.maxVelocity, this.maxVelocity, 0, 1)

        const action = this.brain.predict(inputs)
        // single jump
        if (action[0] > 0.5) {
          this.jump()
        } 
        if (action[1] > 0.5) {
          this.fall()
        }

  
      }
    }
    
    update(){
      this.y += this.velocity
      this.velocity += this.gravity
      if (this.y >= (height - this.h)) {
        this.y = height - this.h
      }
      
      // reset double jump
      if (this.y == height - this.h) {
        this.jumpCounter = 0
      }
      

      this.score++
    }
    
    show(){
      push()
      fill(this.red, this.green, this.blue, this.alpha)
      rect(this.x, this.y, this.w, this.h)
      pop()
    }
  }