let altoGestor = 100;
let anchoGestor = 400;

class GestorSenial {
  constructor(minimo_, maximo_) {
    this.minimo = minimo_;
    this.maximo = maximo_;

    this.puntero = 0;
    this.cargado = 0;
    this.mapeada = [];
    this.filtrada = 0;
    this.anterior = 0;
    this.derivada = 0;
    this.histFiltrada = [];
    this.histDerivada = [];
    this.amplificadorDerivada = 15.0;
    this.dibujarDerivada = false;

    this.f = 0.8;
  }
  actualizar(entrada_) {
    this.mapeada[this.puntero] = map(
      entrada_,
      this.minimo,
      this.maximo,
      0.0,
      1.0,
    );
    this.mapeada[this.puntero] = constrain(
      this.mapeada[this.puntero],
      0.0,
      1.0,
    );

    this.filtrada =
      this.filtrada * this.f + this.mapeada[this.puntero] * (1 - this.f);
    this.histFiltrada[this.puntero] = this.filtrada;

    this.derivada = (this.filtrada - this.anterior) * this.amplificadorDerivada;
    this.histDerivada[this.puntero] = this.derivada;

    this.anterior = this.filtrada;
    this.puntero++;
    if (this.puntero >= anchoGestor) {
      this.puntero = 0;
    }
    this.cargado = max(this.cargado, this.puntero);
  }
}
