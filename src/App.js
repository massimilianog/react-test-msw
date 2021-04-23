import Users from './components/Users';
import Home from './components/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (

      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/users">Users</Link>
                      </li>
                  </ul>
              </nav>

              <Switch>
                  <Route path="/users">
                      <Users />
                  </Route>
                  <Route path="/">
                      <Home />
                  </Route>
              </Switch>

          </div>
      </Router>
  );
}

export default App;
