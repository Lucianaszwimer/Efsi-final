import { useParams } from 'react-router-dom';
import React from 'react';

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
        <div className="content-body">Hi !!</div>
    )
}

export default Detalle;