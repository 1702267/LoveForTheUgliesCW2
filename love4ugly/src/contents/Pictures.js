import React, { Component } from 'react';
import Social from '../components/Social';
import simon1 from '../img/simon1.JPG';
import simon2 from '../img/simon2.JPG';
import simon3 from '../img/simon3.JPG';
import simon4 from '../img/simon4.JPG';
import simon5 from '../img/simon5.JPG';

class Pictures extends Component {
  render() {
    return (
      <div className="condiv">
      <h2 className="subtopic">Fooled You!</h2>
      <h3>You thought this was going to be pictures of ugly animals? Nope! It's more pictures of my hamster</h3>
      <h6>Unless you think hamsters are ugly- in which case I don't think we can be friends sorry</h6>
      <img src={simon1} className="simon1"></img>
      <img src={simon2} className="simon2"></img>
      <img src={simon3} className="simon3"></img>
      <img src={simon4} className="simon4"></img>
      <img src={simon5} className="simon5"></img>
      <Social />
      </div>
    )
  }
}

export default Pictures
