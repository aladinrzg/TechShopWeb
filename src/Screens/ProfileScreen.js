import React, { useState, useEffect } from "react";

import { Form, Button, Row, Col, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";

import {
  getUserDetails,
  updateUserProfile,
} from "../redux/actions/userActions";

const ProfileScreen = ({ location, history }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails(`${userInfo.id}`));
      } else {
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
      }
    }
  }, [dispatch, history, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("mot de passe incorrecte");
    } else {
      dispatch(
        updateUserProfile({ id: user.id, name, email, password, phone })
      );
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h2>parametres profile</h2>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {success && <Message variant="success">Profile Modifié</Message>}
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
            Modifier
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2> Mes commandes </h2>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
