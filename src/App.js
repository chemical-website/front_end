import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing/landing';
import SignIn from './components/main page/SignIn';



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
      <Route path='/s' element={<SignIn />} />
    </Routes>
  );
}

export default App;
