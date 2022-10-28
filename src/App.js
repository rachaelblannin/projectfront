import logo from './logo.svg';
import './App.css';
import CharacterCreate from './Components/CharacterCreate';
// import CharacterDelete from './Components/CharacterDelete';
import CharacterPut from './Components/CharacterPut';
import CharacterGet from './Components/CharacterGet';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <CharacterCreate />
              <CharacterGet />
            </>
          }/>
          <Route path="/replace/:id" element={<CharacterPut />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
