import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = ({ onClose, switchToRegister }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(formData.username, formData.password);
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = (role) => {
    const demoCredentials = {
      admin: { username: 'admin', password: 'admin123' },
      user: { username: 'user', password: 'user123' },
      yordan: { username: 'yordan', password: 'yordan123' },
      petko: { username: 'petko', password: 'petko123' }
    };

    setFormData(demoCredentials[role]);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Вход в системата</h2>
        <p>Влезте в своя акаунт</p>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Потребителско име</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Парола</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <button 
          type="submit" 
          className="login-btn"
          disabled={loading}
        >
          {loading ? 'Вход...' : 'Влез'}
        </button>
      </form>

      <div className="demo-section">
        <p className="demo-title">Бърз вход за тестване:</p>
        <div className="demo-buttons">
          <button 
            type="button"
            className="demo-btn admin"
            onClick={() => handleDemoLogin('admin')}
            disabled={loading}
          >
            Администратор
          </button>
          <button 
            type="button"
            className="demo-btn user"
            onClick={() => handleDemoLogin('user')}
            disabled={loading}
          >
            Потребител
          </button>
          <button 
            type="button"
            className="demo-btn manager"
            onClick={() => handleDemoLogin('yordan')}
            disabled={loading}
          >
            Йордан
          </button>
          <button 
            type="button"
            className="demo-btn manager"
            onClick={() => handleDemoLogin('petko')}
            disabled={loading}
          >
            Петко
          </button>
        </div>
      </div>

      <div className="login-footer">
        <p>
          Нямате акаунт?{' '}
          <button 
            type="button" 
            className="switch-btn"
            onClick={switchToRegister}
          >
            Регистрирайте се
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;