import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Importing the different components to send users to which location when its respective path is clicked
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/HomePage/Home'
import LoginScreen from './Components/LoginPage/LoginScreen'
import MainGame from './Components/MainGame/MainGame'
import FoodRecipes from './Components/CrockpotRecipe/FoodRecipes'
import Characters from './Components/Characters/Characters'
import Shop from './Components/Shop/Shop'

// Importing game levels for routing
import Level1 from './Components/MainGame/GameLevels/Level1'
import Level2 from './Components/MainGame/GameLevels/Level2'
import Level3 from './Components/MainGame/GameLevels/Level3'
import Level4 from './Components/MainGame/GameLevels/Level4'
import Level5 from './Components/MainGame/GameLevels/Level5'


function App() {
  
  return ( 
    <>
    {/* NavBar component that is linked to the router below to redirect to different components */}
    
    {/* Router to redirect user to the components once clicked on navbar */}
    <Router>
    <NavBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/game">
          <MainGame />
        </Route>
        <Route path="/food-recipes">
          <FoodRecipes />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>

        {/* Game Level Routes */}
        <Route path="/level1">
          <Level1 />
        </Route>
        <Route path="/level2">
          <Level2 />
        </Route>
        <Route path="/level3">
          <Level3 />
        </Route>
        <Route path="/level4">
          <Level4 />
        </Route>
        <Route path="/level5">
          <Level5 />
        </Route>
      </Switch>
    </Router>
    
    </>

  );
}

export default App;
