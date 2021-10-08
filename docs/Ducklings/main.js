title = "Ducklings";

description = `
[TAP] to turn
`;

characters = [

];

const G = {
	WIDTH: 100,
	HEIGHT: 100, 
  BUB_SPEED_MIN: 0.5,
	BUB_SPEED_MAX: 1.0
};

options = {
  viewSize: {x: G.WIDTH, y: G.HEIGHT}
};

/**
* @typedef {{
  * pos: Vector,
  * speed: number
  * }} Bubble
  */
  
  /**
  * @type  { Bubble [] }
  */
  let bubbles;

function update() {
  //init
  if (!ticks) {
    bubbles = times(20, () => {
      // Random number generator function
      // rnd( min, max )
      const posX = rnd(0, G.WIDTH);
      const posY = rnd(0, G.HEIGHT);
      // An object of type Star with appropriate properties
      return {
        pos: vec(posX, posY),
        speed: rnd(G.BUB_SPEED_MIN, G.BUB_SPEED_MAX)
      };
    });

    // Update for Bubble
    bubbles.forEach((s) => {
      // Move the star downwards
      s.pos.y += s.speed;
      // Bring the bubble back to top once it's past the bottom of the screen
      s.pos.wrap(0, G.WIDTH, 0, G.HEIGHT);

      // Choose a color to draw
      color("light_blue");
      // Draw the star as a square of size 1
      box(s.pos, 1);
    });
  }

  // border of pond
  color("light_black");
  rect(0, 0, 100, 6);
  rect(0, 94, 100, 6);
  rect(0, 6, 6, 88);
  rect(94, 6, 6, 88);
  
}
