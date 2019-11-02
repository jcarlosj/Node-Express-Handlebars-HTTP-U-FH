const express = require( 'express' ),     /** Framework para Node */
    app = express();

/** Middlewares */
app .use( express .static( __dirname + '/public' ) );       /** Define directorio público */
app .set( 'view engine', 'hbs' );                           /** Define el motor de plantillas Handlebars para Express */

/** Rutas */
app .get( '/', ( request, response ) => {
    response .render( 'home', {
        title: 'Web Server',
        anio: new Date() .getFullYear()
    } );     /** render: el archivo con el nombrepasado y lo renderiza en la página */
});
app .get( '/contactenos', ( request, response ) => {
    response .send( `<h2>Contactenos</h2><p>Vista servida por una ruta de Express</p>` );
});

/** Crea servidor con Node */
app .listen( 3000, () => {
    console .log( 'Escuchando en el puerto 3000' );
});