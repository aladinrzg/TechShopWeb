import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import FormContainer from "../components/FormContainer";
import { saveShippingAddress } from "../redux/actions/cartActions";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [zip, setZip] = useState(shippingAddress.zip);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, zip, country }));
    history.push("/payement");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1> livraison </h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>addresse de livraison</Form.Label>
          <Form.Control
            type="text"
            placeholder="addresse"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>ville</Form.Label>
          <Form.Control
            type="text"
            placeholder="ville"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="zip">
          <Form.Label>code postal</Form.Label>
          <Form.Control
            type="text"
            placeholder="code postal"
            value={zip}
            required
            onChange={(e) => setZip(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>pays</Form.Label>
          <Form.Control
            type="text"
            placeholder="pays"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          confirmer
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
