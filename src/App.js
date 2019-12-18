import React from 'react';
import './App.css';
import HomePage from "./page/homepage/home.component"
import { Route } from 'react-router-dom'

const HatsPage = () => (
  <div>
    <h1> HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <switch>
        <Route exact path='/hats' component={HatsPage} />
        <Route exact='true' path='/' component={HomePage} />
      </switch>
    </div>
  );
}

export default App;
