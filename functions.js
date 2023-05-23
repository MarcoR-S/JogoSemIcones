function ganharBiscoito(multiplicador,multiplicador2){
    if(keyIsDown(69)){
        biscoitos = biscoitos+multiplicador*multiplicador2
    }
}

function multiplicadores(){
    if(biscoitos>600 && controleMultiplicador ==1){
        caixaMultiplicador1.shapeColor = 'lime'
        statusMultiplicador = 2
        controleMultiplicador = 2
    }
    if(biscoitos>1000 && controleMultiplicador ==2){
        caixaMultiplicador2.shapeColor = 'lime'
        statusMultiplicador = 3
        controleMultiplicador = 3
    }
    if(biscoitos>1800 && controleMultiplicador ==3){
        caixaMultiplicador3.shapeColor = 'lime'
        statusMultiplicador = 4
        controleMultiplicador = 4
    }
    if(biscoitos>3100 && controleMultiplicador ==4){
        caixaMultiplicador4.shapeColor = 'lime'
        statusMultiplicador = 5
        controleMultiplicador = 5
    }
    if(biscoitos>6300 && controleMultiplicador ==5){
        caixaMultiplicador5.shapeColor = 'lime'
        statusMultiplicador = 6
        controleMultiplicador = 6
    }
    if(biscoitos>15000 && controleMultiplicador ==6){
        caixaMultiplicador6.shapeColor = 'lime'
        statusMultiplicador = 7
        controleMultiplicador = 7
    }

}

function vender(cooldownBoost,sellBoost, sellBoost2){
    if(biscoitos>100 && cont>100+cooldownBoost&& keyIsDown(81)){
        cont =0
        dinheiro = dinheiro+5*sellBoost
        biscoitos = biscoitos-40*sellBoost2
    }
}

function comprarRestaurante(){
    var token =1
if(keyIsDown(70) && dinheiro>=500 && token==1){
    caixaRestaurante1.shapeColor = 'lime'
    dinheiro = dinheiro -10
    token =0
    chosenrest =  1
}
if(keyIsDown(71)&& dinheiro>=400 && token==1){
    caixaRestaurante2.shapeColor = 'lime'
    dinheiro = dinheiro -20
    token=0
    chosenrest =  2
}

if(keyIsDown(72)&& dinheiro>=560 && token==1){
    caixaRestaurante3.shapeColor = 'lime'
    dinheiro = dinheiro -20
    token=0
    chosenrest =  3
}
if(keyIsDown(74)&& dinheiro>=1000 && token==1){
    caixaRestaurante4.shapeColor = 'lime'
    dinheiro = dinheiro -100
    token=0
    chosenrest =  4
}
}

