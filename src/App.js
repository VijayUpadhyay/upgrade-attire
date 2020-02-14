import React from 'react';
import './App.css';
import HomePage from "./page/homepage/home.component";
import { Route } from 'react-router-dom';
import ShopPage from "./page/shop/shop.component";
import Header from "./component/header/header.component";
import SignInAndSignUp from "./page/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = () => null;

  componentDidMount = () => {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log(user);
      this.setState({ currentUser: user }, console.log("currentUser1: " + this.currentUser));
    });
    console.log("currentUser2: " + this.currentUser)
  }

  UNSAFE_componentWillMount = () => {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <switch>
          <Route exact='true' path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </switch>
      </div>
    );
  }
}

export default App;
