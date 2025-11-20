import React from 'react';
import { Invoice } from '../types';

interface Props {
  invoice: Invoice;
}

export const InvoiceView: React.FC<Props> = ({ invoice }) => {
  return (
    <div className="invoice-card fade-in">
      <div className="invoice-header">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3 className="mb-0">Рахунок #{invoice.id}</h3>
            <p className="mb-0 mt-2" style={{opacity: 0.9}}>
              Створено: {new Date(invoice.createdAt).toLocaleString('uk-UA')}
            </p>
          </div>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="invoice-body">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="p-3" style={{background: '#f7fafc', borderRadius: '12px', height: '100%'}}>
              <h5 style={{fontWeight: '700', color: '#2d3748', marginBottom: '1rem'}}>
                📋 Інформація про бронювання
              </h5>
              <p style={{marginBottom: '0.75rem'}}>
                <strong>ID заявки:</strong> #{invoice.booking.id}
              </p>
              <p style={{marginBottom: '0.75rem'}}>
                <strong>Кількість гостей:</strong> {invoice.booking.guests} осіб
              </p>
              <p style={{marginBottom: '0.75rem'}}>
                <strong>Період проживання:</strong>
              </p>
              <p style={{marginBottom: '0.75rem', paddingLeft: '1rem'}}>
                {invoice.booking.dateFrom} → {invoice.booking.dateTo}
              </p>
              <p style={{marginBottom: 0}}>
                <strong>Кількість ночей:</strong> {invoice.nights}
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="p-3" style={{background: '#f7fafc', borderRadius: '12px', height: '100%'}}>
              <h5 style={{fontWeight: '700', color: '#2d3748', marginBottom: '1rem'}}>
                🏨 Інформація про номер
              </h5>
              <p style={{marginBottom: '0.75rem'}}>
                <strong>Номер:</strong> #{invoice.room.id}
              </p>
              <p style={{marginBottom: '0.75rem'}}>
                <strong>Клас:</strong> {invoice.room.class}
              </p>
              <p style={{marginBottom: '0.75rem'}}>
                <strong>Місткість:</strong> {invoice.room.capacity} осіб
              </p>
              <p style={{marginBottom: '0.75rem'}}>
                <strong>Ціна за ніч:</strong> {invoice.room.pricePerNight} грн
              </p>
              <p style={{marginBottom: 0}}>
                <strong>Опис:</strong> {invoice.room.description}
              </p>
            </div>
          </div>
        </div>
        <hr style={{margin: '2rem 0'}} />
        <div className="text-end">
          <h4 style={{fontSize: '1rem', color: '#718096', marginBottom: '0.5rem'}}>
            Загальна вартість
          </h4>
          <h2 className="invoice-total">
            {invoice.total} грн
          </h2>
        </div>
      </div>
    </div>
  );
};
