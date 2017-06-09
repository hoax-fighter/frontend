import React, { Component } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react'

const styles = {
  container: {
    paddingTop: '50px',
    width: '50%',
    margin: '0 auto',
  },
}

class HoaxCheckerForm extends Component {
  render() {
    return (
      <Form style={styles.container}>
        <Form.Field control={TextArea} label={'User Input'} />
        <Form.Field control={Button} content="Submit" positive="true" />
      </Form>
    );
  }
}



export default HoaxCheckerForm;
