import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'


const App2 = () =>(
<div>
    
      	<Link to="/">Home</Link>
      	<Link to="/about-us">About</Link>
    	
    	<Route exact path="/" component={About} />
    	<Route path="/:user_name/:list_name" component={Home} />
    	<Route exact path="/about-us" component={About} />
    	
  </div>
)

export default App2
