import React, { PropTypes } from 'react'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'

const Results = (props) => {
  return (
    <div>
      <h1>RESULTS</h1>
      <UserDetailsWrapper header="Player One">
        <UserDetails info={props.playersInfo[0]} />
      </UserDetailsWrapper>
      <UserDetailsWrapper header="Player Two">
        <UserDetails info={props.playersInfo[1]} />
      </UserDetailsWrapper>
    </div>
  )
}

Results.propTypes = {
  playersInfo: PropTypes.array.isRequired
}

export default Results
