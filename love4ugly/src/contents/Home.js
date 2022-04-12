import React, { Component } from 'react';
//importing the picture as "profilepic".
import profilepic from '../img/simon.JPG';
import Social from '../components/Social';

class XYZ extends Component {
  render() {
    return (
      <div className="condiv home">
      <img src={profilepic} className="profilepic"></img>
      <Social />
      </div>
    )
  }
}
export default XYZ
