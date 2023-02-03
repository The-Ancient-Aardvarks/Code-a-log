import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth.js';
import Snips from './components/Snips/Snips.js';
import { useUser } from './context/UserContext.js';

function App() {
  const { user } = useUser();

  return (
    <div className="App">
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/snips" component={Snips} />
        <Route exact path="/">
          {user && <Redirect to="/snips" />}
          {!user && <Redirect to="/auth/sign-in" />}
        </Route>
      </Switch>
      <img src="assets/Snippy.svg"></img>
    </div>
  );
}

export default App;
