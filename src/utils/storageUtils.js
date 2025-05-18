import AsyncStorage from '@react-native-async-storage/async-storage';

// Função para salvar os dados dos usuários no AsyncStorage
export const saveUsersToStorage = async (users) => {
  try {
    await AsyncStorage.setItem('users', JSON.stringify(users));
  } catch (error) {
    console.error("Erro ao salvar os dados dos usuários:", error);
  }
};

// Função para recuperar os dados dos usuários do AsyncStorage
export const getUsersFromStorage = async () => {
  try {
    const users = await AsyncStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error("Erro ao recuperar os dados dos usuários:", error);
    return [];
  }
};

// Função para adicionar um novo usuário
export const addUser = async (newUser) => {
  const users = await getUsersFromStorage();
  users.push(newUser); // Adiciona o novo usuário
  await saveUsersToStorage(users); // Salva a lista atualizada
};

// Função para editar um usuário
export const editUser = async (email, updatedUserData) => {
  const users = await getUsersFromStorage();
  const userIndex = users.findIndex(user => user.email === email);

  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedUserData };
    await saveUsersToStorage(users); // Salva a lista atualizada
  }
};

// Função para excluir um usuário
export const deleteUser = async (email) => {
  let users = await getUsersFromStorage();
  users = users.filter(user => user.email !== email); // Remove o usuário pela comparação de e-mail
  await saveUsersToStorage(users); // Salva a lista atualizada
};
