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
      <div className="border-solid border-4 border-green-600 rounded-md h-16 pt-4">
        <nav >
          <div className="flex justify-center space-x-10">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/game">Game</Link>
            </div>
            <div>
              <Link to="/minigame">Mini-Game</Link>
            </div>
            <div>
              <Link to="/characters">Character Menu</Link>
            </div>
          </div>
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
