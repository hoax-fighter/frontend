import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, TextArea, Button, Loader } from 'semantic-ui-react'

import { addUserInput, addNewsSearch } from '../actions';

import SearchResult from './SearchResult'

const styles = {
  container: {
    paddingTop: '50px',
    width: '50%',
    margin: '0 auto',
    textAlign: 'center',
  },
  image: {
    margin: '0 auto',
    marginTop: '100px',
  },
  logo: {
    fontFamily: 'Rubik',
    letterSpacing: '0.2em',
    textAlign: 'center',
    fontSize: '4em',
    color: '#303841',
  },
  top: {
    marginTop: 100,
  },
  fontColor: {
    color: '#303841',
  },
  loading: {
    textAlign: 'center',
    marginTop: 30,
  },
  loader: {
    marginTop: 200
  }
}

class HoaxCheckerForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: '',
      userInputTemp: '',
      isSubmitted: false,
    }
  }

  onUserSubmit(e) {
    e.preventDefault();
    this.setState({
      isSubmitted: true,
    })
    setTimeout(() => { this.checkHoax(); }, 1000);
  }

  checkHoax() {
    this.props.addUserInput(this.state.userInput)
  }

  handleChange(e) {
    console.log(e.target.value)
    this.setState({
      userInput: e.target.value,
      userInputTemp: e.target.value,
    });
  }

  checkResult() {

    console.log('loading', this.props.loading)
    // console.log('data', this.props.hoaxResult)
    console.log('data', this.props.hoaxResult.sources)

    if (this.props.hoaxResult) {
      return <SearchResult userInput={this.state.userInputTemp} hoaxResult={this.props.hoaxResult} />
    }
  }

  render() {

    if (this.props.loadingSignIn) {
      return (
        <Loader
          style={styles.loader}
          active
          inline='centered'>Loading</Loader>
      )
    }

    return (
      <div style={styles.top}>
        <h1 style={styles.logo}>Hoax Fighter</h1>
        <Form onSubmit={e => this.onUserSubmit(e)} style={styles.container}>
          <Form.Field
            control={TextArea}
            label={'Tempel konten yang ingin dicek di sini...'}
            type="text"
            name="userInput"
            onChange={this.handleChange.bind(this)}
            placeholder="Hasil akan lebih baik jika konten berisi lebih banyak detail (misal: lebih dari dua kalimat)..."
            required={true}
          />
          <Button loading={this.props.loading} style={{ backgroundColor: 'royalblue', color: 'white' }}>Cek Konten</Button>
        </Form>
        {this.checkResult()}
      </div>

    );
  }
}

const mapStateToProps = state => ({
  hoaxResult: state.hoaxCheckerReducer.tbh,
  loading: state.hoaxCheckerReducer.loading,
  loadingSignIn: state.authReducer.loading,
})

const mapDispatchToProps = dispatch => ({
  addUserInput: userInput => dispatch(addUserInput(userInput))
})

export default connect(mapStateToProps, mapDispatchToProps)(HoaxCheckerForm);
