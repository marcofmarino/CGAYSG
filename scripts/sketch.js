let c = [];
<<<<<<< HEAD
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
=======
let cantidad = [...Array(40).keys()];
let controlVoz;

function setup() {
  createCanvas(1080, 1920);
  cantidad.forEach((element) => {
    if (random(0, 100) > 50) {
      c.push(new Caminante(0, random(0, height), random(-30, 30)));
    } else {
      c.push(new Caminante(width, random(0, height), random(150, 210)));
    }

    if (random(0, 100) > 50) {
      c.push(new Caminante(random(0, width), 0, random(60, 120)));
    } else {
      c.push(new Caminante(random(0, width), height, random(240, 300)));
    }
  });

  controlVoz = new ControlVoz();

  background("#222222");
  fill(0);
}

function draw() {
  push();
  fill("#22222222");
  noStroke();
  rect(0, 0, 300, 100);
  pop();

  if (controlVoz.haySonido()) {
    c.forEach((caminante) => {
      caminante.mover(map(controlVoz.amplitud(), 0, windowWidth, 0.1, 1));
      caminante.dibujar();
    });

    debug();
  }
>>>>>>> interaccionMouse
}

function toRad(degree) {
  return degree * (Math.PI / 180);
<<<<<<< HEAD
=======
}

function debug() {
  push();
  textSize(20);
  fill("RED");
  text("Haciendo click", 20, 20);
  text("mouseY (amplitud): " + mouseY, 20, 50);
  pop();
>>>>>>> interaccionMouse
}
