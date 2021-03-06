import React, { useState } from 'react';
import Common from './Common';
import image from "./images/slide-2.gif";
import "./home.css";
import Typewriter from "typewriter-effect";
import {NavLink} from 'react-router-dom';


const Home = () =>{


    const [state] = useState({
        title : "Hi,",
        titleTwo : "I'm",
        titleThree : "Code&coding",

    })
    
    return <>
    
    <div 
    style = {{ backgroundImage: `url(${image})`, backgroundSize: "100% 100%", backgroundRepeat : "no-repeat", overflow : "hidden" }} 
    className="slide">
   <div className="home">
       <div className="home-intro">
           <h2>
               <div className="title">{state.title}</div>
               <div className="titleThree">{state.titleThree}</div>
           </h2>
           <div className="text">
               <Typewriter options = {{
                   autoStart : true,
                loop: true,
            strings : [
                "I'm a App Developer",
                "I'm a Web Developer",
                "I'm a Tech Enthusiast",
            ],
        }}/>
           </div>
           <div className="contact-me">
          <NavLink  to="contact"> <button className="button">Contact Us</button></NavLink>
           </div>
       </div>
   </div>
        
    </div>
    
      <Common 
      name='π’πππ ππππ π·ππππΎππππ ππΎππ½'
      text='ππ  ΰΈπ­π­π©π¦π ππ±π¦π¬π« '
      visit='/service'
      btname='Get Started'/>
    </>
}

export default Home;