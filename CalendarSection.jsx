// CalendarSection.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarSection() {
  const [date, setDate] = useState(new Date());

  return (
    <div style={{
      margin: '20px auto',
      padding: '20px',
      maxWidth: '400px',
      borderRadius: '12px',
      backgroundColor: '#fdfdfd',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{
        fontSize: '20px',
        textAlign: 'center',
        marginBottom: '15px',
        color: '#333'
      }}>
        📅 Tu Calendario Personal
      </h2>

      <Calendar
        onChange={setDate}
        value={date}
        locale="es-ES"
      />

      <p style={{
        marginTop: '15px',
        textAlign: 'center',
        fontWeight: '500'
      }}>
        Fecha seleccionada: <strong>{date.toDateString()}</strong>
      </p>
    </div>
  );
}
