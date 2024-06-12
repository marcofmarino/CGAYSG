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

let c = [];
let cantidad = 10;
let lienzo;
let margen = 10;
let capas = [];

function setup() {
  if (random(1) < 0.75) {
    lienzo = new RectangularLienzo();
  } else {
    lienzo = new CuadradoLienzo();
  }
  lienzo.setup();

  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(startPitch);

  userStartAudio();

  gestorAmp = new GestorSenial(AMP_MIN, AMP_MAX);
  gestorFrec = new GestorSenial(FREC_MIN, FREC_MAX);

  capas.push(new CapaFija(10, lienzo.esRectangular(), 15, 0.1));
  capas.push(new CapaVariable(cantidad, lienzo.esRectangular(), 5));
  capas.push(new CapaFija(20, lienzo.esRectangular(), 2, 0.4));

  capas.forEach((capa) => {
    capa.crearCaminantes();
  });

  push();
  colorMode(HSB, 360, 100, 100, 100);
  background(color(191, 79, 73));
  pop();
}

function draw() {
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
