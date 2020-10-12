import React,{useState} from 'react' //rafcp es un snipet que crea un componente con proptype
import PropTypes from 'prop-types';
//FC

const CounterApp = ({value=10}) =>{

    const [counter, setCounter] = useState(value); //retorna un arreglo []

    //console.log(nombre, setNombre)

    //handleAdd
    const handleAdd = () => {
        setCounter(counter+1) //no funciona counter++ porque se intentacambiar el valor de una cte
        //setCounter((c)=>c+1) 
    }
    const handleReset = () =>{
        setCounter(value)
    }

    const handleSubtract = () =>{
        setCounter(counter-1)
    }


    return (
            <>
                <h1>CounterApp</h1>
                <h2> { counter } </h2>
                <button onClick={handleAdd}>+1</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleSubtract}>-1</button>
                
            </>
    );
}
CounterApp.propTypes = {
    value: PropTypes.number
}
export default CounterApp;

//<button onClick={function(){console.log('+1')}}>+1</button>

//no usar handleAdd() sale undefined o no funciona. leer mas