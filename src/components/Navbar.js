import React, { Component } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

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
    this.state = {
      name: '',
    }
  }

  getLoginName() {
    let userData = localStorage.getItem('userData');
    if(userData === null) {
      if(this.props.userData.name)
      return `Welcome, ${this.props.userData.name}`
    } else {
      return `Welcome, ${userData}`
    }
  }

  renderBeforeSignIn() {
    return (
      <Menu fixed='top' style={styles.navbarStyle} size='large'>
        <Menu.Item
          name="Logical Information E-dentification"
          style={{ color: 'white' }}
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
      <Menu fixed='top' style={styles.navbarStyle} size='large'>
        <Link to="/">
          <Menu.Item
            style={{ color: 'white' }}
            name='Logical Information E-dentification'>
          </Menu.Item>
        </Link>
        <Link to="/hoaxlist">
          <Menu.Item
            style={{ color: 'white' }}
            name='Hoax News'>
          </Menu.Item>
        </Link>
        <Menu.Menu position='right'>
          <Menu.Item
            style={{ color: 'white' }}
            name={this.getLoginName()}
          />
            
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
    } else {
      return (
        <div>
          {this.renderBeforeSignIn()}
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  signInMessage: state.authReducer.signInMessage,
  userData: state.authReducer.userData
})

const mapDispatchToProps = dispatch => ({
  signOutUser: () => {
    dispatch(signOutUser())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
