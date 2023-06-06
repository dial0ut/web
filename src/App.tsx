
import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './components/Home'
import Navigation from './components/Navigation';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Contacts from './components/Contacts';

function App() {


  return (
    <>
    <div>
<BrowserRouter>
      <div>
   
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
<Home></Home>
  </>
  )
}

export default App
