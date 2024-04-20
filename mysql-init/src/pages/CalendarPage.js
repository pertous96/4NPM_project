// src/pages/CalendarPage.js
import React, { useEffect, useState } from 'react';
import CalendarComponent from '../components/CalendarComponent';
import { fetchActions } from '../services/actionService';
 
function CalendarPage() {
  const [actions, setActions] = useState([]);
 
  useEffect(() => {
    fetchActions().then(response => {
      setActions(response.data);
      // Vous pourriez vouloir transformer les données ici pour les adapter au calendrier
    });
  }, []);
 
  const handleDayClick = (value) => {
    // Implémentez la logique pour afficher les actions du jour cliqué
    // Cela pourrait ouvrir un modal ou afficher les actions d'une manière différente
    console.log(value);
  };
 
  return (
<div>
<h2>Mon Calendrier</h2>
<CalendarComponent actions={actions} onDayClick={handleDayClick} />
</div>
  );
}
 
export default CalendarPage;