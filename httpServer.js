// Familiar com chat tcp, um servidor HTTP tambem fica aberto aguardando conexoes.

const http = require('http')
// Pode ser utlizado map, array e tals para diminuir os if e mais dinamico. Podera ser um arquivo externo se quiser
const routes = new Map()

/*
routes.set('/ola', (req,res) => {
    res.end('Ola')
})

 if (!routes.has(req.url)) {
     return response.end('404')
 } else {
     routes.get(req.url)(req,res)
 }
*/

const server = http.createServer((req,res) => {
    // Res sera resposta, mandando o cabecalho e codigo 200. Que sera tipo texto e que estar funcitonando
    res.writeHead(200, {'Content-Type':'text/plain'})
    // Agora criaremos outros end-points, routas ou chama como quiser.

    if (req.url === '/') {
        // Aqui sera enviado os dados
        res.end('Inicializado com sucesso!')
    } else if (req.url === '/ola') {
        res.end('Ola, tudo bem?')
    } else {
        res.statusCode(404)
    }
})

// Servidor inicializado começa escutar
server.listen(1337, '127.0.0.1', ()=> {
    console.log('Servidor rodando http://localhost:1337')
})