import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserService from '../services/UserService';

const UserListScreen = () => {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await UserService.getUsers();
    setUsers(data);
  };

  return (
    <View>
      <Button title="Add User" onPress={() => navigation.navigate('UserForm')} />
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button title="Edit" onPress={() => navigation.navigate('UserForm', { user: item })} />
            <Button title="Delete" onPress={() => UserService.deleteUser(item.id).then(loadUsers)} />
          </View>
        )}
      />
    </View>
  );
};

export default UserListScreen;