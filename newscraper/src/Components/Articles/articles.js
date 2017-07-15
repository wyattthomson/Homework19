import React, { Component } from 'react';
import {
	Panel,
	Grid
} from 'react-bootstrap';
import mongoose from "mongoose";

export default class Articles extends Component {
	render() {
		return(
			<div className="panel">
				<Grid>
					 <Panel>
    					Articles bitch.
 					 </Panel>
 				</Grid>
 			</div>
  		)
	}
}