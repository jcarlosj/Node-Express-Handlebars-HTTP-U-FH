const express = require( 'express' ),     /** Framework para Node */
    app = express();

/** Rutas */
app .get( '/', ( request, response ) => {
    response .send( '<h1>WebServer usando Express</h1>' );
});

/** Crea servidor con Node */
app .listen( 3000 );

console .log( 'Escuchando en el puerto 3000' );