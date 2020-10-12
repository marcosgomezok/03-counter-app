
describe('Pruebas en el archivo demo.test.js', () =>{
    test('deben de ser iguales los string', () => {
    
        //1. Inicialización
        const mensaje = 'Hola Mundo';
    
        //2. estimulacion
        const mensaje2 = `Hola Mundo`;
    
        //3. observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    
    })


})




/*     const isActive = true; 

    if(isActive){
        throw new Error('No está activo') 
    }

*/