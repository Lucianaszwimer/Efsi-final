import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = (props) => {
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{props.product.id} - {props.product.title}</Card.Title>
        <Card.Text>
            {props.product.description}
        </Card.Text>
        <Button variant="primary">Detalle</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;