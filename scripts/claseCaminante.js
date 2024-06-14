class Caminante {
  constructor(x, y, dir, color_, capa_, t_) {
    this.x = x;
    this.y = y;
    this.t = t_;
    this.vel = 3;
    this.dir = dir;
    this.elColor = color_;
    this.capa = capa_;
    this.empezoAdentro = lienzo.estaDentro(x, y);
    this.salio = false;
  }

  dibujar() {
    push();
    if (lienzo.estaDentro(this.x, this.y)) {
      this.capa.imageMode(CENTER);
      this.capa.colorMode(HSB, 350, 100, 100, 100);
      this.capa.tint(this.elColor);
      this.capa.image(pincelada, this.x, this.y, this.t, this.t);
    }
    pop();
  }

  mover(variacion) {
    if (!this.salio) {
      this.empezoAdentro = lienzo.estaDentro(this.x, this.y);
      this.dir += random(-15 * variacion, 15 * variacion);
      this.x += this.vel * Math.cos(toRad(this.dir));
      this.y += this.vel * Math.sin(toRad(this.dir));
      this.salio = this.empezoAdentro && !lienzo.estaDentro(this.x, this.y);
    }
  }
}
