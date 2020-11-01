import { observable } from 'mobx';
import React from 'react';

class SimpleCounterContainer {
    @observable number: number = 0;
    
    increase(){
        this.number++;
    }

    decrease(){
        this.number--;
    }
}

const store = new SimpleCounterContainer;

function SimpleCounter() {
    return (
        <div>
            <h1>{store.number}</h1>
            <button onClick={(e) => store.increase()}>+1</button>
            <button onClick={(e) => store.decrease()}>-1</button>
        </div>
    );
}

export default SimpleCounter;