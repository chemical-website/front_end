import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing/landing';
import Products from './pages/products/products';
import Product from './pages/product/product';



function Error404(){
  return(
    <div>
    <h3>
      nothing is here
    </h3>
  </div>
  )
  
}

function App() {
  return (
    <Routes>
      <Route path='*' element={<Error404 />} />
      <Route path='/' element={<LandingPage />} />
      <Route path='products' element={<Products />} />
      <Route path='product/:id' element={<Product />} />
    </Routes>
  );
}

export default App;
