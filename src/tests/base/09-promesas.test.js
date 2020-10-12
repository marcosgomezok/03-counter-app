
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';



describe('Pruebas con promesas', () => {
    
    test('getHeroeByIdAsync debe retornar un Héroe async', (done) => {
        
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe=>{
                
                expect(heroe).toBe(heroes[0]);
                done();

            })


    })

    test('debe de obtener un error si el héroes por id no existe', (done) => {
        
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error=>{
                expect(error).toBe('No se pudo encontrar el héroe')
                done();    
            })


    })
    
})
