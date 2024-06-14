class Lienzo {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
  }

  setup() {}

  estaDentro(x, y) {
    return x > 0 && x < width && y > 0 && y < height;
  }

  esCuadrado() {}
}

class RectangularLienzo extends Lienzo {
  setup() {
    this.h = windowHeight - 2;
    this.w = this.h * 0.8;
    createCanvas(this.w, this.h);
  }

  esCuadrado() {
    return false;
  }
}

class CuadradoLienzo extends Lienzo {
  setup() {
    this.h = windowHeight - 2;
    this.w = this.h;
    createCanvas(this.w, this.h);
  }

  esCuadrado() {
    return true;
  }
}
