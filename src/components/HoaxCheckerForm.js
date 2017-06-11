import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, TextArea, Button, Image } from 'semantic-ui-react'

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
}

class HoaxCheckerForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: '',
    }
  }

  onUserSubmit(e) {
    e.preventDefault();
    this.props.addUserInput(this.state.userInput);
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  checkResult() {
    if (this.props.hoaxResult) {
      return <SearchResult hoaxResult={this.props.hoaxResult} />
    } else {
      return (
        <div>
          No Data
        </div>
      )
    }
  }

  render() {
    // console.log(this.props.sourceNews)
    return (
      <div style={styles.top}>
        { /* <Image style={styles.image} src='http://imageupload.co.uk/images/2017/06/10/ScreenShot2017-06-10at15.52.42.png' size="medium" /> */ }
        <h1 style={styles.logo}>Hoax Fighter</h1>
        <Form onSubmit={e => this.onUserSubmit(e)} style={styles.container}>
          <Form.Field
            control={TextArea}
            label={'Tempel konten yang ingin dicek di sini...'}
            type="text"
            name="userInput"
            onChange={this.handleChange.bind(this)}
            value={this.state.userInput}
            placeholder="Hasil akan lebih baik jika konten berisi lebih banyak detail (misal: lebih dari dua kalimat)..."
          />
          <Button style={{backgroundColor: 'royalblue', color: 'white'}}>Cek Konten</Button>
        </Form>
        {this.checkResult()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hoaxResult: state.hoaxCheckerReducer.tbh,
})

const mapDispatchToProps = dispatch => ({
  addUserInput: userInput => dispatch(addUserInput(userInput)),
  addNewsSearch: userInput => dispatch(addNewsSearch(userInput)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HoaxCheckerForm);
