class Capa {
  constructor(cantidad, colores, tamanio, opacidad) {
    this.colores = colores;
    // this.cantidad = [...Array(cantidad).keys()];
    this.cantidad = cantidad;
    this.t = tamanio;
    this.opacidad = opacidad;
    this.caminantes = [];
    this.capa;
  }

  // crearCaminantes(lienzo) {
  crearCaminantes() {
    this.capa = createGraphics(width, height);

    let pasoVertical = 0;
    let pasoHorizontal = 0;

    for (let index = 0; index < this.cantidad; index++) {
      //   //Determinar el color del caminante
      let colorCaminante = new Color(
        this.colores[round(random(0, this.colores.length - 1))],
        this.opacidad,
      );

      // Determinar el tamanio del caminante
      let tamanioCaminante = this.t[round(random(0, this.t.length - 1))];

      pasoVertical += round(height / this.cantidad);
      pasoHorizontal += round(width / this.cantidad);

      // Caminante(x, y, dir, color, capa, tamanio)
      // Hacer aparecer a los caminantes desde todas direcciones del lienzo
      if (random(0, 100) > 50) {
        this.caminantes.push(
          new Caminante(
            0,
            pasoVertical, // random(0, height),
            random(-5, 5),
            colorCaminante.elColor,
            this.capa,
            tamanioCaminante,
          ),
        );
      } else {
        this.caminantes.push(
          new Caminante(
            width,
            pasoVertical, // random(0, height),
            random(175, 185),
            colorCaminante.elColor,
            this.capa,
            tamanioCaminante,
          ),
        );
      }

      if (random(0, 100) > 50) {
        this.caminantes.push(
          new Caminante(
            pasoHorizontal, // random(0, width),
            0,
            random(85, 95),
            colorCaminante.elColor,
            this.capa,
            tamanioCaminante,
          ),
        );
      } else {
        this.caminantes.push(
          new Caminante(
            pasoHorizontal, // random(0, width),
            height,
            random(265, 285),
            colorCaminante.elColor,
            this.capa,
            tamanioCaminante,
          ),
        );
      }
    }
  }

  actualizarCaminantes() {}
}

class CapaFija extends Capa {
  constructor(cantidad, colores, tamanio, opacidad, variacion) {
    super(cantidad, colores, tamanio, opacidad);
    this.variacion = variacion;
  }

  actualizarCaminantes() {
    for (let index = 0; index < this.caminantes.length; index++) {
      this.caminantes[index].dibujar();
      this.caminantes[index].mover(this.variacion);
    }
    image(this.capa, 0, 0);
  }
}

class CapaVariable extends Capa {
  constructor(cantidad, colores, tamanio, opacidad) {
    super(cantidad, colores, tamanio, opacidad);
  }

  actualizarCaminantes() {
    // Solamente actualiza los caminantes con variación por voz si se detecta sonido
    if (amp > AMP_MIN) {
      for (let index = 0; index < this.caminantes.length; index++) {
        this.caminantes[index].dibujar();
        this.caminantes[index].mover(map(frec, 0, 1, 0.2, 1));
      }
    }
    image(this.capa, 0, 0);
  }
}
