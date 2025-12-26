import { useEffect } from 'react';
import './styles/globals.css';
import './styles/animations.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery'; // Новият компонент
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initializeSmoothScroll } from './utils/smoothScroll';

function App() {
  useEffect(() => {
    initializeSmoothScroll();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery /> {/* Добавете Gallery тук */}
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;