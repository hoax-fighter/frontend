import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HoaxCheckerForm from './components/HoaxCheckerForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <HoaxCheckerForm />
      </div>
    );
  }
}

export default App;
