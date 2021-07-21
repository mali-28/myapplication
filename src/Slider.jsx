import React from 'react';
const Slider = ()=>{
    return <>
    <div 
    style = {{ backgroundImage: "url(./images/slide-2.gif)", backgroundSize: "100% 100%", backgroundRepeat : "no-repeat", overflow : "hidden" }} 
    className="slide">
    <div className="wrapper">
        
        <div className= "static-text">We make</div>
        <ul className="dynamic-texts">
            <li><span>Web App</span></li>
            <li><span>Websites</span></li>
            <li><span>Android App</span></li>
            <li><span>Data system</span></li>
        </ul>
    </div>

    </div>

    </>

}

export default Slider;