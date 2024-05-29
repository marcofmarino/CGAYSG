<<<<<<< HEAD
class Caminante {
  constructor(x, y, esRectangular) {
    this.x = x;
    this.y = y;
    this.vel = 2;
    this.dir = random(360);
    this.lienzo = lienzo;
    push();
    colorMode(HSB, 360, 100, 100, 100);
    this.elColor = esRectangular
      ? color(random(210, 270), 100, 100)
      : color(random(0, 60), 100, 100);
    pop();
  }

  dibujar() {
    push();
    stroke(this.elColor);
    strokeWeight(2);
    point(this.x, this.y);
    pop();
  }

  mover() {
    let nuevaX = this.x + this.vel * cos(toRad(this.dir));
    let nuevaY = this.y + this.vel * sin(toRad(this.dir));
    if (this.lienzo.estaDentro(nuevaX, nuevaY)) {
      this.x = nuevaX;
      this.y = nuevaY;
    } else {
      this.dir += random(90, 180);
    }
  }
}
=======
class Caminante {
  constructor(x, y, dir) {
    this.x = x;
    this.y = y;
    this.t = 15;
    this.vel = 2;
    this.dir = dir;
    push();
    colorMode(HSB, 360, 100, 100, 100);
    this.pincelada = loadImage("data/pincelada.png");
    this.elColor = color(random(110, 270), 100, 100, 30);
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
>>>>>>> interaccionMouse
