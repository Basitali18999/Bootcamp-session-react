// import React, { useState } from 'react';
// import './App.css'

// function App() {

//   let [count, setCount]=useState(1);
//   let [isMorning, setMorning]=useState(true)
  
//   const Increm = () =>{

//     setCount(count + 1)
       
//   }
//   const Decrem = () => {
    
//     if(count > 0){
//     setCount(count - 1)
//     }
    
//     else {
//       alert("Sorry Zero Limit Reached")
//       setCount(0)

//     }
//   }

  
  
//   return (
//     <div className={isMorning ? 'Morning' : 'Night'} >
//       <h1>Good {isMorning ? 'Morning' : 'Night' } </h1>
//       <h1>The counter value is this = {count} </h1>
//     <button onClick={Increm}  >Increment counter</button>
//     <button onClick={()=> setMorning(!isMorning) }>Change the Day </button>
//     <button onClick={Decrem} > Decrement counter  </button>
    
    
//     </div>

    
//   );

// }

// export default App;

// CSS of this project

// .Morning {

//     height: 500px;
//     background-color: orange;
//     color: whitesmoke;
//   }
//   .Night {
  
//     height: 500px;
//     background-color: darkslategray;
//     color: turquoise;
//   }
  
  
  
