import React from 'react';
import { Basket, Item } from '../types';
import '../styles/styles.css';
import ShopItemListTemplate from './ShopItemListTemplate';
import BasketItemListTemplate from './BasketItemListTemplate';

type Props = {
    items?: Item[],
    baskets?: Basket[],
}

function SuperMarketTemplate({items, baskets} : Props) {
    return (
        <div className="SuperMarketTemplate">
            <ShopItemListTemplate items={items}/>
            <BasketItemListTemplate items={baskets} />
        </div>
    );
}

export default SuperMarketTemplate;