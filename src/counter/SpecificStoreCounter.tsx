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
class SpecificStoreCounter extends React.Component<Props> {
    render() {
        const { number, increase, decrease } = this.props;

        return (
            <div>
                <h1>It is SpecificStore Mobx Component ( Store 같이 쓰고 있어서 같이 올라감 )</h1>
                <h1>{number!}</h1>
                <button onClick={(e) => increase!()}>+1</button>
                <button onClick={(e) => decrease!()}>-1</button>
            </div>
        );
    }
}

export default SpecificStoreCounter;