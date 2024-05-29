class Caminante {
  constructor(x, y, dir, esRectangular) {
    this.x = x;
    this.y = y;
    this.t = 15;
    this.vel = 2;
    this.dir = dir;
    push();
    colorMode(HSB, 360, 100, 100, 100);
    this.pincelada = loadImage("data/pincelada.png");
    this.elColor = esRectangular
      ? color(random(210, 270), 100, 100)
      : color(random(0, 60), 100, 100);
    pop();
  }

  dibujar() {
    push();
    tint(this.elColor);
    // noStroke();
    // fill(this.elColor);
    // ellipse(this.x, this.y, this.t, this.t);
    image(this.pincelada, this.x, this.y, 15, 15);
    pop();
  }

  mover(variacion) {
    this.dir += random(-15 * variacion, 15 * variacion);
    this.x += this.vel * Math.cos(toRad(this.dir));
    this.y += this.vel * Math.sin(toRad(this.dir));
  }
}
