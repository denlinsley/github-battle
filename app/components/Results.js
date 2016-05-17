import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import MainContainer from './MainContainer'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import styles from '../styles'

// private functional stateless  (only used in this specific file)
const StartOver = () => {
  return (
    <div className="col-sm-12">
      <Link to="/playerOne">
        <button className="btn btn-lg btn-info" style={styles.space}>
          Start Over
        </button>
      </Link>
    </div>
  )
}

const Results = (props) => {
  if (props.isLoading) {
    return (
      <p>Loading...</p>
    )
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>It's a tie!</h1>
        <StartOver />
      </MainContainer>
    )
  }

  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1
  const losingIndex = winningIndex === 0 ? 1 : 0
  return (
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

export default Results
