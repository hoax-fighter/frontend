import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, TextArea, Button, Loader, Icon, Image } from 'semantic-ui-react'
import logo from '../assets/lie.png'

import { addUserInput } from '../actions';

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
    textAlign: 'center',
    fontSize: '3em',
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

  componentWillReceiveProps(nextProps){
    // console.log('nextprops', nextProps)
  }

  componentDidUpdate(){
    // console.log('did upadte', this.props)
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
    this.setState({
      userInput: e.target.value,
      userInputTemp: e.target.value,
    });
  }

  checkResult() {

    if (this.props.hoaxResult) {
      return <SearchResult userInput={this.state.userInputTemp} hoaxResult={this.props.hoaxResult} />
    }
  }

  render() {
    // console.log('props dari form', this.props)
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
        <Image src={logo} alt={logo} height='200' width='200' centered={true} />
        <h1 style={styles.logo}>Logical Information E-dentification</h1>
        <Form onSubmit={e => this.onUserSubmit(e)} style={styles.container} size='big'>
          <Form.Field
            control={TextArea}
            label={'Tempel konten yang ingin dicek di sini...'}
            type="text"
            name="userInput"
            onChange={this.handleChange.bind(this)}
            placeholder="Hasil akan lebih baik jika konten berisi lebih banyak detail (misal: lebih dari dua kalimat)..."
            required={true}
            rows='5'
          />
          <Button loading={this.props.loading} style={{ backgroundColor: 'royalblue', color: 'white' }}><Icon name='search' /> Cek Konten</Button>
        </Form>
        {this.checkResult()}
      </div>

    );
  }
}

const mapStateToProps = state => {
  // console.log('DARI hoax form mapstate', state)
  return {
  test: state.hoaxCheckerReducer.test,
  hoaxResult: state.hoaxCheckerReducer.tbh,
  loading: state.hoaxCheckerReducer.loading,
  loadingSignIn: state.authReducer.loading,
  }
}

const mapDispatchToProps = dispatch => ({
  addUserInput: userInput => dispatch(addUserInput(userInput)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HoaxCheckerForm);
