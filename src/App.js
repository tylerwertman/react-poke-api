import './App.css';
import PokeFetch from './components/PokeFetch';
import PokeAxios from './components/PokeAxios';


function App() {
  return (
    <div className="App">
      <PokeFetch />
      <PokeAxios/>
    </div>
  );
}

export default App;
