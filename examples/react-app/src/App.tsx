import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PlmgP} from '@ducky/plumage-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PlmgP>
          Edit <code>src/App.tsx</code> and save to reload.
        </PlmgP>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
