import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShowNote from './component/showNote';
import WriteNote from './component/writeNote';
import { Switch, Route, Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <WriteNote/>
        <ShowNote/>
    </div>
  );
}

export default App;
