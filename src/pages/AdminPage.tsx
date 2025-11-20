import React from 'react';
import { AdminPanel } from '../components/AdminPanel';

export const AdminPage: React.FC = () => {
  return (
    <div className="container-custom">
      <div className="text-center mb-4">
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          color: '#fff',
          // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          // WebkitBackgroundClip: 'text',
          // WebkitTextFillColor: 'transparent',
          // backgroundClip: 'text'
        }}>
          Адміністративна панель
        </h2>
        <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem'}}>
          Керування заявками та створення рахунків
        </p>
      </div>
      <AdminPanel />
    </div>
  );
};
