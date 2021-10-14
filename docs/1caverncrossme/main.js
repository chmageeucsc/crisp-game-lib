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

  /**
 * @typedef {{
 * pos: Vector,
   * }} Player
   */
  
  /**
   * @type { Player }
   */
  let player;

// 'update()' is called every frame (60 times per second).
function update() {
  if (!ticks) {
    // A CrispGameLib function
    // First argument (number): number of times to run the second argument
    // Second argument (function): a function that returns an object. This
    // object is then added to an array. This array will eventually be
    // returned as output of the times() function.
    droplets = times(6, () => {
      // Random number generator function
      // rnd( min, max )
      const posX = rnd(0, G.WIDTH);
      const posY = rnd(0, G.HEIGHT);
      // An object of type Droplet with appropriate properties
      return {
        pos: vec(posX, posY),
        speed: rnd(G.DROPLET_SPEED_MIN, G.DROPLET_SPEED_MAX)
      };
    });
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
    player = {
      pos: vec(G.WIDTH * 0.5, G.HEIGHT * 0.5)
    };
  }
  if (spikes.length === 0) {
    for (let i = 0; i < 3; i++) {
        const posX = rnd(0, G.WIDTH);
        const posY = G.HEIGHT;
        //spikes.push({ pos: vec(posX, posY), speed: G.SPIKE_SPEED_MIN })
    }
  }
  // Update for Droplet
  droplets.forEach((d) => {
    // Move the droplet downwards
    d.pos.y += d.speed;
    // Bring the droplet back to top once it's past the bottom of the screen
    d.pos.wrap(0, G.WIDTH, 0, G.HEIGHT);

    // Choose a color to draw
    color("blue");
    // Draw the droplet as a square of size 1
    box(d.pos, 1);
  });
  // Update for Spike
  spikes.forEach((s) => {
    // Move the spike downwards
    s.pos.y += s.speed;
    // Bring the star back to top once it's past the bottom of the screen
    s.pos.wrap(0, G.WIDTH, 0, G.HEIGHT);

    // Choose a color to draw
    color("black");
    char("a", vec(s.pos));
  });
  player.pos = vec(input.pos.x, input.pos.y);
  player.pos.clamp(4, G.WIDTH-4, 4, G.HEIGHT-4);
  // Choose a color to draw
  color("black");
  char("b", vec(player.pos));

  remove(spikes, (s) => {
    s.pos.y += s.speed;
    color("black");
    char("a", s.pos);

    return (s.pos.y > G.HEIGHT);
  });
}