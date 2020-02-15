import React from 'react';
import './App.css';
import HomePage from "./page/homepage/home.component";
import { Route } from 'react-router-dom';
import ShopPage from "./page/shop/shop.component";
import Header from "./component/header/header.component";
import SignInAndSignUp from "./page/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = () => null;

  componentDidMount = () => {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => console.log(this.state))
        });
      }
    });
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
