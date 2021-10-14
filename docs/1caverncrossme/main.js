// Write the game name to 'title'.
title = "CAVERNCROSS";

// 'description' is displayed on the title screen.
description = `
[Hold] Stretch
[Tap] Jump
`;

// User-defined characters can be written here.
characters = [
`
llllll
llllll
 llll  
 llll  
  ll   
  ll   
`,`
  r r 
 rlrlr
 ryyrr
  rrr 
  LrL 
 LL LL
`
];

const G = {
	WIDTH: 100,
	HEIGHT: 75,
  DROPLET_SPEED_MIN: 1.0,
	DROPLET_SPEED_MAX: 2.0,
  SPIKE_SPEED_MIN: 1.0,
	SPIKE_SPEED_MAX: 2.0
}

// Configure game options.
options = {
  viewSize: {x: G.WIDTH, y: G.HEIGHT},
  isPlayingBgm: true,
  isReplayEnabled: true,
  // If you want to play a different BGM or SE,
  // you can try changing the 'seed' value.
  seed: 400,
};

/**
* @typedef {{
  * pos: Vector,
  * speed: number
  * }} Droplet
  */
  
  /**
  * @type  { Droplet [] }
  */
  let droplets;

/**
* @typedef {{
  * pos: Vector,
  * speed: number
  * }} Spike
  */
  
  /**
  * @type  { Spike [] }
  */
  let spikes;

// 'update()' is called every frame (60 times per second).
function update() {
  if (!ticks) {
    // A CrispGameLib function
    // First argument (number): number of times to run the second argument
    // Second argument (function): a function that returns an object. This
    // object is then added to an array. This array will eventually be
    // returned as output of the times() function.
    /*droplets = times(6, () => {
      // Random number generator function
      // rnd( min, max )
      const posX = rnd(0, G.WIDTH);
      const posY = rnd(0, G.HEIGHT);
      // An object of type Droplet with appropriate properties
      return {
        pos: vec(posX, posY),
        speed: rnd(G.DROPLET_SPEED_MIN, G.DROPLET_SPEED_MAX)
      };
    });*/
    spikes = times(3, () => {
      // Random number generator function
      // rnd( min, max )
      const posX = rnd(0, G.WIDTH);
      const posY = G.HEIGHT
      // An object of type Spike with appropriate properties
      return {
        pos: vec(posX, posY),
	      speed: rnd(G.SPIKE_SPEED_MIN, G.SPIKE_SPEED_MAX)
      };
    });
  }
  // Update for Droplet
  /*droplets.forEach((d) => {
    // Move the droplet downwards
    d.pos.y += d.speed;
    // Bring the droplet back to top once it's past the bottom of the screen
    d.pos.wrap(0, G.WIDTH, 0, G.HEIGHT);

    // Choose a color to draw
    color("blue");
    // Draw the droplet as a square of size 1
    box(d.pos, 1);
  });*/
  // Update for Spike
  spikes.forEach((s) => {
    // Move the spike downwards
    s.pos.y += s.speed;
    // Bring the star back to top once it's past the bottom of the screen
    s.pos.wrap(0, G.WIDTH, 0, G.HEIGHT);

    // Choose a color to draw
    color("black");
    // Draw the star as a square of size 1
    char("b", vec(s.pos));
  });
}