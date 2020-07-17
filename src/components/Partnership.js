import React from 'react'
import './css/Pship.css'

import './../assets/images/temp/wheel/ico-wheel-blocknet.png'
export default function Partnership() {

    return (
        <div className='pship' >
         <div className='pship1' >
                <h1 style={{marginTop:'25px',color:'white'}}>Partnerships</h1>
                <p style={{marginTop:'50px',color:'white'}}>Over the past four years, Syscoin and Blockchain Foundry have established significant and strategic relationships with many third-party organisations. </p>
                <button style={{border:'1px solid green',color:'black',cursor:'pointer',borderRadius:'25px',background:'aquamarine',minWidth:'351px',minHeight:'40px',marginTop:'50px',}}>Learn More</button>
            </div>
            <div className='pship2'>
                <img src={require('./ezgif.com-video-to-gif (1).gif')} className='zero2-img' style={{position:'relative',top:'-50px',right:'1200px',height:'300px'} } ></img>
            </div>
            <div>
                
            </div>

        </div>


    )
}
