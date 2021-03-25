import logo from './logo.svg';
import './App.css';

function App() {
    const title = 'こんにちは、React!';
    const targets = ['world', 'msaki', 'mastuoka'];
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
      {title && <p>{title}</p>}
      {targets.map(target => (
          <p>Hello {target}!</p>
      ))}
    </div>
  );
}

export default App;
