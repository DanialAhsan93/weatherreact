import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>} />

    </Routes>
    
    
    </>
  );
}

export default App;
