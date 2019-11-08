const 
    express = require( 'express' ),     /** Framework para Node */
    hbs = require( 'hbs' ),             /** Librería de Handlebars para Express */
    app = express();

/** Middlewares */
app .use( express .static( __dirname + '/public' ) );       /** Define directorio público */
hbs .registerPartials( __dirname + '/views/partials' );     /** Define directorio para partials */
app .set( 'view engine', 'hbs' );                           /** Define el motor de plantillas Handlebars para Express */

/** Rutas */
app .get( '/', ( request, response ) => {
    response .render( 'home', {
        title: 'Web Server',
        anio: new Date() .getFullYear()
    } );     /** render: el archivo con el nombrepasado y lo renderiza en la página */
});
app .get( '/contactenos', ( request, response ) => {
    response .render( 'contactenos', {
        anio: new Date() .getFullYear()
    } );
});

/** Crea servidor con Node */
app .listen( 3000, () => {
    console .log( 'Escuchando en el puerto 3000' );
});