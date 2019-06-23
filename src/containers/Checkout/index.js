import React from 'react';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';


import './Checkout.css';

class Checkout extends React.Component {
   
    handleOrder = () => {
        this.props.history.push('/order');
        // this.props.actions.orderNow();
    };

    render() {     
        const { cart } = this.props;
        let total = 0;
       
        const productItems = cart.map(item => {
            total = total + item.quantity * item.price;
            return (<React.Fragment>
                <Card.Text>
                    Name: {item.name} Quantity: {item.quantity} * Price: {item.price} = Total ({item.quantity * item.price})
                </Card.Text>
            </React.Fragment>)
        });
        return(
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Cart</Card.Title>
                            {productItems}
                            <Card.Text>Total : {total}</Card.Text>
                           {productItems.length > 0 ? <Button onClick={this.handleOrder}>Order Now</Button> : <p>Cart is Empty</p>} 
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         actions: bindActionCreators({
//             orderNow
//         }, dispatch)
//     }
// } 

export default connect(mapStateToProps)(Checkout);