import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Neel Odedra</h2>
        <p>
          Welcome to My React Web App!!!
          This is hosted on a AWS EC2 server via Nginx, using Git Action Pipeline
        </p>
      </header>
    </div>
  );
}

export default App;
