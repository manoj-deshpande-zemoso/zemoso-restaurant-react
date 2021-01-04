import React from 'react';
import { Header } from '../molecules/Header';
import { RestaurantBody } from '../organisms/RestaurantBody';

export function Restaurant(props) {

    return(
        <div className="restaurantContainer">
            <Header />
            <RestaurantBody />
        </div>
    );
}