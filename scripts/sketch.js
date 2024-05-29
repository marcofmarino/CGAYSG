let c = [];
let cantidad = [...Array(10).keys()];
let lienzo;
let margen = 10;

function setup() {
  if (random(1) < 0.75) {
    lienzo = new RectangularLienzo();
  } else {
    lienzo = new CuadradoLienzo();
  }
  lienzo.setup();
}

function draw() {
  lienzo.dibujar();
  c.forEach((caminante) => {
    caminante.mover();
    caminante.dibujar();
  });
}

function toRad(degree) {
  return degree * (Math.PI / 180);
}
