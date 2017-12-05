import React = require('react')
import MediaEntry from './MediaEntry'

export default class App extends React.Component<any, any> {
	constructor(public props: any) {
		super(props)
	}

	render() {
		return (
			<div>
				{this.props.state.media.map((state: any, index: number) => 
					<MediaEntry key={index} entry={state}/>
				)}
			</div>
		)
	}
}
