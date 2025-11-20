import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useHotelStore } from '../store/hotelStore';
import { InvoiceView } from '../components/InvoiceView';

export const InvoicePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const getInvoiceById = useHotelStore((state) => state.getInvoiceById);
  
  const invoice = getInvoiceById(Number(id));

  if (!invoice) {
    return (
      <div className="container-custom">
        <div className="alert-custom text-center">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 1rem', display: 'block', color: '#f56565'}}>
            <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h4 style={{color: '#2d3748', fontWeight: '700'}}>Рахунок не знайдено</h4>
          <p style={{color: '#718096', marginBottom: '1.5rem'}}>Можливо, він був видалений або не існує</p>
          <Link to="/" className="btn btn-custom">Повернутись на головну</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom">
      <InvoiceView invoice={invoice} />
      <div className="mt-4 text-center">
        <Link to="/admin" className="btn btn-custom-secondary me-2">
          Повернутись до адмін-панелі
        </Link>
        <Link to="/" className="btn btn-custom">
          На головну
        </Link>
      </div>
    </div>
  );
};
