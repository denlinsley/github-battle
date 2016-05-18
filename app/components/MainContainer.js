import React from 'react'
import styles from '../styles'

// terse syntax with arrow fn implicit return
const MainContainer = ({ children }) => (
  <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
    {children}
  </div>
)

export default MainContainer
