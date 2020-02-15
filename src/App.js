import React from 'react';
import './App.css';
import HomePage from "./page/homepage/home.component";
import { Route } from 'react-router-dom';
import ShopPage from "./page/shop/shop.component";
import Header from "./component/header/header.component";
import SignInAndSignUp from "./page/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions"

class App extends React.Component {
  unSubscribeFromAuth = () => null;

  componentDidMount = () => {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  UNSAFE_componentWillMount = () => {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <switch>
          <Route exact='true' path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
