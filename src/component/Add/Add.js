import React from 'react';
import './Add.css'






function Add(props) {

    return (

        <div className="adcaja" onClick={props.onClick}>
            <p>+</p>
        </div>
    );
}
export default Add;