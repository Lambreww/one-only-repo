import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const predefinedUsers = [
    {
      id: 1,
      username: 'admin',
      password: 'admin123',
      email: 'admin@jpsystems.bg',
      role: 'admin',
      name: 'Администратор'
    },
    {
      id: 2,
      username: 'user',
      password: 'user123',
      email: 'user@jpsystems.bg',
      role: 'user',
      name: 'Обикновен потребител'
    },
    {
      id: 3,
      username: 'yordan',
      password: 'yordan123',
      email: 'yordan@jpsystems.bg',
      role: 'admin',
      name: 'Йордан Ламбрев'
    },
    {
      id: 4,
      username: 'petko',
      password: 'petko123',
      email: 'petko@jpsystems.bg',
      role: 'admin',
      name: 'Петко Карараев'
    }
  ];

  const login = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Проверка в predefined users
        const foundPredefinedUser = predefinedUsers.find(
          u => u.username === username && u.password === password
        );

        if (foundPredefinedUser) {
          const userData = { ...foundPredefinedUser };
          delete userData.password;
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData));
          resolve(userData);
          return;
        }

        // Проверка в регистрирани потребители
        const savedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const foundRegisteredUser = savedUsers.find(
          u => u.username === username && u.password === password
        );

        if (foundRegisteredUser) {
          const userData = { ...foundRegisteredUser };
          delete userData.password;
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error('Невалидно потребителско име или парола'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = (userData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Проверка дали потребителското име вече съществува
        const allUsers = [
          ...predefinedUsers,
          ...JSON.parse(localStorage.getItem('registeredUsers') || '[]')
        ];
        
        const userExists = allUsers.find(u => u.username === userData.username);
        if (userExists) {
          reject(new Error('Потребителското име вече съществува'));
          return;
        }

        // Създаване на нов потребител
        const newUser = {
          id: Date.now(),
          ...userData,
          role: 'user'
        };

        // Запазване в localStorage
        const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const updatedUsers = [...existingUsers, newUser];
        localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));

        // Автоматично влизане
        const userWithoutPassword = { ...newUser };
        delete userWithoutPassword.password;
        
        setUser(userWithoutPassword);
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        resolve(userWithoutPassword);
      }, 1000);
    });
  };

  const value = {
    user,
    login,
    logout,
    register,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};