import Carrousel from "../components/Carrousel";
import Products from "../views/Products";
import Slider from "../images/slider.png"
import Container from 'react-bootstrap/Container';

const Home = () => {
    return (
        <>
            <Container>
                <Carrousel imagen={Slider}> </Carrousel>
               <div>Productos destacados</div>
                <Products></Products>
            </Container>
        </>
    )
}

export default Home;