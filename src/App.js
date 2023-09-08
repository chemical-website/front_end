import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing/landing';
import MainPage from './pages/main page/MainPage';



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
      <Route path='/m' element={<MainPage />} />
    </Routes>
  );
}

export default App;
