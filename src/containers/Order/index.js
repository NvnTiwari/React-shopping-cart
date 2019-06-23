import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import OrderSummary from '../../components/OrderSummary';

import { orderNow } from './../../actions';

import './order.css';

class Order extends React.Component {
    state = {
        orderedItems: []
    };

    componentDidMount() {
        // console.log(this.props);
        const { cart, actions } = this.props;
        this.setState({
            orderedItems: cart
        });
        actions.orderNow();
    }

    handleShopping = () => {
      this.props.history.push('/');
    }

    render() {
        const OrderedItem = this.state.orderedItems.map(item => {
          return (
            <React.Fragment>
              <Col sm={12}>
              <Card>
              <Card.Body>
                <Card.Title></Card.Title>
                  <Card.Text> {item.name}</Card.Text>
              </Card.Body>
              </Card>
              
              </Col>
            </React.Fragment>
          )
        })
        return(
          <Container>
           <p style={{color: 'green'}}> you have Successfully ordered  :</p>
          <Row>
          {OrderedItem}  
          </Row>
          <Button onClick={this.handleShopping}>Continue Shopping</Button>
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
            orderNow
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);