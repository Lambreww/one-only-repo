import './Hero.css';

const Hero = () => {
  const handleSmoothScroll = (targetId) => {
    console.log('Кликнато! Отиваме до:', targetId); // За дебъг
    
    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
      console.log('Елементът не е намерен:', targetId);
      return;
    }

    // Плавно скролване със забавка за ефект
    targetElement.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <h1 className="fade-in-up">Индустриални и Секционни Врати</h1>
            <p className="fade-in-up fade-in-delay-1">Висококачествени решения за индустриални, складови и гаражни врати</p>
            <div className="hero-buttons fade-in-up fade-in-delay-2">
              <button 
                className="btn hover-lift"
                onClick={() => handleSmoothScroll('gallery')}
              >
                Вижте нашите продукти
              </button>
              <button 
                className="btn btn-outline hover-lift"
                onClick={() => handleSmoothScroll('contact')}
              >
                Запитване
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;