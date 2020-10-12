//import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
//FC
const PrimeraApp = ({saludo,subtitulo="soy un subtitulo "}) => {

    //const saludo = 'Hola Mundo';

    


    //const saludo = [1,2,3,4,5];
    /*const saludo = {
        nombre: 'Marcos',
        edad:23
    }
*/

/*
if(!saludo){
    throw new Error('El saludo es necesario')
}

*/



    return (
//        <div>
//        <Fragment>
        <>
            <h1>{saludo}</h1>

                {/*<h1>{saludo}</h1>
        <pre>{JSON.stringify(saludo,null,3)}</pre>*/}
        <p>{subtitulo}</p>
        </>
//        </Fragment>

//las <></> tambien  son fragments pero no hay que importar

 //       </div>

    );
            
}
//prototypes

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
    //hace que la propiedad saludo sea un string obligatorio en index.js
}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subitulo defecto'
}
export default PrimeraApp;