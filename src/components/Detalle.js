import { useParams } from 'react-router-dom';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useContextState, ActionTypes } from '../contextState.js';

const Detalle = () => {
    const { id } = useParams();
    const { contextState, setContextState } = useContextState();
    const [product, setProduct] = React.useState({});

    React.useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(res => setProduct(res))
            .catch(err => console.error(err));
        }, []);
        
    
    const existProduct = contextState.lista.find(item => item.id === product.id)

    return (
        <>
            <Container className='content-body'>
                <h1>{product.title} ${product.price}</h1>
                <img src={product.thumbnail} alt=""></img>
                <p>{product.description}</p>
                <p>Rating: {product.rating}</p>
                {existProduct
                    ?
                    <Button variant="primary" onClick={() => setContextState({
                        type: ActionTypes.DelProducto,
                        value: product
                    })}>Eliminar</Button>
                    :
                    <Button variant="primary" onClick={() => setContextState({
                        type: ActionTypes.AddProducto,
                        value: product
                    })}>Agregar</Button>
                }

            </Container>
        </>
    )
}

export default Detalle;