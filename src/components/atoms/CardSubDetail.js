import React from 'react';

export function CardSubDetail(props) {
    return(
        <div className={props.classes}>
            {props.innerText}
        </div>
    );
}