import Pokedex from './Pokedex'
import cards from './Pokecard'
import Data from './data'
import './App.css';

function App() {
  return (
    <div className="App">
      <Pokedex cards={Data}/>
    </div>
  );
}

export default App;
