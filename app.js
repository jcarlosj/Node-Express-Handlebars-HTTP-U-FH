const express = require( 'express' ),     /** Framework para Node */
    app = express();

/** Middlewares */
app .use( express .static( __dirname + '/public' ) );

/** Rutas */
app .get( '/', ( request, response ) => {
    let data = {
        nombre: 'Juliana',
        edad: 29,
        url: response .url
    }

    response .send( data );     /** send: detecta que los datos están en formato JSON y lo formatea adecuadamente */
});
app .get( '/contactenos', ( request, response ) => {
    response .send( `<h2>Contactenos</h2><p>Vista servida por una ruta de Express</p>` );
});

/** Crea servidor con Node */
app .listen( 3000, () => {
    console .log( 'Escuchando en el puerto 3000' );
});