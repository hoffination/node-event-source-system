import React = require('react')
const intlDT = require('intl-dt')

export default class MediaEntry extends React.Component<any, any> {
  constructor(public props: any) {
    super(props)
  }

  renderDate(utcDate: number) {
    return intlDT.format(new Date(utcDate), 'MMMM D, YYYY', 'en')
  }

  render() {
    return (
      <div className="flex flex-row w-60-ns mt3 center shadow-1">
        <div className="ma1 media-size">
          <img className="h-100" src={this.props.entry.coverUrl}>
          </img>
        </div>
        <div className="relative w-100">
          <h1 className="ma2">{this.props.entry.title}</h1>
          <h3 className="ma0 ml2 pb4">by {this.props.entry.author}</h3>
          
          <p className="absolute right-0 bottom-0 ma2">
            Finished {this.renderDate(this.props.entry.timeFinished)}
          </p>
        </div>
      </div>
    )
  }
}
