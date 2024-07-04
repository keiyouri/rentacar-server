const express = require('express');
const app = express();

const usuarioRentACarMiddleware = (req, res, next) => {
    const usuario = req.headers.usuariorentacar;
    if (usuario) {
        console.log(`UsuarioRentACar: ${usuario}`);
        req.logged = true;
    } else {
        req.logged = false;
    }
    next();
};

app.use(usuarioRentACarMiddleware);
