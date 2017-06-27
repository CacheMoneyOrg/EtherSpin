import React, { Component } from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';

import '../styles/app.scss';

class Layout extends Component {
	render() {
        return (
			<div>
				<Header />
				<div className="main-container">
					{ this.props.children }
				</div>
				<Footer />
            </div>
		);
    }
};

export default Layout;
