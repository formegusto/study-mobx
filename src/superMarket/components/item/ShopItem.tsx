import React from 'react';
import { Item } from '../../types';
import '../../styles/styles.css';

type Props = {
    item: Item,
    onPut?: (name: string, price: number) => void,
};

function ShopItem({item, onPut} : Props) {
    console.log(onPut);
    return (
        <div className="ShopItem" onClick={(e) => onPut!(item.name, item.price)}>
            <h4>{item.name}</h4>
            <div>{item.price}원</div>
        </div>
    )
}

export default ShopItem;