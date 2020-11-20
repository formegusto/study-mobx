import { inject, observer } from 'mobx-react';
import React from 'react';
import CounterStore from '../stores/CounterStore';

type Props = {
    number?: number;
    increase?: () => void;
    decrease?: () => void;
};

@inject((stores: any) : CounterStore =>  ({
    number: stores.counter.number,
    increase: stores.counter.increase,
    decrease: stores.counter.decrease
}))
@observer
class StoreCounter extends React.Component<Props> {
    render() {
        const { number, increase, decrease } = this.props;

        return (
            <div>
                <h1>It is Store Mobx Component</h1>
                <h1>{number!}</h1>
                <button onClick={(e) => increase!()}>+1</button>
                <button onClick={(e) => decrease!()}>-1</button>
            </div>
        );
    }
}

export default StoreCounter;