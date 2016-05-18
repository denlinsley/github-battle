import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../main.css'

class Main extends React.Component {
  render () {
    return (
      <div className="container">
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        > 
          {/* children of css transition group need a key, so add new props with cloneElement() */}
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default Main
// if you export on the class itself you have to import as { Main }
