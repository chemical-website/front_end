import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing/landing';
import Products from './pages/products/products';
import Product from './pages/product/product';
import SignIn from './components/main page/SignIn';
import NewsPage from './pages/news/news';
import SearchProducts from './pages/searchproduct/Searchproduct';
import SearchCollections from './pages/searchcollections/searchcollections';
import SearchIndustry from './pages/searchindustry/searchindustry';
import AboutUsPage from './pages/about-us/aboutus';



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
      <Route path='app/' element={<LandingPage />} />
      <Route path='app/products' element={<Products />} />
      <Route path='app/products/search/:name' element={<SearchProducts />} />
      <Route path='app/product/:id' element={<Product />} />
      <Route path='app/collections/search/:name' element={<SearchCollections />} />
      <Route path='app/industries/search/:name' element={<SearchIndustry />} />
      <Route path='app/aboutus' element={<AboutUsPage />} />
      <Route path='app/news' element={<NewsPage />} />
      <Route path='app/s' element={<SignIn />} />refs/remotes/origin/main
    </Routes>
  );
}

export default App;
