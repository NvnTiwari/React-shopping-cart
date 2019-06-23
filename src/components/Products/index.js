import React, { Component } from 'react';
import ProductItem from '../ProductItem';
import { Row } from 'react-bootstrap';

class Products extends Component {
    render() {
        const { addToCart, removeFromCart, cart, items = [] } = this.props;
        const productItems = items.map(item => 
            <ProductItem 
                key={item.id} 
                item={item} 
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cart={cart}
            />);
        return (
            <Row>{productItems}</Row>
        )
    }
}

export default Products;
