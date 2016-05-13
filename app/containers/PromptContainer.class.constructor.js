import React from 'react'
import Prompt from '../components/Prompt'

class PromptContainer extends React.Component {
  constructor (props) {
    super(props)
    // defining contextTypes here doesn't work
    // this.contextTypes = {
    //   router: React.PropTypes.object.isRequired
    // }
    this.state = {
      username: ''
    }
    this.handleUpdateUser = this.handleUpdateUser.bind(this)
    this.handleSubmitUser = this.handleSubmitUser.bind(this)
  }

  handleUpdateUser (e) {
    this.setState({
      username: e.target.value
    })
  }

  handleSubmitUser (e) {
    e.preventDefault()
    const username = e.target.value
    this.setState({
      username: ''
    })

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
        
      })
    } else {
      this.context.router.push(`/playerTwo/${this.state.username}`)
    }
  }

  render () {
    return (
      <Prompt 
        onUpdateUser={this.handleUpdateUser}
        onSubmitUser={this.handleSubmitUser}
        header={this.props.route.header}
        username={this.state.username}
      />
    )
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PromptContainer
