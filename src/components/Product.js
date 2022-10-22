import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Product = (props) => {
  const navigate = useNavigate();

  return (
    <Col md={4}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.product.thumbnail} />
        <Card.Body>
          <Card.Title>{props.product.id} - {props.product.title}</Card.Title>
          <Card.Text>
            {props.product.description}
          </Card.Text>
          <Button variant="primary" onClick={()=> {navigate(`/detalle/${props.product.id}`)}}>Detalle</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Product;