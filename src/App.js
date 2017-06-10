import React, { Component } from 'react';
import Navbar from './components/Navbar';
import HoaxCheckerForm from './components/HoaxCheckerForm';

import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <HoaxCheckerForm />
        </Container>
      </div>
    );
  }
}

export default App;
