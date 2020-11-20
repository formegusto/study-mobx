import React from 'react';
import { Basket, Item } from '../types';
import '../styles/styles.css';
import ShopItem from './item/ShopItem';
import BasketItem from './item/BasketItem';

type Props = {
    items?: Item[],
    baskets?: Basket[],
}

function SuperMarketTemplate({items, baskets} : Props) {
    return (
        <div className="SuperMarketTemplate">
            <div className="items-wrapper">
                <h2>상품</h2>
                {items!.map((item, idx) => (
                    <ShopItem item={item} key={idx} />
                ))}
            </div>
            <div className="basket-wrapper">
                <h2>장바구니</h2>
                {baskets!.map((item, idx) => (
                    <BasketItem basket={item} key={idx} />
                ))}
                <hr/>
                <p>
                    <b>총합: </b> {
                    baskets!.reduce((acc, cur) => {
                        return acc + (cur.item.price * cur.count)
                    }, 0)}원
                </p>
            </div>
        </div>
    );
}

export default SuperMarketTemplate;