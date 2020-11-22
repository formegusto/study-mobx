import { inject, observer } from 'mobx-react';
import React from 'react';
import MarketStore from '../../stores/MarketStore';

type Props = {
    total?: () => number;
}

function TotalPriceTemplate({ total } : Props) {
    return (
        <p>
            <b>총합: </b> 
            {total!}원
        </p>
    )
}

type InjectProps = {
    market?: MarketStore;
}

export default inject(({ market } : InjectProps) => ({
    total: market!.total,
}))(observer(TotalPriceTemplate));