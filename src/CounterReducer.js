const CounterReducer = (state, action) => {

    switch (action) {

        case 'INCREAMENT':

            return state + 1;
        
        case 'DECREAMENT':
            
            return state - 1

        default:
            alert('Error');
                   


    }
}

export default CounterReducer;