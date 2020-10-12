
import { retornaArreglo } from './../../base/07-deses-arr';

describe('Pruebas en desestructuración', () => {
    
    test('debe retornar un string y un numero', () => {
        
        const [letras,numeros] = retornaArreglo();
//        const arr = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');

        //expect(arr).toEqual(['ABC',123]);
  
})

})