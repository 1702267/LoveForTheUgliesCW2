import React from 'react';
import './App.css';
import
{
BrowserRouter as Router,
Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Pictures from './contents/Pictures';
import Skills from './contents/Skills';
import Comment from './contents/Comment';



function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="pictures">
        <Pictures />
      </Route>
      <Route exact path="/skills">
        <Skills />
      </Route>
      <Route exact path="/comment">
        <Comment />
      </Route>
      </div>
    </Router>
  )
}
export default App;
