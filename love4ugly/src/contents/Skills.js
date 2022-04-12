import React, { Component } from 'react'
class Skills extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      'myskills':['This is where a shop page would go, ideally','If I can figure out how to do that...','there should be a list of items that people can purchase','it should also have a shopping basket function']
    };
  }
  render() {
    return (
      <div className="condiv skills">
      <h1 className="subtopic">Shop Page</h1>
      <ul>
      {this.state.myskills.map((value)=>{
        return <li>{value}</li>
      })}
      </ul>
      </div>
    )
  }
}
export default Skills
