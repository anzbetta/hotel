import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <div className="container-custom fade-in">
      <div className="hero-section">
        <div className="text-center">
          <h1 className="hero-title">Luxury Hotel Booking</h1>
          <p className="hero-subtitle">
            Професійна система бронювання готелю з інтелектуальним підбором номерів
          </p>
        </div>
        
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h5 className="feature-card-title text-center">Швидке бронювання</h5>
              <p className="feature-card-text text-center">
                Створіть заявку на бронювання номера за лічені хвилини. Проста та зрозуміла форма.
              </p>
              <div className="text-center mt-3">
                <Link to="/booking" className="btn btn-custom">
                  Забронювати
                </Link>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h5 className="feature-card-title text-center">Розумний вибір</h5>
              <p className="feature-card-text text-center">
                Система автоматично підбирає найкращий номер відповідно до ваших побажань.
              </p>
              <div className="text-center mt-3">
                <Link to="/admin" className="btn btn-custom">
                  Переглянути
                </Link>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h5 className="feature-card-title text-center">Детальні рахунки</h5>
              <p className="feature-card-text text-center">
                Отримуйте повну інформацію про вартість та деталі бронювання.
              </p>
              <div className="text-center mt-3">
                <Link to="/admin" className="btn btn-custom">
                  Дізнатись більше
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="custom-card">
              <div className="custom-card-body">
                <h3 className="text-center mb-4" style={{color: '#2d3748', fontWeight: '700'}}>Чому обирають нас?</h3>
                <div className="row">
                  <div className="col-md-3 text-center mb-3">
                    <h2 style={{color: '#667eea', fontWeight: '800'}}>100+</h2>
                    <p style={{color: '#718096'}}>Номерів</p>
                  </div>
                  <div className="col-md-3 text-center mb-3">
                    <h2 style={{color: '#667eea', fontWeight: '800'}}>4.9</h2>
                    <p style={{color: '#718096'}}>Рейтинг</p>
                  </div>
                  <div className="col-md-3 text-center mb-3">
                    <h2 style={{color: '#667eea', fontWeight: '800'}}>24/7</h2>
                    <p style={{color: '#718096'}}>Підтримка</p>
                  </div>
                  <div className="col-md-3 text-center mb-3">
                    <h2 style={{color: '#667eea', fontWeight: '800'}}>1000+</h2>
                    <p style={{color: '#718096'}}>Клієнтів</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
