class Color {
  constructor(esRectangular) {
    push();
    colorMode(HSB, 360, 100, 100, 100);
    // this.elColor = esRectangular
    //   ? color(random(210, 270), 100, 100, 30)
    //   : color(random(0, 60), 100, 100, 30);

    this.colores = [
      color(175, 89, 66, 20),
      color(162, 52, 33, 20),
      color(14, 45, 22, 20),
      color(360, 88, 67, 20),
      color(11, 72, 74, 20),
      color(47, 80, 85, 20),
    ];

    if (esRectangular) {
      this.elColor = this.colores[round(random(0, this.colores.length - 1))];
    } else {
      this.elColor = color(random(0, 60), 100, 100, 30);
    }
    pop();
  }

  elColor() {
    return this.elColor;
  }
}