
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/home/Home';
import Cart from './Pages/cart/Cart';
import { useState } from 'react';
import LoginPopup from './Com/popup/LoginPopup';
import MyNavbar from './Com/NavBar/MyNavbar';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin ={setShowLogin} /> : null}
      <div className='app'>
        <MyNavbar setShowLogin ={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;


