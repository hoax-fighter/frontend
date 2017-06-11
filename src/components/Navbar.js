import React, { Component } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react'

import SignIn from './SignIn'
import Register from './Register'

import { connect } from 'react-redux'

import {
  signOutUser
} from '../actions'

const styles = {
  navbarStyle: {
    backgroundColor: 'royalblue',
    borderColor: 'transparent',
    borderRadius: 0,
  }
}

class Navbar extends Component {

  constructor(props) {
    super(props)
    this.signOut = this.signOut.bind(this)
  }

  renderBeforeSignIn() {
    return (
      <Menu fixed='top' color='blue' inverted style={styles.navbarStyle}>
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
      <Menu fixed='top' color='blue' inverted style={styles.navbarStyle}>
        <Menu.Item
          style={{ color: 'white' }}
          name="Hoax Fighter"
        />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Button
              onClick={this.signOut}
              color="red"
            ><Icon name='sign out' /> Sign Out</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }

  signOut() {
    this.props.signOutUser()
  }

  render() {
    let data = localStorage.getItem('token')
    if (data) {
      return (
        <div>
          {this.renderAfterSignIn()}
        </div>
      )
    }

    return (
      <div>
        {this.renderBeforeSignIn()}
      </div>
    )

  }
}

const mapStateToProps = state => ({
  signInMessage: state.authReducer.signInMessage
})
const mapDispatchToProps = dispatch => ({
  signOutUser: () => {
    dispatch(signOutUser())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
