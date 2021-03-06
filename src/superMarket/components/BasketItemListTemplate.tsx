import React from 'react';
import { Basket } from '../types';
import BasketItem from './item/BasketItem';
import '../styles/styles.css';
import MarketStore from '../../stores/MarketStore';
import { inject, observer } from 'mobx-react';
import TotalPriceTemplate from './TotalPriceTemplate';

type Props = {
    baskets?: Basket[],
    onTake?: (name: string) => void,
}

function BasketItemListTemplate({ baskets, onTake } : Props) {
    return (
        <div className="basket-wrapper">
                <h2>장바구니</h2>
                {baskets!.map((item, idx) => (
                    <BasketItem basket={item} key={idx} onTake={onTake!}/>
                ))}
                <hr/>
                <TotalPriceTemplate />
        </div>
    );
}

type InjectProps = {
    market? : MarketStore
}

export default inject(({market} : InjectProps) => ({
    baskets: market!.selectedItems,
    total: market!.total,
    onTake: market!.take,
}))(observer(BasketItemListTemplate));