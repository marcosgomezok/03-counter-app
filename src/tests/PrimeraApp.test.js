//import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import React from 'react';

import { shallow } from 'enzyme';




describe('Pruebas en <PrimeraApp />', () => {
     
 /*   test('debe de mostrar el mensaje "Hola, Soy Goku" ', () => {
        
       const saludo = "Hola, Soy Goku";
        const { getByText } = render(<PrimeraApp saludo={ saludo }/>)
        expect ( getByText ( saludo ) ).toBeInTheDocument();
no se utilizaya que tobeindocument no existe luego de comentar en setuptest
    })*/

    test('debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, Soy Goku'
        const wrapper = shallow(<PrimeraApp saludo = {saludo}/>)

        expect(wrapper).toMatchSnapshot();
    
    })

    test('debe mostrar el subtitulo enviado por props ', () => {

        const saludo = 'Hola, Soy Goku';
        const subTitulo = 'Soy un subtitulo';
        const wrapper = shallow(<PrimeraApp saludo = {saludo} subtitulo={subTitulo}/>)
        
        const textoParrafo = wrapper.find('p').text();//se busca como en css
        //similar al document.queryselector()
        expect(textoParrafo).toBe(subTitulo);

    })

    


})