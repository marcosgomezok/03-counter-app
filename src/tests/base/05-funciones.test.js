import { getUser, getUsuarioActivo } from '../../base/05-funciones';

import '@testing-library/jest-dom';//opcional


describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto ', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest)
        //console.log(user)
    })

    //getUsuarioActivo debe retornar un objeto
    test('getUsuarioActivo debe retornar un objeto ', () => {
        


        const nombreActivo = 'Marcos';

        const userActivo = getUsuarioActivo(nombreActivo);

        expect(userActivo).toEqual({
            uid: 'ABC567',
            username: 'Marcos'
        })
        //console.log(userActivo)

    })
    
    
    
})

/* const userTestActivo = {
    uid: 'ABC567',
    username: 'Marcos'
} */