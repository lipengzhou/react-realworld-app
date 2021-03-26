import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppLayout from './layout'

function App () {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <AppLayout />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
