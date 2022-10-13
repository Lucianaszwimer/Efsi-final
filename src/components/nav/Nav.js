import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const sayHi = ["pepe", "marta", "carlos", "miriam"]

  return (
    <div style={{position: "fixed", width: "100%"}}>
      <ul>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/products' >Products</Link></li>
        {/*
          sayHi.map(nombre => <li key={nombre}><Link to={`/say-hi/${nombre}`} >Say Hi {nombre}!</Link></li>)*/
        }
      </ul>
    </div>
  );
}

export default Nav;