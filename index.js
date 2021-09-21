function geraStringAleatoria(tamanho) {
    var stringAleatoria = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
    for (var i = 0; i < tamanho; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
}

const express = require('express');
const server = express();
server.listen(8001);

server.get("/gerar/:id", (req, resp) => {
    const {id} = req.params;

    var valor = geraStringAleatoria(id);

    return resp.send({senha: valor});
})