import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, TextArea, Button } from 'semantic-ui-react'

import { addUserInput, addNewsSearch } from '../actions';

import SearchResult from './SearchResult'

const styles = {
  container: {
    paddingTop: '50px',
    width: '50%',
    margin: '0 auto',
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
    console.log(this.state.userInput)
    this.props.addUserInput(this.state.userInput);
  }

  handleChange(e) {
    console.log(e.target.value)
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
      <div>
        <Form onSubmit={(e) => this.onUserSubmit(e)} style={styles.container}>
          <Form.Field
            control={TextArea}
            label={'User Input'}
            type="text"
            name="userInput"
            onChange={this.handleChange.bind(this)}
            placeholder="Enter url"
            required={true}
          />
          <Button primary>Submit</Button>
        </Form>
        {this.checkResult()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hoaxResult: state.hoaxCheckerReducer.tbh
})

const mapDispatchToProps = dispatch => ({
  addUserInput: userInput => dispatch(addUserInput(userInput)),
  addNewsSearch: userInput => dispatch(addNewsSearch(userInput)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HoaxCheckerForm);
