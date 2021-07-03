function resetGame() {
	// points = 0
	points = 0
	frame = 0
	obstacles = [];
}

function createNextGeneration() {
	resetGame();
	normalizeFitness(dinos);
	alives = generate(dinos);
	dinos = alives.slice();
}

function generate(oldDinos) {
	let newDinos = [];
	for (let i = 0; i < oldDinos.length; i++) {
		// Select a dino based on fitness
		let dino = poolSelection(oldDinos);
		newDinos[i] = dino;
	}
	return newDinos;
}

function normalizeFitness(dinos) {
	for (let i = 0; i < dinos.length; i++) {
		dinos[i].score = pow(dinos[i].score, 2);
	}

	let sum = 0;
	for (let i = 0; i < dinos.length; i++) {
		sum += dinos[i].score;
	}

	for (let i = 0; i < dinos.length; i++) {
		dinos[i].fitness = dinos[i].score / sum;
	}
}

// An algorithm for picking one dino from an array
// based on fitness
function poolSelection(dinos) {
	// Start at 0
	let index = 0;

	// Pick a random number between 0 and 1
	let r = random(1);

	// Keep subtracting probabilities until you get less than zero
	// Higher probabilities will be more likely to be fixed since they will
	// subtract a larger number towards zero
	while (r > 0) {
		r -= dinos[index].fitness;
		// And move on to the next
		index += 1;
	}

	// Go back one
	index -= 1;

	// Make sure it's a copy!
	// (this includes mutation)
	return dinos[index].copy();
}