import Carrousel from "../components/Carrousel";
import Products from "../views/Products";
import Slider from "../images/slider.png"
import Container from 'react-bootstrap/Container';
import Marcas from "../components/Marcas";
import Ferrum from "../images/ferrum.png"
import Delta from "../images/delta.png"
import Tigre from "../images/Logo-Negativo.png"
import Ips from "../images/logo_ips.png"

const Home = () => {
    return (
        <>
            <Container>
                <Carrousel imagen={Slider}> </Carrousel>
                <h3>Productos destacados</h3>
                <Products></Products>
                <Marcas marca1={Ferrum} marca2={Delta} marca3={Tigre} marca4={Ips}></Marcas>
            </Container>
        </>
    )
}

export default Home;