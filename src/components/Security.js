import React from 'react';
import './css/Security.css';

export default function Security() {
	return (
		<div className="animation">
			<div className="anim-img">
				<div className="anim-vid">
					<img src={require('../assets/images/bridge1.png')} className="gif1" alt="partnershipImage"/>

					<h4 className="text1">
						Maintain Security of Syscoin is merge-mined with Bitcoin meaning Bitcoin miners can
						simultaneously mine Bitcoin and Syscoin with no increase in cost. This provides Syscoin with an
						incredibly robust and secure network and reduces network vulnerabilities that might allow
						exploits such as a 51% attack.
					</h4>
				</div>
			</div>
		</div>
	);
}

//                 <button className="security-button" style={{border:'1px solid green',color:'black',cursor:'pointer',borderRadius:'25px',background:'aquamarine',minWidth:'351px',minHeight:'40px',marginTop:'50px',}}>Learn More</button>

	/* <h1 className="security-h1" style={{ marginTop: '25px', color: 'white' }}>
						
					</h1> */

