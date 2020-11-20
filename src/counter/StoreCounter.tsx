import { inject, observer } from 'mobx-react';
import React from 'react';
import CounterStore from '../stores/CounterStore';

interface Props {
    counter?:  CounterStore
}

@inject('counter')
@observer
class StoreCounter extends React.Component<Props> {
    counter = this.props.counter
    render() {
        return (
            <div>
                <h1>It is Store Mobx Component</h1>
                <h1>{this.counter!.number}</h1>
                <button onClick={(e) => this.counter!.increase()}>+1</button>
                <button onClick={(e) => this.counter!.decrease()}>-1</button>
            </div>
        );
    }
}

export default StoreCounter;