import React from 'react';
//UI baseed component which is a function it is Navbar component
const Navbar = () =>{
    return(
      <nav className="nav-wrapper red darken-3">
          <div className="container">
              <a className="brand-logo">Poke'Times</a>
              <ul className="right">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contact">Contact</a></li>
              </ul>
          </div>
      </nav> 
    )
}
export default Navbar;