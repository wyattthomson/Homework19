import React, { Component } from 'react';
import {
	Jumbotron,
	Button,
	Grid
} from 'react-bootstrap';

export default class Header extends Component {
	render() {
		return(
			<div className="header">
				<Grid>
				<Jumbotron>
   					<h1>Scraper</h1>
   					<p><Button bsStyle="primary">Scrape Please!</Button></p>
 					</Jumbotron>
 				</Grid>
 			</div>
  		)
	}
}