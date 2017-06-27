import React, { Component } from 'react';

class Board extends Component {
	render(){
		return(
			<div className="board-container">
                <div className="rectangle-container r00">
                    00
                </div>
                <div className="rectangle-container r0">
                    0
                </div>
                <div className="square-container col1 row1 red">
                    3
                </div>
                <div className="square-container col1 row2 black">
                    6
                </div>
                <div className="square-container col1 row3 red">
                    9
                </div>
                <div className="square-container col2 row1 black">
                    2
                </div>
                <div className="square-container col2 row2 red">
                    5
                </div>
                <div className="square-container col2 row3 black">
                    8
                </div>
                <div className="square-container col3 row1 red">
                    1
                </div>
                <div className="square-container col3 row2 black">
                    4
                </div>
                <div className="square-container col3 row3 red">
                    7
                </div>

                 <div className="square-container col3 row4 black">
                    10
                </div>
                <div className="square-container col3 row5 black">
                    13
                </div>
                <div className="square-container col3 row6 red">
                    16
                </div>
                <div className="square-container col2 row4 black">
                    11
                </div>
                <div className="square-container col2 row5 red">
                    14
                </div>
                <div className="square-container col2 row6 black">
                    17
                </div>
                <div className="square-container col1 row4 red">
                    12
                </div>
                <div className="square-container col1 row5 black">
                    15
                </div>
                <div className="square-container col1 row6 red">
                    18
                </div>
                <div className="square-container col1 row7 red">
                    21
                </div>
                <div className="square-container col2 row7 black">
                    20
                </div>
                <div className="square-container col3 row7 red">
                    19
                </div>
                <div className="square-container col1 row8 black">
                    24
                </div>
                <div className="square-container col2 row8 red">
                    23
                </div>
                <div className="square-container col3 row8 black">
                    22
                </div>
                <div className="square-container col1 row9 red">
                    27
                </div>
                <div className="square-container col2 row9 black">
                    26
                </div>
                <div className="square-container col3 row9 red">
                    25
                </div>
                <div className="square-container col3 row10 black">
                    28
                </div>
                <div className="square-container col2 row10 black">
                    29
                </div>
                <div className="square-container col1 row10 red">
                    30
                </div>
                <div className="square-container col3 row11 black">
                    31
                </div>
                <div className="square-container col2 row11 red">
                    32
                </div>
                <div className="square-container col1 row11 black">
                    33
                </div>
                <div className="square-container col1 row12 red">
                    36
                </div>
                <div className="square-container col2 row12 black">
                    35
                </div>
                <div className="square-container col3 row12 red">
                    34
                </div>
                <div className="square-container col1 row13 green">
                    2:1
                </div>
                <div className="square-container col2 row13 green">
                    2:1
                </div>
                <div className="square-container col3 row13 green">
                    2:1
                </div>
                <div className="rectangle-horizontal row1 green">
                    1st Dozen
                </div>
                <div className="rectangle-horizontal row5 green">
                    2nd Dozen
                </div>
                <div className="rectangle-horizontal row9 green">
                    3rd Dozen
                </div>
                <div className="group-bet row1 green">
                    1-18
                </div>
                <div className="group-bet row3 green">
                    Even
                </div>
                <div className="group-bet row5 red">     
                </div>
                <div className="group-bet row7 black">
                </div>
                <div className="group-bet row9 green">    
                    Odd 
                </div>
                <div className="group-bet row11 green">
                    19-36
                </div>
            </div>	
		);
	}
}

export default Board;