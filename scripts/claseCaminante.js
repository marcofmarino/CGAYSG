class Caminante {
  constructor(x, y, dir, color_, capa_, t_) {
    this.x = x;
    this.y = y;
    this.t = t_;
    this.vel = 3;
    this.dir = dir;
    this.elColor = color_;
    this.pincelada = loadImage("data/pincelada.png");
    this.capa = capa_;
  }

  dibujar() {
    push();
    this.capa.imageMode(CENTER);
    this.capa.tint(this.elColor);
    this.capa.image(this.pincelada, this.x, this.y, this.t, this.t);
    pop();
  }

 mover(variacion) {
    if(this.x > width){
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }
    if(this.y > height){
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = height;
    }
    this.dir += random(-15 * variacion, 15 * variacion);
    this.x += this.vel * Math.cos(toRad(this.dir));
    this.y += this.vel * Math.sin(toRad(this.dir));
  }
}
