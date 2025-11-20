import React from 'react';
import { BookingForm } from '../components/BookingForm';

export const BookingPage: React.FC = () => {
  return (
    <div className="container-custom">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="text-center mb-4">
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#fff',
              // WebkitBackgroundClip: 'text',
              // WebkitTextFillColor: 'transparent',
              // backgroundClip: 'text'
            }}>
              Забронюйте номер
            </h2>
            <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem'}}>
              Заповніть форму і ми підберемо найкращий варіант для вас
            </p>
          </div>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};
