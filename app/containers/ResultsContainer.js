import React, { PropTypes } from 'react'
import Results from '../components/Results'

class ResultsContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      playersInfo: this.context.router.state.playersInfo
    }
  }

  render () {
    return (
      <Results
        playersInfo={this.state.playersInfo}
      />
    )
  }
}

ResultsContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default ResultsContainer
