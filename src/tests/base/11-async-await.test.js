
import { getImagen } from '../../base/11-async-await';

describe('Pruebas con async-await y Fetch', () => {
    
    test('debe retornar el url de la imagen', async() => {
       
        const url = await getImagen()
        //expect(typeof url).toBe('string');// esto no funcionaria si no fuera async
        //si la url se cambia a una que no existe lo mismo pasa la prueba porq el error tmb es string
        expect(url.includes('https://')).toBe(true) 



        //const url = getImagen()
        
    })
    
})
