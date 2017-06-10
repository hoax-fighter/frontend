import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import HoaxCheckerForm from './components/HoaxCheckerForm';
import Home from './components/Home'

import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Container>
            <Route exact path="/" component={Home} />
            <Route path="/checkHoax" component={HoaxCheckerForm} />
          </Container>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
