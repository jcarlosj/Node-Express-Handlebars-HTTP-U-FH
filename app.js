const http = require( 'http' );     /** Paquete nativo de Node */

/** Crea servidor con Node */
http .createServer( ( request, response ) => {
    response .write( '<h1>Web Server con Node</h1>' );
    response .end();    
}) .listen( 8080 );

console .log( 'Escuchando en el puerto 8080' );