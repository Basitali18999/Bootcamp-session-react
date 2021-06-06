import React, { useReducer } from 'react'
import CounterReducer from './CounterReducer'


const Child2 = () => {

   const  [state, dispatch] = useReducer(CounterReducer, 1);

    return (

        <div>
            <h1>From useReducer</h1>
            <h2>The value of state is = {state} </h2>
            <button onClick={() =>  dispatch('INCREAMENT') } >INCREAMENT</button>
            <button onClick={() =>  dispatch('DECREAMENT') } >DECREAMENT</button>
            <button onClick={() =>  dispatch('') } >If case dont match</button>

        </div>
    )

}

export default Child2;