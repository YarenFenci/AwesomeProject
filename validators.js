// src/utils/validators.js
export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };
  
  export const validatePassword = (password) => {
    return password.length >= 8;
  };
  
  export const validateDateOfBirth = (dob) => {
    const dobRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    return dobRegex.test(dob);
  };
  