import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { items } from './../../api/items.json';
import Products from './../../components/Products';
import { addToCart, removeFromCart } from './../../actions';

import './Home.css';

class Home extends React.Component {
    render() {
        const { actions, cart } = this.props;
        return(
            <Container>
                <Products
                    items={items}
                    addToCart={actions.addToCart}
                    removeFromCart={actions.removeFromCart}
                    cart={cart}
                />
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            addToCart,
            removeFromCart
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);