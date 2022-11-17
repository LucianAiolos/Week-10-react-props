import logo from './logo.svg';
import './App.css';
import { Madlibs } from './components/Madlibs';

let pluralNoun1 = "Apples"
let month = "November"
let year = "2022"
let famousPerson = "Stevie Wonder"
let pluralNoun2 = "Bananas"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Madlibs year={year} month={month} famousPerson={famousPerson} pluralNoun1={pluralNoun1} pluralNoun2={pluralNoun2}/>
    </div>
  );
}

export default App;
