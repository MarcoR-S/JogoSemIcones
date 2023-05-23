var caixaMultiplicador1, caixaMultiplicador2, caixaMultiplicador3, caixaMultiplicador4, caixaMultiplicador5, caixaMultiplicador6
var caixaPrincipal, caixaDinheiro
var detalhe1, detalhe2
var caixaRestaurante1, caixaRestaurante2, caixaRestaurante3, caixaRestaurante4


var biscoitos = 1
var statusMultiplicador =1, controleMultiplicador =1 //valor do multiplicador; para controlar função
var restauranteMultiplicador = 1
var cont = 0
let cont2 =0
var dinheiro = 0
var chosenrest =0, cooldown2 = 0
var sellBoost11 = 1, sellBoost22 = 1
var menuBox

var dinheiroIcon

//////////////////////icones/////////////////////

function preload(){
  
}

function setup() {
  createCanvas(windowWidth,windowHeight)
 

////////////////////Multiplicadores/////////////////////////////
  caixaMultiplicador1 = createSprite(100,100)
  caixaMultiplicador1.shapeColor ='yellow'

  caixaMultiplicador2 = createSprite(220,100)
  caixaMultiplicador2.shapeColor ='yellow'

  caixaMultiplicador3 = createSprite(340,100)
  caixaMultiplicador3.shapeColor ='yellow'

  caixaMultiplicador4 = createSprite(100,220)
  caixaMultiplicador4.shapeColor ='yellow'

  caixaMultiplicador5 = createSprite(220,220)
  caixaMultiplicador5.shapeColor ='yellow'

  caixaMultiplicador6 = createSprite(340,220)
  caixaMultiplicador6.shapeColor ='yellow'
////////////////////Main/////////////////////////////
  caixaPrincipal = createSprite(windowWidth/2,windowHeight/2, 300,300)
  caixaPrincipal.shapeColor = '#FFD580'

  detalhe1 = createSprite(caixaPrincipal.x-120, caixaPrincipal.y+120, 40,40)
  detalhe1.shapeColor = 'lime'

  detalhe2 = createSprite(caixaPrincipal.x-60, caixaPrincipal.y+120, 40,40)
  detalhe2.shapeColor = 'red'
////////////////////Dinheiro/////////////////////////////
  caixaDinheiro = createSprite(250,400, 350,150)
  caixaDinheiro.shapeColor = 'green'
////////////////////Restaurante/////////////////////////////
  caixaRestaurante1 = createSprite ( 1400,80, 130,130)
  caixaRestaurante1.shapeColor = '#00FFFF'

  caixaRestaurante2 = createSprite ( 1400,240, 130,130)
  caixaRestaurante2.shapeColor = '#00FFFF'

  caixaRestaurante3 = createSprite ( 1400,400, 130,130)
  caixaRestaurante3.shapeColor = '#00FFFF'

  caixaRestaurante4 = createSprite ( 1400,600, 160,160)
  caixaRestaurante4.shapeColor = '#FFD700 '

  menuBox = createSprite(windowWidth/2,windowHeight/2, 1300,600)
  menuBox.visible =false
  
  
}

function draw() {
  
  
  if(dinheiro>=1000){
    console.log("AQUI PARA ACABAR O JOGO")
  }

  cont = cont+1
  
  background(100)
  
  multiplicadores()
  comprarRestaurante()
  vender(cooldown2, sellBoost11, sellBoost22)
  ganharBiscoito(statusMultiplicador,restauranteMultiplicador)
  drawSprites()
  admin()
  texts()
  menu()
  restauranteAdmin()

  
  
}














