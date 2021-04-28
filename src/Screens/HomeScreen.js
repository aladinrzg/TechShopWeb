//import axios from "axios";
import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
//import baseURL from "../common/BaseUrl";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    // const fetchProducts = async () => {
    //   const res = await axios.get(`${baseURL}products`);
    //   setProducts(res.data);
    // };
    // fetchProducts();
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>dernier produits</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger"> {error} </Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xlg={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
