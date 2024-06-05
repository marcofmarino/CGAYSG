let c = [];
let cantidad = 50;
let lienzo;
let controlVoz;
let margen = 10;
let capas = [];

function setup() {
  if (random(1) < 0.75) {
    lienzo = new RectangularLienzo();
  } else {
    lienzo = new CuadradoLienzo();
  }
  lienzo.setup();

  controlVoz = new ControlVoz();

  capas.push(new CapaFija(10, lienzo.esRectangular(), 15, 0.1));
  capas.push(new CapaVariable(cantidad, lienzo.esRectangular(), 5, controlVoz));
  capas.push(new CapaFija(5, lienzo.esRectangular(), 2, 0.4));

  capas.forEach((capa) => {
    capa.crearCaminantes();
  });

  push();
  colorMode(HSB, 360, 100, 100, 100);
  background(color(191, 79, 73));
  pop();
}

function draw() {
  capas.forEach((capa) => {
    capa.actualizarCaminantes();
  });
  push();
  fill("#22222222");
  noStroke();
  rect(0, 0, 300, 100);
  pop();

  if (controlVoz.haySonido()) {
    debug();
  }
}

function toRad(degree) {
  return degree * (Math.PI / 180);
}

function debug() {
  push();
  textSize(20);
  fill("RED");
  text("Haciendo click", 20, 20);
  text("mouseY (amplitud): " + mouseY, 20, 50);
  pop();
}
