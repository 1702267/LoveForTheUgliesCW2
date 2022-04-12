import React, { Component } from 'react';
import Navitem from './Navitem';

// “Navitem” is the sub-component.
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state={
      'NavItemActive':''
    }
  };

  render() {
      return (
          <nav>
          <ul>
          <Navitem item="Home" tolink="/"  activec={this.activeitem}></Navitem>
          <Navitem item="About" tolink="/about"  activec={this.activeitem}></Navitem>
          <Navitem item="Pictures" tolink="/pictures"  activec={this.activeitem}></Navitem>
          <Navitem item="Shop" tolink="/shop"  activec={this.activeitem}></Navitem>
          <Navitem item="Comment" tolink="/comment"  activec={this.activeitem}></Navitem>

          </ul>
          </nav>
          )
    };

    activeitem=(x)=>
    {
      if(this.state.NavItemActive.length>0)
      {
        document.getElementById(this.state.NavItemActive).classList.remove('active');
      }
      this.setState({'NavItemActive':x},()=>{
        document.getElementById(this.state.NavItemActive).classList.add('active');
      });
    };
}
export default Navbar
