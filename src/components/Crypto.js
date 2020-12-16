import React from 'react';
import './css/Crypto.css';
// import { Link } from 'react-router-dom';
// import './css/Header.css'

export default function Crypto() {
	return (
		// <div className='pshipC' >
		//     <div className='pshipC1' >
		//         <h1 style={{ marginTop: '25px', color: 'white' }}>Crypto Tokens</h1>
		//         <p style={{ marginTop: '50px', color: 'white' }}>Syscoin Platform Tokens (SPT) allow anyone to quickly create their own cryptocurrency token on Syscoin Platform. An example of an SPT is LODE, a new cryptographic money system backed by physical silver. Other use cases include loyalty points, coins supported by physical assets, and service-backed currency.</p>
		//         <button className="crypto-button" style={{ border: '1px solid green', color: 'black', cursor: 'pointer', borderRadius: '25px', background: 'aquamarine', minWidth: '351px', minHeight: '40px', marginTop: '50px', }} className='cryptogif'>Learn More</button>
		//     </div>
		//     <div className='pshipC2'>
		//         <img src={require('./ezgif.com-crop (3).gif')} style={{ position: 'relative', top: '-50px', right: '800px', height: '400px' }} ></img>
		//     </div>
		//     <div className='footer'>

		//         <div className="logo">
		//             <Link to='/'>
		//                 <img src={require('./syscoin.png')} width="50px" height="50px" alt='' className='logoimg'></img>
		//             </Link>

		//         </div>
		//         <nav>
		//             <ul >
		//                 <li><Link to="/">Home</Link></li>
		//                 <li><Link to="/product">Resources</Link></li>
		//                 <li><Link to="/contact">Contact</Link></li>
		//                 <li><Link to="/about">About</Link></li>
		//                 <li><Link to="/login">Login / Register</Link></li>

		//             </ul>

		//             </nav>
		//                     </div>

		//     </div>

		<div className="animation">
			<div className="anim-img">
				<div className="anim-vid">
					<img src={require('./ezgif.com-crop (3).gif')} className="gif1" alt="partnershipImage"/>

					<h4 className="text1">
						Crypto Tokens allow anyone to quickly create their own cryptocurrency token on Syscoin Platform.
						An example of an SPT is LODE, a new cryptographic money system backed by physical silver. Other
						use cases include loyalty points, coins supported by physical assets, and service-backed
						currency.
					</h4>
				</div>
			</div>
		</div>
	);
}
