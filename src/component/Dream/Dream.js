import React from 'react';
import Unsplash from 'unsplash-js';

const clientId = '6f1f93b6de15e3641ac6f75fa9e701f411e55e3a724b51de9aca36de964645a9';
const endpoint = 'https://api.unsplash.com/search/photos';



function Dream(props) {
   // console.log(props);
   function search(){
        fetch(`${endpoint}?query=$hola&client_id=${clientId}`).then(response => {

            return response.json();
    
        }).then(json => {
            console.log(json);
        });
    }

    
    return (<div>


    </div>);
}



export default Dream;