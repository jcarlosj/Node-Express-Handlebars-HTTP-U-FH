const 
    express = require( 'express' ),     /** Framework para Node */
    hbs = require( 'hbs' ),             /** Librería de Handlebars para Express */
    app = express();

/** Variable de Entorno (Configuración para proveedores de Host) */
const port = process .env .PORT || 3000;        

/** Middlewares */
app .use( express .static( __dirname + '/public' ) );       /** Define directorio público */
hbs .registerPartials( __dirname + '/views/partials' );     /** Define directorio para partials */
app .set( 'view engine', 'hbs' );                           /** Define el motor de plantillas Handlebars para Express */

/** Helpers */
require( './hbs/helpers' );     /** Importa Helpers registrados en Handlebars */

/** Rutas */
app .get( '/', ( request, response ) => {
    response .render( 'home', {
        title: 'Web Server',
        name: 'luisA mAríA bAzAlAr'
    } );     /** render: el archivo con el nombrepasado y lo renderiza en la página */
});
app .get( '/contactenos', ( request, response ) => {
    response .render( 'contactenos' );
});

/** Crea servidor con Node */
app .listen( port, () => {
    console .log( `Escuchando en el puerto ${ port }` );
});