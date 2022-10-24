import { useParams } from 'react-router-dom';
import React from 'react';
import { Container } from 'react-bootstrap';

const Detalle = () => {
    const {id} = useParams();
    
    const [product, setProduct] = React.useState({});

    React.useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(res => setProduct(res))
        .catch(err => console.error(err));
    }, []);
    
    return (
        <Container className='content-body'>
            <h1>{product.title} ${product.price}</h1>
            <img src={product.thumbnail} alt=""></img>
            <p>{product.description}</p>
            <p>Rating: {product.rating}</p>
        </Container>
    )
}

export default Detalle;