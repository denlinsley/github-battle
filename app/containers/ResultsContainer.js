import React, { PropTypes } from 'react'
import Results from '../components/Results'
import githubHelpers from '../utils/githubHelpers'

class ResultsContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      scores: []
    }
  }

  componentDidMount () {
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then(scores => {
        this.setState({
          isLoading: false,
          scores
        })
      })
  }

  render () {
    return (
      <Results
        isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores}
      />
    )
  }
}

export default ResultsContainer
