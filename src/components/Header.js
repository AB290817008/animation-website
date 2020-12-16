import React, { Component } from 'react';
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import CartIcon from './svg/shopping-cart-solid.svg';
import { Link } from 'react-router-dom';
import './css/Header.css';
import { DataContext } from './Context';

export class Header extends Component {
	static contextType = DataContext;

	state = {
		toggle: false
	};

	menuToggle = () => {
		this.setState({ toggle: !this.state.toggle });
	};

	render() {
		const { toggle } = this.state;
		const { cart } = this.context;
		return (
			<header>
				<div className="menu" onClick={this.menuToggle}>
					<img src={Menu} alt="" width="20" />
				</div>
				<div className="logo">
					<h1>
						<Link to="/">ABCoins</Link>
					</h1>
				</div>
				<nav>
					<ul className={toggle ? 'toggle' : ''}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/" onClick={() => alert('This is a test site!')}>
								Resources
							</Link>
						</li>
						<li>
							<Link onClick={() => alert('This is a test site!')} to="/">
								Contact
							</Link>
						</li>
						<li>
							<Link onClick={() => alert('This is a test site!')} to="/">
								About
							</Link>
						</li>
						<li>
							<Link onClick={() => alert('This is a test site!')} to="/">
								Login / Register
							</Link>
						</li>
						<li className="close" onClick={this.menuToggle}>
							<img src={Close} alt="" width="20" />
						</li>
					</ul>
					<div className="nav-cart">
						<span>{cart.length}</span>
						<Link onClick={() => alert('This is a test site!')} to="/">
							<img src={CartIcon} alt="" width="20" />
						</Link>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
