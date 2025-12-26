import { useState } from 'react';
import './Contact.css';
import Modal from './Modal';

const Contact = () => {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const managers = [
    {
      name: 'Йордан Ламбрев',
      position: 'Управител',
      phone: '0898543423',
      image: '👨‍💼',
      description: 'Отговорен за производството и техническите въпроси',
      department: 'Производство & Техника'
    },
    {
      name: 'Петко Карараев', 
      position: 'Управител',
      phone: '0898660331',
      image: '👨‍💼',
      description: 'Отговорен за продажбите и клиентските отношения',
      department: 'Продажби & Маркетинг'
    }
  ];

  const contactInfo = [
    {
      icon: '📞',
      title: 'Телефони',
      details: [
        'Йордан Ламбрев  - 0898543423',
        'Петко Карараев  - 0898660331',
      ],
      action: 'call'
    },
    {
      icon: '✉️',
      title: 'Имейл',
      details: [
        'officejpsbg@gmail.com',
      ],
      action: 'email'
    },
    {
      icon: '📍',
      title: 'Адрес',
      details: [
        'гр. Пловдив',
        'ул. Петър Николов',
      ],
      action: 'map'
    },
    {
      icon: '🕒',
      title: 'Работно време',
      details: [
        'Понеделник - Петък: 8:00 - 18:00',
        'Събота: 10:00 - 14:00',
        'Неделя: Почивен ден'
      ],
      action: 'time'
    }
  ];

  const handleCallNow = () => {
    setIsCallModalOpen(true);
  };

  const closeCallModal = () => {
    setIsCallModalOpen(false);
  };

  const handlePhoneClick = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тук ще се добави логика за изпращане на формата
    console.log('Form submitted:', formData);
    alert('Благодарим ви за запитването! Ще се свържем с вас в най-кратки срокове.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleContactAction = (action, value) => {
    switch (action) {
      case 'call':
        window.open(`tel:${value}`, '_self');
        break;
      case 'email':
        window.open(`mailto:${value}`, '_self');
        break;
      case 'map':
        window.open('https://www.google.com/maps/place/JP+systems/@42.13008,24.7859593,19z/data=!4m6!3m5!1s0x14acd100463fc5a5:0xf426478ba3fc46c3!8m2!3d42.1300716!4d24.7865735!16s%2Fg%2F11lf8ndtdt?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-header">
            <h2 className="section-title">Свържете се с нас</h2>
            <p className="contact-subtitle">
              Готови сме да ви помогнем с вашия проект. Свържете се с нас за безплатна консултация и оферта.
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info-section">
              <div className="contact-managers">
                <h3>Директни контакти с управители</h3>
                <div className="managers-grid">
                  {managers.map((manager, index) => (
                    <div key={index} className="manager-contact-card">
                      <div className="manager-avatar">
                        <span className="avatar-icon">{manager.image}</span>
                      </div>
                      <div className="manager-details">
                        <h4>{manager.name}</h4>
                        <p className="manager-position">{manager.position}</p>
                        <p className="manager-department">{manager.department}</p>
                        <p className="manager-description">{manager.description}</p>
                        <button 
                          className="contact-btn primary"
                          onClick={() => handlePhoneClick(manager.phone)}
                        >
                          <span className="btn-icon">📞</span>
                          {manager.phone}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-details">
                <h3>Контактна информация</h3>
                <div className="contact-info-grid">
                  {contactInfo.map((item, index) => (
                    <div 
                      key={index} 
                      className={`contact-info-card ${item.action}`}
                      onClick={() => item.action !== 'time' && handleContactAction(item.action, item.details[0])}
                    >
                      <div className="contact-icon">{item.icon}</div>
                      <div className="contact-text">
                        <h4>{item.title}</h4>
                        {item.details.map((detail, detailIndex) => (
                          <p key={detailIndex}>{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              
            </div>

            <div className="contact-form-section">
              <div className="form-container">
                <h3>Изпратете запитване</h3>
                <p>Попълнете формата по-долу и ние ще се свържем с вас в най-кратки срокове.</p>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Име и фамилия *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Вашето име"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Имейл адрес *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Вашият имейл"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Телефон</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Вашият телефон"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Относно</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                      >
                        <option value="">Изберете тема</option>
                        <option value="consultation">Безплатна консултация</option>
                        <option value="offer">Запитване за оферта</option>
                        <option value="repair">Ремонт</option>
                        <option value="installation">Монтаж</option>
                        <option value="other">Друго</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Съобщение *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      placeholder="Опишете вашите нужди и изисквания..."
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    Изпрати запитване
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;