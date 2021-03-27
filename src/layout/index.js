import { NavLink, Route, useRouteMatch } from 'react-router-dom'
import Home from '../views/Home'
import Login from '../views/Login'
import Settings from '../views/Settings'
import Editor from '../views/Editor'
import Article from '../views/Article'
import Profile from '../views/Profile'

export default function Layout () {
  const { path } = useRouteMatch()

  return (
    <div>
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            conduit
          </a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <NavLink className="nav-link" to="/register" activeClassName="selected">
                Sign up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" activeClassName="selected">
                Sign in
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Route exact path={path}>
        <Home />
      </Route>
      <Route path={`${path}login`}>
        <Login />
      </Route>
      <Route path={`${path}register`}>
        <Login />
      </Route>
      <Route path={`${path}settings`}>
        <Settings />
      </Route>
      <Route exact path={`${path}editor`}>
        <Editor />
      </Route>
      <Route path={`${path}editor/:slug`}>
        <Editor />
      </Route>
      <Route path={`${path}article/:slug`}>
        <Article />
      </Route>
      <Route exact path={`${path}profile/:username`}>
        <Profile />
      </Route>
      <Route path={`${path}profile/:username/favorites`}>
        <Profile />
      </Route>
      <footer>
        <div className="container">
          <a href="/" className="logo-font">
            conduit
          </a>
          <span className="attribution">
            An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
            licensed under MIT.
          </span>
        </div>
      </footer>
    </div>
  )
}
