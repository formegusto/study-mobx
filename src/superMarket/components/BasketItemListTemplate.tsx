import React from 'react';
import { Basket } from '../types';
import BasketItem from './item/BasketItem';
import '../styles/styles.css';
import MarketStore from '../../stores/MarketStore';
import { inject, observer } from 'mobx-react';

type Props = {
    items?: Basket[],
    total?: () => number,
    onTake?: (name: string) => void,
}

function BasketItemListTemplate({ items, total, onTake } : Props) {
    return (
        <div className="basket-wrapper">
                <h2>장바구니</h2>
                {items!.map((item, idx) => (
                    <BasketItem basket={item} key={idx} onTake={onTake!}/>
                ))}
                <hr/>
                <p>
                    <b>총합: </b> 
                    {total!}원
                </p>
        </div>
    );
}

type InjectProps = {
    market? : MarketStore
}

export default inject(({market} : InjectProps) => ({
    items: market!.selectedItems,
    total: market!.total,
    onTake: market!.take,
}))(observer(BasketItemListTemplate));