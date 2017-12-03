import React = require('react')
import ReactDOMServer = require('react-dom/server');
import { renderToString } from 'react-dom/server';

export default class App extends React.Component<any, any> {
	constructor(public props: any) {
		super(props);
	}

	render() {
		return (
			<div className="fox">
				<h5>{ this.props.name }</h5>
				<p>This page is all about {this.props.name}.</p>
			</div>
		)
	}
}
