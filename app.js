const http = require( 'http' );     /** Paquete nativo de Node */

/** Crea servidor con Node */
http .createServer( ( request, response ) => {

    let data = {
        nombre: 'Juliana',
        edad: 29,
        url: request .url
    }

    response .writeHead( 200, { 'Content-Type': 'application/json' });  /** Agrega a la cabecera el tipo de contenido que se va a usar */
    response .write( JSON .stringify( data ) );                         /** Se escribe el contenido en el cuerpo de la página como una cadena de texto */
    response .end();                                                    /** Se finaliza la respuesta del servidor */
}) .listen( 8080 );

console .log( 'Escuchando en el puerto 8080' );