import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Loading from './Loading'
import MainContainer from './MainContainer'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import styles from '../styles'

const ConfirmBattle = (props) => {
  return props.isLoading
    ? <Loading text="Fetching github data" speed={800} />
    : <MainContainer>
        <h1>Confirm Battle</h1>
        <div className="col-sm-8 col-sm-offset-2">
          <UserDetailsWrapper header="Player One">
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header="Player Two">
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-12">
            <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle} style={styles.space}>
              Initiate Battle!
            </button>
          </div>
          <div className="col-sm-12">
            <Link to="/playerOne">
              <button className="btn btn-lg btn-danger" style={styles.space}>
                Reselect Players
              </button>
            </Link>
          </div>
        </div>
      </MainContainer>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

export default ConfirmBattle
// if you export on the class itself you have to import as { Main }
