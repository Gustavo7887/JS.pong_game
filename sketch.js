//variáveis da bola
let xBola = 250;
let yBola = 180;
let diametro = 19;
let raio = diametro /2

//velocidade da bola
let velocidadeXBola = 6;
let velocidadeYBola = 6;

//variáveis da raquete
let xRaquete = 13;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 100;

//variáveis do oponente
let xRaqueteOponente = 580;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
    createCanvas(600, 400);
  trilha.loop();
}

function draw() {
    background(0);
    mostraBola();
    movimentaBola();
    verificaColisao();
    mostraRaquete(xRaquete, yRaquete);
    movimentoDaRaquete();
    //verificaColisaoRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
 verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluirPlacar();
  marcaPonto();
}

function mostraBola() {
    circle(xBola, yBola, diametro)
}

function movimentaBola() {
    xBola += velocidadeXBola;
    yBola += velocidadeYBola;
}

function verificaColisao() {
    if (xBola + raio > width || xBola - raio < 0) {
        velocidadeXBola *= -1;
    }
    if (yBola + raio > height || yBola - raio < 0) {
        velocidadeYBola *= -1;
    }
}

function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentoDaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
    if (xBola - raio < xRaquete + raqueteComprimento
        && yBola - raio < yRaquete + raqueteAltura
        && yBola + raio > yRaquete) {
        velocidadeXBola *= -1;
      raquetada.play();
    }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x,y,raqueteComprimento, raqueteAltura, xBola, yBola, raio);
    if (colidiu){
        velocidadeXBola *= -1;
      raquetada.play();
    }
}

function movimentaRaqueteOponente(){
    if (keyIsDown(87)){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(83)){
        yRaqueteOponente += 10;
    }
}


function incluirPlacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(0,0,255));
  rect(150, 10, 40, 20);
   fill(255);
  text(meusPontos, 170, 26);
   fill(color(0,0,255));
  rect(450, 10, 40, 20);
   fill(255);
  text(pontosDoOponente, 470, 26)
}

function marcaPonto() {
  if (xBola > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBola < 10) {
    pontosDoOponente += 1;
    ponto.play();
  }
}


function bolinhaNaoFicaPresa(){
    if (XBola - raio < 0){
    XBola = 23
    }
}





