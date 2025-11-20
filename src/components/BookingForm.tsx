import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHotelStore } from '../store/hotelStore';

export const BookingForm: React.FC = () => {
  const navigate = useNavigate();
  const addBooking = useHotelStore((state) => state.addBooking);
  
  const [formData, setFormData] = useState({
    guests: 2,
    roomClass: 'Стандарт',
    dateFrom: '',
    dateTo: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingId = addBooking(formData);
    alert(`✅ Заявку успішно створено! ID: ${bookingId}`);
    navigate('/admin');
  };

  return (
    <div className="custom-card fade-in">
      <div className="custom-card-header">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', marginRight: '0.5rem'}}>
          <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        Форма бронювання
      </div>
      <div className="custom-card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="form-label-custom">Кількість гостей</label>
            <input
              type="number"
              className="form-control form-control-custom"
              min="1"
              max="6"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
              required
            />
            <small style={{color: '#718096'}}>Від 1 до 6 осіб</small>
          </div>

          <div className="mb-4">
            <label className="form-label-custom">Клас номера</label>
            <select
              className="form-select form-select-custom"
              value={formData.roomClass}
              onChange={(e) => setFormData({ ...formData, roomClass: e.target.value })}
              required
            >
              <option value="Стандарт">Стандарт</option>
              <option value="Люкс">Люкс</option>
              <option value="Делюкс">Делюкс</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="form-label-custom">Дата заїзду</label>
            <input
              type="date"
              className="form-control form-control-custom"
              value={formData.dateFrom}
              onChange={(e) => setFormData({ ...formData, dateFrom: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label-custom">Дата виїзду</label>
            <input
              type="date"
              className="form-control form-control-custom"
              value={formData.dateTo}
              onChange={(e) => setFormData({ ...formData, dateTo: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="btn btn-custom w-100">
            Створити заявку
          </button>
        </form>
      </div>
    </div>
  );
};
