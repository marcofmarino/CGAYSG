let c = [];
let cantidad = [...Array(10).keys()];
let controlVoz;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cantidad.forEach((element) => {
    c.push(new Caminante(windowWidth / 2, random(0, windowHeight)));
  });

  controlVoz = new ControlVoz();

  background("#222222");
  fill(0);
}

function draw() {
  push();
  fill("#222222");
  noStroke();
  rect(0, 0, 200, 100);
  pop();
  if (controlVoz.haySonido()) {
    c.forEach((caminante) => {
      let variacion = mouseY;
      variacion = map(variacion, 0, windowWidth, 0.5, 3);
      caminante.mover(variacion);
      caminante.dibujar();
    });
    push();
    textSize(20);
    fill("RED");
    text("Haciendo click", 20, 20);
    text("mouseY: " + mouseY, 20, 50);
    pop();
  }
}

function toRad(degree) {
  return degree * (Math.PI / 180);
}
