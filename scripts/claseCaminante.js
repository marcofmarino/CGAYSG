class Caminante {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.t = 15;
    this.vel = 2;
    this.dir = 0;
    push();
    colorMode(HSB, 360, 100, 100, 100);
    this.pincelada = loadImage("data/pincelada.png");
    this.elColor = color(random(210, 270), 100, 100);
    pop();
  }

  dibujar() {
    push();
    translate(this.x, this.y);
    tint(this.elColor, 127);
    image(this.pincelada, 0, 0, 30, 30);
    pop();
  }
  
  mover(vel) {
    this.dir += random(-15, 15);
    this.x += vel;
     if(this.x > width){
        this.x = 0;
        this.y = random(0,windowHeight);
   }
      if (frameCount > 0){ 
        this.y = random(this.y - 2, this.y + 2);
   }
    this.x += this.vel * Math.cos(toRad(this.dir));
    this.y += this.vel * Math.sin(toRad(this.dir));
  }
  
  mover2(vel) {
    this.dir += random(-15, 15);
    this.y += vel;
    if(this.y > height){
      this.y = 0;
      this.x = random(windowWidth,0);
 }
    if (frameCount > 0){ 
      this.x = random(this.x - 2, this.x + 2);
 }
    this.x += this.vel * Math.cos(toRad(this.dir));
    this.y += this.vel * Math.sin(toRad(this.dir));
  }
}
