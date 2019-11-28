import React from 'react';
import './Brother.css';
import Visual from '../Visual/Visual';
import Add from '../Add/Add';



function Brother() {

    const { isOver, setIsOver } = React.useState(false);
    const divRef = React.useRef();


    return (
        <div className="menu" >
            
            <div className="menuBar">

                <p className="text">Save your dreams, built your reality</p>

            </div>

            <div className="elementos">
                <Add/>
                <Visual/>
                <Visual/>
                <Visual/>
                
            </div>



        </div>);


}
export default Brother;