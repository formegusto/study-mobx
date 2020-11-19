import { inject, observer } from 'mobx-react';
import React from 'react';

@inject('counter')
@observer
class StoreCounter extends React.Component {
    render() {
        const { counter } : any = this.props;
        return (
            <div>
                <h1>It is Store Mobx Component</h1>
                <h1>{counter.number}</h1>
                <button onClick={(e) => counter.increase()}>+1</button>
                <button onClick={(e) => counter.decrease()}>-1</button>
            </div>
        );
    }
}

export default StoreCounter;