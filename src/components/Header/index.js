import React, { Component } from 'react';

class Header extends Component {
	render(){
		return(
			<div className="header-container">
				<div className="header-brand-container">
					<div className="header-brand-text">
						<span>EtherSpin</span>
					</div>
					<div className="header-brand-logo">
						<img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/TheStructorr_Lamborghini_Gallardo.svg"/>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
