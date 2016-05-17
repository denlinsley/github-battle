import React from 'react'
import MainContainer from './MainContainer' 

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.context.router.push('/playerOne')
  }

  render () {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className="lead">What even is a jQuery?</p>
        <button className="btn btn-success" onClick={this.handleClick}>
          Get Started
        </button>
      </MainContainer>
    )
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Home
