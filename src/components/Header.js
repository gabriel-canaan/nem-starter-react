import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Header extends Component {

  render() {
    return (
      <Menu>
        <Menu.Menu>
          <p>Header Component</p>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Header