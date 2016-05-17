import React from 'react'
import styles from '../styles' 

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
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
      <h1>Github Battle</h1>
      <p className="lead">What even is a jQuery?</p>
      <button className="btn btn-success" onClick={this.handleClick}>
        Get Started
      </button>
    </div>
    )
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Home
