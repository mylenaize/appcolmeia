import AsyncStorage from '@react-native-async-storage/async-storage';

// Função para salvar dados
export async function saveData(key: string, value: any) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw new Error('Erro ao salvar dados.');
  }
}

// Função para recuperar dados
export async function getData(key: string) {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    throw new Error('Erro ao recuperar dados.');
  }
}

// Função para deletar dados
export async function deleteData(key: string) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    throw new Error('Erro ao deletar dados.');
  }
}
