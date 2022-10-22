import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detalle from './components/Detalle';
import Layout from './components/Layout';
import Products from './views/Products';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/detalle/:id" element={<Detalle />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
