import React from "react";
import { Nav, nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4 ">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>connecter</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>connecter</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>livraison</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>livraison</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payement">
            <Nav.Link>payement</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>payement</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>commande</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>commande</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
