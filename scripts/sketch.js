// Computacion Grafica Aplicada y Sistemas Generativos - Facultad de Artes - UNLP
// TP1
// Lombar, Emma - Marino, Marco - Medina, Juan Gabriel - Moirano, Julia
//
// SONIDO
let AMP_MIN = 0.01;
let AMP_MAX = 0.3;

let FREC_MIN = 125;
let FREC_MAX = 270;

// AUDIO
let mic;
let amp;
let frec;

let gestorAmp;
let gestorFrec;

let audioContext;
const pitchModel =
  "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";

// ################# Teachable Machine ##################
let classifier;
const options = { probabilityThreshold: 0.9 };
let label;
let soundModel = "https://teachablemachine.withgoogle.com/models/4cvBxP6YL/";

let lienzo;
let capas = [];
let config;
let fondo;

let pincelada;

let capaSalpicaduras;
let salpicadura;
let cantSalpicaduras = 0;
let MAX_SALPICADURAS = 10;

function preload() {
  classifier = ml5.soundClassifier(soundModel + "model.json", options);
  pincelada = loadImage("data/pincelada.png");
  salpicadura = loadImage("data/salpicadura1.png");
}

function setup() {
  userStartAudio();

  // #################### CONFIGURACION DE AUDIO #######################

  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(startPitch);

  gestorAmp = new GestorSenial(AMP_MIN, AMP_MAX);
  gestorFrec = new GestorSenial(FREC_MIN, FREC_MAX);

  classifier.classify(gotResult);
  // ############## CONFIGURACION DEL LIENZO ##########################

  if (random(1) < 0.75) {
    lienzo = new RectangularLienzo();
  } else {
    lienzo = new CuadradoLienzo();
  }
  lienzo.setup();

  // #################### CONFIGURACION DE CAPAS #######################

  let indices = [
    round(random(configuraciones.length - 1)),
    round(random(configuraciones.length - 1)),
  ];

  fondo = loadImage("./data/" + configuraciones[indices[1]]["fondo"]);

  for (let index = 0; index < configuraciones[indices[0]]["cant"]; index++) {
    if (configuraciones[indices[1]]["variacion"][index] !== -2) {
      if (configuraciones[indices[1]]["variacion"][index] == -1) {
        capas.push(
          new CapaVariable(
            configuraciones[indices[0]]["cantidadCaminantes"][index],
            configuraciones[indices[1]]["colores"][index],
            configuraciones[indices[0]]["tCaminantes"][index],
            configuraciones[indices[1]]["opacidades"][index],
          ),
        );
      } else {
        capas.push(
          new CapaFija(
            configuraciones[indices[0]]["cantidadCaminantes"][index],
            configuraciones[indices[1]]["colores"][index],
            configuraciones[indices[0]]["tCaminantes"][index],
            configuraciones[indices[1]]["opacidades"][index],
            configuraciones[indices[0]]["variacion"][index],
          ),
        );
      }
    }
  }

  for (let index = 0; index < capas.length; index++) {
    capas[index].crearCaminantes();
  }

  capaSalpicaduras = createGraphics(width, height);
}

function draw() {
  image(fondo, 0, 0, width, height);
  gestorAmp.actualizar(mic.getLevel());
  amp = gestorAmp.filtrada;

  if (label == "Achis") {
    if (cantSalpicaduras < MAX_SALPICADURAS) {
      push();
      capaSalpicaduras.imageMode(CENTER, CENTER);
      capaSalpicaduras.colorMode(HSB, 360, 100, 100, 100);
      capaSalpicaduras.tint(237, 21, 34);
      for (let index = 0; index < 3; index++) {
        push();
        capaSalpicaduras.rotate(random(360));
        capaSalpicaduras.translate(
          round(random(width)) - 50,
          round(random(height)) - 50,
        );
        capaSalpicaduras.image(salpicadura, 0, 0);
        pop();
      }
      label = "";
      cantSalpicaduras++;
      pop();
    }
  } else if (label == "Aplauso") {
    location.reload();
  }

  for (let index = 0; index < capas.length; index++) {
    capas[index].actualizarCaminantes();
  }
  image(capaSalpicaduras, 0, 0);
}

// ##################### FUNCIONES ######################
function toRad(degree) {
  return degree * (Math.PI / 180);
}

function startPitch() {
  pitch = ml5.pitchDetection(pitchModel, audioContext, mic.stream, modelLoaded);
}

function modelLoaded() {
  getPitch();
}

function getPitch() {
  pitch.getPitch(function (err, frequency) {
    if (frequency) {
      gestorFrec.actualizar(frequency);
      frec = gestorFrec.filtrada;
    } else {
    }
    getPitch();
  });
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  }

  label = results[0].label;
}
