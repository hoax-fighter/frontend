import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, TextArea, Button } from 'semantic-ui-react'

import { addUserInput, addNewsSearch } from '../actions';

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
      data: {
        userInput: '',
        tbh: [],
      },
    }
  }

  onUserSubmit(e) {
    e.preventDefault();
    console.log('tes')
    this.props.addUserInput(this.state.data.userInput);
    this.props.addNewsSearch(this.state.data.userInput);
    // console.log(this.props.);
    console.log(this.state.data.userInput)
    // console.log(this.props.hoaxChecker);
  }

  handleChange(e) {
    // const update = this.state.data.userInput;
    // update[e.target.name] = e.target.value;
    this.setState({ data: { userInput: e.target.value } });
    // console.log(this.state.userInput);
  }

  render() {
    console.log(this.props.hoaxChecker)
    return (
      <Form onSubmit={(e) => this.onUserSubmit(e)} style={styles.container}>
        <Form.Field
          control={TextArea}
          label={'User Input'}
          type="text"
          name="userInput"
          onChange={this.handleChange.bind(this)}
          value={this.state.data.userInput}
          placeholder="Enter url"
        />
        <Button primary>Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  hoaxChecker: state,
})

const mapDispatchToProps = dispatch => ({
  addUserInput: userInput => dispatch(addUserInput(userInput)),
  addNewsSearch: userInput => dispatch(addNewsSearch(userInput)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HoaxCheckerForm);
