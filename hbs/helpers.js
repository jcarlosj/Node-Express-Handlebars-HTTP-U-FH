const hbs = require( 'hbs' );

/** Registro de Helpers en Handlebars (por lo que no requieren ser exportados) */
hbs .registerHelper( 'getCurrentYear', () => {              /** Define un Helper para HandleBars */
    return new Date() .getFullYear();
});

hbs .registerHelper( 'capitalize', ( text ) => {
    let words = text .split( ' ' );

    words .forEach( ( word, idx ) => {
        words[ idx ] = word .charAt( 0 ) .toUpperCase() + word  .slice( 1 ) .toLowerCase();     /** Colola mayúscula solo a la primera letra de la palabra */
    });

    return words .join( ' ' );
});