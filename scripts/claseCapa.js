class Capa {
  constructor(cantidad, esRectangular, t_) {
    this.esRectangular = esRectangular;
    this.cantidad = [...Array(cantidad).keys()];
    this.t = t_;
    this.caminantes = [];
    this.capa = createGraphics(width, height);
  }

  crearCaminantes(lienzo) {
    this.cantidad.forEach((element) => {
      let colorCaminante = new Color(this.esRectangular);

      if (random(0, 100) > 50) {
        this.caminantes.push(
          new Caminante(
            0,
            random(0, height),
            random(-15, 15),
            colorCaminante.elColor,
            this.capa,
            this.t,
          ),
        );
      } else {
        this.caminantes.push(
          new Caminante(
            width,
            random(0, height),
            random(165, 195),
            colorCaminante.elColor,
            this.capa,
            this.t,
          ),
        );
      }

      if (random(0, 100) > 50) {
        this.caminantes.push(
          new Caminante(
            random(0, width),
            0,
            random(75, 105),
            colorCaminante.elColor,
            this.capa,
            this.t,
          ),
        );
      } else {
        this.caminantes.push(
          new Caminante(
            random(0, width),
            height,
            random(255, 285),
            colorCaminante.elColor,
            this.capa,
            this.t,
          ),
        );
      }
    });
  }

  actualizarCaminantes() {}
}

class CapaFija extends Capa {
  constructor(cantidad, esRectangular, t_, variacion) {
    super(cantidad, esRectangular, t_);
    this.variacion = variacion;
  }

  actualizarCaminantes() {
    this.caminantes.forEach((caminante) => {
      caminante.dibujar();
      caminante.mover(this.variacion);
    });
    image(this.capa, 0, 0, width, height);
  }
}

class CapaVariable extends Capa {
  constructor(cantidad, esRectangular, t_, controlVoz) {
    super(cantidad, esRectangular, t_);
    this.controlVoz = controlVoz;
  }

  actualizarCaminantes() {
    if (this.controlVoz.haySonido()) {
      this.caminantes.forEach((caminante) => {
        caminante.dibujar();
        caminante.mover(map(controlVoz.amplitud(), 0, windowWidth, 0.1, 1));
      });
    }
    image(this.capa, 0, 0);
  }
}
