import React, { Component } from 'react';
//importing the picture as "profilepic".
import profilepic from '../img/simon.JPG';
import Social from '../components/Social';

class XYZ extends Component {
  render() {
    return (
      <div className="condiv home">
      <p> This is my hamster, Simon! He is a very handsome boy, though some people don't like hamsters so that's my justification for putting him on here. He doesn't mind too much...</p>
      <p> I just need the world to know that I would die for him okay thank you </p>
      <p> No, he is not named after the chipmunk...</p>
      <img src={profilepic} className="profilepic"></img>
      <Social />
      </div>
    )
  }
}
export default XYZ
