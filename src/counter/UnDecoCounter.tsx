import { action, decorate, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';

class UnDecoCounter extends React.Component {
    number: number = 0;

    increase = ():void => {
        this.number++;
    }

    decrease = ():void => {
        this.number--;
    }

    render() {
        return (
            <div>
                <h1>It Is UnDecorator Mobx Component</h1>
                <h1>{this.number}</h1>
                <button onClick={(e) => this.increase()}>+1</button>
                <button onClick={(e) => this.decrease()}>-1</button>
            </div>
        )
    }
}

decorate(UnDecoCounter,{
    number: observable,
    increase: action,
    decrease: action,
});

export default observer(UnDecoCounter);