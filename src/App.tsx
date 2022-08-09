import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login, Welcome } from './login/login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Amar dhon e welcome
        </p>
        <Welcome name={'X'}/>
        <Login/>
      </header>
    </div>
  );
}

export default App;
