import React from 'react';
import { Item } from '../../types';
import '../../styles/styles.css';

type Props = {
    item: Item
};

function ShopItem({item} : Props) {
    return (
        <div className="ShopItem">
            <h4>{item.name}</h4>
            <div>{item.price}원</div>
        </div>
    )
}

export default ShopItem;