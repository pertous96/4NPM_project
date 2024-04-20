import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Utilisez useNavigate au lieu de useHistory
import { login } from '../services/authService'; // Assurez-vous que le chemin est correct
 
function LoginForm() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Remplacez useHistory par useNavigate
 
  const { email, password } = credentials;
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();
 
    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
 
    try {
      const response = await login(email, password);
      console.log(response.data); // Traitement post-connexion
      navigate('/dashboard'); // Utilisez navigate pour la redirection
    } catch (error) {
      setError('Échec de la connexion. Vérifiez votre email et votre mot de passe.');
      console.error(error);
    }
  };
 
  return (
<form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
<div>
<label>Email:</label>
<input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
</div>
<div>
<label>Mot de passe:</label>
<input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
</div>
<button type="submit">Connexion</button>
</form>
  );
}
 
export default LoginForm;