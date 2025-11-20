import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { BookingPage } from './pages/BookingPage';
import { AdminPage } from './pages/AdminPage';
import { InvoicePage } from './pages/InvoicePage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/invoice/:id" element={<InvoicePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
