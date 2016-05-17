import React from 'react'
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router'
// I kind of like separating framwwork from app imports (from ng2 style guide)
import Main from '../components/Main'
import Home from '../components/Home'
import PromptContainer from '../containers/PromptContainer.class.constructor'
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer'
import ResultsContainer from '../containers/ResultsContainer'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path="playerOne" header="Player One" component={PromptContainer} />
      <Route path="playerTwo/:playerOne" header="Player Two" component={PromptContainer} />
      <Route path="battle" component={ConfirmBattleContainer} />
      <Route path="results" component={ResultsContainer} />
    </Route>
  </Router>
)

export default routes
