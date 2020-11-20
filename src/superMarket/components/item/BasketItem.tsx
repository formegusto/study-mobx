import React from 'react';
import { Basket } from '../../types';
import '../../styles/styles.css';

type Props = {
    basket: Basket;
}

function BasketItem ({ basket } : Props) {
    return (
        <div className="BasketItem">
          <div className="name">{basket.item.name}</div>
          <div className="price">{basket.item.price}원</div>
          <div className="count">{basket.count}</div>
          <div className="return">갖다놓기</div>
        </div>
    );
}

export default BasketItem;