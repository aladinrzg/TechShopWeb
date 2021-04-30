import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { register } from "../redux/actions/userActions";

const RegisterScreen = ({ location, history }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);

  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("mot de passe incorrecte");
    } else {
      dispatch(register(name, email, password, phone));
    }
  };

  return (
    <div class="imageLogin">
      <Image
        ima
        src={
          "https://img.freepik.com/vecteurs-libre/illustration-du-concept-connexion_114360-739.jpg?size=338&ext=jpg"
        }
      />

      <FormContainer>
        <h1>S'inscrire</h1>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label> nom </Form.Label>
            <Form.Control
              type="name"
              placeholder="entrez nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>adresse Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="entrez email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="phone">
            <Form.Label>Telephone</Form.Label>
            <Form.Control
              type="phone"
              placeholder="entrez telephone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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

          <Form.Group controlId="confirmPassword">
            <Form.Label>confirmer mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="confirmer mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Enregistrer
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            vous avez deja un compte ?
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              ..CONNECTER
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  );
};

export default RegisterScreen;
