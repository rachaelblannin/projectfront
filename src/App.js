import logo from './logo.svg';
import './App.css';
import CharacterCreate from './Components/CharacterCreate';
// import CharacterDelete from './Components/CharacterDelete';
// import CharacterPut from './Components/CharacterPut';
import CharacterGet from './Components/CharacterGet';
import paramsCharacter from './Components/params';

function App() {
  return (
    <div className="App">
     
      <CharacterCreate/>
      <CharacterGet/>
      <paramsCharacter/>
      
    </div>
  );
}

export default App;
