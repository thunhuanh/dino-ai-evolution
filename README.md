# AI Plays Chrome Dinosaur Game

This project implements an AI that learns to play the Chrome Dinosaur game using neural networks and genetic algorithms. The AI dinosaurs evolve over generations to improve their jumping and obstacle avoidance skills.

## Overview

The project uses:
- TensorFlow.js for neural network implementation
- p5.js for game graphics and animation
- Genetic algorithms for evolution and learning
- Neural network with 3 inputs, 5 hidden units, and 2 outputs

## Features

- Population-based training using genetic algorithms
- Real-time visualization of dinosaur learning
- Score tracking and generation counter
- Automated obstacle generation
- Neural network-based decision making
- Fitness-based selection for next generation

## Dependencies

- TensorFlow.js (v1.0.0)
- p5.js (v1.3.1)
- p5.sound
- p5.dom
- p5.collide2d

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai_play_dino_run.git
cd ai_play_dino_run
```

2. Open `index.html` in a web browser to start the simulation.

## How It Works

### Neural Network Architecture
- **Inputs**: 
  - Distance to closest obstacle
  - Dinosaur's Y position
  - Dinosaur's velocity
- **Hidden Layer**: 5 units with ReLU activation
- **Outputs**: 
  - Jump probability
  - Fall probability

### Genetic Algorithm
- Population size: 30 dinosaurs
- Fitness based on survival time
- Selection using fitness-proportionate selection
- Mutation rate: 0.1
- Elite selection for best performers

### Game Mechanics
- Dinosaurs must avoid obstacles by jumping
- Score increases with survival time
- Generation advances when all dinosaurs collide with obstacles
- New obstacles spawn periodically

## Files Structure

- `index.html`: Main entry point and script loading
- `sketch.js`: Main game loop and setup
- `dino.js`: Dinosaur class and neural network integration
- `obstacle.js`: Obstacle generation and management
- `nn.js`: Neural network implementation
- `genetic.js`: Genetic algorithm implementation

## Controls

The simulation runs automatically. You can observe:
- Current generation number
- Maximum score achieved
- Current score
- Multiple dinosaurs learning simultaneously

## Contributing

Feel free to open issues or submit pull requests to improve the project.

## License

This project is available under the MIT License.
