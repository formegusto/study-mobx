import React from 'react';
import { baskets } from '../components/item/BasketItemList';
import { items } from '../components/item/ShopItemList';
import SuperMarketTemplate from '../components/SuperMarketTemplate';

function SuperMarketContainer() {
    return (
        <SuperMarketTemplate items={items} baskets={baskets}/>
    );
}

export default SuperMarketContainer;