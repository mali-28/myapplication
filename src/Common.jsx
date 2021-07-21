import React from 'react';
import web1 from './images/image1.png'
import web2 from './images/image2.png'
import {NavLink} from 'react-router-dom';

const Common = (props) =>{
    return <>
    <section id='header' >
    <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F4F6FA" fill-opacity="1" d="M0,256L60,224C120,192,240,128,360,106.7C480,85,600,107,720,128C840,149,960,171,1080,149.3C1200,128,1320,64,1380,32L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

        <div className='container-fluid pt-17 border-box'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row vh-50  d-flex align-items-center justify-content-center'>
                    <div className='col-md-6 pt-lg-0 order-lg-1  d-flex flex-column '>
                        <h1 className='mt-5'>
                            {props.name} <br/> <strong className='color color-change'>{props.text}</strong>
                        </h1>
                        <p className='mt-5'>
                             We are the team talented developer making websites
                        </p>
                        <div className='mb-5'>
                            <NavLink to={props.visit} className='btn-get-started'>{props.btname}</NavLink>
                        </div>
                    </div>
                    <div className='col-lg-6 col-10  pl-5  order-1 order-lg-2 header-img  d-flex justify-content-center text-wrap'>
                    <img src={web1} className='img-fluid animated' alt='Common img1'/>
                    <img src={web2} className='img-fluid animated' alt='Common img2'/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F4F6FA" fill-opacity="1" d="M0,256L60,224C120,192,240,128,360,106.7C480,85,600,107,720,128C840,149,960,171,1080,149.3C1200,128,1320,64,1380,32L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </section>
    </>
}

export default Common;