import React, { Component } from 'react';
import {
	Panel,
	Grid
} from 'react-bootstrap';

export default class Notes extends Component {
	render() {
		return(
			<div className="panel">
				<Grid>
					 <Panel>
    					NOTES
 					 </Panel>
 				</Grid>
 			</div>
  		)
	}
}