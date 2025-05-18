import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_DATA_KEY = '@user_data';

// Função para registrar o usuário
export async function registerUser(email: string, password: string) {
  try {
    const existingData = await AsyncStorage.getItem(USER_DATA_KEY);
    const users = existingData ? JSON.parse(existingData) : [];

    // Verificar se o email já existe
    if (users.find((user: any) => user.email === email)) {
      throw new Error('Este email já está cadastrado.');
    }

    // Salvar o novo usuário
    const newUser = { email, password };
    users.push(newUser);
    await AsyncStorage.setItem(USER_DATA_KEY, JSON.stringify(users));

    return 'Usuário registrado com sucesso!';
  } catch (error: any) {
    throw new Error(error.message || 'Erro ao registrar o usuário.');
  }
}

// Função para realizar login
export async function loginUser(email: string, password: string) {
  try {
    const existingData = await AsyncStorage.getItem(USER_DATA_KEY);
    const users = existingData ? JSON.parse(existingData) : [];

    // Verificar se o usuário existe
    const user = users.find((user: any) => user.email === email && user.password === password);

    if (!user) {
      throw new Error('Email ou senha incorretos.');
    }

    // Salvar o usuário logado (opcional)
    await AsyncStorage.setItem('@current_user', JSON.stringify(user));

    return 'Login realizado com sucesso!';
  } catch (error: any) {
    throw new Error(error.message || 'Erro ao realizar login.');
  }
}

// Função para deslogar
export async function logoutUser() {
  try {
    await AsyncStorage.removeItem('@current_user');
    return 'Usuário deslogado com sucesso!';
  } catch (error) {
    throw new Error('Erro ao deslogar o usuário.');
  }
}

// Função para obter o usuário logado
export async function getCurrentUser() {
  try {
    const user = await AsyncStorage.getItem('@current_user');
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
}
