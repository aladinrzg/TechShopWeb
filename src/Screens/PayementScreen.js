import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import FormContainer from "../components/FormContainer";
import { savePayementMethod } from "../redux/actions/cartActions";

const PayementScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [payementmethod, setPayementMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayementMethod(payementmethod));
    history.push("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1> methode de payement </h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">selectionner</Form.Label>

          <Col>
            <Form.Check
              type="radio"
              label={
                <div className="payementLogos">
                  <span style={{ fontSize: 30, color: "#2A62A6" }}>
                    <i class="fab fa-paypal"></i>
                  </span>
                  <div className="payementLogosItems"> PayPal </div>
                </div>
              }
              id="PayPal"
              name="payementMethod"
              value="PayPal"
              checked
              onChange={(e) => setPayementMethod(e.target.value)}
            ></Form.Check>
            <Form.Check
              type="radio"
              label={
                <div className="payementLogos">
                  <span style={{ fontSize: 30, color: "#6E22B4" }}>
                    <i class="fab fa-cc-stripe"></i>
                  </span>
                  <div className="payementLogosItems"> Stripe </div>
                </div>
              }
              id="Stripe"
              name="payementMethod"
              value="Stripe"
              onChange={(e) => setPayementMethod(e.target.value)}
            ></Form.Check>
            <Form.Check
              type="radio"
              label={
                <div className="payementLogos">
                  <span style={{ fontSize: 30, color: "#A26735" }}>
                    <i class="fas fa-shipping-fast"></i>
                  </span>
                  <div className="payementLogosItems"> a la livraison </div>
                </div>
              }
              id="Livraison"
              name="payementMethod"
              value="Livraison"
              onChange={(e) => setPayementMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          confirmer
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PayementScreen;
