import React from 'react'
import './css/Zero.css'

export default function Zero() {

    return (
        <div className='zero' style={{backgroundColor:'black',marginTop:'250px'}}>
         <div className='zero1'>
                <h1>Zero Confirmation Transaction</h1>
                <p style={{marginTop:'50px'}}>Transferring funds or ownership of a token uses the Z-DAG protocol, giving near real-time transactions, which makes them the perfect choice for a retail environment.</p>
                <button style={{border:'1px solid green',color:'black',cursor:'pointer',borderRadius:'25px',background:'aquamarine',minWidth:'151px',minHeight:'40px',marginTop:'25px'}}>Learn More</button>
            </div>
            <div className='zero2'>
                <img src={require('./ezgif.com-crop (1).gif')} className='zero2-img' style={{position:'relative',top:'-50px',left:'100px'}} height='300px'></img>
            </div>
            <div>
                
            </div>

        </div>


    )
}
