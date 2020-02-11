import React from 'react';
import './App.css';
import HomePage from "./page/homepage/home.component"
import { Route } from 'react-router-dom'
import ShopPage from "./page/shop/shop.component"
import Header from "./component/header/header.component"

const HatsPage = () => (
  <div>
    <h1> HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Header />
      <switch>
        <Route exact path='/hats' component={HatsPage} />
        <Route exact='true' path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;
