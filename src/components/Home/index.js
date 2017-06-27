import React, { Component } from 'react';

class Home extends Component {
	render(){
		return(
			<div className="content-container">
				<div className="content-top">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xs-8 col-sm-8 col-md-8">
								<div className="container-fluid">
									<div className="row">
										<div className="col-xs-5 col-sm-5 col-md-5">
											<div className="spinner"></div>
										</div>
										<div className="col-xs-7 col-sm-7 col-md-7">
											<div className="">
												Number Spun/Landed On:
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xs-4 col-sm-4 col-md-4">
								<div className="latest-bets-container">
									<div className="latest-bets-header">
										<span>Latest Bets</span>
									</div>
									<div className="latest-bets-timeline">
										<span>timeline with bets</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="content-bottom">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xs-8 col-sm-8 col-md-8">
								<div className="board-container">
									board
								</div>
							</div>
							<div className="col-xs-4 col-sm-4 col-md-4">
								<div className="place-bets-container">
									<div className="place-bets-timeline">
										place bets stuff
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	
		);
	}
}

export default Home;
