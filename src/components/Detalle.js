import { useParams } from 'react-router-dom';

const Detalle = () => {
    const {producto} = useParams();

    return (
        <div className="content-body">Hi {producto}!!</div>
    )
}

export default Detalle;