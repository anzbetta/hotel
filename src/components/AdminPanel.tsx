import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHotelStore } from '../store/hotelStore';
import { BookingRequest, Room } from '../types';

export const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const bookings = useHotelStore((state) => state.getBookings());
  const rooms = useHotelStore((state) => state.getRooms());
  const findBestRoom = useHotelStore((state) => state.findBestRoom);
  const createInvoice = useHotelStore((state) => state.createInvoice);
  const calculateNights = useHotelStore((state) => state.calculateNights);
  
  const [selectedBooking, setSelectedBooking] = useState<BookingRequest | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const handleSelectBooking = (booking: BookingRequest) => {
    setSelectedBooking(booking);
    const bestRoom = findBestRoom(booking);
    setSelectedRoom(bestRoom);
  };

  const handleConfirm = () => {
    if (!selectedBooking || !selectedRoom) return;
    
    const invoice = createInvoice(selectedBooking.id, selectedRoom.id);
    if (invoice) {
      navigate(`/invoice/${invoice.id}`);
    }
  };

  return (
    <div className="row fade-in">
      <div className="col-md-6">
        <div className="custom-card">
          <div className="custom-card-header">
            Заявки на бронювання ({bookings.length})
          </div>
          <div className="custom-card-body">
            {bookings.length === 0 ? (
              <div className="text-center py-5">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: 0.3, margin: '0 auto 1rem'}}>
                  <path d="M20 13V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H13M16 20L18 22L22 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p style={{color: '#a0aec0'}}>Немає активних заявок</p>
              </div>
            ) : (
              <div>
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className={`list-group-item-custom ${
                      selectedBooking?.id === booking.id ? 'active' : ''
                    }`}
                    onClick={() => handleSelectBooking(booking)}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 style={{marginBottom: '0.5rem', fontWeight: '700'}}>
                          Заявка #{booking.id}
                        </h5>
                        <p style={{marginBottom: '0.25rem', fontSize: '0.9rem'}}>
                          <strong>Гостей:</strong> {booking.guests} | <strong>Клас:</strong> {booking.roomClass}
                        </p>
                        <p style={{marginBottom: 0, fontSize: '0.9rem'}}>
                          {booking.dateFrom} → {booking.dateTo}
                        </p>
                      </div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="col-md-6">
        {selectedBooking && (
          <div className="custom-card">
            <div className="custom-card-header">
              Рекомендований номер
            </div>
            <div className="custom-card-body">
              {selectedRoom ? (
                <>
                  <div className="mb-4 p-3" style={{background: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px'}}>
                    <h4 style={{color: '#667eea', fontWeight: '700', marginBottom: '1rem'}}>
                      {selectedRoom.class} #{selectedRoom.id}
                    </h4>
                    <p style={{marginBottom: '0.5rem'}}><strong>Місткість:</strong> {selectedRoom.capacity} осіб</p>
                    <p style={{marginBottom: '0.5rem'}}><strong>Ціна за ніч:</strong> {selectedRoom.pricePerNight} грн</p>
                    <p style={{marginBottom: 0}}><strong>Опис:</strong> {selectedRoom.description}</p>
                  </div>
                  
                  <hr style={{margin: '1.5rem 0'}} />
                  
                  <div className="mb-4">
                    <h5 style={{fontWeight: '700', marginBottom: '1rem'}}>Деталі бронювання</h5>
                    <p style={{marginBottom: '0.5rem'}}>
                      <strong>Кількість ночей:</strong> {calculateNights(selectedBooking.dateFrom, selectedBooking.dateTo)}
                    </p>
                    <p style={{marginBottom: 0, fontSize: '1.5rem', fontWeight: '700', color: '#667eea'}}>
                      Загальна вартість: {calculateNights(selectedBooking.dateFrom, selectedBooking.dateTo) * selectedRoom.pricePerNight} грн
                    </p>
                  </div>
                  
                  <button className="btn btn-success-custom w-100" onClick={handleConfirm}>
                    Підтвердити та створити рахунок
                  </button>
                </>
              ) : (
                <div className="text-center py-4">
                  <p style={{color: '#f56565', fontWeight: '600'}}>
                    ❌ Немає доступних номерів для цієї заявки
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="custom-card mt-3">
          <div className="custom-card-header">
            Доступні номери ({rooms.length})
          </div>
          <div className="custom-card-body">
            <div className="table-responsive">
              <table className="table table-custom">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Клас</th>
                    <th>Місткість</th>
                    <th>Ціна/ніч</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((room) => (
                    <tr key={room.id}>
                      <td><strong>#{room.id}</strong></td>
                      <td>{room.class}</td>
                      <td>{room.capacity} осіб</td>
                      <td style={{fontWeight: '600', color: '#667eea'}}>{room.pricePerNight} грн</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
