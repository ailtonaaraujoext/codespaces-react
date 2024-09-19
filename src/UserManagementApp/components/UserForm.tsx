import React from 'react';
import { View, TextInput, Button } from 'react-native';

const UserForm = ({ name, setName, handleSubmit }) => {
  return (
    <View>
      <TextInput value={name} onChangeText={setName} placeholder="Name" />
      <Button title="Save" onPress={handleSubmit} />
    </View>
  );
};

export default UserForm;