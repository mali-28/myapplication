import React from 'react';
import Common from './Common';
const Home = () =>{
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
    
      <Common 
      name='𝒢𝓇𝑜𝓌 𝓎𝑜𝓊𝓇 𝒷𝓊𝓈𝓈𝒾𝓃𝑒𝓈𝓈 𝓌𝒾𝓉𝒽'
      text='𝔐𝔜  ค𝔭𝔭𝔩𝔦𝔠𝔞𝔱𝔦𝔬𝔫 '
      visit='/service'
      btname='Get Started'/>
    </>
}

export default Home;