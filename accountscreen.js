// src/screens/CreateAccountScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import CreateAccountForm from '../components/CreateAccountForm';

const CreateAccountScreen = () => {
  const handleFormSubmit = (formData) => {
    console.log('Form submitted with data:', formData);
  };

  return (
    <View>
      <Text>Create New Account</Text>
      <CreateAccountForm onSubmit={handleFormSubmit} />
    </View>
  );
};

export default CreateAccountScreen;
