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
  

}

//Retorna a capital do estado filtrando pela sigla 
const getCapitalBySigla = function(sigla){
    let message = {status: true, statuscode: 200, development: 'Geovanna Silva de Sousa', uf: [], descricao: [], capital: []}

    // Procurar o estado que tem a sigla igual à passada (ignorar maiúsculas/minúsculas)
     dados.listaDeEstados.estados.find(function(item){
        return item.uf.toUpperCase() === sigla.toUpperCase()
    })

    
}

//Retorna a lista de estados filtrando pela região
const getEstadosByRegiao = function(regiao){

}

//Retorna a lista de estado que formam a capital de um país filtrando pelo país
const getEstadosIsCapitalByCountry = function(pais){

}

//Retorna as cidades existentes em um estado, filtrando pela sigla 
const getCidadesBySigla = function(sigla){

}


module.exports = {
    getAllestados
}