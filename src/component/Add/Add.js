import React from 'react';
import './Add.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";





function Add() {

    
    
    function handleClick (e){
        
        e.preventDefault();
        
        
    }
    
    return (
        <Link to="/add">
        <div className="adcaja">
            <p>+</p>
        </div>
        </Link>
        );
    }
    export default Add;