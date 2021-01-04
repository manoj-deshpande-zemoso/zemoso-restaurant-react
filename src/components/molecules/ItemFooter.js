import React from 'react';
import { CardSubDetail } from '../atoms/CardSubDetail';

export function ItemFooter(props) {
    const priceInnerText = `Rs. ${props.item.price}`;
    const categoryInnerText = `category: ${props.item.category}`;
    return(
        <div className="item-footer">
            <CardSubDetail classes="item-price" innerText={priceInnerText} />
            <CardSubDetail classes="item-category" innerText={categoryInnerText} />
        </div>
    )
}