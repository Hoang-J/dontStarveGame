import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import MainGame from './Components/MainGame';
import MiniGame from './Components/MiniGame';
import Characters from './Components/Characters';

function App() {
  
  return ( 
    <>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
            <li>
              <Link to="/minigame">Mini-Game</Link>
            </li>
            <li>
              <Link to="/characters">Character Menu</Link>
            </li>
          </ul>
        </nav>
      

      <Switch>
        <Route path="/game">
          <MainGame />
        </Route>
        <Route path="/minigame">
          <MiniGame />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
      </Switch>
    </div>
    </Router>

    </>
    
  );
}

export default App;
