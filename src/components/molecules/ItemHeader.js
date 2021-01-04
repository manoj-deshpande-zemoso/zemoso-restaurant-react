import React from 'react';
import { CardSubDetail } from '../atoms/CardSubDetail';
import { FoodIcon } from '../atoms/FoodIcon';

export function ItemHeader(props) {
    return(
        <div className="item-header">
            <FoodIcon isVeg={props.item.isVeg}/>
            <CardSubDetail classes="item-name" innerText={props.item.name}/>
        </div>
    )
}