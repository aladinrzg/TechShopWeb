import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../redux/actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductScreen = ({ history, match }) => {
  // const [product, setProduct] = useState("");
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    // const fetchProduct = async () => {
    //   const res = await axios.get(`${baseURL}products/${match.params.id}`);
    //   setProduct(res.data);
    // };
    // fetchProduct();
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        retourner
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name} </h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} notes`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>Prix : {product.price} DT</h3>
              </ListGroup.Item>
              <ListGroup.Item>{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>prix:</Col>
                    <Col>
                      <strong> {product.price} DT </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      {product.countInStock >= 5
                        ? "disponible"
                        : product.countInStock < 5 && product.countInStock > 0
                        ? "Limité"
                        : "indisponible"}
                    </Col>
                    <Col style={{ marginLeft: 70 }}>
                      <i
                        className={
                          product.countInStock >= 5
                            ? "fas fa-check-circle"
                            : product.countInStock < 5 &&
                              product.countInStock > 0
                            ? "fas fa-minus-circle"
                            : "fas fa-times-circle"
                        }
                      ></i>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 ? (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(item) => setQty(item.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ) : null}
                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Ajouter Au Panier
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
