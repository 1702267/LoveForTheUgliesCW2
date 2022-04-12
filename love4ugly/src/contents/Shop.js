import React, { Component } from 'react'
import Social from '../components/Social';

class Shop extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      'shopList':['This is where a shop page would go, ideally','If I can figure out how to do that...','there should be a list of items that people can purchase','it should also have a shopping basket function']
    };
  }
  render() {
    return (
      <div className="condiv skills">
      <h1 className="subtopic">Shop Page</h1>
      <div class="Cart-Container"></div>
      <div class="Header">
      <h3 class="Heading">Shopping Cart</h3>
      <h5 class="Action">Remove all</h5>
      <div class="Cart-Items">
      <div class="image-box">
      </div>
      <div class="about">
    

      </div>
      <div class="counter"></div>
      <div class="prices"></div>
      </div>
      </div>
      <Social />
      </div>
    )
  }
}
export default Shop
