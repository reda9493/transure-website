
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import { useState } from 'react';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <Router>
      <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
        <Navbar lang={lang} setLang={setLang} />
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/services" element={<Services lang={lang} />} />
          <Route path="/faq" element={<FAQ lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
