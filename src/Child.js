import React, { useContext } from 'react';
import counterContext from './CreateContext';


const Child = () => {

const updateContext=useContext(counterContext); 


    return (
 
        
        <div>
            <h1>From useContext</h1>
            <h2>The value of state is = {updateContext[0]}  </h2>
            <button onClick={()=> {updateContext[1](++updateContext[0])} }>Increament
            </button>
            <button onClick={()=> {updateContext[1](--updateContext[0])} }>Decreament
            </button>
        
        </div>

    )
}

export default Child;