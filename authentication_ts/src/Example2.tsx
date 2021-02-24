import React from 'react'

const initialState = { count: 0 };

type ActionType =
    | { type: 'increment', payload: number }
    | { type: 'decrement', payload: number }

function reducer(state: typeof initialState, action: ActionType) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        default:
            throw new Error();
    }

}

export const Example2: React.FC = () => {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <div>
            <br/>
            <h1>Example 2</h1>
            count: {state.count}
            <button onClick={() => dispatch({type: 'increment', payload: 5})} > + </button>
            <button onClick={() => dispatch({type: 'decrement', payload: 5})}> - </button>
        </div>
    )
}
