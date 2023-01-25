import './App.css';
import Home from './Home/Home';
import About from './About/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cars from './Cars/Cars';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Reservation from './Reservation/Reservation';
import Contact from './Contact/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/cars" element={<Cars />}/>
        <Route path="/reservation" element={<Reservation />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
