import logo from './logo.svg';
import './App.css';
import Beer from './components/Beer'

function App() {
  return (
    <div className="App">
      <h1>Beer Generator</h1>
      <h4>via PUNK API</h4>
      <div> 
        <Beer/>
      </div>
    </div>
  );
}

export default App;
