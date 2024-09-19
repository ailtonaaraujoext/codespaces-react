let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];
  
  const getUsers = async () => {
    return users;
  };
  
  const createUser = async (user) => {
    user.id = users.length + 1;
    users.push(user);
  };
  
  const updateUser = async (id, updatedUser) => {
    users = users.map((user) => (user.id === id ? { ...user, ...updatedUser } : user));
  };
  
  const deleteUser = async (id) => {
    users = users.filter((user) => user.id !== id);
  };
  
  export default {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
  };