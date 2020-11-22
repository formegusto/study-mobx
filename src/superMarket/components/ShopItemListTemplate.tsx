import React from 'react';
import { Item } from '../types';
import '../styles/styles.css';
import ShopItem from './item/ShopItem';
import { inject, observer } from 'mobx-react';
import MarketStore from '../../stores/MarketStore';

type Props = {
    items?: Item[],
    onPut?: (name: string, price: number) => void,
}

function ShopItemListTemplate({ items, onPut } : Props) {
    return (
        <div className="items-wrapper">
                <h2>상품</h2>
                {items!.map((item, idx) => (
                    <ShopItem item={item} key={idx} onPut={onPut}/>
                ))}
        </div>
    )
}

type InjectProps = {
    market? : MarketStore,
}

export default inject(({market} : InjectProps) => ({
    onPut: market?.put
}))(observer(ShopItemListTemplate));