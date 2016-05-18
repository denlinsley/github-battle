import React, { PropTypes } from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import '../main.css'

const Main = ({ children, location }) => (
  <div className="container">
    <CSSTransitionGroup
      transitionName="appear"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    > 
      {/* children of css transition group need a key, so add new props with cloneElement() */}
      {React.cloneElement(children, {key: location.pathname})}
    </CSSTransitionGroup>
  </div>
)

Main.propTypes = {
  location: PropTypes.object.isRequired
  // uncommon for children to be listed as a prop type?
}

export default Main
