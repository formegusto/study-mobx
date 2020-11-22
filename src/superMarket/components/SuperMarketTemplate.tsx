import React from 'react';
import { Item } from '../types';
import '../styles/styles.css';
import ShopItemListTemplate from './ShopItemListTemplate';
import BasketItemListTemplate from './BasketItemListTemplate';

type Props = {
    items?: Item[],
}

function SuperMarketTemplate({items} : Props) {
    return (
        <div className="SuperMarketTemplate">
            <ShopItemListTemplate items={items!}/>
            <BasketItemListTemplate/>
        </div>
    );
}

export default SuperMarketTemplate;