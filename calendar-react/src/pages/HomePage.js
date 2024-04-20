 
import React from 'react';
import { Link } from 'react-router-dom'; // Importez Link pour la navigation

function HomePage() {
  return (
<div className="home-container">
<h1>Bienvenue sur TeamCalendar</h1>
<div className="navigation-buttons">
<Link to="/login"><button>Connexion</button></Link>
<Link to="/signup"><button>Inscription</button></Link>
</div>
</div>
  );
}
 
export default HomePage;