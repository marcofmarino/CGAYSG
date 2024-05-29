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
      c.push(new Caminante(this.x + this.w / 2, random(this.y, this.y + this.h), this instanceof RectangularLienzo));
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
    return x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h;
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

class Caminante {
  constructor(x, y, esRectangular) {
    this.x = x;
    this.y = y;
    this.vel = 2;
    this.dir = random(360);
    this.lienzo = lienzo;
    push();
    colorMode(HSB, 360, 100, 100, 100);
    this.elColor = esRectangular ? color(random(210, 270), 100, 100) : color(random(0, 60), 100, 100);
    pop();
  }

  dibujar() {
    push();
    stroke(this.elColor);
    strokeWeight(2);
    point(this.x, this.y);
    pop();
  }

  mover() {
    let nuevaX = this.x + this.vel * cos(toRad(this.dir));
    let nuevaY = this.y + this.vel * sin(toRad(this.dir));
    if (this.lienzo.estaDentro(nuevaX, nuevaY)) {
      this.x = nuevaX;
      this.y = nuevaY;
    } else {
      this.dir += random(90, 180);
    }
  }
}
