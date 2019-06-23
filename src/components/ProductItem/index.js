import React from 'react';
import { Col, Row, Button, Media } from 'react-bootstrap';

import './ProductItem.css';

const itemList = ({item, cart, addToCart, removeFromCart}) => {
    const cartItem = cart.find(cartItem => cartItem.id === item.id);
    return (
      <Col sm={12} className="custom-col">
      <Row>
        <Col sm={2}>
          <Media>
            <img width={100} height={210} className="mr-3" src={`products/${item.img}`} alt="mi"/>
          </Media>
        </Col>
        <Col sm={7}>
          <h5>{item.name}</h5>
          <ul>{item.desc.map(des => 
            <li>{des}</li>
        )}</ul>
        </Col>
        <Col sm={3}>
          <span>{item.rupeeSign}</span><span>{item.price}</span> 
          <br/>
          <Button onClick={() => addToCart(item)}>Add to cart ({cartItem ? cartItem.quantity : 0})</Button>
          {cartItem ? <Button onClick={() => removeFromCart(item)} className="float-right" variant="danger">Remove</Button> : null}
        </Col>
      </Row>
    </Col>
  )
}

export default itemList;