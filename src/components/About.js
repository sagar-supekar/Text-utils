import React from "react";
import "./about.css";
import { useState } from "react";
export default function About()
{
    const[state,setState]=useState(
        {
        backgroundColor:'white',
        color:'black'
        }
    );
    

    const changeColor=()=>{
        if(state.color==='white')
        {
              setState({
                backgroundColor:'white',
                color:'black'
              })
        }
        else{
            setState({
                backgroundColor:'black',
                color:'white'
            })
        }
    }
 
    return(
        <>
        <div className="about" style={state}>
            <h1 style={state}>About Us</h1>
            <p>
            Every business has an origin story worth telling, and usually one that justifies why you do business and have clients.<br/>

            Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges, and its vision for the future.

            Whatever it is, your story matters to your prospective buyers and team members. Make it entertaining and as immersive as you can.
            </p>
            <button type="submit" className='btn btn-primary ' onClick={changeColor}>Change mode</button>
             </div>

        </>
    )
}