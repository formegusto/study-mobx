import React from 'react';
import { items } from '../components/item/ShopItemList';
import SuperMarketTemplate from '../components/SuperMarketTemplate';

function SuperMarketContainer() {
    return (
        <SuperMarketTemplate items={items}/>
    );
}

export default SuperMarketContainer;