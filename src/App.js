import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import Home from './containers/Home';
import Checkout from './containers/Checkout';
import Order from './containers/Order';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div>
            <Navbar fixed="top" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                <Nav.Link><Link to='/checkout'>Cart</Link></Nav.Link>
            </Nav>
            </Navbar>
            <Route path="/" exact component={Home} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/order" exact component={Order} />
        </div>      
      </div>
    );
  }
}

export default App;
