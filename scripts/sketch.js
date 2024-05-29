let c = [];
let cantidad = [...Array(10).keys()];

function setup() {
  createCanvas(windowWidth, windowHeight);
  cantidad.forEach((element) => {
    c.push(new Caminante(windowWidth / 2, random(0, windowHeight)));
  });

  background("#222222");
  fill(0);
}

function draw() {
  //this.rectangulo.dibujar(100,100);
  // push();
  // noStroke();
  // fill(0, 0, 10, 5);
  // rect(0, 0, width, height);
  // pop();

  c.forEach((caminante) => {
    caminante.mover(9);
    // caminante.actualizar(9);
    caminante.dibujar();
  });
}

function toRad(degree) {
  return degree * (Math.PI / 180);
}
// function keyPressed() {////
//   save("p5shot.png");/////// <--- (ESTAS LINEAS DE CODIGO NO FORMAN PARTE DEL TRABAJO ORIGINAL)
// }////
