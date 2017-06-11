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

const styles = {
  menu: {
    backgroundColor: '#303841',
    borderColor: 'transparent',
    borderRadius: 0,
  },
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
<<<<<<< HEAD
      <Menu fixed="top" style={styles.menu}>
=======
      <Menu fixed='top' color='blue' inverted style={styles.navbarStyle}>
>>>>>>> b8fd549f483b204c07c3632070d45e4e58a7070f
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
