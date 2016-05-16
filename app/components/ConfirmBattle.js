import React, { PropTypes } from 'react'
import UserProfile from './UserProfile'
import styles from '../styles'

function puke (object) {
  return <pre>{JSON.stringify(object, null, 1)}</pre>
}

const ConfirmBattle = (props) => {
  return props.isLoading
        ? <p>Loading...</p>
        : <div>ConfirmBattle! {puke(props)}</div>
    {/*<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
      <h1>Confirm Battle</h1>
      <h3>Player One</h3>
      <UserProfile bio={props.playerOne} />
      <h3>Player Two</h3>
      <UserProfile bio={props.playerTwo} />
      <button className="btn btn-success">
        Initiate Battle!
      </button>
      <button className="btn btn-danger">
        Reselect Players
      </button>
    </div>*/}
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired
}

export default ConfirmBattle
