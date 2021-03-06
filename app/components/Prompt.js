import React, { PropTypes } from 'react'
import MainContainer from './MainContainer'

// stateless functional component (a presentational component - just the UI)
const Prompt = (props) => (
  <MainContainer>
    <h1>{props.header}</h1>
    <div className="col-sm-12">
      <form onSubmit={props.onSubmitUser}>
        <div className="form-group">
          <input 
            className="form-control" 
            placeholder="Github Username"
            onChange={props.onUpdateUser}
            value={props.username} 
            type="text"
          />
        </div>
        <div className="form-group col-sm-4 col-sm-offset-4">
          <button className="btn btn-block btn-success" type="submit">
            Continue
          </button>
        </div>              
    </form>
    </div>
  </MainContainer>
)

Prompt.propTypes = {
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default Prompt
