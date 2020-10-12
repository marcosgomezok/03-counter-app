import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";



describe('Pruebas en 02-template-string.js', () => {
    

    test('getSaludo debe retornar Hola Marcos', () => {
        
        const nombre = 'Marcos';

        const saludo = getSaludo(nombre);
        //console.log(saludo)
        expect(saludo).toBe('Hola ' + nombre + '!');

    })

    //getSaludo debe retornar Hola Carlos! si nohay argumento en nombre
    test('getSaludo debe retornar Hola Carlos! si nohay argumento en nombre ', () => {
        
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!')

    })
    
})
