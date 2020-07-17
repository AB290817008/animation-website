import React from 'react'
import './css/Pship.css'

export default function Security() {

    return (
        <div className='pshipS' >
         <div className='pshipS1' >
                <h1 style={{marginTop:'25px',color:'white'}}>Maintain Security</h1>
                <p style={{marginTop:'50px',color:'white'}}>Syscoin is merge-mined with Bitcoin meaning Bitcoin miners can simultaneously mine Bitcoin and Syscoin with no increase in cost. This provides Syscoin with an incredibly robust and secure network and reduces network vulnerabilities that might allow exploits such as a 51% attack.</p>
                <button style={{border:'1px solid green',color:'black',cursor:'pointer',borderRadius:'25px',background:'aquamarine',minWidth:'351px',minHeight:'40px',marginTop:'50px',}}>Learn More</button>
            </div>
            <div className='pshipS2'>
                <img src={require('./ezgif.com-crop (2).gif')}  style={{position:'relative',top:'-50px',right:'1500px',height:'300px'} } ></img>
            </div>
            <div>
                
            </div>

        </div>


    )
}
