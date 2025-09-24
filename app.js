/*********************************************************************************
 * Objetivo: API responsável em criar endPoints referentes a estados e cidades
 * Data: 15/09/2025     
 * Autor: Geovanna
 * Versão: 1.0
 * 
 * Observações: Instalar dependencias para criar a API
 *     express      - npm install express       --save Instala as dependencias para criar uma API
 *     cors         - npm install cors          --save Instala as dependencias para configurar as permissões de uma API
 *     body-parser   - npm install body-parser  --save Instala as dependencias para receber os tipos de dados via POST ou PUT
 *********************************************************************************/

//Import das dependencias
const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')

const dados         = require('./modulo/funcoes.js')
//Define a porta padrão da API, se for em um servidor de nuvem não tem acesso a porta
            // em execução podemos definir uma porta livre
const PORT          = process.PORT || 8080

//Instancia na classe do express
const app = express()

//Configurações do CORS
app.use((request, response, next)=>{
    response.header('access-Control-Allow-Origin', '*')   // IP de origem
    response.header('Acess-Control-Allow-Methods', 'GET') //Métodos(Verbos) do protocolo HTTP

    app.use(cors())
    next() //Próximo
})

// Request -> Recebe os dados da API
// Response -> Envia os dados na API

//Endpoints
app.get('/v1/estados', function(request, response){
    let estados = dados.getAllestados()

    response.status(estados.statuscode)
    response.json(estados)
})

//getEstadoBySigla
app.get('/v1/estado/:uf', function(request, response){
    let sigla = request.params.uf
    let estado = dados.getEstadoBySigla(sigla)

    response.status(estado.statuscode)
    response.json(estado)
})


//getCapitalbySigla
app.get('/v1/capital/estado/:uf', function(request, response){
    let sigla = request.params.uf
    let capital = dados.getCapitalBySigla(sigla)
    
    response.status(capital.statuscode)
    response.json(capital)
})

//getEstadosbyRegiao
app.get('/v1/regiao/estado/:regiao', function(request, response){
    let regiao = request.params.regiao
    let estado = dados.getEstadosByRegiao(regiao)

    response.status(estado.statuscode)
    response.json(estado)
})/


//getEstadosIsCapitalByCountry
app.get('/v1/pais/estado/', function(request, response){
    let pais = request.query.pais
    let isCapital = dados.getEstadosIsCapitalByCountry(pais)

    response.status(isCapital.statuscode)
    response.json(isCapital)
})


//getCidadesBysigla
app.get('/v1/cidades/estado/:uf', function(request, response){
    let sigla = request.params.uf
    let cidades = dados.getCidadesBySigla(sigla)

    response.status(cidades.statuscode)
    response.json(cidades)
})


app.listen(PORT, function(){
    console.log('API aguardando requisições....')
})