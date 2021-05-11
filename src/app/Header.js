import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header">

        <h1>Pinball Machines</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/machines">Machines</NavLink>
        </nav>
        
      </header>
    );
  }

}
 
export default Header;