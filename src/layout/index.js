import { Route, useRouteMatch } from 'react-router-dom'
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
      <nav class="navbar navbar-light">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            conduit
          </a>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              {/* Add "active" class when you're on that page" */}
              <a class="nav-link active" href="">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                <i class="ion-compose" />&nbsp;New Post
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                <i class="ion-gear-a" />&nbsp;Settings
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Sign up
              </a>
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
        <div class="container">
          <a href="/" class="logo-font">
            conduit
          </a>
          <span class="attribution">
            An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
            licensed under MIT.
          </span>
        </div>
      </footer>
    </div>
  )
}
