import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

export default function Perfil() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedDetails = await AsyncStorage.getItem('userDetails');
        const storedEmail = await AsyncStorage.getItem('userEmail');
        const storedPassword = await AsyncStorage.getItem('userPassword');

        if (storedDetails) {
          const parsedDetails = JSON.parse(storedDetails);
          setUserData({
            ...parsedDetails,
            email: storedEmail || 'Não informado',
            password: storedPassword || 'Não informado',
          });
        } else {
          setUserData({
            email: storedEmail || 'Não informado',
            password: storedPassword || 'Não informado',
          });
        }
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
        Alert.alert('Erro', 'Não foi possível carregar os dados do usuário.');
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = () => {
    if (userData) {
      navigation.navigate('Details', { user: userData });
    } else {
      Alert.alert('Erro', 'Dados do usuário não encontrados.');
    }
  };

  const handleDelete = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert('Sucesso', 'Conta excluída com sucesso!');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro ao excluir conta:', error);
      Alert.alert('Erro', 'Não foi possível excluir a conta.');
    }
  };

  if (!userData) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Carregando dados...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('../../assets/logo-transparente-escura-horizontal.png')}
          style={styles.logo}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.exitButton}>
        <Image
          source={require('../../assets/exit-icon.png')}
          style={styles.exitIcon}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Administre seu Perfil</Text>
      <Text style={styles.profileItem}>Nome: {userData.name || 'Não informado'}</Text>
      <Text style={styles.profileItem}>Idade: {userData.age || 'Não informado'}</Text>
      <Text style={styles.profileItem}>Cidade: {userData.city || 'Não informado'}</Text>
      <Text style={styles.profileItem}>Estado: {userData.state || 'Não informado'}</Text>
      <Text style={styles.profileItem}>Plano de Saúde: {userData.plan || 'Não informado'}</Text>
      <Text style={styles.profileItem}>Acessibilidade: {userData.accessibility || 'Não informado'}</Text>
      <Text style={styles.profileItem}>Email: {userData.email}</Text>
      <Text style={styles.profileItem}>Senha: {userData.password}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.buttonText}>Excluir Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}




