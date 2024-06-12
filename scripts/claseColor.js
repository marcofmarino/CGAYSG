class Color {
  constructor(colores, opacidad_) {
    push();
    colorMode(HSB, 360, 100, 100, 100);
    this.elColor = color(colores[0], colores[1], colores[2], opacidad_);
    pop();
  }

  elColor() {
    console.log(this.elColor);
    return this.elColor;
  }
}
