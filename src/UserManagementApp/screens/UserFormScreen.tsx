import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import UserService from '../services/UserService';

const UserFormScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [name, setName] = useState(route.params?.user?.name || '');

  const handleSubmit = async () => {
    if (route.params?.user) {
      await UserService.updateUser(route.params.user.id, { name });
    } else {
      await UserService.createUser({ name });
    }
    navigation.goBack();
  };

  return (
    <View>
      <TextInput value={name} onChangeText={setName} placeholder="Name" />
      <Button title="Save" onPress={handleSubmit} />
    </View>
  );
};

export default UserFormScreen;