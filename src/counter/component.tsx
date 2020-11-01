import { useObserver } from 'mobx-react';
import React from 'react';
import { useCounterStore } from './context';

function CounterComponent() {
    const store = useCounterStore();

    return useObserver (() =>  
    <>
        <h1>{store().count}</h1>
        <button onClick={() => store().increase()}>+1</button>
        <button onClick={() => store().decrease()}>-1</button>
    </> 
    )
}

export default CounterComponent;