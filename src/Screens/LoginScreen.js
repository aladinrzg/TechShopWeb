import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../redux/actions/userActions";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    // <>
    //   <div class="imageLogin">
    //     <Image
    //       ima
    //       src={
    //         "https://img.freepik.com/vecteurs-libre/illustration-du-concept-connexion_114360-739.jpg?size=338&ext=jpg"
    //       }
    //     />

    <FormContainer>
      <h1>S'identifier</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>adresse Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="entrez email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>mot de passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="entrez mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          connecter
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          vous avez pas un compte ?
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            ..REGISTER
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
