import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react'

import SignIn from './SignIn'
import Register from './Register'

class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      statusSignIn: false
    }
  }

  renderBeforeSignIn() {
    return (
      <Menu>
        <Menu.Item
          name="Hoax Fighter"
          color="blue"
        />

        <Menu.Menu position='right'>
          <Menu.Item>
            <SignIn />
          </Menu.Item>
          <Menu.Item>
            <Register />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }

  renderAfterSignIn() {
    return (
      <Menu>
        <Menu.Item
          name="Hoax Fighter"
          color="blue"
        />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Button primary>Sign Out</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }

  render() {
    if (this.state.statusSignIn) {
      return (
        <div>
          {this.renderBeforeSignIn()}
        </div>
      )
    } else {
      return (
        <div>
          {this.renderBeforeSignIn()}
        </div>
      )

    }

  }
}

export default Navbar;
