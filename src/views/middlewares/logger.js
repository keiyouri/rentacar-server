'use strict'

import jwt from 'jsonwebtoken';

const secretKey = 'yourSecretKey'; // Clave secreta para firmar el JWT

export default function loggerMiddleware(req, res, next) {
    // Middleware para extraer la cabecera UsuarioRentACar
    const usuarioRent = req.headers['usuariorentacar'];

    if (usuarioRent) {
        console.debug(`UsuarioRentACar: ${usuarioRent}`);
        req.logged = true;

        // Generar JWT
        const token = jwt.sign({ usuarioRent }, secretKey, { expiresIn: '1h' });
        res.setHeader('Authorization', `Bearer ${token}`);
    } else {
        req.logged = false;
    }

    console.debug(`${req.method} ${req.originalUrl}`);
    next();
}
