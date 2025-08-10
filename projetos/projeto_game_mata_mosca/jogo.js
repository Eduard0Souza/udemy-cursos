//coletando as dimensões da página
var altura = 0
var largura = 0
var vidas = 1
var tempo = 30
var criaMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel === 'normal'){
    criaMoscaTempo = 1500
    

}else if(nivel ==='dificil'){
    criaMoscaTempo = 1000
     

}else if(nivel === 'cn'){
    criaMoscaTempo = 750
     

}

function ajustaTamanhoTela(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}
ajustaTamanhoTela()

var cronometro = setInterval(function(){
    tempo--
    if(tempo < 0 ){
        clearInterval(cronometro)
        clearInterval(criaMosca)
       // alert('Vitória')
       window.location.href ='vitoria.html'
    } else{
        document.getElementById('cronometro').innerHTML = tempo   
    }
}, 1000)



function posicaoMosca(){
//removendo elemento da tela
if(document.getElementById('mosca')){
    document.getElementById('mosca').remove()
    if(vidas > 3){
       window.location.href ='fim_de_jogo.html'
    }else{
        document.getElementById('v'+ vidas).src="imagens/coracao_vazio.png"
        vidas++
    }
}

var posicaox = Math.floor(Math.random() * (largura -100))
var posicaoy = Math.floor(Math.random() * (altura-100))

console.log(posicaox, posicaoy)

//criand elemento html
var mosca = document.createElement('img')
mosca.src='imagens/mosca.png '
mosca.className= tamanhoAleatorio()+' '+ ladoAleatorio()
mosca.style.left = posicaox +'px'
mosca.style.top = posicaoy + 'px'
mosca.style.position = 'absolute'
mosca.id ='mosca'
mosca.onclick = function(){this.remove()}
document.body.appendChild(mosca)

}

tamanhoAleatorio()
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random()*3)

    switch(classe){
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'      
    }    
}
ladoAleatorio()
function ladoAleatorio(){
    var classe = Math.floor(Math.random()*2)
    console.log(classe)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
          
    }    
}