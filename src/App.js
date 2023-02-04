import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth.js';
import Snips from './components/Snips/Snips.js';
import { useUser } from './context/UserContext.js';
import snippy from '../src/Snippy.png';
import SnipsForm from './components/Snips/SnipsForm.js';
import Header from './components/Header/Header.js';

function App() {
  const { user } = useUser();

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/snips" component={Snips} />
        <Route exact path="/">
          {user && <Redirect to="/snips" />}
          {!user && <Redirect to="/auth/sign-in" />}
        </Route>
      </Switch>
      <SnipsForm />
      <img src={snippy}></img>
    </div>
  );
}

export default App;
