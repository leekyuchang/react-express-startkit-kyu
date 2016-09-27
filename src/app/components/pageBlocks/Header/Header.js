import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router'


class Header extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <ul className='menu'>
          <li>
            test
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default Header;
