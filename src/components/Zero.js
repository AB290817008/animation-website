import React from 'react';
import './css/Zero.css';

export default function Zero() {
	return (
		<div className="animation">
			<div className="anim-img">
				<div className="anim-vid">
					<img src={require('./ezgif.com-crop (1).gif')} className="gif1" />
					<h4 className="text1">
						Zero Confirmation Transaction. Transferring funds or ownership of a token uses the Z-DAG
						protocol.
					</h4>
					{/* <p className="zero1-p"></p> */}
					{/* <button className>Learn More</button> */}
				</div>
			</div>
		</div>
	);
}
