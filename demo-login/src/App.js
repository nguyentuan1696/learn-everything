import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

function App() {
  return (
    <Router basename='/dashboard'>
      <div>
        <ul>
          <li>
            <Link to='/trang-chu'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/quan-li'>Dashboard</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path='/trang-chu'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/quan-li'>
            <Dashboard />
          </Route>
          {/* <Redirect from='/' to='/trang-chu' /> */}
          <Route component={NotFound} />
          <Redirect from='/' to='/trang-chu' />
        </Switch>
      </div>
    </Router>
  )
}


function NotFound() {
  return (
    <div>
      <h2>NotFound</h2>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
}


export default App
