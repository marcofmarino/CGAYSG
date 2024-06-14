// ######## CONFIGURACIONES DE LAS OBRAS ###################
// cant => Cantidad de capas para la obra
// variacion => Indica que tan temblorosos son los caminantes que se mueven solos y -1 indica que es una capa a mover con la voz
// opacidades => La opacidad de los caminantes de esa capa
// tCaminantes => Determina un rango de tamanios para los caminantes de una capa
// cantidadCaminantes => Cantidad de caminanntes por capa
// colores => Los distintos posibles colores que puede tener los caminantes, separados por capas
// fondo => El nombre del archivo del fondo para cada obra

let configCuadrada = {
  cant: 4,
  variacion: [0.2, -1, 0.05, -1],
  opacidades: [40, 60, 40, 50],
  tCaminantes: [
    [22, 24],
    [18, 20],
    [18, 20],
    [3, 5],
  ],
  cantidadCaminantes: [30, 20, 20, 20],
  colores: [
    [
      [86, 57, 53],
      [228, 58, 39],
    ],
    [
      [356, 94, 71],
      [356, 94, 71],
      [86, 57, 53],
      [228, 58, 39],
    ],
    [
      [355, 51, 78],
      [355, 51, 78],
      [356, 94, 71],
    ],
    [
      [191, 79, 73],
      [49, 94, 91],
    ],
  ],
  fondo: "fondo3.png",
};

let configRectangulares = [
  {
    cant: 4,
    variacion: [0.05, 0.17, -1, 0.5],
    opacidades: [70, 80, 80, 90],
    tCaminantes: [
      [12, 15],
      [12, 15],
      [13, 16],
      [2, 4],
    ],
    cantidadCaminantes: [35, 35, 8, 10],
    colores: [
      [
        [5, 42, 81],
        [29, 16, 94],
      ],
      [
        [5, 42, 81],
        [29, 16, 94],
        [348, 27, 15],
        [242, 47, 29],
        [209, 67, 78],
      ],
      [
        [242, 47, 29],
        [209, 67, 78],
        [209, 67, 78],
      ],
      [
        [5, 42, 81],
        [29, 16, 94],
        [242, 47, 29],
      ],
    ],
    fondo: "fondo0.png",
  },
  {
    cant: 4,
    variacion: [0.1, 0.13, -1, 0.5],
    opacidades: [50, 70, 80, 50],
    tCaminantes: [
      [18, 22],
      [13, 15],
      [10, 13],
      [2, 4],
    ],
    cantidadCaminantes: [30, 50, 8, 25],
    colores: [
      [[47, 80, 85]],
      [
        [360, 88, 67],
        [360, 88, 67],
        [14, 45, 22],
        [11, 72, 74],
        [11, 72, 74],
        [162, 52, 33],
      ],
      [
        [14, 45, 22],
        [162, 52, 33],
      ],
      [[47, 80, 85]],
    ],
    fondo: "fondo2.png",
  },
  {
    cant: 3,
    variacion: [0.6, -1, 0.5],
    opacidades: [70, 40, 40],
    tCaminantes: [
      [16, 18],
      [15, 17],
      [2, 4],
    ],
    cantidadCaminantes: [7, 10, 13],
    colores: [
      [[125, 26, 71]],
      [
        [2, 79, 76],
        [226, 53, 54],
      ],
      [
        [79, 29, 56],
        [125, 26, 71],
        [2, 79, 76],
      ],
    ],
    fondo: "fondo1.png",
  },
];
