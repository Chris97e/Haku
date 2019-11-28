import React from 'react';
import './Hello.css'
import fetch from 'node-fetch';
import Unsplash from 'unsplash-js';

//using fetch to simplify the fetch XD
global.fetch = fetch;

function Hello(props) {

    const [scrollPostition, setScrollPostition] = React.useState(0);
    const divRef = React.useRef();


    React.useLayoutEffect(() => {

        window.addEventListener('mousewheel', (event) => {



            if (divRef.current.offsetTop <= -840) {
                divRef.current.style.display = "none";

            }

            setScrollPostition((prev) => {


                if (divRef.current.offsetTop >= 0 && event.wheelDeltaY >= 0) {
                    return prev;
                } else {

                    if ((divRef.current.offsetTop + event.wheelDeltaY * 0.1) > 0) {

                        return 0;
                    }
                    else {

                        return prev + event.wheelDeltaY * 0.1;
                    }


                }


            });

        });



    }, []);



    return (<div className="hello" style={{ top: scrollPostition }} ref={divRef}>
        <div className="container etiqueta animated flipInY">
            <h1 className="animated fadeIn haku">Hakú.</h1>
            <p className="imagine animated fadeIn delay-5s">Imagine write beyond.</p>
        </div>
    </div>);
}
export default Hello;