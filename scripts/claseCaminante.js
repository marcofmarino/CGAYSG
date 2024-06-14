class Caminante {
  constructor(x, y, dir, color_, capa_, t_) {
    this.x = x;
    this.y = y;
    this.t = t_;
    this.vel = 3;
    this.dir = dir;
    this.elColor = color_;
    // this.pincelada = loadImage("data/pincelada.png");
    // this.pincelada = pincelada;
    this.capa = capa_;
  }

  dibujar() {
    push();
    this.capa.imageMode(CENTER);
    this.capa.tint(this.elColor);
    this.capa.image(pincelada, this.x, this.y, this.t, this.t);
    // this.capa.colorMode(HSB, 360, 100, 100, 100);
    // this.capa.fill(this.elColor);
    // this.capa.noStroke();
    // this.capa.ellipse(this.x, this.y, this.t, this.t);
    pop();
  }

  mover(variacion) {
    this.dir += random(-15 * variacion, 15 * variacion);
    this.x += this.vel * Math.cos(toRad(this.dir));
    this.y += this.vel * Math.sin(toRad(this.dir));
  }
}
