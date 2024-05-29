class Lienzo {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
  }

  setup() {
    createCanvas(windowWidth, windowHeight);
    cantidad.forEach((element) => {
      c.push(
        new Caminante(
          this.x + this.w / 2,
          random(this.y, this.y + this.h),
          this instanceof RectangularLienzo,
        ),
      );
    });
    background("#222222");
  }

  dibujar() {
    push();
    noFill();
    stroke(255);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }

  estaDentro(x, y) {
    return (
      x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h
    );
  }
}

class RectangularLienzo extends Lienzo {
  setup() {
    this.h = windowHeight - 2 * margen;
    this.w = this.h * 0.8;
    this.x = (windowWidth - this.w) / 2;
    this.y = margen;
    super.setup();
  }
}

class CuadradoLienzo extends Lienzo {
  setup() {
    this.h = windowHeight - 2 * margen;
    this.w = this.h;
    this.x = (windowWidth - this.w) / 2;
    this.y = margen;
    super.setup();
  }
}
