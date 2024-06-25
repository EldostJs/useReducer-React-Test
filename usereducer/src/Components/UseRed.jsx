import React, { useReducer } from 'react'

function UseRed() {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'incriment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                return state
        }
    }

    const [state , dispatch] = useReducer(reducer, {count: 0})

    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={()=> dispatch({type:'incriment'})}>Incriment</button>
            <button onClick={()=> dispatch({type:'decrement'})}>Decrement</button>

        </div>
    )
}

export default UseRed