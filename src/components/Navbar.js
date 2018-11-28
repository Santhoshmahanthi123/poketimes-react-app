import React from 'react';
//link,Navlink used to request to components that prevent dom to reload
//always and not to send requests always to server
import { Link, NavLink} from 'react-router-dom';
//UI baseed component which is a function it is Navbar component
const Navbar = () =>{
    //NavLink is used to apply some stylink to components in future
    return(
      <nav className="nav-wrapper red darken-3">
          <div className="container">
              <a className="brand-logo">Poke'Times</a>
              <ul className="right">
                  <li><Link to="/">Home</Link></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><Link to="/contact">Contact</Link></li>
              </ul>
          </div>
      </nav> 
    )
}
export default Navbar;