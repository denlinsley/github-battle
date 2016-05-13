import React from 'react'
import styles from '../styles' 

const PromptContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
    this.onUpdateUser = this.onUpdateUser.bind(this) // arrow fn trick no work here
    this.onSubmitUser = this.onSubmitUser.bind(this)
  }

  onUpdateUser (e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmitUser (e) {
    e.preventDefault()
    const username = e.target.value
    this.setState({
      username: ''
    })
    console.debug(this.context)
    if (this.props.routeParams.playerOne) {

    } else {

    }
  }

  render () {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.onSubmitUser}>
            <div className="form-group">
              <input 
                className="form-control" 
                placeholder="Github Username"
                onChange={this.onUpdateUser}
                value={this.state.username} 
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
      </div>
    )
  }
}

PromptContainer.ContextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PromptContainer
