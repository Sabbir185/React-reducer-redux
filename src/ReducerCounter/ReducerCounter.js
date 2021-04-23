import React, { useReducer } from 'react';

const initialState = {count: 0};

const reducer = (state, action) => {
    switch(action.type){
        case 'increase':
            return {count: state.count + 1};
        case 'decrease':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

const ReducerCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h4>Reducer Counter : {state.count}</h4>
            <button onClick={()=>dispatch({type:'increase'})}>increase</button>
            <button onClick={()=>dispatch({type:'decrease'})}>decrease</button>
        </div>
    );
};

export default ReducerCounter;