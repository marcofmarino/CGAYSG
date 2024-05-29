class Caminante {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.t = 15;
    this.vel = 2;
    this.dir = 0;
    push();
    colorMode(HSB, 360, 100, 100, 100);
    this.pincelada = loadImage("data/pincelada.png");
    this.elColor = color(random(210, 270), 100, 100);
    pop();
  }

  dibujar() {
    push();
    translate(this.x, this.y);
    tint(this.elColor, 127);
    image(this.pincelada, 0, 0, 30, 30);
    pop();
  }

  mover() {
    this.dir += random(-15, 15);
    this.x += this.vel * Math.cos(toRad(this.dir));
    this.y += this.vel * Math.sin(toRad(this.dir));
  }
}
