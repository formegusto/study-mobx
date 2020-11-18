import { action, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';

class Counter extends Component {
    number = 0;

    constructor() {
        super()
        makeObservable(this, {
            number: observable,
            increase: action,
            decrease: action
        })
    }

    increase = () => {
        this.number++;
    }

    decrease = () => {
        this.number--;
    }

    render() {
        return (
            <div>
                <h1>{this.number}</h1>
                <button onClick={(e) => this.increase()}>+1</button>
                <button onClick={(e) => this.decrease()}>-1</button>
            </div>
        )
    }
}

export default observer(Counter);