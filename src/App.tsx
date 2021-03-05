import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useSpring, animated } from "react-spring";
import Toggle from './toggle';

const App = () => {

  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header" style={{ minHeight:"0vh" }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <main>
        <Toggle/>
      </main>
    </animated.div>
  );
}

export default App;
