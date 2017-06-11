import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './components/Home'

import { Container } from 'semantic-ui-react'

import firebase from 'firebase'


class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDfH9zF0m8dp7q1_QQCMbwk6HnW2OkQ1rA",
      authDomain: "hoax-fighter.firebaseapp.com",
      databaseURL: "https://hoax-fighter.firebaseio.com",
      projectId: "hoax-fighter",
      storageBucket: "hoax-fighter.appspot.com",
      messagingSenderId: "1063833839873"
    };
    firebase.initializeApp(config);

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Container>
            <Route exact path="/" component={Home} />
          </Container>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
