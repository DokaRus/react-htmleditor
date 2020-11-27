import logo from './logo.svg';
import './App.css';
import HtmlEditor, { Toolbar, Item } from 'devextreme-react/html-editor';

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
      <HtmlEditor height="300px">
        <Toolbar>
          <Item formatName="undo" />
          <Item formatName="redo" />
          <Item formatName="separator" />
          <Item formatName="bold" />
          <Item formatName="italic" />
          <Item formatName="strike" />
          <Item formatName="underline" />
        </Toolbar>
      </HtmlEditor>
    </div>
  );
}

export default App;
