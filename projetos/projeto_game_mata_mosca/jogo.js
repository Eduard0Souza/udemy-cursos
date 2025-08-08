//coletando as dimensões da página
var altura = 0
var largura = 0
function ajustaTamanhoTela(){
    var altura = window.innerHeight
    var largura = window.innerWidth
    console.log(altura, largura)
}
ajustaTamanhoTela()

var posicaox = Math.floor(Math.random() * largura)
var posicaoy = Math.floor(Math.random() * altura)

console.log(posicaox, posicaoy)

//criand elemento html
var mosca = document.createElement('img')
mosca.src='imagens/mosca.png '
document.body.appendChild(mosca)