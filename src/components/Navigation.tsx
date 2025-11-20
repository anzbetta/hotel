import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M9 21V15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15V21" stroke="currentColor" strokeWidth="2"/>
          </svg>
          Luxury Hotel
        </Link>
        <div className="navbar-nav ms-auto">
          <Link 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
            to="/"
          >
            Головна
          </Link>
          <Link 
            className={`nav-link ${location.pathname === '/booking' ? 'active' : ''}`} 
            to="/booking"
          >
            Бронювання
          </Link>
          <Link 
            className={`nav-link ${location.pathname === '/admin' ? 'active' : ''}`} 
            to="/admin"
          >
            Адмін-панель
          </Link>
        </div>
      </div>
    </nav>
  );
};
