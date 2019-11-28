import React from 'react';
import './Write.css';

import Dream from '../Dream/Dream';
import ContentEditable from 'react-contenteditable';


function Write(props) {

    const [id, setId]= React.useState(props.id);
    const [words, setWords] = React.useState(props.text===""?props.text:"Click me to write");
    const [wordsArray, setWordsArray] = React.useState([]);
    
    function removeItemFromArr ( arr, item ) {
        var i = arr.indexOf( item );
     
        if ( i !== -1 ) {
            arr.splice( i, 1 );
        }
    }

    const handleChange = (evt)=>{
        setWords(evt.target.value);
        let temp = evt.target.value.split(" ");
        setWordsArray(temp);
    }


    return (<div className="writer container scketch animated fadeInUp">

        <Dream props={words}></Dream>
        <div className="type">
            <ContentEditable
                disabled={false}
                html={words}
                className={'texto'}
                onChange={handleChange}
                >
                
            </ContentEditable>
        </div>

    </div>);
}
export default Write;