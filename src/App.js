import Heroes from './Heroes';
import Navbar from './Navbar';
import Dash from './Dash';
import HeroDetails from './HeroDetails';
import NotFound from './NotFound'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Heroes />
            </Route>
            <Route exact path="/dash">
              <Dash />
            </Route>
            <Route exact path="/heroes/:id">
              <HeroDetails />
            </Route>
            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
