class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false
            }
        }
        return true
    }
}
class Bd{

    constructor(){

        let id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id', 0)
        }
    }

    getProximoId(){
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }
        
     gravar(despesa){
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(despesa))
        localStorage.setItem('id', id)  
    }

    recuperarTodosRegistros(){
        let despesas = Array()
        let id = localStorage.getItem('id')
        for(let i=1; i<=id; i++){
            let despesa = JSON.parse(localStorage.getItem(i))
           // console.log(JSON.parse(despesa))
           if(despesa === null){
                continue
            }
            despesas.push(despesa)
        }

        return despesas
    }
        
}


let bd = new Bd()

function cadastrarDespesa(){
   let ano = document.getElementById('ano')
   let mes =  document.getElementById('mes')
   let dia = document.getElementById('dia')
   let tipo = document.getElementById('tipo')
   let descricao = document.getElementById('descricao')
   let valor =document.getElementById('valor')

   

   let despesa = new Despesa(
       ano.value,
       mes.value,
       dia.value,
       tipo.value,
       descricao.value,
       valor.value
   )

   if(despesa.validarDados()){
        bd.gravar(despesa)
        
        document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso!'
        document.getElementById('modal_titulo_div').className = 'modal-title text-success'
        document.getElementById('modal_mensagem').innerHTML = 'Despesa foi cadastrada com sucesso.'
        document.getElementById('modal_botao').innerHTML = 'Voltar'
        document.getElementById('modal_botao').className = 'btn btn-success'
        $('#modalRegistraDespesa').modal('show')
        //limpar os campos
       ano.value = ''
       mes.value = ''
       dia.value = ''  
       dia.value = ''
       tipo.value = ''
       descricao.value = ''
       valor.value = ''
       
    }else{

        document.getElementById('modal_titulo').innerHTML = 'Erro no registro de dados!'
        document.getElementById('modal_titulo_div').className = 'modal-title text-danger'
        document.getElementById('modal_mensagem').innerHTML = 'Existem campos obrigatórios que não foram preenchidos.'
        document.getElementById('modal_botao').innerHTML = 'Corrigir'
        document.getElementById('modal_botao').className = 'btn btn-danger'
          

       $('#modalRegistraDespesa').modal('show')
    }

}
function carregarListaDespesas(){
    let despesas = Array()
    despesas = bd.recuperarTodosRegistros()
    let listaDespesas = document.getElementById('lista_despesas')

    //pecorrendo o array despesas, listando cada despesa de forma dinâmica
    despesas.forEach(function(d){
        //criando a linha (tr)
        let linha = listaDespesas.insertRow()

        //criando as colunas (td)
        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`

        //ajustar o tipo
        switch(parseInt(d.tipo)){
            case 1: d.tipo = 'Alimentação'
                break
            case 2: d.tipo = 'Educação'
                break
            case 3: d.tipo = 'Lazer'
                break
            case 4: d.tipo = 'Saúde'
                break
            case 5: d.tipo = 'Transporte'
                break
        }
        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor
    })

}
