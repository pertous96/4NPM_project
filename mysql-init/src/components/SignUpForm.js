import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';
import InputField from '../components/InputField';

function SignUpForm() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!userData.firstName) {
      errors.firstName = 'Veuillez fournir un prénom.';
      formIsValid = false;
    }
    if (!userData.lastName) {
      errors.lastName = 'Veuillez fournir un nom.';
      formIsValid = false;
    }
    if (!userData.email) {
      errors.email = 'Veuillez fournir une adresse email.';
      formIsValid = false;
    }
    if (!userData.password || userData.password.length < 6) {
      errors.password = 'Le mot de passe doit contenir au moins 6 caractères.';
      formIsValid = false;
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        await register(userData);
        navigate('/login');
      } catch (error) {
        setFormErrors({ submit: 'Échec de l\'inscription. Veuillez réessayer.' });
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formErrors.submit && <p style={{ color: 'red' }}>{formErrors.submit}</p>}
      <InputField
        label="Prénom"
        type="text"
        name="firstName"
        value={userData.firstName}
        onChange={handleChange}
        error={formErrors.firstName}
      />
      <InputField
        label="Nom"
        type="text"
        name="lastName"
        value={userData.lastName}
        onChange={handleChange}
        error={formErrors.lastName}
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        error={formErrors.email}
      />
      <InputField
        label="Mot de passe"
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
        error={formErrors.password}
      />
      <button type="submit">S'inscrire</button>
    </form>
  );
}

export default SignUpForm;
