import React from 'react';
import vegicon from '../../images/veg-icon.png';
import nonvegicon from '../../images/non-veg-icon.png';

export function FoodIcon(props) {
    const imageSrc = props.isVeg ? vegicon : nonvegicon;
    const altText = `${props.isVeg ? 'Veg' : 'Non-Veg'}`;
    return(
        <figure className="icon-figure">
            <img className="icon" src={imageSrc} alt={altText}></img>
        </figure>
    )
}