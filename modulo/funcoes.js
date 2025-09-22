/*********************************************************************************
 * Objetivo: Arquivo responsável pelas funções para criar API de estados e cidades
 * Data: 15/09/2025     
 * Autor: Geovanna
 * Versão: 1.0
 *********************************************************************************/
//Import do arquivo estados e cidades
const dados = require('./estados_cidades.js')
const MESSAGE_ERROR = {status : false, statuscode: 500, development: 'Geovanna Silva de Sousa'}

//Retorna a lista de estados 
const getAllestados = function(){
    //Padrão do Json que será o retorno da função
    let message = {status: true, statuscode: 200, development: 'Geovanna Silva de Sousa', uf: []}
   
    dados.listaDeEstados.estados.forEach(function(item){
        message.uf.push(item.sigla)
    })
    //Adiciona um novo elemento no JSON
    message.quantidade = message.uf.length

    //Apaga um elemento existente no JSON --> delete message.status  
   
    if(message.uf.length > 0)
        return message //Resultado Verdadeiro da API 200
    else
        return MESSAGE_ERROR //Resultado Falso da API 500
}

//Retorna dados do estado filtrando pela sigla 
const getEstadoBySigla = function(sigla){

    let message = {status: true, statuscode: 200, development: 'Geovanna Silva de Sousa', uf: '', descricao: '', capital: '', regiao: ''}

    const estadoRecebido = dados.listaDeEstados.estados.find(function(item){
        return item.sigla.toUpperCase() === sigla.toUpperCase()
    })

    if(estadoRecebido ){
        message.uf = estadoRecebido.sigla
        message.descricao = estadoRecebido.nome
        message.capital = estadoRecebido.capital
        message.regiao = estadoRecebido.regiao
        return message
    }else
        return MESSAGE_ERROR

}



//Retorna a capital do estado filtrando pela sigla 
const getCapitalBySigla = function(sigla){
    let message = {status: true, statuscode: 200, development: 'Geovanna Silva de Sousa', uf: '', descricao: '', capital: ''}

    // Procurar o estado que tem a sigla igual à passada (ignorando maiúsculas/minúsculas)
     const capitalSigla  = dados.listaDeEstados.estados.find(function(item){
        return item.sigla.toUpperCase() === sigla.toUpperCase()
    })

    if(capitalSigla){
        message.uf = capitalSigla.sigla
        message.descricao = capitalSigla.nome
        message.capital = capitalSigla.capital
        return message
    }else
        return MESSAGE_ERROR
    
}



//Retorna a lista de estados filtrando pela região
const getEstadosByRegiao = function(regiao){
    let message = {status: true, statuscode: 200, development: 'Geovanna Silva de Sousa', regiao: '', estados: []}

    const regiaoEstados = dados.listaDeEstados.estados.filter(function(item){
          return item.regiao.toUpperCase() === regiao.toUpperCase()
    })
 

    if(regiaoEstados.length > 0){
       message.regiao = regiao
      regiaoEstados.forEach(function(estados){
        message.estados.push({uf: estados.sigla, descricao: estados.nome})
        })
        return message
    }else
        return MESSAGE_ERROR

}

//Retorna a lista de estado que formam a capital de um país filtrando pelo país
const getEstadosIsCapitalByCountry = function(pais){
    let message = {status: true, statuscode: 200, development: 'Geovanna Silva de Sousa', capitais: []}

    if(pais === dados.listaDeEstados.pais){
        for (let i = 0; i < dados.listaDeEstados.estados.length; i++) {

            if(estado.capital_pais){
                let capitalInformacoes = {
                    uf: estado.sigla,
                    descricao: estado.nome,
                    capital: estado.capital,
                    regiao: estado.regiao,
                    capital_pais_ano_inicio: estado.capital_pais_ano_inicio,
                    capital_pais_ano_termino: estado.capital_pais_ano_termino,
                    capital_atual: estado.capital_atual,
                }
            }
        }
    }else{
        return MESSAGE_ERROR
    }
    
    return message

}

//Retorna as cidades existentes em um estado, filtrando pela sigla 
const getCidadesBySigla = function(sigla){
    let message = {status: true, statuscode: 200, development: 'Geovanna Silva de Sousa', uf: '', descricao: '', quantidade_cidades: '', cidades: []}

    const cidadesRecebidas = dados.listaDeEstados.estados.find(function(item){
        return item.sigla.toUpperCase() === sigla.toUpperCase()
    })

    if(cidadesRecebidas ){
        message.uf = cidadesRecebidas.sigla
        message.descricao = cidadesRecebidas.nome
        message.cidades = cidadesRecebidas.cidades.map(cidades => cidades.nome)
        message.quantidade_cidades = message.cidades.length
        return message
    }else
        return MESSAGE_ERROR

}




module.exports = {
    getAllestados
}


/*sigla : 'DF',
nome  : 'Distrito Federal',
capital: 'Brasília',
capital_pais: { capital: true, 
                ano_inicio: 1960, 
                ano_fim: false
              },
regiao: 'Centro-Oeste',
cidades:[
    {
       "nome":"Brasília",
       "id":"5565"*/