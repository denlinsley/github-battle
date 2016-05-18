import React from 'react'
import Prompt from '../components/Prompt'

// uses ES7 property initializers
// requires babel-plugin-transform-class-properties
// see https://babeljs.io/blog/2015/06/07/react-on-es6-plus
class PromptContainer extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  state = {
    username: ''
  }

  handleUpdateUser = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleSubmitUser = (e) => {
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

export default PromptContainer
