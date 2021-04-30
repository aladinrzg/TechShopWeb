import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";

const PlaceOrderScreen = () => {
  const cart = useSelector((state) => state.cart);

  //calculate prices
  cart.itemsPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  cart.shippingPrice = cart.itemsPrice > 3000 ? 0 : 8;

  cart.totalPrice = Number(cart.itemsPrice) + Number(cart.shippingPrice);

  const placeOrderHandler = () => {
    console.log("oderrrr");
  };
  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Livraison</h2>
              <p>
                <strong>Addresse: </strong>
                {cart.shippingAddress.address}
                {cart.shippingAddress.city}
                {cart.shippingAddress.zip}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Methode de Payement</h2>
              <strong>Methode: </strong>
              {cart.payementMethod}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Produits commandés</h2>
              {cart.cartItems.length === 0 ? (
                <Message> Votre panier est vide </Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x {item.price} DT ={item.qty * item.price}
                          DT
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Votre Commande</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>produits</Col>
                  <Col>{cart.itemsPrice} DT</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Livraison</Col>
                  <Col>{cart.shippingPrice} DT</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Totale</Col>
                  <Col>{cart.totalPrice} DT</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  commander
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
