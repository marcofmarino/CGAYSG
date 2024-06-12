class Lienzo {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
  }

  setup() {}

  estaDentro(x, y) {
    return (
      x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h
    );
  }

  esCuadrado() {}
}

class RectangularLienzo extends Lienzo {
  setup() {
    this.h = windowHeight - 2 * margen;
    this.w = this.h * 0.8;
    this.x = (windowWidth - this.w) / 2;
    this.y = margen;
    super.setup();
    createCanvas(this.w, this.h);
    background("#222222");
  }

  esCuadrado() {
    return false;
  }
}

class CuadradoLienzo extends Lienzo {
  setup() {
    this.h = windowHeight - 2 * margen;
    this.w = this.h;
    this.x = (windowWidth - this.w) / 2;
    this.y = margen;
    super.setup();
    createCanvas(this.w, this.h);
    background("#222222");
  }

  esCuadrado() {
    return true;
  }
}
