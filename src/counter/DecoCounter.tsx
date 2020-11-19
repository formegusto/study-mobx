import React from 'react';
import { observer } from 'mobx-react';
import { action, observable } from 'mobx';

@observer
class DecoCounter extends React.Component {
    @observable
    number: number = 0;

    @action
    increase = ():void => {
        this.number++;
    }

    @action
    decrease = ():void => {
        this.number--;
    }

    render() {
        return (
            <div>
                <h1>It is Deco Mobx Component</h1>
                <h1>{this.number}</h1>
                <button onClick={(e) => this.increase()}>+1</button>
                <button onClick={(e) => this.decrease()}>-1</button>
            </div>
        )
    }
}

export default DecoCounter;