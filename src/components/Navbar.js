import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

const styles = {
  menu: {
    backgroundColor: '#303841',
    borderColor: 'transparent',
    borderRadius: 0,
  },
}

class Navbar extends Component {
  render() {
    return (
      <Menu fixed="top" style={styles.menu}>
        <Menu.Item
          style={{ color: 'white' }}
          name="Hoax Fighter"
        />
      </Menu>
    );
  }
}

export default Navbar;