function texts(){
    if(menuBox.visible==false){
  fill(0)
  textSize(20)
  text('2x', caixaMultiplicador1.x-6, caixaMultiplicador1.y+5)
  text('3x', caixaMultiplicador2.x-6, caixaMultiplicador2.y+5)
  text('4x', caixaMultiplicador3.x-6, caixaMultiplicador3.y+5)
  text('5x', caixaMultiplicador4.x-6, caixaMultiplicador4.y+5)
  text('6x', caixaMultiplicador5.x-6, caixaMultiplicador5.y+5)
  text('7x', caixaMultiplicador6.x-6, caixaMultiplicador6.y+5)
  text('Dinheiro: '+dinheiro, caixaDinheiro.x-140, caixaDinheiro.y+10)
  text('Biscoitos: ' +biscoitos, caixaPrincipal.x-80, caixaPrincipal.y+10) 
  text('E',detalhe1.x-6, detalhe1.y+5) 
  text('Q',detalhe2.x-6, detalhe2.y+5) 
  text(cont,60,60) 
  text(cont2,160,160) 
  textSize(16)
  text('Restaurante 1', caixaRestaurante1.x-52, caixaRestaurante1.y+6)
  text('Restaurante 2', caixaRestaurante2.x-52, caixaRestaurante2.y+6)
  text('Restaurante 3', caixaRestaurante3.x-52, caixaRestaurante3.y+6)
  text('Restaurante 4', caixaRestaurante4.x-52, caixaRestaurante4.y+6)
  textSize(30)
  text("Como Jogar", caixaRestaurante1.x-1250,caixaRestaurante1.y+440)
  textSize(15)
  text(" 'E' cozinhar biscoitos", caixaRestaurante1.x-1360,caixaRestaurante1.y+490)
  text(" 'Q' vender biscoitos", caixaRestaurante1.x-1360,caixaRestaurante1.y+510)
  text(" 'C' abrir menu", caixaRestaurante1.x-1360,caixaRestaurante1.y+530)
  text(" 'F' comprar restaurante 1", caixaRestaurante1.x-1360,caixaRestaurante1.y+550)
  text(" 'G' comprar restaurante 2", caixaRestaurante1.x-1360,caixaRestaurante1.y+570)
  text(" 'H' comprar restaurante 3", caixaRestaurante1.x-1360,caixaRestaurante1.y+590)
  text(" 'J' comprar restaurante 4", caixaRestaurante1.x-1360,caixaRestaurante1.y+610)
}
}
function menu(){
    if(keyIsDown(67)){
        textSize(30)
        
        
        menuBox.visible =true
        


    
       if(chosenrest==1){
        fill(0)
        text('Restaurante 1', 700,130)
        text("Clientes: 2x", 300,260)
        text("Qualidade: 3x ", 300,340)
        text("Funcionarios: 1x ", 300,420)
        text("Imposto: -50$ ", 300,500)
        text.depth +1 
       } 
       else if(chosenrest==2){
        fill(0)
        text('Restaurante 2', 700,130)
        text("Clientes: 3x", 300,260)
        text("Qualidade: 1x ", 300,340)
        text("Funcionarios: 2x ", 300,420)
        text("Imposto: -25$ ", 300,500)
        text.depth +1

       }

       else if(chosenrest==3){
        cont2++
        fill(0)
        text('Restaurante 3', 700,130)
        text("Clientes: 1x", 300,260)
        text("Qualidade: 2x ", 300,340)
        text("Funcionarios: 3x ", 300,420)
        text("Imposto: -5$$", 300,500)
        text.depth +1

        restauranteMultiplicador = 1
        cooldown2 = (cont-10)*-1
        sellBoost11 = 1
        sellBoost22 = 4
        
        

        if(cont2 > 100 && dinheiro > 0){
            dinheiro = dinheiro - dinheiro-5
        }
        
        
       }

       else if(chosenrest==4){
        fill(0)
        text('Restaurante 3', 700,130)
        text("Clientes: 3x", 300,260)
        text("Qualidade: 3x ", 300,340)
        text("Funcionarios: 3x ", 300,420)
        text("Imposto: -100$ ", 300,500)
        text.depth +1

       }

       else{
        fill(0)
        text('Compre um restaurante!', windowWidth/2-100,130)
        text("Clientes: ", 300,260)
        text("Qualidade: ", 300,340)
        text("Funcionarios: ", 300,420)
        text("Imposto: ", 300,500)
        text.depth +1
        
       }
 
        

        
    }
    else{menuBox.visible =false}


}

function restauranteAdmin(){

    if(cont2>100){
        cont2=0
    }
    if(chosenrest==1){
        cont2++

        restauranteMultiplicador = 3
        cooldown2 = (cont/2)*-1
        sellBoost11 = 2
        sellBoost22 = 2

        if(cont2 > 100 && dinheiro > 0){
            dinheiro = dinheiro - 50
            round(dinheiro)
        }  
    } 

    else if(chosenrest==2){
        cont2++

        restauranteMultiplicador = 1
        cooldown2 = (cont/2+5)*-1
        sellBoost11 = 4
        sellBoost22 = 2
        
        

        if(cont2 > 100 && dinheiro > 0){
            dinheiro = dinheiro -25
        }
    }

    else if(chosenrest==3){
        cont2++

        restauranteMultiplicador = 1
        cooldown2 = (cont-10)*-1
        sellBoost11 = 1
        sellBoost22 = 4
        
        

        if(cont2 > 100 && dinheiro > 0){
            dinheiro = dinheiro-5
        }
        
        
    }

    else if(chosenrest==4){
        cont2++

        restauranteMultiplicador = 1
        cooldown2 = (cont/2+10)*-1
        sellBoost11 = 4
        sellBoost22 = 4
        
        

        if(cont2 > 100 && dinheiro > 0){
            dinheiro = dinheiro - 100
        }


       }





}

function admin(){
    if(cont>200){
        cont=0
    }

}

