import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

class Navbar extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item
          name="Hoax Fighter"
          color="blue"
        />
      </Menu>
    );
  }
}

export default Navbar;
