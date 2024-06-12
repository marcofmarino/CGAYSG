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

// let c = [];
// let cantidad = 15;
let lienzo;
let margen = 10;
let capas = [];
let config;
let fondo;

function setup() {
  userStartAudio();

  // ############## CONFIGURACION DEL LIENZO ##########################

  if (random(1) < 0.75) {
    lienzo = new RectangularLienzo();
  } else {
    lienzo = new CuadradoLienzo();
  }
  lienzo.setup();

  // #################### CONFIGURACION DE AUDIO #######################

  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(startPitch);

  gestorAmp = new GestorSenial(AMP_MIN, AMP_MAX);
  gestorFrec = new GestorSenial(FREC_MIN, FREC_MAX);

  // #################### CONFIGURACION DE CAPAS #######################

  if (lienzo.esCuadrado()) {
    config = configCuadrada;
  } else {
    config =
      configRectangulares[round(random(0, configRectangulares.length - 1))];
  }

  [...Array(config["cant"]).keys()].forEach((index) => {
    if (config["variacion"][index] == -1) {
      capas.push(
        new CapaVariable(
          config["cantidadCaminantes"][index],
          config["colores"][index],
          config["tCaminantes"][index],
          config["opacidades"][index],
        ),
      );
    } else {
      capas.push(
        new CapaFija(
          config["cantidadCaminantes"][index],
          config["colores"][index],
          config["tCaminantes"][index],
          config["opacidades"][index],
          config["variacion"][index],
        ),
      );
    }
  });

  capas.forEach((capa) => {
    capa.crearCaminantes();
  });

  push();
  colorMode(HSB, 360, 100, 100, 100);
  fondo = loadImage("./data/" + config["fondo"]);
  pop();
}

function draw() {
  image(fondo, 0, 0, width, height);
  gestorAmp.actualizar(mic.getLevel());
  amp = gestorAmp.filtrada;

  capas.forEach((capa) => {
    capa.actualizarCaminantes();
  });
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
